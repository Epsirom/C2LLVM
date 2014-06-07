// $ANTLR 3.3 Nov 30, 2010 12:50:56 SimpleCv4.g 2014-06-08 04:22:20

var SimpleCv4Lexer = function(input, state) {
// alternate constructor @todo
// public SimpleCv4Lexer(CharStream input)
// public SimpleCv4Lexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa10 = new SimpleCv4Lexer.DFA10(this);
    this.dfa20 = new SimpleCv4Lexer.DFA20(this);
    SimpleCv4Lexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(SimpleCv4Lexer, {
    EOF: -1,
    T__102: 102,
    T__103: 103,
    T__104: 104,
    T__105: 105,
    T__106: 106,
    T__107: 107,
    T__108: 108,
    T__109: 109,
    T__110: 110,
    T__111: 111,
    T__112: 112,
    T__113: 113,
    T__114: 114,
    T__115: 115,
    T__116: 116,
    T__117: 117,
    T__118: 118,
    T__119: 119,
    T__120: 120,
    T__121: 121,
    T__122: 122,
    T__123: 123,
    T__124: 124,
    T__125: 125,
    T__126: 126,
    T__127: 127,
    T__128: 128,
    T__129: 129,
    T__130: 130,
    T__131: 131,
    T__132: 132,
    T__133: 133,
    T__134: 134,
    T__135: 135,
    T__136: 136,
    T__137: 137,
    T__138: 138,
    T__139: 139,
    T__140: 140,
    T__141: 141,
    T__142: 142,
    T__143: 143,
    T__144: 144,
    T__145: 145,
    T__146: 146,
    T__147: 147,
    T__148: 148,
    T__149: 149,
    T__150: 150,
    T__151: 151,
    T__152: 152,
    T__153: 153,
    T__154: 154,
    T__155: 155,
    T__156: 156,
    T__157: 157,
    T__158: 158,
    T__159: 159,
    T__160: 160,
    T__161: 161,
    T__162: 162,
    PROG: 4,
    INCLUDE_SYSTEM: 5,
    TYPE_DEF: 6,
    TYPE_OLD: 7,
    TYPE_NEW: 8,
    STRUCT_DEF: 9,
    STRUCT_CNAME: 10,
    VAR_DEF: 11,
    VAR_NAME: 12,
    C_TYPE: 13,
    C_ID: 14,
    DEFAULT_VALUE: 15,
    TYPE_VOID: 16,
    TYPE_I8: 17,
    TYPE_I16: 18,
    TYPE_I32: 19,
    TYPE_UNSIGNED: 20,
    TYPE_F32: 21,
    TYPE_F64: 22,
    TYPE_CUSTOM: 23,
    FUNC_DEF: 24,
    FUNC_STAT: 25,
    FUNC_NAME: 26,
    FUNC_HEADER: 27,
    FUNC_PARAM: 28,
    FUNC_INVOKE: 29,
    FOR_STAT: 30,
    WHILE_STAT: 31,
    DOWHILE_STAT: 32,
    IF_STAT: 33,
    IF_BRANCH: 34,
    ELSEIF_BRANCH: 35,
    ELSE_BRANCH: 36,
    JUMP_STAT: 37,
    JUMP_RETURN: 38,
    JUMP_BREAK: 39,
    JUMP_CONTINUE: 40,
    BLOCK: 41,
    EMPTY_BLOCK: 42,
    ASSIGNMENT: 43,
    ASSIGN: 44,
    PLUS_ASSIGN: 45,
    MINUS_ASSIGN: 46,
    MULTI_ASSIGN: 47,
    DIVIDE_ASSIGN: 48,
    SHL_ASSIGN: 49,
    SHR_ASSIGN: 50,
    AND_ASSIGN: 51,
    OR_ASSIGN: 52,
    NOT_ASSIGN: 53,
    CONDITION: 54,
    SUB_CONDITION: 55,
    OR_EXPR: 56,
    OR_BRANCH: 57,
    AND_EXPR: 58,
    AND_BRANCH: 59,
    SHIFT_EXPR: 60,
    ADDSUB_EXPR: 61,
    MULTDIV_EXPR: 62,
    CASTTYPE: 63,
    SHL_OP: 64,
    SHR_OP: 65,
    ADD_OP: 66,
    SUB_OP: 67,
    MULTI_OP: 68,
    DIV_OP: 69,
    MOD_OP: 70,
    RELATION_EXPR: 71,
    EQUAL_RE: 72,
    NOTEQUAL_RE: 73,
    LESS_RE: 74,
    GREATER_RE: 75,
    GREATEREQUAL_RE: 76,
    LESSEQUAL_RE: 77,
    PREFIX_PLUS: 78,
    PREFIX_MINUS: 79,
    PREFIX_NOT: 80,
    PREFIX_AND: 81,
    PREFIX_STAR: 82,
    SIZEOF: 83,
    POSTFIX_EXPR: 84,
    POSTFIX: 85,
    POSTFIX_PLUS: 86,
    POSTFIX_MINUS: 87,
    MEMBERVAR: 88,
    ARRAYINDEX: 89,
    DECLARATOR: 90,
    ID: 91,
    INT: 92,
    STRING: 93,
    EXPONENT: 94,
    FLOAT: 95,
    WS: 96,
    CHINESECHAR: 97,
    MULTILINE_COMMENT: 98,
    SINGLELINE_COMMENT: 99,
    EscapeSequence: 100,
    OctalEscape: 101
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(SimpleCv4Lexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    T__102 : 102,
    T__103 : 103,
    T__104 : 104,
    T__105 : 105,
    T__106 : 106,
    T__107 : 107,
    T__108 : 108,
    T__109 : 109,
    T__110 : 110,
    T__111 : 111,
    T__112 : 112,
    T__113 : 113,
    T__114 : 114,
    T__115 : 115,
    T__116 : 116,
    T__117 : 117,
    T__118 : 118,
    T__119 : 119,
    T__120 : 120,
    T__121 : 121,
    T__122 : 122,
    T__123 : 123,
    T__124 : 124,
    T__125 : 125,
    T__126 : 126,
    T__127 : 127,
    T__128 : 128,
    T__129 : 129,
    T__130 : 130,
    T__131 : 131,
    T__132 : 132,
    T__133 : 133,
    T__134 : 134,
    T__135 : 135,
    T__136 : 136,
    T__137 : 137,
    T__138 : 138,
    T__139 : 139,
    T__140 : 140,
    T__141 : 141,
    T__142 : 142,
    T__143 : 143,
    T__144 : 144,
    T__145 : 145,
    T__146 : 146,
    T__147 : 147,
    T__148 : 148,
    T__149 : 149,
    T__150 : 150,
    T__151 : 151,
    T__152 : 152,
    T__153 : 153,
    T__154 : 154,
    T__155 : 155,
    T__156 : 156,
    T__157 : 157,
    T__158 : 158,
    T__159 : 159,
    T__160 : 160,
    T__161 : 161,
    T__162 : 162,
    PROG : 4,
    INCLUDE_SYSTEM : 5,
    TYPE_DEF : 6,
    TYPE_OLD : 7,
    TYPE_NEW : 8,
    STRUCT_DEF : 9,
    STRUCT_CNAME : 10,
    VAR_DEF : 11,
    VAR_NAME : 12,
    C_TYPE : 13,
    C_ID : 14,
    DEFAULT_VALUE : 15,
    TYPE_VOID : 16,
    TYPE_I8 : 17,
    TYPE_I16 : 18,
    TYPE_I32 : 19,
    TYPE_UNSIGNED : 20,
    TYPE_F32 : 21,
    TYPE_F64 : 22,
    TYPE_CUSTOM : 23,
    FUNC_DEF : 24,
    FUNC_STAT : 25,
    FUNC_NAME : 26,
    FUNC_HEADER : 27,
    FUNC_PARAM : 28,
    FUNC_INVOKE : 29,
    FOR_STAT : 30,
    WHILE_STAT : 31,
    DOWHILE_STAT : 32,
    IF_STAT : 33,
    IF_BRANCH : 34,
    ELSEIF_BRANCH : 35,
    ELSE_BRANCH : 36,
    JUMP_STAT : 37,
    JUMP_RETURN : 38,
    JUMP_BREAK : 39,
    JUMP_CONTINUE : 40,
    BLOCK : 41,
    EMPTY_BLOCK : 42,
    ASSIGNMENT : 43,
    ASSIGN : 44,
    PLUS_ASSIGN : 45,
    MINUS_ASSIGN : 46,
    MULTI_ASSIGN : 47,
    DIVIDE_ASSIGN : 48,
    SHL_ASSIGN : 49,
    SHR_ASSIGN : 50,
    AND_ASSIGN : 51,
    OR_ASSIGN : 52,
    NOT_ASSIGN : 53,
    CONDITION : 54,
    SUB_CONDITION : 55,
    OR_EXPR : 56,
    OR_BRANCH : 57,
    AND_EXPR : 58,
    AND_BRANCH : 59,
    SHIFT_EXPR : 60,
    ADDSUB_EXPR : 61,
    MULTDIV_EXPR : 62,
    CASTTYPE : 63,
    SHL_OP : 64,
    SHR_OP : 65,
    ADD_OP : 66,
    SUB_OP : 67,
    MULTI_OP : 68,
    DIV_OP : 69,
    MOD_OP : 70,
    RELATION_EXPR : 71,
    EQUAL_RE : 72,
    NOTEQUAL_RE : 73,
    LESS_RE : 74,
    GREATER_RE : 75,
    GREATEREQUAL_RE : 76,
    LESSEQUAL_RE : 77,
    PREFIX_PLUS : 78,
    PREFIX_MINUS : 79,
    PREFIX_NOT : 80,
    PREFIX_AND : 81,
    PREFIX_STAR : 82,
    SIZEOF : 83,
    POSTFIX_EXPR : 84,
    POSTFIX : 85,
    POSTFIX_PLUS : 86,
    POSTFIX_MINUS : 87,
    MEMBERVAR : 88,
    ARRAYINDEX : 89,
    DECLARATOR : 90,
    ID : 91,
    INT : 92,
    STRING : 93,
    EXPONENT : 94,
    FLOAT : 95,
    WS : 96,
    CHINESECHAR : 97,
    MULTILINE_COMMENT : 98,
    SINGLELINE_COMMENT : 99,
    EscapeSequence : 100,
    OctalEscape : 101,
    getGrammarFileName: function() { return "SimpleCv4.g"; }
});
org.antlr.lang.augmentObject(SimpleCv4Lexer.prototype, {
    // $ANTLR start T__102
    mT__102: function()  {
        try {
            var _type = this.T__102;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:7:8: ( ';' )
            // SimpleCv4.g:7:10: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__102",

    // $ANTLR start T__103
    mT__103: function()  {
        try {
            var _type = this.T__103;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:8:8: ( '#' )
            // SimpleCv4.g:8:10: '#'
            this.match('#'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__103",

    // $ANTLR start T__104
    mT__104: function()  {
        try {
            var _type = this.T__104;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:9:8: ( 'include' )
            // SimpleCv4.g:9:10: 'include'
            this.match("include"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__104",

    // $ANTLR start T__105
    mT__105: function()  {
        try {
            var _type = this.T__105;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:10:8: ( '<' )
            // SimpleCv4.g:10:10: '<'
            this.match('<'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__105",

    // $ANTLR start T__106
    mT__106: function()  {
        try {
            var _type = this.T__106;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:11:8: ( '>' )
            // SimpleCv4.g:11:10: '>'
            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__106",

    // $ANTLR start T__107
    mT__107: function()  {
        try {
            var _type = this.T__107;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:12:8: ( '.' )
            // SimpleCv4.g:12:10: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__107",

    // $ANTLR start T__108
    mT__108: function()  {
        try {
            var _type = this.T__108;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:13:8: ( ',' )
            // SimpleCv4.g:13:10: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__108",

    // $ANTLR start T__109
    mT__109: function()  {
        try {
            var _type = this.T__109;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:14:8: ( '*' )
            // SimpleCv4.g:14:10: '*'
            this.match('*'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__109",

    // $ANTLR start T__110
    mT__110: function()  {
        try {
            var _type = this.T__110;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:15:8: ( 'void' )
            // SimpleCv4.g:15:10: 'void'
            this.match("void"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__110",

    // $ANTLR start T__111
    mT__111: function()  {
        try {
            var _type = this.T__111;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:16:8: ( 'char' )
            // SimpleCv4.g:16:10: 'char'
            this.match("char"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__111",

    // $ANTLR start T__112
    mT__112: function()  {
        try {
            var _type = this.T__112;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:17:8: ( 'short' )
            // SimpleCv4.g:17:10: 'short'
            this.match("short"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__112",

    // $ANTLR start T__113
    mT__113: function()  {
        try {
            var _type = this.T__113;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:18:8: ( 'int' )
            // SimpleCv4.g:18:10: 'int'
            this.match("int"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__113",

    // $ANTLR start T__114
    mT__114: function()  {
        try {
            var _type = this.T__114;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:19:8: ( 'long' )
            // SimpleCv4.g:19:10: 'long'
            this.match("long"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__114",

    // $ANTLR start T__115
    mT__115: function()  {
        try {
            var _type = this.T__115;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:20:8: ( 'float' )
            // SimpleCv4.g:20:10: 'float'
            this.match("float"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__115",

    // $ANTLR start T__116
    mT__116: function()  {
        try {
            var _type = this.T__116;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:21:8: ( 'double' )
            // SimpleCv4.g:21:10: 'double'
            this.match("double"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__116",

    // $ANTLR start T__117
    mT__117: function()  {
        try {
            var _type = this.T__117;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:22:8: ( 'signed' )
            // SimpleCv4.g:22:10: 'signed'
            this.match("signed"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__117",

    // $ANTLR start T__118
    mT__118: function()  {
        try {
            var _type = this.T__118;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:23:8: ( 'unsigned' )
            // SimpleCv4.g:23:10: 'unsigned'
            this.match("unsigned"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__118",

    // $ANTLR start T__119
    mT__119: function()  {
        try {
            var _type = this.T__119;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:24:8: ( 'typedef' )
            // SimpleCv4.g:24:10: 'typedef'
            this.match("typedef"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__119",

    // $ANTLR start T__120
    mT__120: function()  {
        try {
            var _type = this.T__120;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:25:8: ( 'struct' )
            // SimpleCv4.g:25:10: 'struct'
            this.match("struct"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__120",

    // $ANTLR start T__121
    mT__121: function()  {
        try {
            var _type = this.T__121;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:26:8: ( '{' )
            // SimpleCv4.g:26:10: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__121",

    // $ANTLR start T__122
    mT__122: function()  {
        try {
            var _type = this.T__122;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:27:8: ( '}' )
            // SimpleCv4.g:27:10: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__122",

    // $ANTLR start T__123
    mT__123: function()  {
        try {
            var _type = this.T__123;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:28:8: ( '(' )
            // SimpleCv4.g:28:10: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__123",

    // $ANTLR start T__124
    mT__124: function()  {
        try {
            var _type = this.T__124;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:29:8: ( ')' )
            // SimpleCv4.g:29:10: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__124",

    // $ANTLR start T__125
    mT__125: function()  {
        try {
            var _type = this.T__125;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:30:8: ( 'for' )
            // SimpleCv4.g:30:10: 'for'
            this.match("for"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__125",

    // $ANTLR start T__126
    mT__126: function()  {
        try {
            var _type = this.T__126;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:31:8: ( 'while' )
            // SimpleCv4.g:31:10: 'while'
            this.match("while"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__126",

    // $ANTLR start T__127
    mT__127: function()  {
        try {
            var _type = this.T__127;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:32:8: ( 'do' )
            // SimpleCv4.g:32:10: 'do'
            this.match("do"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__127",

    // $ANTLR start T__128
    mT__128: function()  {
        try {
            var _type = this.T__128;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:33:8: ( 'if' )
            // SimpleCv4.g:33:10: 'if'
            this.match("if"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__128",

    // $ANTLR start T__129
    mT__129: function()  {
        try {
            var _type = this.T__129;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:34:8: ( 'else' )
            // SimpleCv4.g:34:10: 'else'
            this.match("else"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__129",

    // $ANTLR start T__130
    mT__130: function()  {
        try {
            var _type = this.T__130;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:35:8: ( 'continue' )
            // SimpleCv4.g:35:10: 'continue'
            this.match("continue"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__130",

    // $ANTLR start T__131
    mT__131: function()  {
        try {
            var _type = this.T__131;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:36:8: ( 'break' )
            // SimpleCv4.g:36:10: 'break'
            this.match("break"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__131",

    // $ANTLR start T__132
    mT__132: function()  {
        try {
            var _type = this.T__132;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:37:8: ( 'return' )
            // SimpleCv4.g:37:10: 'return'
            this.match("return"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__132",

    // $ANTLR start T__133
    mT__133: function()  {
        try {
            var _type = this.T__133;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:38:8: ( '=' )
            // SimpleCv4.g:38:10: '='
            this.match('='); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__133",

    // $ANTLR start T__134
    mT__134: function()  {
        try {
            var _type = this.T__134;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:39:8: ( '+=' )
            // SimpleCv4.g:39:10: '+='
            this.match("+="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__134",

    // $ANTLR start T__135
    mT__135: function()  {
        try {
            var _type = this.T__135;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:40:8: ( '-=' )
            // SimpleCv4.g:40:10: '-='
            this.match("-="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__135",

    // $ANTLR start T__136
    mT__136: function()  {
        try {
            var _type = this.T__136;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:41:8: ( '*=' )
            // SimpleCv4.g:41:10: '*='
            this.match("*="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__136",

    // $ANTLR start T__137
    mT__137: function()  {
        try {
            var _type = this.T__137;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:42:8: ( '/=' )
            // SimpleCv4.g:42:10: '/='
            this.match("/="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__137",

    // $ANTLR start T__138
    mT__138: function()  {
        try {
            var _type = this.T__138;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:43:8: ( '<<=' )
            // SimpleCv4.g:43:10: '<<='
            this.match("<<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__138",

    // $ANTLR start T__139
    mT__139: function()  {
        try {
            var _type = this.T__139;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:44:8: ( '>>=' )
            // SimpleCv4.g:44:10: '>>='
            this.match(">>="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__139",

    // $ANTLR start T__140
    mT__140: function()  {
        try {
            var _type = this.T__140;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:45:8: ( '&=' )
            // SimpleCv4.g:45:10: '&='
            this.match("&="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__140",

    // $ANTLR start T__141
    mT__141: function()  {
        try {
            var _type = this.T__141;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:46:8: ( '|=' )
            // SimpleCv4.g:46:10: '|='
            this.match("|="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__141",

    // $ANTLR start T__142
    mT__142: function()  {
        try {
            var _type = this.T__142;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:47:8: ( '^=' )
            // SimpleCv4.g:47:10: '^='
            this.match("^="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__142",

    // $ANTLR start T__143
    mT__143: function()  {
        try {
            var _type = this.T__143;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:48:8: ( '++' )
            // SimpleCv4.g:48:10: '++'
            this.match("++"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__143",

    // $ANTLR start T__144
    mT__144: function()  {
        try {
            var _type = this.T__144;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:49:8: ( '--' )
            // SimpleCv4.g:49:10: '--'
            this.match("--"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__144",

    // $ANTLR start T__145
    mT__145: function()  {
        try {
            var _type = this.T__145;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:50:8: ( 'sizeof' )
            // SimpleCv4.g:50:10: 'sizeof'
            this.match("sizeof"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__145",

    // $ANTLR start T__146
    mT__146: function()  {
        try {
            var _type = this.T__146;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:51:8: ( '!' )
            // SimpleCv4.g:51:10: '!'
            this.match('!'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__146",

    // $ANTLR start T__147
    mT__147: function()  {
        try {
            var _type = this.T__147;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:52:8: ( '&' )
            // SimpleCv4.g:52:10: '&'
            this.match('&'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__147",

    // $ANTLR start T__148
    mT__148: function()  {
        try {
            var _type = this.T__148;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:53:8: ( '->' )
            // SimpleCv4.g:53:10: '->'
            this.match("->"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__148",

    // $ANTLR start T__149
    mT__149: function()  {
        try {
            var _type = this.T__149;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:54:8: ( '[' )
            // SimpleCv4.g:54:10: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__149",

    // $ANTLR start T__150
    mT__150: function()  {
        try {
            var _type = this.T__150;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:55:8: ( ']' )
            // SimpleCv4.g:55:10: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__150",

    // $ANTLR start T__151
    mT__151: function()  {
        try {
            var _type = this.T__151;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:56:8: ( '||' )
            // SimpleCv4.g:56:10: '||'
            this.match("||"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__151",

    // $ANTLR start T__152
    mT__152: function()  {
        try {
            var _type = this.T__152;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:57:8: ( '&&' )
            // SimpleCv4.g:57:10: '&&'
            this.match("&&"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__152",

    // $ANTLR start T__153
    mT__153: function()  {
        try {
            var _type = this.T__153;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:58:8: ( '==' )
            // SimpleCv4.g:58:10: '=='
            this.match("=="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__153",

    // $ANTLR start T__154
    mT__154: function()  {
        try {
            var _type = this.T__154;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:59:8: ( '!=' )
            // SimpleCv4.g:59:10: '!='
            this.match("!="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__154",

    // $ANTLR start T__155
    mT__155: function()  {
        try {
            var _type = this.T__155;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:60:8: ( '<=' )
            // SimpleCv4.g:60:10: '<='
            this.match("<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__155",

    // $ANTLR start T__156
    mT__156: function()  {
        try {
            var _type = this.T__156;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:61:8: ( '>=' )
            // SimpleCv4.g:61:10: '>='
            this.match(">="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__156",

    // $ANTLR start T__157
    mT__157: function()  {
        try {
            var _type = this.T__157;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:62:8: ( '<<' )
            // SimpleCv4.g:62:10: '<<'
            this.match("<<"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__157",

    // $ANTLR start T__158
    mT__158: function()  {
        try {
            var _type = this.T__158;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:63:8: ( '>>' )
            // SimpleCv4.g:63:10: '>>'
            this.match(">>"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__158",

    // $ANTLR start T__159
    mT__159: function()  {
        try {
            var _type = this.T__159;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:64:8: ( '+' )
            // SimpleCv4.g:64:10: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__159",

    // $ANTLR start T__160
    mT__160: function()  {
        try {
            var _type = this.T__160;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:65:8: ( '-' )
            // SimpleCv4.g:65:10: '-'
            this.match('-'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__160",

    // $ANTLR start T__161
    mT__161: function()  {
        try {
            var _type = this.T__161;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:66:8: ( '/' )
            // SimpleCv4.g:66:10: '/'
            this.match('/'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__161",

    // $ANTLR start T__162
    mT__162: function()  {
        try {
            var _type = this.T__162;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:67:8: ( '%' )
            // SimpleCv4.g:67:10: '%'
            this.match('%'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__162",

    // $ANTLR start ID
    mID: function()  {
        try {
            var _type = this.ID;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:428:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )* )
            // SimpleCv4.g:428:9: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // SimpleCv4.g:428:33: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>='0' && LA1_0<='9')||(LA1_0>='A' && LA1_0<='Z')||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // SimpleCv4.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop1;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ID",

    // $ANTLR start INT
    mINT: function()  {
        try {
            var _type = this.INT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:431:5: ( ( '-' )? ( '0' .. '9' )+ )
            // SimpleCv4.g:431:9: ( '-' )? ( '0' .. '9' )+
            // SimpleCv4.g:431:9: ( '-' )?
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0=='-') ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // SimpleCv4.g:431:10: '-'
                    this.match('-'); 


                    break;

            }

            // SimpleCv4.g:431:15: ( '0' .. '9' )+
            var cnt3=0;
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( ((LA3_0>='0' && LA3_0<='9')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // SimpleCv4.g:431:16: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt3 >= 1 ) {
                        break loop3;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(3, this.input);
                        throw eee;
                }
                cnt3++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INT",

    // $ANTLR start FLOAT
    mFLOAT: function()  {
        try {
            var _type = this.FLOAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:435:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
            var alt10=3;
            alt10 = this.dfa10.predict(this.input);
            switch (alt10) {
                case 1 :
                    // SimpleCv4.g:435:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
                    // SimpleCv4.g:435:9: ( '0' .. '9' )+
                    var cnt4=0;
                    loop4:
                    do {
                        var alt4=2;
                        var LA4_0 = this.input.LA(1);

                        if ( ((LA4_0>='0' && LA4_0<='9')) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                        case 1 :
                            // SimpleCv4.g:435:10: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt4 >= 1 ) {
                                break loop4;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(4, this.input);
                                throw eee;
                        }
                        cnt4++;
                    } while (true);

                    this.match('.'); 
                    // SimpleCv4.g:435:25: ( '0' .. '9' )*
                    loop5:
                    do {
                        var alt5=2;
                        var LA5_0 = this.input.LA(1);

                        if ( ((LA5_0>='0' && LA5_0<='9')) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                        case 1 :
                            // SimpleCv4.g:435:26: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop5;
                        }
                    } while (true);

                    // SimpleCv4.g:435:37: ( EXPONENT )?
                    var alt6=2;
                    var LA6_0 = this.input.LA(1);

                    if ( (LA6_0=='E'||LA6_0=='e') ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // SimpleCv4.g:435:37: EXPONENT
                            this.mEXPONENT(); 


                            break;

                    }



                    break;
                case 2 :
                    // SimpleCv4.g:436:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
                    this.match('.'); 
                    // SimpleCv4.g:436:13: ( '0' .. '9' )+
                    var cnt7=0;
                    loop7:
                    do {
                        var alt7=2;
                        var LA7_0 = this.input.LA(1);

                        if ( ((LA7_0>='0' && LA7_0<='9')) ) {
                            alt7=1;
                        }


                        switch (alt7) {
                        case 1 :
                            // SimpleCv4.g:436:14: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt7 >= 1 ) {
                                break loop7;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(7, this.input);
                                throw eee;
                        }
                        cnt7++;
                    } while (true);

                    // SimpleCv4.g:436:25: ( EXPONENT )?
                    var alt8=2;
                    var LA8_0 = this.input.LA(1);

                    if ( (LA8_0=='E'||LA8_0=='e') ) {
                        alt8=1;
                    }
                    switch (alt8) {
                        case 1 :
                            // SimpleCv4.g:436:25: EXPONENT
                            this.mEXPONENT(); 


                            break;

                    }



                    break;
                case 3 :
                    // SimpleCv4.g:437:9: ( '0' .. '9' )+ EXPONENT
                    // SimpleCv4.g:437:9: ( '0' .. '9' )+
                    var cnt9=0;
                    loop9:
                    do {
                        var alt9=2;
                        var LA9_0 = this.input.LA(1);

                        if ( ((LA9_0>='0' && LA9_0<='9')) ) {
                            alt9=1;
                        }


                        switch (alt9) {
                        case 1 :
                            // SimpleCv4.g:437:10: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt9 >= 1 ) {
                                break loop9;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(9, this.input);
                                throw eee;
                        }
                        cnt9++;
                    } while (true);

                    this.mEXPONENT(); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOAT",

    // $ANTLR start EXPONENT
    mEXPONENT: function()  {
        try {
            // SimpleCv4.g:441:10: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            // SimpleCv4.g:441:12: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // SimpleCv4.g:441:22: ( '+' | '-' )?
            var alt11=2;
            var LA11_0 = this.input.LA(1);

            if ( (LA11_0=='+'||LA11_0=='-') ) {
                alt11=1;
            }
            switch (alt11) {
                case 1 :
                    // SimpleCv4.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // SimpleCv4.g:441:33: ( '0' .. '9' )+
            var cnt12=0;
            loop12:
            do {
                var alt12=2;
                var LA12_0 = this.input.LA(1);

                if ( ((LA12_0>='0' && LA12_0<='9')) ) {
                    alt12=1;
                }


                switch (alt12) {
                case 1 :
                    // SimpleCv4.g:441:34: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt12 >= 1 ) {
                        break loop12;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(12, this.input);
                        throw eee;
                }
                cnt12++;
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "EXPONENT",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:443:5: ( ( ' ' | '\\t' | '\\r' | '\\n' )+ )
            // SimpleCv4.g:443:9: ( ' ' | '\\t' | '\\r' | '\\n' )+
            // SimpleCv4.g:443:9: ( ' ' | '\\t' | '\\r' | '\\n' )+
            var cnt13=0;
            loop13:
            do {
                var alt13=2;
                var LA13_0 = this.input.LA(1);

                if ( ((LA13_0>='\t' && LA13_0<='\n')||LA13_0=='\r'||LA13_0==' ') ) {
                    alt13=1;
                }


                switch (alt13) {
                case 1 :
                    // SimpleCv4.g:
                    if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||this.input.LA(1)=='\r'||this.input.LA(1)==' ' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt13 >= 1 ) {
                        break loop13;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(13, this.input);
                        throw eee;
                }
                cnt13++;
            } while (true);

             _channel=HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    // $ANTLR start CHINESECHAR
    mCHINESECHAR: function()  {
        try {
            var _type = this.CHINESECHAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:452:13: ( '\\u4E00' .. '\\u9FA5' | '\\uF900' .. '\\uFA2D' )
            // SimpleCv4.g:
            if ( (this.input.LA(1)>='\u4E00' && this.input.LA(1)<='\u9FA5')||(this.input.LA(1)>='\uF900' && this.input.LA(1)<='\uFA2D') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHINESECHAR",

    // $ANTLR start MULTILINE_COMMENT
    mMULTILINE_COMMENT: function()  {
        try {
            var _type = this.MULTILINE_COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:456:19: ( '/*' ( . )* '*/' )
            // SimpleCv4.g:457:9: '/*' ( . )* '*/'
            this.match("/*"); 

            // SimpleCv4.g:457:14: ( . )*
            loop14:
            do {
                var alt14=2;
                var LA14_0 = this.input.LA(1);

                if ( (LA14_0=='*') ) {
                    var LA14_1 = this.input.LA(2);

                    if ( (LA14_1=='/') ) {
                        alt14=2;
                    }
                    else if ( ((LA14_1>='\u0000' && LA14_1<='.')||(LA14_1>='0' && LA14_1<='\uFFFF')) ) {
                        alt14=1;
                    }


                }
                else if ( ((LA14_0>='\u0000' && LA14_0<=')')||(LA14_0>='+' && LA14_0<='\uFFFF')) ) {
                    alt14=1;
                }


                switch (alt14) {
                case 1 :
                    // SimpleCv4.g:457:14: .
                    this.matchAny(); 


                    break;

                default :
                    break loop14;
                }
            } while (true);

            this.match("*/"); 

             _channel=HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MULTILINE_COMMENT",

    // $ANTLR start SINGLELINE_COMMENT
    mSINGLELINE_COMMENT: function()  {
        try {
            var _type = this.SINGLELINE_COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:461:20: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' )
            // SimpleCv4.g:462:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
            this.match("//"); 

            // SimpleCv4.g:462:14: (~ ( '\\n' | '\\r' ) )*
            loop15:
            do {
                var alt15=2;
                var LA15_0 = this.input.LA(1);

                if ( ((LA15_0>='\u0000' && LA15_0<='\t')||(LA15_0>='\u000B' && LA15_0<='\f')||(LA15_0>='\u000E' && LA15_0<='\uFFFF')) ) {
                    alt15=1;
                }


                switch (alt15) {
                case 1 :
                    // SimpleCv4.g:462:14: ~ ( '\\n' | '\\r' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop15;
                }
            } while (true);

            // SimpleCv4.g:462:32: ( '\\r' )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0=='\r') ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // SimpleCv4.g:462:32: '\\r'
                    this.match('\r'); 


                    break;

            }

            this.match('\n'); 
             _channel=HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SINGLELINE_COMMENT",

    // $ANTLR start STRING
    mSTRING: function()  {
        try {
            var _type = this.STRING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv4.g:468:5: ( '\"' ( EscapeSequence | ~ ( '\\\\' | '\"' ) )* '\"' )
            // SimpleCv4.g:468:8: '\"' ( EscapeSequence | ~ ( '\\\\' | '\"' ) )* '\"'
            this.match('\"'); 
            // SimpleCv4.g:468:12: ( EscapeSequence | ~ ( '\\\\' | '\"' ) )*
            loop17:
            do {
                var alt17=3;
                var LA17_0 = this.input.LA(1);

                if ( (LA17_0=='\\') ) {
                    alt17=1;
                }
                else if ( ((LA17_0>='\u0000' && LA17_0<='!')||(LA17_0>='#' && LA17_0<='[')||(LA17_0>=']' && LA17_0<='\uFFFF')) ) {
                    alt17=2;
                }


                switch (alt17) {
                case 1 :
                    // SimpleCv4.g:468:14: EscapeSequence
                    this.mEscapeSequence(); 


                    break;
                case 2 :
                    // SimpleCv4.g:468:31: ~ ( '\\\\' | '\"' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop17;
                }
            } while (true);

            this.match('\"'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING",

    // $ANTLR start EscapeSequence
    mEscapeSequence: function()  {
        try {
            // SimpleCv4.g:473:5: ( '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' ) | OctalEscape )
            var alt18=2;
            var LA18_0 = this.input.LA(1);

            if ( (LA18_0=='\\') ) {
                var LA18_1 = this.input.LA(2);

                if ( (LA18_1=='\"'||LA18_1=='\''||LA18_1=='\\'||LA18_1=='b'||LA18_1=='f'||LA18_1=='n'||LA18_1=='r'||LA18_1=='t') ) {
                    alt18=1;
                }
                else if ( ((LA18_1>='0' && LA18_1<='7')) ) {
                    alt18=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 18, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                throw nvae;
            }
            switch (alt18) {
                case 1 :
                    // SimpleCv4.g:473:9: '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' )
                    this.match('\\'); 
                    if ( this.input.LA(1)=='\"'||this.input.LA(1)=='\''||this.input.LA(1)=='\\'||this.input.LA(1)=='b'||this.input.LA(1)=='f'||this.input.LA(1)=='n'||this.input.LA(1)=='r'||this.input.LA(1)=='t' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // SimpleCv4.g:474:9: OctalEscape
                    this.mOctalEscape(); 


                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "EscapeSequence",

    // $ANTLR start OctalEscape
    mOctalEscape: function()  {
        try {
            // SimpleCv4.g:479:5: ( '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) )
            var alt19=3;
            var LA19_0 = this.input.LA(1);

            if ( (LA19_0=='\\') ) {
                var LA19_1 = this.input.LA(2);

                if ( ((LA19_1>='0' && LA19_1<='3')) ) {
                    var LA19_2 = this.input.LA(3);

                    if ( ((LA19_2>='0' && LA19_2<='7')) ) {
                        var LA19_4 = this.input.LA(4);

                        if ( ((LA19_4>='0' && LA19_4<='7')) ) {
                            alt19=1;
                        }
                        else {
                            alt19=2;}
                    }
                    else {
                        alt19=3;}
                }
                else if ( ((LA19_1>='4' && LA19_1<='7')) ) {
                    var LA19_3 = this.input.LA(3);

                    if ( ((LA19_3>='0' && LA19_3<='7')) ) {
                        alt19=2;
                    }
                    else {
                        alt19=3;}
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 19, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 19, 0, this.input);

                throw nvae;
            }
            switch (alt19) {
                case 1 :
                    // SimpleCv4.g:479:9: '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // SimpleCv4.g:479:14: ( '0' .. '3' )
                    // SimpleCv4.g:479:15: '0' .. '3'
                    this.matchRange('0','3'); 



                    // SimpleCv4.g:479:25: ( '0' .. '7' )
                    // SimpleCv4.g:479:26: '0' .. '7'
                    this.matchRange('0','7'); 



                    // SimpleCv4.g:479:36: ( '0' .. '7' )
                    // SimpleCv4.g:479:37: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 2 :
                    // SimpleCv4.g:480:9: '\\\\' ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // SimpleCv4.g:480:14: ( '0' .. '7' )
                    // SimpleCv4.g:480:15: '0' .. '7'
                    this.matchRange('0','7'); 



                    // SimpleCv4.g:480:25: ( '0' .. '7' )
                    // SimpleCv4.g:480:26: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 3 :
                    // SimpleCv4.g:481:9: '\\\\' ( '0' .. '7' )
                    this.match('\\'); 
                    // SimpleCv4.g:481:14: ( '0' .. '7' )
                    // SimpleCv4.g:481:15: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "OctalEscape",

    mTokens: function() {
        // SimpleCv4.g:1:8: ( T__102 | T__103 | T__104 | T__105 | T__106 | T__107 | T__108 | T__109 | T__110 | T__111 | T__112 | T__113 | T__114 | T__115 | T__116 | T__117 | T__118 | T__119 | T__120 | T__121 | T__122 | T__123 | T__124 | T__125 | T__126 | T__127 | T__128 | T__129 | T__130 | T__131 | T__132 | T__133 | T__134 | T__135 | T__136 | T__137 | T__138 | T__139 | T__140 | T__141 | T__142 | T__143 | T__144 | T__145 | T__146 | T__147 | T__148 | T__149 | T__150 | T__151 | T__152 | T__153 | T__154 | T__155 | T__156 | T__157 | T__158 | T__159 | T__160 | T__161 | T__162 | ID | INT | FLOAT | WS | CHINESECHAR | MULTILINE_COMMENT | SINGLELINE_COMMENT | STRING )
        var alt20=69;
        alt20 = this.dfa20.predict(this.input);
        switch (alt20) {
            case 1 :
                // SimpleCv4.g:1:10: T__102
                this.mT__102(); 


                break;
            case 2 :
                // SimpleCv4.g:1:17: T__103
                this.mT__103(); 


                break;
            case 3 :
                // SimpleCv4.g:1:24: T__104
                this.mT__104(); 


                break;
            case 4 :
                // SimpleCv4.g:1:31: T__105
                this.mT__105(); 


                break;
            case 5 :
                // SimpleCv4.g:1:38: T__106
                this.mT__106(); 


                break;
            case 6 :
                // SimpleCv4.g:1:45: T__107
                this.mT__107(); 


                break;
            case 7 :
                // SimpleCv4.g:1:52: T__108
                this.mT__108(); 


                break;
            case 8 :
                // SimpleCv4.g:1:59: T__109
                this.mT__109(); 


                break;
            case 9 :
                // SimpleCv4.g:1:66: T__110
                this.mT__110(); 


                break;
            case 10 :
                // SimpleCv4.g:1:73: T__111
                this.mT__111(); 


                break;
            case 11 :
                // SimpleCv4.g:1:80: T__112
                this.mT__112(); 


                break;
            case 12 :
                // SimpleCv4.g:1:87: T__113
                this.mT__113(); 


                break;
            case 13 :
                // SimpleCv4.g:1:94: T__114
                this.mT__114(); 


                break;
            case 14 :
                // SimpleCv4.g:1:101: T__115
                this.mT__115(); 


                break;
            case 15 :
                // SimpleCv4.g:1:108: T__116
                this.mT__116(); 


                break;
            case 16 :
                // SimpleCv4.g:1:115: T__117
                this.mT__117(); 


                break;
            case 17 :
                // SimpleCv4.g:1:122: T__118
                this.mT__118(); 


                break;
            case 18 :
                // SimpleCv4.g:1:129: T__119
                this.mT__119(); 


                break;
            case 19 :
                // SimpleCv4.g:1:136: T__120
                this.mT__120(); 


                break;
            case 20 :
                // SimpleCv4.g:1:143: T__121
                this.mT__121(); 


                break;
            case 21 :
                // SimpleCv4.g:1:150: T__122
                this.mT__122(); 


                break;
            case 22 :
                // SimpleCv4.g:1:157: T__123
                this.mT__123(); 


                break;
            case 23 :
                // SimpleCv4.g:1:164: T__124
                this.mT__124(); 


                break;
            case 24 :
                // SimpleCv4.g:1:171: T__125
                this.mT__125(); 


                break;
            case 25 :
                // SimpleCv4.g:1:178: T__126
                this.mT__126(); 


                break;
            case 26 :
                // SimpleCv4.g:1:185: T__127
                this.mT__127(); 


                break;
            case 27 :
                // SimpleCv4.g:1:192: T__128
                this.mT__128(); 


                break;
            case 28 :
                // SimpleCv4.g:1:199: T__129
                this.mT__129(); 


                break;
            case 29 :
                // SimpleCv4.g:1:206: T__130
                this.mT__130(); 


                break;
            case 30 :
                // SimpleCv4.g:1:213: T__131
                this.mT__131(); 


                break;
            case 31 :
                // SimpleCv4.g:1:220: T__132
                this.mT__132(); 


                break;
            case 32 :
                // SimpleCv4.g:1:227: T__133
                this.mT__133(); 


                break;
            case 33 :
                // SimpleCv4.g:1:234: T__134
                this.mT__134(); 


                break;
            case 34 :
                // SimpleCv4.g:1:241: T__135
                this.mT__135(); 


                break;
            case 35 :
                // SimpleCv4.g:1:248: T__136
                this.mT__136(); 


                break;
            case 36 :
                // SimpleCv4.g:1:255: T__137
                this.mT__137(); 


                break;
            case 37 :
                // SimpleCv4.g:1:262: T__138
                this.mT__138(); 


                break;
            case 38 :
                // SimpleCv4.g:1:269: T__139
                this.mT__139(); 


                break;
            case 39 :
                // SimpleCv4.g:1:276: T__140
                this.mT__140(); 


                break;
            case 40 :
                // SimpleCv4.g:1:283: T__141
                this.mT__141(); 


                break;
            case 41 :
                // SimpleCv4.g:1:290: T__142
                this.mT__142(); 


                break;
            case 42 :
                // SimpleCv4.g:1:297: T__143
                this.mT__143(); 


                break;
            case 43 :
                // SimpleCv4.g:1:304: T__144
                this.mT__144(); 


                break;
            case 44 :
                // SimpleCv4.g:1:311: T__145
                this.mT__145(); 


                break;
            case 45 :
                // SimpleCv4.g:1:318: T__146
                this.mT__146(); 


                break;
            case 46 :
                // SimpleCv4.g:1:325: T__147
                this.mT__147(); 


                break;
            case 47 :
                // SimpleCv4.g:1:332: T__148
                this.mT__148(); 


                break;
            case 48 :
                // SimpleCv4.g:1:339: T__149
                this.mT__149(); 


                break;
            case 49 :
                // SimpleCv4.g:1:346: T__150
                this.mT__150(); 


                break;
            case 50 :
                // SimpleCv4.g:1:353: T__151
                this.mT__151(); 


                break;
            case 51 :
                // SimpleCv4.g:1:360: T__152
                this.mT__152(); 


                break;
            case 52 :
                // SimpleCv4.g:1:367: T__153
                this.mT__153(); 


                break;
            case 53 :
                // SimpleCv4.g:1:374: T__154
                this.mT__154(); 


                break;
            case 54 :
                // SimpleCv4.g:1:381: T__155
                this.mT__155(); 


                break;
            case 55 :
                // SimpleCv4.g:1:388: T__156
                this.mT__156(); 


                break;
            case 56 :
                // SimpleCv4.g:1:395: T__157
                this.mT__157(); 


                break;
            case 57 :
                // SimpleCv4.g:1:402: T__158
                this.mT__158(); 


                break;
            case 58 :
                // SimpleCv4.g:1:409: T__159
                this.mT__159(); 


                break;
            case 59 :
                // SimpleCv4.g:1:416: T__160
                this.mT__160(); 


                break;
            case 60 :
                // SimpleCv4.g:1:423: T__161
                this.mT__161(); 


                break;
            case 61 :
                // SimpleCv4.g:1:430: T__162
                this.mT__162(); 


                break;
            case 62 :
                // SimpleCv4.g:1:437: ID
                this.mID(); 


                break;
            case 63 :
                // SimpleCv4.g:1:440: INT
                this.mINT(); 


                break;
            case 64 :
                // SimpleCv4.g:1:444: FLOAT
                this.mFLOAT(); 


                break;
            case 65 :
                // SimpleCv4.g:1:450: WS
                this.mWS(); 


                break;
            case 66 :
                // SimpleCv4.g:1:453: CHINESECHAR
                this.mCHINESECHAR(); 


                break;
            case 67 :
                // SimpleCv4.g:1:465: MULTILINE_COMMENT
                this.mMULTILINE_COMMENT(); 


                break;
            case 68 :
                // SimpleCv4.g:1:483: SINGLELINE_COMMENT
                this.mSINGLELINE_COMMENT(); 


                break;
            case 69 :
                // SimpleCv4.g:1:502: STRING
                this.mSTRING(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(SimpleCv4Lexer, {
    DFA10_eotS:
        "\u0005\uffff",
    DFA10_eofS:
        "\u0005\uffff",
    DFA10_minS:
        "\u0002\u002e\u0003\uffff",
    DFA10_maxS:
        "\u0001\u0039\u0001\u0065\u0003\uffff",
    DFA10_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\u0003",
    DFA10_specialS:
        "\u0005\uffff}>",
    DFA10_transitionS: [
            "\u0001\u0002\u0001\uffff\u000a\u0001",
            "\u0001\u0003\u0001\uffff\u000a\u0001\u000b\uffff\u0001\u0004"+
            "\u001f\uffff\u0001\u0004",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(SimpleCv4Lexer, {
    DFA10_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Lexer.DFA10_eotS),
    DFA10_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Lexer.DFA10_eofS),
    DFA10_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Lexer.DFA10_minS),
    DFA10_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Lexer.DFA10_maxS),
    DFA10_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Lexer.DFA10_acceptS),
    DFA10_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Lexer.DFA10_specialS),
    DFA10_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv4Lexer.DFA10_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Lexer.DFA10_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv4Lexer.DFA10 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 10;
    this.eot = SimpleCv4Lexer.DFA10_eot;
    this.eof = SimpleCv4Lexer.DFA10_eof;
    this.min = SimpleCv4Lexer.DFA10_min;
    this.max = SimpleCv4Lexer.DFA10_max;
    this.accept = SimpleCv4Lexer.DFA10_accept;
    this.special = SimpleCv4Lexer.DFA10_special;
    this.transition = SimpleCv4Lexer.DFA10_transition;
};

org.antlr.lang.extend(SimpleCv4Lexer.DFA10, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "434:1: FLOAT : ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(SimpleCv4Lexer, {
    DFA20_eotS:
        "\u0003\uffff\u0001\u0024\u0001\u002d\u0001\u0030\u0001\u0031\u0001"+
    "\uffff\u0001\u0034\u0008\u0024\u0004\uffff\u0004\u0024\u0001\u0046\u0001"+
    "\u0049\u0001\u004d\u0001\u0052\u0001\u0055\u0002\uffff\u0001\u0059\u0004"+
    "\uffff\u0001\u004e\u0003\uffff\u0001\u0024\u0001\u005c\u0001\u005e\u0002"+
    "\uffff\u0001\u0060\u0006\uffff\u0009\u0024\u0001\u006c\u0006\u0024\u0015"+
    "\uffff\u0001\u0024\u0001\u0074\u0005\uffff\u0009\u0024\u0001\u007e\u0001"+
    "\u0024\u0001\uffff\u0007\u0024\u0001\uffff\u0001\u0087\u0001\u0088\u0005"+
    "\u0024\u0001\u008e\u0001\u0024\u0001\uffff\u0004\u0024\u0001\u0094\u0003"+
    "\u0024\u0002\uffff\u0001\u0024\u0001\u0099\u0003\u0024\u0001\uffff\u0001"+
    "\u009d\u0003\u0024\u0001\u00a1\u0001\uffff\u0001\u00a2\u0003\u0024\u0001"+
    "\uffff\u0001\u00a6\u0001\u00a7\u0001\u00a8\u0001\uffff\u0001\u00a9\u0002"+
    "\u0024\u0002\uffff\u0001\u00ac\u0001\u00ad\u0001\u0024\u0004\uffff\u0001"+
    "\u0024\u0001\u00b0\u0002\uffff\u0001\u00b1\u0001\u00b2\u0003\uffff",
    DFA20_eofS:
        "\u00b3\uffff",
    DFA20_minS:
        "\u0001\u0009\u0002\uffff\u0001\u0066\u0001\u003c\u0001\u003d\u0001"+
    "\u0030\u0001\uffff\u0001\u003d\u0001\u006f\u0002\u0068\u0001\u006f\u0001"+
    "\u006c\u0001\u006f\u0001\u006e\u0001\u0079\u0004\uffff\u0001\u0068\u0001"+
    "\u006c\u0001\u0072\u0001\u0065\u0001\u003d\u0001\u002b\u0001\u002d\u0001"+
    "\u002a\u0001\u0026\u0001\u003d\u0001\uffff\u0001\u003d\u0004\uffff\u0001"+
    "\u002e\u0003\uffff\u0001\u0063\u0001\u0030\u0001\u003d\u0002\uffff\u0001"+
    "\u003d\u0006\uffff\u0001\u0069\u0001\u0061\u0001\u006e\u0001\u006f\u0001"+
    "\u0067\u0001\u0072\u0001\u006e\u0001\u006f\u0001\u0072\u0001\u0030\u0001"+
    "\u0073\u0001\u0070\u0001\u0069\u0001\u0073\u0001\u0065\u0001\u0074\u0015"+
    "\uffff\u0001\u006c\u0001\u0030\u0005\uffff\u0001\u0064\u0001\u0072\u0001"+
    "\u0074\u0001\u0072\u0001\u006e\u0001\u0065\u0001\u0075\u0001\u0067\u0001"+
    "\u0061\u0001\u0030\u0001\u0062\u0001\uffff\u0001\u0069\u0001\u0065\u0001"+
    "\u006c\u0001\u0065\u0001\u0061\u0002\u0075\u0001\uffff\u0002\u0030\u0001"+
    "\u0069\u0001\u0074\u0001\u0065\u0001\u006f\u0001\u0063\u0001\u0030\u0001"+
    "\u0074\u0001\uffff\u0001\u006c\u0001\u0067\u0001\u0064\u0001\u0065\u0001"+
    "\u0030\u0001\u006b\u0001\u0072\u0001\u0064\u0002\uffff\u0001\u006e\u0001"+
    "\u0030\u0001\u0064\u0001\u0066\u0001\u0074\u0001\uffff\u0001\u0030\u0001"+
    "\u0065\u0001\u006e\u0001\u0065\u0001\u0030\u0001\uffff\u0001\u0030\u0001"+
    "\u006e\u0001\u0065\u0001\u0075\u0001\uffff\u0003\u0030\u0001\uffff\u0001"+
    "\u0030\u0001\u0065\u0001\u0066\u0002\uffff\u0002\u0030\u0001\u0065\u0004"+
    "\uffff\u0001\u0064\u0001\u0030\u0002\uffff\u0002\u0030\u0003\uffff",
    DFA20_maxS:
        "\u0001\ufa2d\u0002\uffff\u0001\u006e\u0001\u003d\u0001\u003e\u0001"+
    "\u0039\u0001\uffff\u0001\u003d\u0002\u006f\u0001\u0074\u0003\u006f\u0001"+
    "\u006e\u0001\u0079\u0004\uffff\u0001\u0068\u0001\u006c\u0001\u0072\u0001"+
    "\u0065\u0002\u003d\u0001\u003e\u0002\u003d\u0001\u007c\u0001\uffff\u0001"+
    "\u003d\u0004\uffff\u0001\u0065\u0003\uffff\u0001\u0074\u0001\u007a\u0001"+
    "\u003d\u0002\uffff\u0001\u003d\u0006\uffff\u0001\u0069\u0001\u0061\u0001"+
    "\u006e\u0001\u006f\u0001\u007a\u0001\u0072\u0001\u006e\u0001\u006f\u0001"+
    "\u0072\u0001\u007a\u0001\u0073\u0001\u0070\u0001\u0069\u0001\u0073\u0001"+
    "\u0065\u0001\u0074\u0015\uffff\u0001\u006c\u0001\u007a\u0005\uffff\u0001"+
    "\u0064\u0001\u0072\u0001\u0074\u0001\u0072\u0001\u006e\u0001\u0065\u0001"+
    "\u0075\u0001\u0067\u0001\u0061\u0001\u007a\u0001\u0062\u0001\uffff\u0001"+
    "\u0069\u0001\u0065\u0001\u006c\u0001\u0065\u0001\u0061\u0002\u0075\u0001"+
    "\uffff\u0002\u007a\u0001\u0069\u0001\u0074\u0001\u0065\u0001\u006f\u0001"+
    "\u0063\u0001\u007a\u0001\u0074\u0001\uffff\u0001\u006c\u0001\u0067\u0001"+
    "\u0064\u0001\u0065\u0001\u007a\u0001\u006b\u0001\u0072\u0001\u0064\u0002"+
    "\uffff\u0001\u006e\u0001\u007a\u0001\u0064\u0001\u0066\u0001\u0074\u0001"+
    "\uffff\u0001\u007a\u0001\u0065\u0001\u006e\u0001\u0065\u0001\u007a\u0001"+
    "\uffff\u0001\u007a\u0001\u006e\u0001\u0065\u0001\u0075\u0001\uffff\u0003"+
    "\u007a\u0001\uffff\u0001\u007a\u0001\u0065\u0001\u0066\u0002\uffff\u0002"+
    "\u007a\u0001\u0065\u0004\uffff\u0001\u0064\u0001\u007a\u0002\uffff\u0002"+
    "\u007a\u0003\uffff",
    DFA20_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0004\uffff\u0001\u0007\u0009"+
    "\uffff\u0001\u0014\u0001\u0015\u0001\u0016\u0001\u0017\u000a\uffff\u0001"+
    "\u0029\u0001\uffff\u0001\u0030\u0001\u0031\u0001\u003d\u0001\u003e\u0001"+
    "\uffff\u0001\u0041\u0001\u0042\u0001\u0045\u0003\uffff\u0001\u0036\u0001"+
    "\u0004\u0001\uffff\u0001\u0037\u0001\u0005\u0001\u0006\u0001\u0040\u0001"+
    "\u0023\u0001\u0008\u0010\uffff\u0001\u0034\u0001\u0020\u0001\u0021\u0001"+
    "\u002a\u0001\u003a\u0001\u0022\u0001\u002b\u0001\u002f\u0001\u003b\u0001"+
    "\u003f\u0001\u0024\u0001\u0043\u0001\u0044\u0001\u003c\u0001\u0027\u0001"+
    "\u0033\u0001\u002e\u0001\u0028\u0001\u0032\u0001\u0035\u0001\u002d\u0002"+
    "\uffff\u0001\u001b\u0001\u0025\u0001\u0038\u0001\u0026\u0001\u0039\u000b"+
    "\uffff\u0001\u001a\u0007\uffff\u0001\u000c\u0009\uffff\u0001\u0018\u0008"+
    "\uffff\u0001\u0009\u0001\u000a\u0005\uffff\u0001\u000d\u0005\uffff\u0001"+
    "\u001c\u0004\uffff\u0001\u000b\u0003\uffff\u0001\u000e\u0003\uffff\u0001"+
    "\u0019\u0001\u001e\u0003\uffff\u0001\u0010\u0001\u002c\u0001\u0013\u0001"+
    "\u000f\u0002\uffff\u0001\u001f\u0001\u0003\u0002\uffff\u0001\u0012\u0001"+
    "\u001d\u0001\u0011",
    DFA20_specialS:
        "\u00b3\uffff}>",
    DFA20_transitionS: [
            "\u0002\u0026\u0002\uffff\u0001\u0026\u0012\uffff\u0001\u0026"+
            "\u0001\u0020\u0001\u0028\u0001\u0002\u0001\uffff\u0001\u0023"+
            "\u0001\u001d\u0001\uffff\u0001\u0013\u0001\u0014\u0001\u0008"+
            "\u0001\u001a\u0001\u0007\u0001\u001b\u0001\u0006\u0001\u001c"+
            "\u000a\u0025\u0001\uffff\u0001\u0001\u0001\u0004\u0001\u0019"+
            "\u0001\u0005\u0002\uffff\u001a\u0024\u0001\u0021\u0001\uffff"+
            "\u0001\u0022\u0001\u001f\u0001\u0024\u0001\uffff\u0001\u0024"+
            "\u0001\u0017\u0001\u000a\u0001\u000e\u0001\u0016\u0001\u000d"+
            "\u0002\u0024\u0001\u0003\u0002\u0024\u0001\u000c\u0005\u0024"+
            "\u0001\u0018\u0001\u000b\u0001\u0010\u0001\u000f\u0001\u0009"+
            "\u0001\u0015\u0003\u0024\u0001\u0011\u0001\u001e\u0001\u0012"+
            "\u4d82\uffff\u51a6\u0027\u595a\uffff\u012e\u0027",
            "",
            "",
            "\u0001\u002a\u0007\uffff\u0001\u0029",
            "\u0001\u002b\u0001\u002c",
            "\u0001\u002f\u0001\u002e",
            "\u000a\u0032",
            "",
            "\u0001\u0033",
            "\u0001\u0035",
            "\u0001\u0036\u0006\uffff\u0001\u0037",
            "\u0001\u0038\u0001\u0039\u000a\uffff\u0001\u003a",
            "\u0001\u003b",
            "\u0001\u003c\u0002\uffff\u0001\u003d",
            "\u0001\u003e",
            "\u0001\u003f",
            "\u0001\u0040",
            "",
            "",
            "",
            "",
            "\u0001\u0041",
            "\u0001\u0042",
            "\u0001\u0043",
            "\u0001\u0044",
            "\u0001\u0045",
            "\u0001\u0048\u0011\uffff\u0001\u0047",
            "\u0001\u004b\u0002\uffff\u000a\u004e\u0003\uffff\u0001\u004a"+
            "\u0001\u004c",
            "\u0001\u0050\u0004\uffff\u0001\u0051\u000d\uffff\u0001\u004f",
            "\u0001\u0054\u0016\uffff\u0001\u0053",
            "\u0001\u0056\u003e\uffff\u0001\u0057",
            "",
            "\u0001\u0058",
            "",
            "",
            "",
            "",
            "\u0001\u0032\u0001\uffff\u000a\u0025\u000b\uffff\u0001\u0032"+
            "\u001f\uffff\u0001\u0032",
            "",
            "",
            "",
            "\u0001\u005a\u0010\uffff\u0001\u005b",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u005d",
            "",
            "",
            "\u0001\u005f",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0061",
            "\u0001\u0062",
            "\u0001\u0063",
            "\u0001\u0064",
            "\u0001\u0065\u0012\uffff\u0001\u0066",
            "\u0001\u0067",
            "\u0001\u0068",
            "\u0001\u0069",
            "\u0001\u006a",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u0014\u0024\u0001\u006b\u0005\u0024",
            "\u0001\u006d",
            "\u0001\u006e",
            "\u0001\u006f",
            "\u0001\u0070",
            "\u0001\u0071",
            "\u0001\u0072",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0073",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0075",
            "\u0001\u0076",
            "\u0001\u0077",
            "\u0001\u0078",
            "\u0001\u0079",
            "\u0001\u007a",
            "\u0001\u007b",
            "\u0001\u007c",
            "\u0001\u007d",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u007f",
            "",
            "\u0001\u0080",
            "\u0001\u0081",
            "\u0001\u0082",
            "\u0001\u0083",
            "\u0001\u0084",
            "\u0001\u0085",
            "\u0001\u0086",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u0089",
            "\u0001\u008a",
            "\u0001\u008b",
            "\u0001\u008c",
            "\u0001\u008d",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u008f",
            "",
            "\u0001\u0090",
            "\u0001\u0091",
            "\u0001\u0092",
            "\u0001\u0093",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u0095",
            "\u0001\u0096",
            "\u0001\u0097",
            "",
            "",
            "\u0001\u0098",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u009a",
            "\u0001\u009b",
            "\u0001\u009c",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u009e",
            "\u0001\u009f",
            "\u0001\u00a0",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00a3",
            "\u0001\u00a4",
            "\u0001\u00a5",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00aa",
            "\u0001\u00ab",
            "",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u0001\u00ae",
            "",
            "",
            "",
            "",
            "\u0001\u00af",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "\u000a\u0024\u0007\uffff\u001a\u0024\u0004\uffff\u0001\u0024"+
            "\u0001\uffff\u001a\u0024",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(SimpleCv4Lexer, {
    DFA20_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Lexer.DFA20_eotS),
    DFA20_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Lexer.DFA20_eofS),
    DFA20_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Lexer.DFA20_minS),
    DFA20_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Lexer.DFA20_maxS),
    DFA20_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Lexer.DFA20_acceptS),
    DFA20_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Lexer.DFA20_specialS),
    DFA20_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv4Lexer.DFA20_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Lexer.DFA20_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv4Lexer.DFA20 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 20;
    this.eot = SimpleCv4Lexer.DFA20_eot;
    this.eof = SimpleCv4Lexer.DFA20_eof;
    this.min = SimpleCv4Lexer.DFA20_min;
    this.max = SimpleCv4Lexer.DFA20_max;
    this.accept = SimpleCv4Lexer.DFA20_accept;
    this.special = SimpleCv4Lexer.DFA20_special;
    this.transition = SimpleCv4Lexer.DFA20_transition;
};

org.antlr.lang.extend(SimpleCv4Lexer.DFA20, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( T__102 | T__103 | T__104 | T__105 | T__106 | T__107 | T__108 | T__109 | T__110 | T__111 | T__112 | T__113 | T__114 | T__115 | T__116 | T__117 | T__118 | T__119 | T__120 | T__121 | T__122 | T__123 | T__124 | T__125 | T__126 | T__127 | T__128 | T__129 | T__130 | T__131 | T__132 | T__133 | T__134 | T__135 | T__136 | T__137 | T__138 | T__139 | T__140 | T__141 | T__142 | T__143 | T__144 | T__145 | T__146 | T__147 | T__148 | T__149 | T__150 | T__151 | T__152 | T__153 | T__154 | T__155 | T__156 | T__157 | T__158 | T__159 | T__160 | T__161 | T__162 | ID | INT | FLOAT | WS | CHINESECHAR | MULTILINE_COMMENT | SINGLELINE_COMMENT | STRING );";
    },
    dummy: null
});
 
})();

module.exports = SimpleCv4Lexer;