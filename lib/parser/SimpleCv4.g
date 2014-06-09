grammar SimpleCv4;

options {
    language = JavaScript;
    output = AST;
    ASTLabelType=CommonTree;
    backtrack = true;
    //greedy = false;
}

tokens {
    PROG;
    INCLUDE_SYSTEM;
    TYPE_DEF;
    TYPE_OLD;
    TYPE_NEW;
    STRUCT_DEF;
    STRUCT_CNAME;
    VAR_DEF;
    VAR_NAME;
    C_TYPE;
    C_ID;
    DEFAULT_VALUE;
    
    TYPE_VOID;
    TYPE_I8;
    TYPE_I16;
    TYPE_I32;
    TYPE_UNSIGNED;
    TYPE_F32;
    TYPE_F64;
    TYPE_CUSTOM;
    
    FUNC_DEF;
    FUNC_STAT;
    FUNC_NAME;
    FUNC_HEADER;
    FUNC_PARAM;
    FUNC_INVOKE;
    
    FOR_STAT;
    WHILE_STAT;
    DOWHILE_STAT;
    IF_STAT;
    IF_BRANCH;
    ELSEIF_BRANCH;
    ELSE_BRANCH;
    JUMP_STAT;
    JUMP_RETURN;
    JUMP_BREAK;
    JUMP_CONTINUE;
    
    BLOCK;
    EMPTY_BLOCK;
    
    ASSIGNMENT;
    ASSIGN;
    PLUS_ASSIGN;
    MINUS_ASSIGN;
    MULTI_ASSIGN;
    DIVIDE_ASSIGN;
    SHL_ASSIGN;
    SHR_ASSIGN;
    AND_ASSIGN;
    OR_ASSIGN;
    NOT_ASSIGN;
    
    CONDITION;
    SUB_CONDITION;
    OR_EXPR;
    OR_BRANCH;
    AND_EXPR;
    AND_BRANCH;
    SHIFT_EXPR;
    ADDSUB_EXPR;
    MULTDIV_EXPR;
    CASTTYPE;
    
    SHL_OP;
    SHR_OP;
    ADD_OP;
    SUB_OP;
    MULTI_OP;
    DIV_OP;
    MOD_OP;
    
    RELATION_EXPR;
    EQUAL_RE;
    NOTEQUAL_RE;
    LESS_RE;
    GREATER_RE;
    GREATEREQUAL_RE;
    LESSEQUAL_RE;
    
    PREFIX_PLUS;
    PREFIX_MINUS;
    PREFIX_NOT;
    PREFIX_AND;
    PREFIX_STAR;
    SIZEOF;
    
    POSTFIX_EXPR;
    POSTFIX;
    POSTFIX_PLUS;
    POSTFIX_MINUS;
    MEMBERVAR;
    ARRAYINDEX;
    
    CONSTNUM;
    DECLARATOR;
    
    ASSIGNMENT_LEFT;
    ASSIGNMENT_RIGHT;
}

program
    :   statement+
    	-> ^(PROG statement+)
    ;

statement
    :   declaration
    |   variable
    |   structDefinition
    |   typeDefinition
    |   functionHeader ';'
    	-> ^(FUNC_STAT functionHeader)
    |   functionHeader block
    	-> ^(FUNC_DEF functionHeader block)
    ;

declaration
    :   '#' 'include' '<' libname '>' 
    	-> ^(INCLUDE_SYSTEM libname)
    ;

libname
    :   ID ('.' ID)? 
    ;

variable
    :   type declarator (assignmentOp shiftExpr)? (',' '*'? declarator (assignmentOp shiftExpr)?)* ';'
    	-> ^(VAR_DEF type (^(VAR_NAME declarator) ^(DEFAULT_VALUE shiftExpr)?)+)
    ;

type
    :   typeSpecifier '*'?   
    	-> ^(C_TYPE typeSpecifier '*'?)
    ;
	
