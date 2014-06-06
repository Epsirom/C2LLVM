grammar SimpleCv3;

options {
    language = JavaScript;
    output = AST;
    ASTLabelType=CommonTree;
    backtrack = true;
    //greedy = false;
}

program
    :   statement+
    ;

statement
    :   declaration
    |   variable
    |   structDefinition
    |   typeDefinition
    |   functionHeader ';'
    |   functionHeader block
    ;

declaration
    :   '#' 'include' '<' libname '>'
    ;

libname
    :   ID ('.' ID)?
    ;

variable
    :   type declarator (assignmentOp conditionalExpr)? (',' declarator (assignmentOp conditionalExpr)?)* ';'
    ;

type
    :   typeSpecifier '*'?         
    ;
	
typeSpecifier
	:	'void'
	|	'char'
	|	'short'
	|	'int'
	|	'long'
	|	'float'
	|	'double'
	|	'signed'
	|	'unsigned'
	|	ID
	;
	
declarator
    :   ID 
    ;

typeDefinition
    :    'typedef' oldTypeName newTypeName ';'
    ;

oldTypeName
    :	typeSpecifier         
    ;

newTypeName
    :   ID      
    ;

structDefinition
    :   ( 'typedef' )? 'struct' structName structBlock ( structVar ( ',' structVar )* )? ';'
    ;

structName
    :   ID
    ;

structVar
    :   declarator
    ;

structBlock
    :   '{'
            variable*
        '}'
    ;

functionHeader
    :   type ID '(' ( formalParameter ( ',' formalParameter )* )? ')'
    ;

formalParameter
    :   type declarator        
    ;

block
    :   '{'
            variable*
            stat*
        '}'
    |   stat
    |   ';'
    ;

stat
    :   forStat
    |   whileStat
    |   ifStat
    |   expression ';'           
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
    :   'if' '(' conditionalExpr ')' block ( 'else' 'if' '(' expression ')' block )* ( 'else' block )?
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
    :   unaryExpr assignmentOp shiftExpr
    ;

assignmentOp
    :   '='
    |   '+='
    |   '-='
    |   '*='
    |   '/='
    |   '<<='
    |   '>>='
    |   '&='
    |   '|='
    |   '^='
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

fragment
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