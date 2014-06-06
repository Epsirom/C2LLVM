// $ANTLR 3.3 Nov 30, 2010 12:50:56 SimpleCv3.g 2014-06-06 08:57:39

var SimpleCv3Lexer = function(input, state) {
// alternate constructor @todo
// public SimpleCv3Lexer(CharStream input)
// public SimpleCv3Lexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa10 = new SimpleCv3Lexer.DFA10(this);
    this.dfa20 = new SimpleCv3Lexer.DFA20(this);
    SimpleCv3Lexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(SimpleCv3Lexer, {
    EOF: -1,
    T__15: 15,
    T__16: 16,
    T__17: 17,
    T__18: 18,
    T__19: 19,
    T__20: 20,
    T__21: 21,
    T__22: 22,
    T__23: 23,
    T__24: 24,
    T__25: 25,
    T__26: 26,
    T__27: 27,
    T__28: 28,
    T__29: 29,
    T__30: 30,
    T__31: 31,
    T__32: 32,
    T__33: 33,
    T__34: 34,
    T__35: 35,
    T__36: 36,
    T__37: 37,
    T__38: 38,
    T__39: 39,
    T__40: 40,
    T__41: 41,
    T__42: 42,
    T__43: 43,
    T__44: 44,
    T__45: 45,
    T__46: 46,
    T__47: 47,
    T__48: 48,
    T__49: 49,
    T__50: 50,
    T__51: 51,
    T__52: 52,
    T__53: 53,
    T__54: 54,
    T__55: 55,
    T__56: 56,
    T__57: 57,
    T__58: 58,
    T__59: 59,
    T__60: 60,
    T__61: 61,
    T__62: 62,
    T__63: 63,
    T__64: 64,
    T__65: 65,
    T__66: 66,
    T__67: 67,
    T__68: 68,
    T__69: 69,
    T__70: 70,
    T__71: 71,
    T__72: 72,
    T__73: 73,
    T__74: 74,
    T__75: 75,
    T__76: 76,
    T__77: 77,
    ID: 4,
    INT: 5,
    STRING: 6,
    EXPONENT: 7,
    FLOAT: 8,
    WS: 9,
    CHINESECHAR: 10,
    MULTILINE_COMMENT: 11,
    SINGLELINE_COMMENT: 12,
    EscapeSequence: 13,
    OctalEscape: 14
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(SimpleCv3Lexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    T__15 : 15,
    T__16 : 16,
    T__17 : 17,
    T__18 : 18,
    T__19 : 19,
    T__20 : 20,
    T__21 : 21,
    T__22 : 22,
    T__23 : 23,
    T__24 : 24,
    T__25 : 25,
    T__26 : 26,
    T__27 : 27,
    T__28 : 28,
    T__29 : 29,
    T__30 : 30,
    T__31 : 31,
    T__32 : 32,
    T__33 : 33,
    T__34 : 34,
    T__35 : 35,
    T__36 : 36,
    T__37 : 37,
    T__38 : 38,
    T__39 : 39,
    T__40 : 40,
    T__41 : 41,
    T__42 : 42,
    T__43 : 43,
    T__44 : 44,
    T__45 : 45,
    T__46 : 46,
    T__47 : 47,
    T__48 : 48,
    T__49 : 49,
    T__50 : 50,
    T__51 : 51,
    T__52 : 52,
    T__53 : 53,
    T__54 : 54,
    T__55 : 55,
    T__56 : 56,
    T__57 : 57,
    T__58 : 58,
    T__59 : 59,
    T__60 : 60,
    T__61 : 61,
    T__62 : 62,
    T__63 : 63,
    T__64 : 64,
    T__65 : 65,
    T__66 : 66,
    T__67 : 67,
    T__68 : 68,
    T__69 : 69,
    T__70 : 70,
    T__71 : 71,
    T__72 : 72,
    T__73 : 73,
    T__74 : 74,
    T__75 : 75,
    T__76 : 76,
    T__77 : 77,
    ID : 4,
    INT : 5,
    STRING : 6,
    EXPONENT : 7,
    FLOAT : 8,
    WS : 9,
    CHINESECHAR : 10,
    MULTILINE_COMMENT : 11,
    SINGLELINE_COMMENT : 12,
    EscapeSequence : 13,
    OctalEscape : 14,
    getGrammarFileName: function() { return "SimpleCv3.g"; }
});
org.antlr.lang.augmentObject(SimpleCv3Lexer.prototype, {
    // $ANTLR start T__15
    mT__15: function()  {
        try {
            var _type = this.T__15;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:7:7: ( ';' )
            // SimpleCv3.g:7:9: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__15",

    // $ANTLR start T__16
    mT__16: function()  {
        try {
            var _type = this.T__16;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:8:7: ( '#' )
            // SimpleCv3.g:8:9: '#'
            this.match('#'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__16",

    // $ANTLR start T__17
    mT__17: function()  {
        try {
            var _type = this.T__17;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:9:7: ( 'include' )
            // SimpleCv3.g:9:9: 'include'
            this.match("include"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__17",

    // $ANTLR start T__18
    mT__18: function()  {
        try {
            var _type = this.T__18;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:10:7: ( '<' )
            // SimpleCv3.g:10:9: '<'
            this.match('<'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__18",

    // $ANTLR start T__19
    mT__19: function()  {
        try {
            var _type = this.T__19;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:11:7: ( '>' )
            // SimpleCv3.g:11:9: '>'
            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__19",

    // $ANTLR start T__20
    mT__20: function()  {
        try {
            var _type = this.T__20;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:12:7: ( '.' )
            // SimpleCv3.g:12:9: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__20",

    // $ANTLR start T__21
    mT__21: function()  {
        try {
            var _type = this.T__21;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:13:7: ( ',' )
            // SimpleCv3.g:13:9: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__21",

    // $ANTLR start T__22
    mT__22: function()  {
        try {
            var _type = this.T__22;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:14:7: ( '*' )
            // SimpleCv3.g:14:9: '*'
            this.match('*'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__22",

    // $ANTLR start T__23
    mT__23: function()  {
        try {
            var _type = this.T__23;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:15:7: ( 'void' )
            // SimpleCv3.g:15:9: 'void'
            this.match("void"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__23",

    // $ANTLR start T__24
    mT__24: function()  {
        try {
            var _type = this.T__24;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:16:7: ( 'char' )
            // SimpleCv3.g:16:9: 'char'
            this.match("char"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__24",

    // $ANTLR start T__25
    mT__25: function()  {
        try {
            var _type = this.T__25;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:17:7: ( 'short' )
            // SimpleCv3.g:17:9: 'short'
            this.match("short"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__25",

    // $ANTLR start T__26
    mT__26: function()  {
        try {
            var _type = this.T__26;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:18:7: ( 'int' )
            // SimpleCv3.g:18:9: 'int'
            this.match("int"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__26",

    // $ANTLR start T__27
    mT__27: function()  {
        try {
            var _type = this.T__27;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:19:7: ( 'long' )
            // SimpleCv3.g:19:9: 'long'
            this.match("long"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__27",

    // $ANTLR start T__28
    mT__28: function()  {
        try {
            var _type = this.T__28;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:20:7: ( 'float' )
            // SimpleCv3.g:20:9: 'float'
            this.match("float"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__28",

    // $ANTLR start T__29
    mT__29: function()  {
        try {
            var _type = this.T__29;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:21:7: ( 'double' )
            // SimpleCv3.g:21:9: 'double'
            this.match("double"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__29",

    // $ANTLR start T__30
    mT__30: function()  {
        try {
            var _type = this.T__30;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:22:7: ( 'signed' )
            // SimpleCv3.g:22:9: 'signed'
            this.match("signed"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__30",

    // $ANTLR start T__31
    mT__31: function()  {
        try {
            var _type = this.T__31;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:23:7: ( 'unsigned' )
            // SimpleCv3.g:23:9: 'unsigned'
            this.match("unsigned"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__31",

    // $ANTLR start T__32
    mT__32: function()  {
        try {
            var _type = this.T__32;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:24:7: ( 'typedef' )
            // SimpleCv3.g:24:9: 'typedef'
            this.match("typedef"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__32",

    // $ANTLR start T__33
    mT__33: function()  {
        try {
            var _type = this.T__33;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:25:7: ( 'struct' )
            // SimpleCv3.g:25:9: 'struct'
            this.match("struct"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__33",

    // $ANTLR start T__34
    mT__34: function()  {
        try {
            var _type = this.T__34;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:26:7: ( '{' )
            // SimpleCv3.g:26:9: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__34",

    // $ANTLR start T__35
    mT__35: function()  {
        try {
            var _type = this.T__35;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:27:7: ( '}' )
            // SimpleCv3.g:27:9: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__35",

    // $ANTLR start T__36
    mT__36: function()  {
        try {
            var _type = this.T__36;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:28:7: ( '(' )
            // SimpleCv3.g:28:9: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__36",

    // $ANTLR start T__37
    mT__37: function()  {
        try {
            var _type = this.T__37;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:29:7: ( ')' )
            // SimpleCv3.g:29:9: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__37",

    // $ANTLR start T__38
    mT__38: function()  {
        try {
            var _type = this.T__38;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:30:7: ( 'for' )
            // SimpleCv3.g:30:9: 'for'
            this.match("for"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__38",

    // $ANTLR start T__39
    mT__39: function()  {
        try {
            var _type = this.T__39;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:31:7: ( 'while' )
            // SimpleCv3.g:31:9: 'while'
            this.match("while"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__39",

    // $ANTLR start T__40
    mT__40: function()  {
        try {
            var _type = this.T__40;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:32:7: ( 'do' )
            // SimpleCv3.g:32:9: 'do'
            this.match("do"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__40",

    // $ANTLR start T__41
    mT__41: function()  {
        try {
            var _type = this.T__41;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:33:7: ( 'if' )
            // SimpleCv3.g:33:9: 'if'
            this.match("if"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__41",

    // $ANTLR start T__42
    mT__42: function()  {
        try {
            var _type = this.T__42;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:34:7: ( 'else' )
            // SimpleCv3.g:34:9: 'else'
            this.match("else"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__42",

    // $ANTLR start T__43
    mT__43: function()  {
        try {
            var _type = this.T__43;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:35:7: ( 'continue' )
            // SimpleCv3.g:35:9: 'continue'
            this.match("continue"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__43",

    // $ANTLR start T__44
    mT__44: function()  {
        try {
            var _type = this.T__44;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:36:7: ( 'break' )
            // SimpleCv3.g:36:9: 'break'
            this.match("break"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__44",

    // $ANTLR start T__45
    mT__45: function()  {
        try {
            var _type = this.T__45;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:37:7: ( 'return' )
            // SimpleCv3.g:37:9: 'return'
            this.match("return"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__45",

    // $ANTLR start T__46
    mT__46: function()  {
        try {
            var _type = this.T__46;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:38:7: ( '=' )
            // SimpleCv3.g:38:9: '='
            this.match('='); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__46",

    // $ANTLR start T__47
    mT__47: function()  {
        try {
            var _type = this.T__47;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:39:7: ( '+=' )
            // SimpleCv3.g:39:9: '+='
            this.match("+="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__47",

    // $ANTLR start T__48
    mT__48: function()  {
        try {
            var _type = this.T__48;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:40:7: ( '-=' )
            // SimpleCv3.g:40:9: '-='
            this.match("-="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__48",

    // $ANTLR start T__49
    mT__49: function()  {
        try {
            var _type = this.T__49;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:41:7: ( '*=' )
            // SimpleCv3.g:41:9: '*='
            this.match("*="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__49",

    // $ANTLR start T__50
    mT__50: function()  {
        try {
            var _type = this.T__50;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:42:7: ( '/=' )
            // SimpleCv3.g:42:9: '/='
            this.match("/="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__50",

    // $ANTLR start T__51
    mT__51: function()  {
        try {
            var _type = this.T__51;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:43:7: ( '<<=' )
            // SimpleCv3.g:43:9: '<<='
            this.match("<<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__51",

    // $ANTLR start T__52
    mT__52: function()  {
        try {
            var _type = this.T__52;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:44:7: ( '>>=' )
            // SimpleCv3.g:44:9: '>>='
            this.match(">>="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__52",

    // $ANTLR start T__53
    mT__53: function()  {
        try {
            var _type = this.T__53;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:45:7: ( '&=' )
            // SimpleCv3.g:45:9: '&='
            this.match("&="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__53",

    // $ANTLR start T__54
    mT__54: function()  {
        try {
            var _type = this.T__54;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:46:7: ( '|=' )
            // SimpleCv3.g:46:9: '|='
            this.match("|="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__54",

    // $ANTLR start T__55
    mT__55: function()  {
        try {
            var _type = this.T__55;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:47:7: ( '^=' )
            // SimpleCv3.g:47:9: '^='
            this.match("^="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__55",

    // $ANTLR start T__56
    mT__56: function()  {
        try {
            var _type = this.T__56;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:48:7: ( '++' )
            // SimpleCv3.g:48:9: '++'
            this.match("++"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__56",

    // $ANTLR start T__57
    mT__57: function()  {
        try {
            var _type = this.T__57;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:49:7: ( '--' )
            // SimpleCv3.g:49:9: '--'
            this.match("--"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__57",

    // $ANTLR start T__58
    mT__58: function()  {
        try {
            var _type = this.T__58;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:50:7: ( 'sizeof' )
            // SimpleCv3.g:50:9: 'sizeof'
            this.match("sizeof"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__58",

    // $ANTLR start T__59
    mT__59: function()  {
        try {
            var _type = this.T__59;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:51:7: ( '!' )
            // SimpleCv3.g:51:9: '!'
            this.match('!'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__59",

    // $ANTLR start T__60
    mT__60: function()  {
        try {
            var _type = this.T__60;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:52:7: ( '&' )
            // SimpleCv3.g:52:9: '&'
            this.match('&'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__60",

    // $ANTLR start T__61
    mT__61: function()  {
        try {
            var _type = this.T__61;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:53:7: ( '->' )
            // SimpleCv3.g:53:9: '->'
            this.match("->"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__61",

    // $ANTLR start T__62
    mT__62: function()  {
        try {
            var _type = this.T__62;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:54:7: ( '[' )
            // SimpleCv3.g:54:9: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__62",

    // $ANTLR start T__63
    mT__63: function()  {
        try {
            var _type = this.T__63;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:55:7: ( ']' )
            // SimpleCv3.g:55:9: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__63",

    // $ANTLR start T__64
    mT__64: function()  {
        try {
            var _type = this.T__64;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:56:7: ( '?' )
            // SimpleCv3.g:56:9: '?'
            this.match('?'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__64",

    // $ANTLR start T__65
    mT__65: function()  {
        try {
            var _type = this.T__65;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:57:7: ( ':' )
            // SimpleCv3.g:57:9: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__65",

    // $ANTLR start T__66
    mT__66: function()  {
        try {
            var _type = this.T__66;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:58:7: ( '||' )
            // SimpleCv3.g:58:9: '||'
            this.match("||"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__66",

    // $ANTLR start T__67
    mT__67: function()  {
        try {
            var _type = this.T__67;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:59:7: ( '&&' )
            // SimpleCv3.g:59:9: '&&'
            this.match("&&"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__67",

    // $ANTLR start T__68
    mT__68: function()  {
        try {
            var _type = this.T__68;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:60:7: ( '==' )
            // SimpleCv3.g:60:9: '=='
            this.match("=="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__68",

    // $ANTLR start T__69
    mT__69: function()  {
        try {
            var _type = this.T__69;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:61:7: ( '!=' )
            // SimpleCv3.g:61:9: '!='
            this.match("!="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__69",

    // $ANTLR start T__70
    mT__70: function()  {
        try {
            var _type = this.T__70;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:62:7: ( '<=' )
            // SimpleCv3.g:62:9: '<='
            this.match("<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__70",

    // $ANTLR start T__71
    mT__71: function()  {
        try {
            var _type = this.T__71;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:63:7: ( '>=' )
            // SimpleCv3.g:63:9: '>='
            this.match(">="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__71",

    // $ANTLR start T__72
    mT__72: function()  {
        try {
            var _type = this.T__72;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:64:7: ( '<<' )
            // SimpleCv3.g:64:9: '<<'
            this.match("<<"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__72",

    // $ANTLR start T__73
    mT__73: function()  {
        try {
            var _type = this.T__73;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:65:7: ( '>>' )
            // SimpleCv3.g:65:9: '>>'
            this.match(">>"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__73",

    // $ANTLR start T__74
    mT__74: function()  {
        try {
            var _type = this.T__74;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:66:7: ( '+' )
            // SimpleCv3.g:66:9: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__74",

    // $ANTLR start T__75
    mT__75: function()  {
        try {
            var _type = this.T__75;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:67:7: ( '-' )
            // SimpleCv3.g:67:9: '-'
            this.match('-'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__75",

    // $ANTLR start T__76
    mT__76: function()  {
        try {
            var _type = this.T__76;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:68:7: ( '/' )
            // SimpleCv3.g:68:9: '/'
            this.match('/'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__76",

    // $ANTLR start T__77
    mT__77: function()  {
        try {
            var _type = this.T__77;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:69:7: ( '%' )
            // SimpleCv3.g:69:9: '%'
            this.match('%'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__77",

    // $ANTLR start ID
    mID: function()  {
        try {
            var _type = this.ID;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleCv3.g:224:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )* )
            // SimpleCv3.g:224:9: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // SimpleCv3.g:224:33: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>='0' && LA1_0<='9')||(LA1_0>='A' && LA1_0<='Z')||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // SimpleCv3.g:
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
            // SimpleCv3.g:227:5: ( ( '-' )? ( '0' .. '9' )+ )
            // SimpleCv3.g:227:9: ( '-' )? ( '0' .. '9' )+
            // SimpleCv3.g:227:9: ( '-' )?
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0=='-') ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // SimpleCv3.g:227:10: '-'
                    this.match('-'); 


                    break;

            }

            // SimpleCv3.g:227:15: ( '0' .. '9' )+
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
                    // SimpleCv3.g:227:16: '0' .. '9'
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
            // SimpleCv3.g:231:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
            var alt10=3;
            alt10 = this.dfa10.predict(this.input);
            switch (alt10) {
                case 1 :
                    // SimpleCv3.g:231:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
                    // SimpleCv3.g:231:9: ( '0' .. '9' )+
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
                            // SimpleCv3.g:231:10: '0' .. '9'
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
                    // SimpleCv3.g:231:25: ( '0' .. '9' )*
                    loop5:
                    do {
                        var alt5=2;
                        var LA5_0 = this.input.LA(1);

                        if ( ((LA5_0>='0' && LA5_0<='9')) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                        case 1 :
                            // SimpleCv3.g:231:26: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop5;
                        }
                    } while (true);

                    // SimpleCv3.g:231:37: ( EXPONENT )?
                    var alt6=2;
                    var LA6_0 = this.input.LA(1);

                    if ( (LA6_0=='E'||LA6_0=='e') ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // SimpleCv3.g:231:37: EXPONENT
                            this.mEXPONENT(); 


                            break;

                    }



                    break;
                case 2 :
                    // SimpleCv3.g:232:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
                    this.match('.'); 
                    // SimpleCv3.g:232:13: ( '0' .. '9' )+
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
                            // SimpleCv3.g:232:14: '0' .. '9'
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

                    // SimpleCv3.g:232:25: ( EXPONENT )?
                    var alt8=2;
                    var LA8_0 = this.input.LA(1);

                    if ( (LA8_0=='E'||LA8_0=='e') ) {
                        alt8=1;
                    }
                    switch (alt8) {
                        case 1 :
                            // SimpleCv3.g:232:25: EXPONENT
                            this.mEXPONENT(); 


                            break;

                    }



                    break;
                case 3 :
                    // SimpleCv3.g:233:9: ( '0' .. '9' )+ EXPONENT
                    // SimpleCv3.g:233:9: ( '0' .. '9' )+
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
                            // SimpleCv3.g:233:10: '0' .. '9'
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
            // SimpleCv3.g:237:10: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            // SimpleCv3.g:237:12: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // SimpleCv3.g:237:22: ( '+' | '-' )?
            var alt11=2;
            var LA11_0 = this.input.LA(1);

            if ( (LA11_0=='+'||LA11_0=='-') ) {
                alt11=1;
            }
            switch (alt11) {
                case 1 :
                    // SimpleCv3.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // SimpleCv3.g:237:33: ( '0' .. '9' )+
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
                    // SimpleCv3.g:237:34: '0' .. '9'
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
            // SimpleCv3.g:239:5: ( ( ' ' | '\\t' | '\\r' | '\\n' )+ )
            // SimpleCv3.g:239:9: ( ' ' | '\\t' | '\\r' | '\\n' )+
            // SimpleCv3.g:239:9: ( ' ' | '\\t' | '\\r' | '\\n' )+
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
                    // SimpleCv3.g:
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
            // SimpleCv3.g:248:13: ( '\\u4E00' .. '\\u9FA5' | '\\uF900' .. '\\uFA2D' )
            // SimpleCv3.g:
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
            // SimpleCv3.g:252:19: ( '/*' ( . )* '*/' )
            // SimpleCv3.g:253:9: '/*' ( . )* '*/'
            this.match("/*"); 

            // SimpleCv3.g:253:14: ( . )*
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
                    // SimpleCv3.g:253:14: .
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
            // SimpleCv3.g:257:20: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' )
            // SimpleCv3.g:258:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
            this.match("//"); 

            // SimpleCv3.g:258:14: (~ ( '\\n' | '\\r' ) )*
            loop15:
            do {
                var alt15=2;
                var LA15_0 = this.input.LA(1);

                if ( ((LA15_0>='\u0000' && LA15_0<='\t')||(LA15_0>='\u000B' && LA15_0<='\f')||(LA15_0>='\u000E' && LA15_0<='\uFFFF')) ) {
                    alt15=1;
                }


                switch (alt15) {
                case 1 :
                    // SimpleCv3.g:258:14: ~ ( '\\n' | '\\r' )
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

            // SimpleCv3.g:258:32: ( '\\r' )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0=='\r') ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // SimpleCv3.g:258:32: '\\r'
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
            // SimpleCv3.g:264:5: ( '\"' ( EscapeSequence | ~ ( '\\\\' | '\"' ) )* '\"' )
            // SimpleCv3.g:264:8: '\"' ( EscapeSequence | ~ ( '\\\\' | '\"' ) )* '\"'
            this.match('\"'); 
            // SimpleCv3.g:264:12: ( EscapeSequence | ~ ( '\\\\' | '\"' ) )*
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
                    // SimpleCv3.g:264:14: EscapeSequence
                    this.mEscapeSequence(); 


                    break;
                case 2 :
                    // SimpleCv3.g:264:31: ~ ( '\\\\' | '\"' )
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



        }
        finally {
        }
    },
    // $ANTLR end "STRING",

    // $ANTLR start EscapeSequence
    mEscapeSequence: function()  {
        try {
            // SimpleCv3.g:269:5: ( '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' ) | OctalEscape )
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
                    // SimpleCv3.g:269:9: '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' )
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
                    // SimpleCv3.g:270:9: OctalEscape
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
            // SimpleCv3.g:275:5: ( '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) )
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
                    // SimpleCv3.g:275:9: '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // SimpleCv3.g:275:14: ( '0' .. '3' )
                    // SimpleCv3.g:275:15: '0' .. '3'
                    this.matchRange('0','3'); 



                    // SimpleCv3.g:275:25: ( '0' .. '7' )
                    // SimpleCv3.g:275:26: '0' .. '7'
                    this.matchRange('0','7'); 



                    // SimpleCv3.g:275:36: ( '0' .. '7' )
                    // SimpleCv3.g:275:37: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 2 :
                    // SimpleCv3.g:276:9: '\\\\' ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // SimpleCv3.g:276:14: ( '0' .. '7' )
                    // SimpleCv3.g:276:15: '0' .. '7'
                    this.matchRange('0','7'); 



                    // SimpleCv3.g:276:25: ( '0' .. '7' )
                    // SimpleCv3.g:276:26: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 3 :
                    // SimpleCv3.g:277:9: '\\\\' ( '0' .. '7' )
                    this.match('\\'); 
                    // SimpleCv3.g:277:14: ( '0' .. '7' )
                    // SimpleCv3.g:277:15: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "OctalEscape",

    mTokens: function() {
        // SimpleCv3.g:1:8: ( T__15 | T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | T__30 | T__31 | T__32 | T__33 | T__34 | T__35 | T__36 | T__37 | T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | T__56 | T__57 | T__58 | T__59 | T__60 | T__61 | T__62 | T__63 | T__64 | T__65 | T__66 | T__67 | T__68 | T__69 | T__70 | T__71 | T__72 | T__73 | T__74 | T__75 | T__76 | T__77 | ID | INT | FLOAT | WS | CHINESECHAR | MULTILINE_COMMENT | SINGLELINE_COMMENT )
        var alt20=70;
        alt20 = this.dfa20.predict(this.input);
        switch (alt20) {
            case 1 :
                // SimpleCv3.g:1:10: T__15
                this.mT__15(); 


                break;
            case 2 :
                // SimpleCv3.g:1:16: T__16
                this.mT__16(); 


                break;
            case 3 :
                // SimpleCv3.g:1:22: T__17
                this.mT__17(); 


                break;
            case 4 :
                // SimpleCv3.g:1:28: T__18
                this.mT__18(); 


                break;
            case 5 :
                // SimpleCv3.g:1:34: T__19
                this.mT__19(); 


                break;
            case 6 :
                // SimpleCv3.g:1:40: T__20
                this.mT__20(); 


                break;
            case 7 :
                // SimpleCv3.g:1:46: T__21
                this.mT__21(); 


                break;
            case 8 :
                // SimpleCv3.g:1:52: T__22
                this.mT__22(); 


                break;
            case 9 :
                // SimpleCv3.g:1:58: T__23
                this.mT__23(); 


                break;
            case 10 :
                // SimpleCv3.g:1:64: T__24
                this.mT__24(); 


                break;
            case 11 :
                // SimpleCv3.g:1:70: T__25
                this.mT__25(); 


                break;
            case 12 :
                // SimpleCv3.g:1:76: T__26
                this.mT__26(); 


                break;
            case 13 :
                // SimpleCv3.g:1:82: T__27
                this.mT__27(); 


                break;
            case 14 :
                // SimpleCv3.g:1:88: T__28
                this.mT__28(); 


                break;
            case 15 :
                // SimpleCv3.g:1:94: T__29
                this.mT__29(); 


                break;
            case 16 :
                // SimpleCv3.g:1:100: T__30
                this.mT__30(); 


                break;
            case 17 :
                // SimpleCv3.g:1:106: T__31
                this.mT__31(); 


                break;
            case 18 :
                // SimpleCv3.g:1:112: T__32
                this.mT__32(); 


                break;
            case 19 :
                // SimpleCv3.g:1:118: T__33
                this.mT__33(); 


                break;
            case 20 :
                // SimpleCv3.g:1:124: T__34
                this.mT__34(); 


                break;
            case 21 :
                // SimpleCv3.g:1:130: T__35
                this.mT__35(); 


                break;
            case 22 :
                // SimpleCv3.g:1:136: T__36
                this.mT__36(); 


                break;
            case 23 :
                // SimpleCv3.g:1:142: T__37
                this.mT__37(); 


                break;
            case 24 :
                // SimpleCv3.g:1:148: T__38
                this.mT__38(); 


                break;
            case 25 :
                // SimpleCv3.g:1:154: T__39
                this.mT__39(); 


                break;
            case 26 :
                // SimpleCv3.g:1:160: T__40
                this.mT__40(); 


                break;
            case 27 :
                // SimpleCv3.g:1:166: T__41
                this.mT__41(); 


                break;
            case 28 :
                // SimpleCv3.g:1:172: T__42
                this.mT__42(); 


                break;
            case 29 :
                // SimpleCv3.g:1:178: T__43
                this.mT__43(); 


                break;
            case 30 :
                // SimpleCv3.g:1:184: T__44
                this.mT__44(); 


                break;
            case 31 :
                // SimpleCv3.g:1:190: T__45
                this.mT__45(); 


                break;
            case 32 :
                // SimpleCv3.g:1:196: T__46
                this.mT__46(); 


                break;
            case 33 :
                // SimpleCv3.g:1:202: T__47
                this.mT__47(); 


                break;
            case 34 :
                // SimpleCv3.g:1:208: T__48
                this.mT__48(); 


                break;
            case 35 :
                // SimpleCv3.g:1:214: T__49
                this.mT__49(); 


                break;
            case 36 :
                // SimpleCv3.g:1:220: T__50
                this.mT__50(); 


                break;
            case 37 :
                // SimpleCv3.g:1:226: T__51
                this.mT__51(); 


                break;
            case 38 :
                // SimpleCv3.g:1:232: T__52
                this.mT__52(); 


                break;
            case 39 :
                // SimpleCv3.g:1:238: T__53
                this.mT__53(); 


                break;
            case 40 :
                // SimpleCv3.g:1:244: T__54
                this.mT__54(); 


                break;
            case 41 :
                // SimpleCv3.g:1:250: T__55
                this.mT__55(); 


                break;
            case 42 :
                // SimpleCv3.g:1:256: T__56
                this.mT__56(); 


                break;
            case 43 :
                // SimpleCv3.g:1:262: T__57
                this.mT__57(); 


                break;
            case 44 :
                // SimpleCv3.g:1:268: T__58
                this.mT__58(); 


                break;
            case 45 :
                // SimpleCv3.g:1:274: T__59
                this.mT__59(); 


                break;
            case 46 :
                // SimpleCv3.g:1:280: T__60
                this.mT__60(); 


                break;
            case 47 :
                // SimpleCv3.g:1:286: T__61
                this.mT__61(); 


                break;
            case 48 :
                // SimpleCv3.g:1:292: T__62
                this.mT__62(); 


                break;
            case 49 :
                // SimpleCv3.g:1:298: T__63
                this.mT__63(); 


                break;
            case 50 :
                // SimpleCv3.g:1:304: T__64
                this.mT__64(); 


                break;
            case 51 :
                // SimpleCv3.g:1:310: T__65
                this.mT__65(); 


                break;
            case 52 :
                // SimpleCv3.g:1:316: T__66
                this.mT__66(); 


                break;
            case 53 :
                // SimpleCv3.g:1:322: T__67
                this.mT__67(); 


                break;
            case 54 :
                // SimpleCv3.g:1:328: T__68
                this.mT__68(); 


                break;
            case 55 :
                // SimpleCv3.g:1:334: T__69
                this.mT__69(); 


                break;
            case 56 :
                // SimpleCv3.g:1:340: T__70
                this.mT__70(); 


                break;
            case 57 :
                // SimpleCv3.g:1:346: T__71
                this.mT__71(); 


                break;
            case 58 :
                // SimpleCv3.g:1:352: T__72
                this.mT__72(); 


                break;
            case 59 :
                // SimpleCv3.g:1:358: T__73
                this.mT__73(); 


                break;
            case 60 :
                // SimpleCv3.g:1:364: T__74
                this.mT__74(); 


                break;
            case 61 :
                // SimpleCv3.g:1:370: T__75
                this.mT__75(); 


                break;
            case 62 :
                // SimpleCv3.g:1:376: T__76
                this.mT__76(); 


                break;
            case 63 :
                // SimpleCv3.g:1:382: T__77
                this.mT__77(); 


                break;
            case 64 :
                // SimpleCv3.g:1:388: ID
                this.mID(); 


                break;
            case 65 :
                // SimpleCv3.g:1:391: INT
                this.mINT(); 


                break;
            case 66 :
                // SimpleCv3.g:1:395: FLOAT
                this.mFLOAT(); 


                break;
            case 67 :
                // SimpleCv3.g:1:401: WS
                this.mWS(); 


                break;
            case 68 :
                // SimpleCv3.g:1:404: CHINESECHAR
                this.mCHINESECHAR(); 


                break;
            case 69 :
                // SimpleCv3.g:1:416: MULTILINE_COMMENT
                this.mMULTILINE_COMMENT(); 


                break;
            case 70 :
                // SimpleCv3.g:1:434: SINGLELINE_COMMENT
                this.mSINGLELINE_COMMENT(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(SimpleCv3Lexer, {
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

org.antlr.lang.augmentObject(SimpleCv3Lexer, {
    DFA10_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv3Lexer.DFA10_eotS),
    DFA10_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv3Lexer.DFA10_eofS),
    DFA10_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv3Lexer.DFA10_minS),
    DFA10_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv3Lexer.DFA10_maxS),
    DFA10_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv3Lexer.DFA10_acceptS),
    DFA10_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv3Lexer.DFA10_specialS),
    DFA10_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv3Lexer.DFA10_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv3Lexer.DFA10_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv3Lexer.DFA10 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 10;
    this.eot = SimpleCv3Lexer.DFA10_eot;
    this.eof = SimpleCv3Lexer.DFA10_eof;
    this.min = SimpleCv3Lexer.DFA10_min;
    this.max = SimpleCv3Lexer.DFA10_max;
    this.accept = SimpleCv3Lexer.DFA10_accept;
    this.special = SimpleCv3Lexer.DFA10_special;
    this.transition = SimpleCv3Lexer.DFA10_transition;
};

org.antlr.lang.extend(SimpleCv3Lexer.DFA10, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "230:1: FLOAT : ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(SimpleCv3Lexer, {
    DFA20_eotS:
        "\u0003\uffff\u0001\u0026\u0001\u002e\u0001\u0031\u0001\u0032\u0001"+
    "\uffff\u0001\u0035\u0008\u0026\u0004\uffff\u0004\u0026\u0001\u0047\u0001"+
    "\u004a\u0001\u004e\u0001\u0053\u0001\u0056\u0002\uffff\u0001\u005a\u0006"+
    "\uffff\u0001\u004f\u0002\uffff\u0001\u0026\u0001\u005d\u0001\u005f\u0002"+
    "\uffff\u0001\u0061\u0006\uffff\u0009\u0026\u0001\u006d\u0006\u0026\u0015"+
    "\uffff\u0001\u0026\u0001\u0075\u0005\uffff\u0009\u0026\u0001\u007f\u0001"+
    "\u0026\u0001\uffff\u0007\u0026\u0001\uffff\u0001\u0088\u0001\u0089\u0005"+
    "\u0026\u0001\u008f\u0001\u0026\u0001\uffff\u0004\u0026\u0001\u0095\u0003"+
    "\u0026\u0002\uffff\u0001\u0026\u0001\u009a\u0003\u0026\u0001\uffff\u0001"+
    "\u009e\u0003\u0026\u0001\u00a2\u0001\uffff\u0001\u00a3\u0003\u0026\u0001"+
    "\uffff\u0001\u00a7\u0001\u00a8\u0001\u00a9\u0001\uffff\u0001\u00aa\u0002"+
    "\u0026\u0002\uffff\u0001\u00ad\u0001\u00ae\u0001\u0026\u0004\uffff\u0001"+
    "\u0026\u0001\u00b1\u0002\uffff\u0001\u00b2\u0001\u00b3\u0003\uffff",
    DFA20_eofS:
        "\u00b4\uffff",
    DFA20_minS:
        "\u0001\u0009\u0002\uffff\u0001\u0066\u0001\u003c\u0001\u003d\u0001"+
    "\u0030\u0001\uffff\u0001\u003d\u0001\u006f\u0002\u0068\u0001\u006f\u0001"+
    "\u006c\u0001\u006f\u0001\u006e\u0001\u0079\u0004\uffff\u0001\u0068\u0001"+
    "\u006c\u0001\u0072\u0001\u0065\u0001\u003d\u0001\u002b\u0001\u002d\u0001"+
    "\u002a\u0001\u0026\u0001\u003d\u0001\uffff\u0001\u003d\u0006\uffff\u0001"+
    "\u002e\u0002\uffff\u0001\u0063\u0001\u0030\u0001\u003d\u0002\uffff\u0001"+
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
    "\u003d\u0006\uffff\u0001\u0065\u0002\uffff\u0001\u0074\u0001\u007a\u0001"+
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
    "\u0029\u0001\uffff\u0001\u0030\u0001\u0031\u0001\u0032\u0001\u0033\u0001"+
    "\u003f\u0001\u0040\u0001\uffff\u0001\u0043\u0001\u0044\u0003\uffff\u0001"+
    "\u0038\u0001\u0004\u0001\uffff\u0001\u0039\u0001\u0005\u0001\u0006\u0001"+
    "\u0042\u0001\u0023\u0001\u0008\u0010\uffff\u0001\u0036\u0001\u0020\u0001"+
    "\u0021\u0001\u002a\u0001\u003c\u0001\u0022\u0001\u002b\u0001\u002f\u0001"+
    "\u003d\u0001\u0041\u0001\u0024\u0001\u0045\u0001\u0046\u0001\u003e\u0001"+
    "\u0027\u0001\u0035\u0001\u002e\u0001\u0028\u0001\u0034\u0001\u0037\u0001"+
    "\u002d\u0002\uffff\u0001\u001b\u0001\u0025\u0001\u003a\u0001\u0026\u0001"+
    "\u003b\u000b\uffff\u0001\u001a\u0007\uffff\u0001\u000c\u0009\uffff\u0001"+
    "\u0018\u0008\uffff\u0001\u0009\u0001\u000a\u0005\uffff\u0001\u000d\u0005"+
    "\uffff\u0001\u001c\u0004\uffff\u0001\u000b\u0003\uffff\u0001\u000e\u0003"+
    "\uffff\u0001\u0019\u0001\u001e\u0003\uffff\u0001\u0010\u0001\u002c\u0001"+
    "\u0013\u0001\u000f\u0002\uffff\u0001\u001f\u0001\u0003\u0002\uffff\u0001"+
    "\u0012\u0001\u001d\u0001\u0011",
    DFA20_specialS:
        "\u00b4\uffff}>",
    DFA20_transitionS: [
            "\u0002\u0028\u0002\uffff\u0001\u0028\u0012\uffff\u0001\u0028"+
            "\u0001\u0020\u0001\uffff\u0001\u0002\u0001\uffff\u0001\u0025"+
            "\u0001\u001d\u0001\uffff\u0001\u0013\u0001\u0014\u0001\u0008"+
            "\u0001\u001a\u0001\u0007\u0001\u001b\u0001\u0006\u0001\u001c"+
            "\u000a\u0027\u0001\u0024\u0001\u0001\u0001\u0004\u0001\u0019"+
            "\u0001\u0005\u0001\u0023\u0001\uffff\u001a\u0026\u0001\u0021"+
            "\u0001\uffff\u0001\u0022\u0001\u001f\u0001\u0026\u0001\uffff"+
            "\u0001\u0026\u0001\u0017\u0001\u000a\u0001\u000e\u0001\u0016"+
            "\u0001\u000d\u0002\u0026\u0001\u0003\u0002\u0026\u0001\u000c"+
            "\u0005\u0026\u0001\u0018\u0001\u000b\u0001\u0010\u0001\u000f"+
            "\u0001\u0009\u0001\u0015\u0003\u0026\u0001\u0011\u0001\u001e"+
            "\u0001\u0012\u4d82\uffff\u51a6\u0029\u595a\uffff\u012e\u0029",
            "",
            "",
            "\u0001\u002b\u0007\uffff\u0001\u002a",
            "\u0001\u002c\u0001\u002d",
            "\u0001\u0030\u0001\u002f",
            "\u000a\u0033",
            "",
            "\u0001\u0034",
            "\u0001\u0036",
            "\u0001\u0037\u0006\uffff\u0001\u0038",
            "\u0001\u0039\u0001\u003a\u000a\uffff\u0001\u003b",
            "\u0001\u003c",
            "\u0001\u003d\u0002\uffff\u0001\u003e",
            "\u0001\u003f",
            "\u0001\u0040",
            "\u0001\u0041",
            "",
            "",
            "",
            "",
            "\u0001\u0042",
            "\u0001\u0043",
            "\u0001\u0044",
            "\u0001\u0045",
            "\u0001\u0046",
            "\u0001\u0049\u0011\uffff\u0001\u0048",
            "\u0001\u004c\u0002\uffff\u000a\u004f\u0003\uffff\u0001\u004b"+
            "\u0001\u004d",
            "\u0001\u0051\u0004\uffff\u0001\u0052\u000d\uffff\u0001\u0050",
            "\u0001\u0055\u0016\uffff\u0001\u0054",
            "\u0001\u0057\u003e\uffff\u0001\u0058",
            "",
            "\u0001\u0059",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0033\u0001\uffff\u000a\u0027\u000b\uffff\u0001\u0033"+
            "\u001f\uffff\u0001\u0033",
            "",
            "",
            "\u0001\u005b\u0010\uffff\u0001\u005c",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u005e",
            "",
            "",
            "\u0001\u0060",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0062",
            "\u0001\u0063",
            "\u0001\u0064",
            "\u0001\u0065",
            "\u0001\u0066\u0012\uffff\u0001\u0067",
            "\u0001\u0068",
            "\u0001\u0069",
            "\u0001\u006a",
            "\u0001\u006b",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0014\u0026\u0001\u006c\u0005\u0026",
            "\u0001\u006e",
            "\u0001\u006f",
            "\u0001\u0070",
            "\u0001\u0071",
            "\u0001\u0072",
            "\u0001\u0073",
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
            "\u0001\u0074",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0076",
            "\u0001\u0077",
            "\u0001\u0078",
            "\u0001\u0079",
            "\u0001\u007a",
            "\u0001\u007b",
            "\u0001\u007c",
            "\u0001\u007d",
            "\u0001\u007e",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0080",
            "",
            "\u0001\u0081",
            "\u0001\u0082",
            "\u0001\u0083",
            "\u0001\u0084",
            "\u0001\u0085",
            "\u0001\u0086",
            "\u0001\u0087",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u008a",
            "\u0001\u008b",
            "\u0001\u008c",
            "\u0001\u008d",
            "\u0001\u008e",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0090",
            "",
            "\u0001\u0091",
            "\u0001\u0092",
            "\u0001\u0093",
            "\u0001\u0094",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0096",
            "\u0001\u0097",
            "\u0001\u0098",
            "",
            "",
            "\u0001\u0099",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u009b",
            "\u0001\u009c",
            "\u0001\u009d",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u009f",
            "\u0001\u00a0",
            "\u0001\u00a1",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u00a4",
            "\u0001\u00a5",
            "\u0001\u00a6",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u00ab",
            "\u0001\u00ac",
            "",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u00af",
            "",
            "",
            "",
            "",
            "\u0001\u00b0",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(SimpleCv3Lexer, {
    DFA20_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv3Lexer.DFA20_eotS),
    DFA20_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv3Lexer.DFA20_eofS),
    DFA20_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv3Lexer.DFA20_minS),
    DFA20_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv3Lexer.DFA20_maxS),
    DFA20_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv3Lexer.DFA20_acceptS),
    DFA20_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv3Lexer.DFA20_specialS),
    DFA20_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv3Lexer.DFA20_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv3Lexer.DFA20_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv3Lexer.DFA20 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 20;
    this.eot = SimpleCv3Lexer.DFA20_eot;
    this.eof = SimpleCv3Lexer.DFA20_eof;
    this.min = SimpleCv3Lexer.DFA20_min;
    this.max = SimpleCv3Lexer.DFA20_max;
    this.accept = SimpleCv3Lexer.DFA20_accept;
    this.special = SimpleCv3Lexer.DFA20_special;
    this.transition = SimpleCv3Lexer.DFA20_transition;
};

org.antlr.lang.extend(SimpleCv3Lexer.DFA20, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( T__15 | T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | T__30 | T__31 | T__32 | T__33 | T__34 | T__35 | T__36 | T__37 | T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | T__56 | T__57 | T__58 | T__59 | T__60 | T__61 | T__62 | T__63 | T__64 | T__65 | T__66 | T__67 | T__68 | T__69 | T__70 | T__71 | T__72 | T__73 | T__74 | T__75 | T__76 | T__77 | ID | INT | FLOAT | WS | CHINESECHAR | MULTILINE_COMMENT | SINGLELINE_COMMENT );";
    },
    dummy: null
});
 
})();

module.exports = SimpleCv3Lexer;