typeSpecifier
	:	'void'
		-> TYPE_VOID
	|	'char'
		-> TYPE_I8
	|	'short'
		-> TYPE_I16
	|	'int'
		-> TYPE_I32
	|	'long'
		-> TYPE_I32
	|	'float'
		-> TYPE_F32
	|	'double'
		-> TYPE_F64
	|	'signed'
		-> TYPE_I32
	|	'unsigned'
		-> ^(TYPE_I32 TYPE_UNSIGNED)
	|	ID
		-> ^(TYPE_CUSTOM ID)
	;
	
declarator
    :    ID 
    ;

typeDefinition
    :    'typedef' oldTypeName newTypeName ';' 
    	-> ^(TYPE_DEF ^(TYPE_OLD oldTypeName) ^(TYPE_NEW newTypeName))
    ;

oldTypeName
    :	typeSpecifier 
    ;

newTypeName
    :   ID      
    ;

structDefinition
    :   ( 'typedef' )? 'struct' structName structBlock ( structVar ( ',' structVar )* )? ';' 
    	-> ^(STRUCT_DEF ^(structName structVar* structBlock) )
    ;

structName
    :   ID
    ;

structVar
    :   declarator
    	-> ^(STRUCT_CNAME declarator)
    ;

structBlock
    :   '{'
            variable*
        '}'
    	-> variable*
    ;

functionHeader
    :   type ID '(' ( formalParameter ( ',' formalParameter )* )? ')'
    	-> ^(FUNC_HEADER type ^(FUNC_NAME ID) formalParameter*)
    ;

formalParameter
    :   type declarator   
    	-> ^(FUNC_PARAM type declarator)     
    ;

block
    :   '{'
            variable*
            stat*
        '}'
        -> ^(BLOCK variable* stat*)
    |   stat
    	-> ^(BLOCK stat)
    |   ';'
    	-> EMPTY_BLOCK
    ;

stat
    :   forStat
    |   whileStat
    |   ifStat
    |   expression ';'   
    	-> expression        
    |   jumpStat 
    ;

forStat
    :   'for' '(' assignmentExpr ';' conditionalExpr ';' expression ')' block 
    	-> ^(FOR_STAT assignmentExpr conditionalExpr expression block)          
    ;

whileStat
    :   'while' '(' conditionalExpr ')' block
    -> ^(WHILE_STAT conditionalExpr block)
    |   'do' block 'while' '(' conditionalExpr ')' ';'
    -> ^(DOWHILE_STAT block conditionalExpr)
    ;

ifStat
    :   'if' '(' conditionalExpr ')' block  ( 'else' block )?
    ->	^(IF_STAT ^(IF_BRANCH conditionalExpr block) ^(ELSE_BRANCH block)?)
    ;

jumpStat
    :  'continue' ';'
    ->	^(JUMP_STAT JUMP_CONTINUE)
    |  'break' ';'
    ->	^(JUMP_STAT JUMP_BREAK)
    |  'return' (primaryExpr)? ';'
    ->	^(JUMP_STAT ^(JUMP_RETURN primaryExpr)?)
    ;
  
funcInvoke
    :   ID '(' ( shiftExpr ( ',' shiftExpr)* )? ')'
    ->	^(FUNC_INVOKE ^(FUNC_NAME ID) ^(FUNC_PARAM shiftExpr)*)
    ;

expression
    :   assignmentExpr
    |	conditionalExpr
    ;

assignmentExpr
    :   unaryExpr (assignmentOp shiftExpr)?
    	-> ^(ASSIGNMENT ^(ASSIGNMENT_LEFT unaryExpr) (assignmentOp ^(ASSIGNMENT_RIGHT shiftExpr))?)
    ;

assignmentOp
    :   '='
    	-> ASSIGN
    |   '+='
    	-> PLUS_ASSIGN
    |   '-='
    	-> MINUS_ASSIGN
    |   '*='
    	-> MULTI_ASSIGN
    |   '/='
    	-> DIVIDE_ASSIGN
    |   '<<='
    	-> SHL_ASSIGN
    |   '>>='
    	-> SHR_ASSIGN
    |   '&='
    	-> AND_ASSIGN
    |   '|='
    	-> OR_ASSIGN
    |   '^='
    	-> NOT_ASSIGN
    ;

