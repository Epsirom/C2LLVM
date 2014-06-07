grammar SimpleCv3;

options {
    //language = JavaScript;
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
    :   type declarator (assignmentOp conditionalExpr)? (',' '*'? declarator (assignmentOp conditionalExpr)?)* ';'
    	-> ^(VAR_DEF type (^(VAR_NAME declarator) ^(DEFAULT_VALUE conditionalExpr?))+)
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
    ;

whileStat
    :   'while' '(' conditionalExpr ')' block
    |   'do' block 'while' '(' expression ')' ';'
    ;

ifStat
    :   'if' '(' expression ')' block ( 'else' 'if' '(' expression ')' block )* ( 'else' block )?
    ;

jumpStat
    :  'continue' ';'
    |  'break' ';'
    |  'return' ';'
    |  'return' expression ';'
    ;
  
funcInvoke
    :   ID '(' ( shiftExpr ( ',' shiftExpr)* )? ')'
    ;

expression
    :   assignmentExpr
    |	conditionalExpr
    ;

assignmentExpr
    :   unaryExpr (assignmentOp shiftExpr)?
    	-> ^(ASSIGNMENT unaryExpr (assignmentOp shiftExpr)?)
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
    |   '--' unaryExpr
    |   'sizeof' '(' type ')'
    |   unaryOp castExpr
    |	funcInvoke
    ;    

unaryOp
    :   '!'
    |   '&'
    |   '*'
    ;

postfixExpr
    :   primaryExpr ('->' ID ('[' shiftExpr ']')? | '++' | '--' | '[' expression ']')*
    ; 

primaryExpr
    :   declarator
    |	INT
    |   STRING
    |   '(' expression ')'
    ;

conditionalExpr
    :   logicalOrExpr ('?' expression ':' conditionalExpr)?
    ; 

logicalOrExpr
    : logicalAndExpr ('||' logicalAndExpr)*
    ;

logicalAndExpr
    : equalityExpr ('&&' equalityExpr)*
    ;


equalityExpr
    : relationalExpr (('=='|'!=') relationalExpr)*
    ;

relationalExpr
    : shiftExpr (('<'|'>'|'<='|'>=') shiftExpr)*
    ;

shiftExpr
    :   addSubExpr (('<<'|'>>') addSubExpr)*
    ;

addSubExpr
    :   multDivExpr (('+'|'-') multDivExpr)*
    ;

multDivExpr
    :   castExpr (('*'|'/'|'%') castExpr)*
    ;

castExpr
    :   '(' type ')' castExpr
    |	'(' conditionalExpr ')'
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