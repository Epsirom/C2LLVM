// $ANTLR 3.3 Nov 30, 2010 12:50:56 SimpleC.g 2014-06-02 01:01:03

var SimpleCLexer = function(input, state) {
// alternate constructor @todo
// public SimpleCLexer(CharStream input)
// public SimpleCLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa4 = new SimpleCLexer.DFA4(this);
    SimpleCLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(SimpleCLexer, {
    EOF: -1,
    T__7: 7,
    T__8: 8,
    T__9: 9,
    T__10: 10,
    T__11: 11,
    T__12: 12,
    T__13: 13,
    T__14: 14,
    T__15: 15,
    T__16: 16,
    T__17: 17,
    T__18: 18,
    T__19: 19,
    T__20: 20,
    ID: 4,
    INT: 5,
    WS: 6
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(SimpleCLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    T__7 : 7,
    T__8 : 8,
    T__9 : 9,
    T__10 : 10,
    T__11 : 11,
    T__12 : 12,
    T__13 : 13,
    T__14 : 14,
    T__15 : 15,
    T__16 : 16,
    T__17 : 17,
    T__18 : 18,
    T__19 : 19,
    T__20 : 20,
    ID : 4,
    INT : 5,
    WS : 6,
    getGrammarFileName: function() { return "SimpleC.g"; }
});
org.antlr.lang.augmentObject(SimpleCLexer.prototype, {
    // $ANTLR start T__7
    mT__7: function()  {
        try {
            var _type = this.T__7;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:7:6: ( ';' )
            // SimpleC.g:7:8: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__7",

    // $ANTLR start T__8
    mT__8: function()  {
        try {
            var _type = this.T__8;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:8:6: ( '(' )
            // SimpleC.g:8:8: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__8",

    // $ANTLR start T__9
    mT__9: function()  {
        try {
            var _type = this.T__9;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:9:6: ( ',' )
            // SimpleC.g:9:8: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__9",

    // $ANTLR start T__10
    mT__10: function()  {
        try {
            var _type = this.T__10;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:10:7: ( ')' )
            // SimpleC.g:10:9: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__10",

    // $ANTLR start T__11
    mT__11: function()  {
        try {
            var _type = this.T__11;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:11:7: ( 'int' )
            // SimpleC.g:11:9: 'int'
            this.match("int"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__11",

    // $ANTLR start T__12
    mT__12: function()  {
        try {
            var _type = this.T__12;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:12:7: ( 'char' )
            // SimpleC.g:12:9: 'char'
            this.match("char"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__12",

    // $ANTLR start T__13
    mT__13: function()  {
        try {
            var _type = this.T__13;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:13:7: ( 'void' )
            // SimpleC.g:13:9: 'void'
            this.match("void"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__13",

    // $ANTLR start T__14
    mT__14: function()  {
        try {
            var _type = this.T__14;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:14:7: ( '{' )
            // SimpleC.g:14:9: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__14",

    // $ANTLR start T__15
    mT__15: function()  {
        try {
            var _type = this.T__15;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:15:7: ( '}' )
            // SimpleC.g:15:9: '}'
            this.match('}'); 



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
            // SimpleC.g:16:7: ( 'for' )
            // SimpleC.g:16:9: 'for'
            this.match("for"); 




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
            // SimpleC.g:17:7: ( '=' )
            // SimpleC.g:17:9: '='
            this.match('='); 



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
            // SimpleC.g:18:7: ( '==' )
            // SimpleC.g:18:9: '=='
            this.match("=="); 




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
            // SimpleC.g:19:7: ( '<' )
            // SimpleC.g:19:9: '<'
            this.match('<'); 



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
            // SimpleC.g:20:7: ( '+' )
            // SimpleC.g:20:9: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__20",

    // $ANTLR start ID
    mID: function()  {
        try {
            var _type = this.ID;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:95:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )* )
            // SimpleC.g:95:9: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // SimpleC.g:95:33: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>='0' && LA1_0<='9')||(LA1_0>='A' && LA1_0<='Z')||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // SimpleC.g:
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
            // SimpleC.g:98:5: ( ( '0' .. '9' )+ )
            // SimpleC.g:98:7: ( '0' .. '9' )+
            // SimpleC.g:98:7: ( '0' .. '9' )+
            var cnt2=0;
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>='0' && LA2_0<='9')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // SimpleC.g:98:8: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt2 >= 1 ) {
                        break loop2;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(2, this.input);
                        throw eee;
                }
                cnt2++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INT",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // SimpleC.g:101:5: ( ( ' ' | '\\t' | '\\r' | '\\n' )+ )
            // SimpleC.g:101:9: ( ' ' | '\\t' | '\\r' | '\\n' )+
            // SimpleC.g:101:9: ( ' ' | '\\t' | '\\r' | '\\n' )+
            var cnt3=0;
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( ((LA3_0>='\t' && LA3_0<='\n')||LA3_0=='\r'||LA3_0==' ') ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // SimpleC.g:
                    if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||this.input.LA(1)=='\r'||this.input.LA(1)==' ' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



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

             _channel=HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    mTokens: function() {
        // SimpleC.g:1:8: ( T__7 | T__8 | T__9 | T__10 | T__11 | T__12 | T__13 | T__14 | T__15 | T__16 | T__17 | T__18 | T__19 | T__20 | ID | INT | WS )
        var alt4=17;
        alt4 = this.dfa4.predict(this.input);
        switch (alt4) {
            case 1 :
                // SimpleC.g:1:10: T__7
                this.mT__7(); 


                break;
            case 2 :
                // SimpleC.g:1:15: T__8
                this.mT__8(); 


                break;
            case 3 :
                // SimpleC.g:1:20: T__9
                this.mT__9(); 


                break;
            case 4 :
                // SimpleC.g:1:25: T__10
                this.mT__10(); 


                break;
            case 5 :
                // SimpleC.g:1:31: T__11
                this.mT__11(); 


                break;
            case 6 :
                // SimpleC.g:1:37: T__12
                this.mT__12(); 


                break;
            case 7 :
                // SimpleC.g:1:43: T__13
                this.mT__13(); 


                break;
            case 8 :
                // SimpleC.g:1:49: T__14
                this.mT__14(); 


                break;
            case 9 :
                // SimpleC.g:1:55: T__15
                this.mT__15(); 


                break;
            case 10 :
                // SimpleC.g:1:61: T__16
                this.mT__16(); 


                break;
            case 11 :
                // SimpleC.g:1:67: T__17
                this.mT__17(); 


                break;
            case 12 :
                // SimpleC.g:1:73: T__18
                this.mT__18(); 


                break;
            case 13 :
                // SimpleC.g:1:79: T__19
                this.mT__19(); 


                break;
            case 14 :
                // SimpleC.g:1:85: T__20
                this.mT__20(); 


                break;
            case 15 :
                // SimpleC.g:1:91: ID
                this.mID(); 


                break;
            case 16 :
                // SimpleC.g:1:94: INT
                this.mINT(); 


                break;
            case 17 :
                // SimpleC.g:1:98: WS
                this.mWS(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(SimpleCLexer, {
    DFA4_eotS:
        "\u0005\uffff\u0003\u000e\u0002\uffff\u0001\u000e\u0001\u0016\u0005"+
    "\uffff\u0004\u000e\u0002\uffff\u0001\u001b\u0002\u000e\u0001\u001e\u0001"+
    "\uffff\u0001\u001f\u0001\u0020\u0003\uffff",
    DFA4_eofS:
        "\u0021\uffff",
    DFA4_minS:
        "\u0001\u0009\u0004\uffff\u0001\u006e\u0001\u0068\u0001\u006f\u0002"+
    "\uffff\u0001\u006f\u0001\u003d\u0005\uffff\u0001\u0074\u0001\u0061\u0001"+
    "\u0069\u0001\u0072\u0002\uffff\u0001\u0030\u0001\u0072\u0001\u0064\u0001"+
    "\u0030\u0001\uffff\u0002\u0030\u0003\uffff",
    DFA4_maxS:
        "\u0001\u007d\u0004\uffff\u0001\u006e\u0001\u0068\u0001\u006f\u0002"+
    "\uffff\u0001\u006f\u0001\u003d\u0005\uffff\u0001\u0074\u0001\u0061\u0001"+
    "\u0069\u0001\u0072\u0002\uffff\u0001\u007a\u0001\u0072\u0001\u0064\u0001"+
    "\u007a\u0001\uffff\u0002\u007a\u0003\uffff",
    DFA4_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0001\u0003\u0001\u0004\u0003"+
    "\uffff\u0001\u0008\u0001\u0009\u0002\uffff\u0001\u000d\u0001\u000e\u0001"+
    "\u000f\u0001\u0010\u0001\u0011\u0004\uffff\u0001\u000c\u0001\u000b\u0004"+
    "\uffff\u0001\u0005\u0002\uffff\u0001\u000a\u0001\u0006\u0001\u0007",
    DFA4_specialS:
        "\u0021\uffff}>",
    DFA4_transitionS: [
            "\u0002\u0010\u0002\uffff\u0001\u0010\u0012\uffff\u0001\u0010"+
            "\u0007\uffff\u0001\u0002\u0001\u0004\u0001\uffff\u0001\u000d"+
            "\u0001\u0003\u0003\uffff\u000a\u000f\u0001\uffff\u0001\u0001"+
            "\u0001\u000c\u0001\u000b\u0003\uffff\u001a\u000e\u0004\uffff"+
            "\u0001\u000e\u0001\uffff\u0002\u000e\u0001\u0006\u0002\u000e"+
            "\u0001\u000a\u0002\u000e\u0001\u0005\u000c\u000e\u0001\u0007"+
            "\u0004\u000e\u0001\u0008\u0001\uffff\u0001\u0009",
            "",
            "",
            "",
            "",
            "\u0001\u0011",
            "\u0001\u0012",
            "\u0001\u0013",
            "",
            "",
            "\u0001\u0014",
            "\u0001\u0015",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0017",
            "\u0001\u0018",
            "\u0001\u0019",
            "\u0001\u001a",
            "",
            "",
            "\u000a\u000e\u0007\uffff\u001a\u000e\u0004\uffff\u0001\u000e"+
            "\u0001\uffff\u001a\u000e",
            "\u0001\u001c",
            "\u0001\u001d",
            "\u000a\u000e\u0007\uffff\u001a\u000e\u0004\uffff\u0001\u000e"+
            "\u0001\uffff\u001a\u000e",
            "",
            "\u000a\u000e\u0007\uffff\u001a\u000e\u0004\uffff\u0001\u000e"+
            "\u0001\uffff\u001a\u000e",
            "\u000a\u000e\u0007\uffff\u001a\u000e\u0004\uffff\u0001\u000e"+
            "\u0001\uffff\u001a\u000e",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(SimpleCLexer, {
    DFA4_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCLexer.DFA4_eotS),
    DFA4_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCLexer.DFA4_eofS),
    DFA4_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCLexer.DFA4_minS),
    DFA4_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCLexer.DFA4_maxS),
    DFA4_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCLexer.DFA4_acceptS),
    DFA4_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCLexer.DFA4_specialS),
    DFA4_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCLexer.DFA4_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCLexer.DFA4_transitionS[i]));
        }
        return a;
    })()
});

SimpleCLexer.DFA4 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 4;
    this.eot = SimpleCLexer.DFA4_eot;
    this.eof = SimpleCLexer.DFA4_eof;
    this.min = SimpleCLexer.DFA4_min;
    this.max = SimpleCLexer.DFA4_max;
    this.accept = SimpleCLexer.DFA4_accept;
    this.special = SimpleCLexer.DFA4_special;
    this.transition = SimpleCLexer.DFA4_transition;
};

org.antlr.lang.extend(SimpleCLexer.DFA4, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( T__7 | T__8 | T__9 | T__10 | T__11 | T__12 | T__13 | T__14 | T__15 | T__16 | T__17 | T__18 | T__19 | T__20 | ID | INT | WS );";
    },
    dummy: null
});
 
})();

module.exports = SimpleCLexer;