unaryExpr   
    :   postfixExpr
    |   '++' unaryExpr
    ->	^(PREFIX_PLUS unaryExpr)
    |   '--' unaryExpr
    ->	^(PREFIX_MINUS unaryExpr)
    |   'sizeof' '(' type ')'
    ->	^(SIZEOF type)
    |   unaryOp castExpr
    |	funcInvoke
    ;    

unaryOp
    :   '!'
    ->	PREFIX_NOT
    |   '&'
    ->	PREFIX_AND
    |   '*'
    ->	PREFIX_STAR
    ;

postfixExpr
    :   primaryExpr (postfix)*   
    ; 

postfix
    :	'->' ID ('[' shiftExpr ']')? 
    ->	^(MEMBERVAR ID ^(ARRAYINDEX shiftExpr)?)
    |  '++' 
    ->	^(POSTFIX_PLUS)
    |  '--' 
    ->	^(POSTFIX_MINUS)
    |  '[' expression ']'
    ->	^(ARRAYINDEX expression)
    ;

primaryExpr
    :   declarator
        -> ^(DECLARATOR declarator)
    |	INT
    	-> ^(CONSTNUM INT)
    |   STRING
    |   '(' expression ')'
    	-> expression
    ;

conditionalExpr
    :   logicalOrExpr
    -> ^(CONDITION logicalOrExpr)
    ; 

logicalOrExpr
    : logicalAndExpr ('||'^ logicalAndExpr)*
    ;

logicalAndExpr
    : relationExpr ('&&'^ relationExpr)*
    ;

relationExpr
    : shiftExpr (relationOp^ shiftExpr)*
    ;
    
relationOp
    :	'=='
    -> 	EQUAL_RE
    |	'!='
    -> 	NOTEQUAL_RE
    |	'<'
    -> 	LESS_RE
    |	'>'
    -> 	GREATER_RE
    |	'<='
    -> 	LESSEQUAL_RE
    |	'>='	
    -> 	GREATEREQUAL_RE
    ;

shiftExpr
    :   addSubExpr (shiftOp^ addSubExpr)*
    ;
shiftOp
    :	'<<'
    ->	SHL_OP
    |	'>>'
    ->	SHR_OP
    ;

addSubExpr
    :   multDivExpr (addSubOp^ multDivExpr)*
    ;
addSubOp
    :	'+'
    ->	ADD_OP
    |	'-'	
    ->	SUB_OP
    ;

multDivExpr
    :   castExpr (multDivOp^ castExpr)*
    ;

multDivOp
    :	'*'
    ->	MULTI_OP
    |	'/'
    ->	DIV_OP
    |	'%'
    ->	MOD_OP
    ;

castExpr
    :   '(' type ')' castExpr
    ->	^(CASTTYPE type castExpr)
    |	'(' conditionalExpr ')'
    ->	^(SUB_CONDITION conditionalExpr)
    |   unaryExpr
    ;


ID  :   ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*
    ;

INT :   ('-')?('0'..'9')+
    ;

FLOAT
    :   ('0'..'9')+ '.' ('0'..'9')* EXPONENT?
    |   '.' ('0'..'9')+ EXPONENT?
    |   ('0'..'9')+ EXPONENT
    ;

fragment
EXPONENT : ('e'|'E') ('+'|'-')? ('0'..'9')+ ;

WS  :   (   ' '
        |   '\t'
        |   '\r'
        |   '\n'
        )+
        { $channel=HIDDEN; }
    ;


CHINESECHAR : 
        '\u4E00' .. '\u9FA5' | '\uF900' .. '\uFA2D'
    ;

MULTILINE_COMMENT :
        '/*' .* '*/' 
        { $channel=HIDDEN; } 
    ;

SINGLELINE_COMMENT :
        '//' ~ ('\n' | '\r') * '\r'? '\n' 
        { $channel=HIDDEN; } 
    ;

//fragment
STRING
    :  '"' ( EscapeSequence | ~('\\'|'"') )* '"'
    ;
  
fragment
EscapeSequence
    :   '\\' ('b'|'t'|'n'|'f'|'r'|'\"'|'\''|'\\')
    |   OctalEscape
    ;

fragment
OctalEscape
    :   '\\' ('0'..'3') ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7')
    ;