// $ANTLR 3.3 Nov 30, 2010 12:50:56 SimpleCv4.g 2014-06-09 15:18:01

var SimpleCv4Parser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    SimpleCv4Parser.superclass.constructor.call(this, input, state);

    this.dfa2 = new SimpleCv4Parser.DFA2(this);
    this.dfa26 = new SimpleCv4Parser.DFA26(this);
    this.dfa32 = new SimpleCv4Parser.DFA32(this);
    this.dfa45 = new SimpleCv4Parser.DFA45(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(SimpleCv4Parser, {
    EOF: -1,
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
    T__163: 163,
    T__164: 164,
    T__165: 165,
    T__166: 166,
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
    CONSTNUM: 90,
    DECLARATOR: 91,
    ASSIGNMENT_LEFT: 92,
    ASSIGNMENT_RIGHT: 93,
    VARIABLE: 94,
    ID: 95,
    INT: 96,
    STRING: 97,
    EXPONENT: 98,
    FLOAT: 99,
    WS: 100,
    CHINESECHAR: 101,
    MULTILINE_COMMENT: 102,
    SINGLELINE_COMMENT: 103,
    EscapeSequence: 104,
    OctalEscape: 105
});

(function(){
// public class variables
var EOF= -1,
    T__106= 106,
    T__107= 107,
    T__108= 108,
    T__109= 109,
    T__110= 110,
    T__111= 111,
    T__112= 112,
    T__113= 113,
    T__114= 114,
    T__115= 115,
    T__116= 116,
    T__117= 117,
    T__118= 118,
    T__119= 119,
    T__120= 120,
    T__121= 121,
    T__122= 122,
    T__123= 123,
    T__124= 124,
    T__125= 125,
    T__126= 126,
    T__127= 127,
    T__128= 128,
    T__129= 129,
    T__130= 130,
    T__131= 131,
    T__132= 132,
    T__133= 133,
    T__134= 134,
    T__135= 135,
    T__136= 136,
    T__137= 137,
    T__138= 138,
    T__139= 139,
    T__140= 140,
    T__141= 141,
    T__142= 142,
    T__143= 143,
    T__144= 144,
    T__145= 145,
    T__146= 146,
    T__147= 147,
    T__148= 148,
    T__149= 149,
    T__150= 150,
    T__151= 151,
    T__152= 152,
    T__153= 153,
    T__154= 154,
    T__155= 155,
    T__156= 156,
    T__157= 157,
    T__158= 158,
    T__159= 159,
    T__160= 160,
    T__161= 161,
    T__162= 162,
    T__163= 163,
    T__164= 164,
    T__165= 165,
    T__166= 166,
    PROG= 4,
    INCLUDE_SYSTEM= 5,
    TYPE_DEF= 6,
    TYPE_OLD= 7,
    TYPE_NEW= 8,
    STRUCT_DEF= 9,
    STRUCT_CNAME= 10,
    VAR_DEF= 11,
    VAR_NAME= 12,
    C_TYPE= 13,
    C_ID= 14,
    DEFAULT_VALUE= 15,
    TYPE_VOID= 16,
    TYPE_I8= 17,
    TYPE_I16= 18,
    TYPE_I32= 19,
    TYPE_UNSIGNED= 20,
    TYPE_F32= 21,
    TYPE_F64= 22,
    TYPE_CUSTOM= 23,
    FUNC_DEF= 24,
    FUNC_STAT= 25,
    FUNC_NAME= 26,
    FUNC_HEADER= 27,
    FUNC_PARAM= 28,
    FUNC_INVOKE= 29,
    FOR_STAT= 30,
    WHILE_STAT= 31,
    DOWHILE_STAT= 32,
    IF_STAT= 33,
    IF_BRANCH= 34,
    ELSEIF_BRANCH= 35,
    ELSE_BRANCH= 36,
    JUMP_STAT= 37,
    JUMP_RETURN= 38,
    JUMP_BREAK= 39,
    JUMP_CONTINUE= 40,
    BLOCK= 41,
    EMPTY_BLOCK= 42,
    ASSIGNMENT= 43,
    ASSIGN= 44,
    PLUS_ASSIGN= 45,
    MINUS_ASSIGN= 46,
    MULTI_ASSIGN= 47,
    DIVIDE_ASSIGN= 48,
    SHL_ASSIGN= 49,
    SHR_ASSIGN= 50,
    AND_ASSIGN= 51,
    OR_ASSIGN= 52,
    NOT_ASSIGN= 53,
    CONDITION= 54,
    SUB_CONDITION= 55,
    OR_EXPR= 56,
    OR_BRANCH= 57,
    AND_EXPR= 58,
    AND_BRANCH= 59,
    SHIFT_EXPR= 60,
    ADDSUB_EXPR= 61,
    MULTDIV_EXPR= 62,
    CASTTYPE= 63,
    SHL_OP= 64,
    SHR_OP= 65,
    ADD_OP= 66,
    SUB_OP= 67,
    MULTI_OP= 68,
    DIV_OP= 69,
    MOD_OP= 70,
    RELATION_EXPR= 71,
    EQUAL_RE= 72,
    NOTEQUAL_RE= 73,
    LESS_RE= 74,
    GREATER_RE= 75,
    GREATEREQUAL_RE= 76,
    LESSEQUAL_RE= 77,
    PREFIX_PLUS= 78,
    PREFIX_MINUS= 79,
    PREFIX_NOT= 80,
    PREFIX_AND= 81,
    PREFIX_STAR= 82,
    SIZEOF= 83,
    POSTFIX_EXPR= 84,
    POSTFIX= 85,
    POSTFIX_PLUS= 86,
    POSTFIX_MINUS= 87,
    MEMBERVAR= 88,
    ARRAYINDEX= 89,
    CONSTNUM= 90,
    DECLARATOR= 91,
    ASSIGNMENT_LEFT= 92,
    ASSIGNMENT_RIGHT= 93,
    VARIABLE= 94,
    ID= 95,
    INT= 96,
    STRING= 97,
    EXPONENT= 98,
    FLOAT= 99,
    WS= 100,
    CHINESECHAR= 101,
    MULTILINE_COMMENT= 102,
    SINGLELINE_COMMENT= 103,
    EscapeSequence= 104,
    OctalEscape= 105;

// public instance methods/vars
org.antlr.lang.extend(SimpleCv4Parser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return SimpleCv4Parser.tokenNames; },
    getGrammarFileName: function() { return "SimpleCv4.g"; }
});
org.antlr.lang.augmentObject(SimpleCv4Parser.prototype, {

    // inline static return class
    program_return: (function() {
        SimpleCv4Parser.program_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.program_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:118:1: program : ( statement )+ -> ^( PROG ( statement )+ ) ;
    // $ANTLR start "program"
    program: function() {
        var retval = new SimpleCv4Parser.program_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var statement1 = null;

        var stream_statement=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule statement");
        try {
            // SimpleCv4.g:119:5: ( ( statement )+ -> ^( PROG ( statement )+ ) )
            // SimpleCv4.g:119:9: ( statement )+
            // SimpleCv4.g:119:9: ( statement )+
            var cnt1=0;
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==ID||LA1_0==107||(LA1_0>=114 && LA1_0<=124)) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // SimpleCv4.g:0:0: statement
                    this.pushFollow(SimpleCv4Parser.FOLLOW_statement_in_program775);
                    statement1=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_statement.add(statement1.getTree());


                    break;

                default :
                    if ( cnt1 >= 1 ) {
                        break loop1;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(1, this.input);
                        throw eee;
                }
                cnt1++;
            } while (true);



            // AST REWRITE
            // elements: statement
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 120:6: -> ^( PROG ( statement )+ )
            {
                // SimpleCv4.g:120:9: ^( PROG ( statement )+ )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(PROG, "PROG"), root_1);

                if ( !(stream_statement.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_statement.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_statement.nextTree());

                }
                stream_statement.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    statement_return: (function() {
        SimpleCv4Parser.statement_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:123:1: statement : ( declaration | variable | structDefinition | typeDefinition | functionHeader ';' -> ^( FUNC_STAT functionHeader ) | functionHeader block -> ^( FUNC_DEF functionHeader block ) );
    // $ANTLR start "statement"
    statement: function() {
        var retval = new SimpleCv4Parser.statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal7 = null;
         var declaration2 = null;
         var variable3 = null;
         var structDefinition4 = null;
         var typeDefinition5 = null;
         var functionHeader6 = null;
         var functionHeader8 = null;
         var block9 = null;

        var char_literal7_tree=null;
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_functionHeader=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule functionHeader");
        var stream_block=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule block");
        try {
            // SimpleCv4.g:124:5: ( declaration | variable | structDefinition | typeDefinition | functionHeader ';' -> ^( FUNC_STAT functionHeader ) | functionHeader block -> ^( FUNC_DEF functionHeader block ) )
            var alt2=6;
            alt2 = this.dfa2.predict(this.input);
            switch (alt2) {
                case 1 :
                    // SimpleCv4.g:124:9: declaration
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_declaration_in_statement809);
                    declaration2=this.declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration2.getTree());


                    break;
                case 2 :
                    // SimpleCv4.g:125:9: variable
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_variable_in_statement819);
                    variable3=this.variable();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variable3.getTree());


                    break;
                case 3 :
                    // SimpleCv4.g:126:9: structDefinition
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_structDefinition_in_statement829);
                    structDefinition4=this.structDefinition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, structDefinition4.getTree());


                    break;
                case 4 :
                    // SimpleCv4.g:127:9: typeDefinition
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_typeDefinition_in_statement839);
                    typeDefinition5=this.typeDefinition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, typeDefinition5.getTree());


                    break;
                case 5 :
                    // SimpleCv4.g:128:9: functionHeader ';'
                    this.pushFollow(SimpleCv4Parser.FOLLOW_functionHeader_in_statement849);
                    functionHeader6=this.functionHeader();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_functionHeader.add(functionHeader6.getTree());
                    char_literal7=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_statement851); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_106.add(char_literal7);



                    // AST REWRITE
                    // elements: functionHeader
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 129:6: -> ^( FUNC_STAT functionHeader )
                    {
                        // SimpleCv4.g:129:9: ^( FUNC_STAT functionHeader )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_STAT, "FUNC_STAT"), root_1);

                        this.adaptor.addChild(root_1, stream_functionHeader.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 6 :
                    // SimpleCv4.g:130:9: functionHeader block
                    this.pushFollow(SimpleCv4Parser.FOLLOW_functionHeader_in_statement874);
                    functionHeader8=this.functionHeader();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_functionHeader.add(functionHeader8.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_statement876);
                    block9=this.block();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_block.add(block9.getTree());


                    // AST REWRITE
                    // elements: functionHeader, block
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 131:6: -> ^( FUNC_DEF functionHeader block )
                    {
                        // SimpleCv4.g:131:9: ^( FUNC_DEF functionHeader block )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_DEF, "FUNC_DEF"), root_1);

                        this.adaptor.addChild(root_1, stream_functionHeader.nextTree());
                        this.adaptor.addChild(root_1, stream_block.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    declaration_return: (function() {
        SimpleCv4Parser.declaration_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:134:1: declaration : '#' 'include' '<' libname '>' -> ^( INCLUDE_SYSTEM libname ) ;
    // $ANTLR start "declaration"
    declaration: function() {
        var retval = new SimpleCv4Parser.declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal10 = null;
        var string_literal11 = null;
        var char_literal12 = null;
        var char_literal14 = null;
         var libname13 = null;

        var char_literal10_tree=null;
        var string_literal11_tree=null;
        var char_literal12_tree=null;
        var char_literal14_tree=null;
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_110=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 110");
        var stream_107=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 107");
        var stream_libname=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule libname");
        try {
            // SimpleCv4.g:135:5: ( '#' 'include' '<' libname '>' -> ^( INCLUDE_SYSTEM libname ) )
            // SimpleCv4.g:135:9: '#' 'include' '<' libname '>'
            char_literal10=this.match(this.input,107,SimpleCv4Parser.FOLLOW_107_in_declaration910); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_107.add(char_literal10);

            string_literal11=this.match(this.input,108,SimpleCv4Parser.FOLLOW_108_in_declaration912); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_108.add(string_literal11);

            char_literal12=this.match(this.input,109,SimpleCv4Parser.FOLLOW_109_in_declaration914); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_109.add(char_literal12);

            this.pushFollow(SimpleCv4Parser.FOLLOW_libname_in_declaration916);
            libname13=this.libname();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_libname.add(libname13.getTree());
            char_literal14=this.match(this.input,110,SimpleCv4Parser.FOLLOW_110_in_declaration918); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_110.add(char_literal14);



            // AST REWRITE
            // elements: libname
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 136:6: -> ^( INCLUDE_SYSTEM libname )
            {
                // SimpleCv4.g:136:9: ^( INCLUDE_SYSTEM libname )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(INCLUDE_SYSTEM, "INCLUDE_SYSTEM"), root_1);

                this.adaptor.addChild(root_1, stream_libname.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    libname_return: (function() {
        SimpleCv4Parser.libname_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.libname_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:139:1: libname : ID ( '.' ID )? ;
    // $ANTLR start "libname"
    libname: function() {
        var retval = new SimpleCv4Parser.libname_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID15 = null;
        var char_literal16 = null;
        var ID17 = null;

        var ID15_tree=null;
        var char_literal16_tree=null;
        var ID17_tree=null;

        try {
            // SimpleCv4.g:140:5: ( ID ( '.' ID )? )
            // SimpleCv4.g:140:9: ID ( '.' ID )?
            root_0 = this.adaptor.nil();

            ID15=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_libname951); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            ID15_tree = this.adaptor.create(ID15);
            this.adaptor.addChild(root_0, ID15_tree);
            }
            // SimpleCv4.g:140:12: ( '.' ID )?
            var alt3=2;
            var LA3_0 = this.input.LA(1);

            if ( (LA3_0==111) ) {
                alt3=1;
            }
            switch (alt3) {
                case 1 :
                    // SimpleCv4.g:140:13: '.' ID
                    char_literal16=this.match(this.input,111,SimpleCv4Parser.FOLLOW_111_in_libname954); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal16_tree = this.adaptor.create(char_literal16);
                    this.adaptor.addChild(root_0, char_literal16_tree);
                    }
                    ID17=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_libname956); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    ID17_tree = this.adaptor.create(ID17);
                    this.adaptor.addChild(root_0, ID17_tree);
                    }


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    variable_return: (function() {
        SimpleCv4Parser.variable_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.variable_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:143:1: variable : type declarator ( assignmentOp shiftExpr )? ( ',' ( '*' )? declarator ( assignmentOp shiftExpr )? )* ';' -> ^( VAR_DEF type ( ^( VAR_NAME declarator ) ( ^( DEFAULT_VALUE shiftExpr ) )? )+ ) ;
    // $ANTLR start "variable"
    variable: function() {
        var retval = new SimpleCv4Parser.variable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal22 = null;
        var char_literal23 = null;
        var char_literal27 = null;
         var type18 = null;
         var declarator19 = null;
         var assignmentOp20 = null;
         var shiftExpr21 = null;
         var declarator24 = null;
         var assignmentOp25 = null;
         var shiftExpr26 = null;

        var char_literal22_tree=null;
        var char_literal23_tree=null;
        var char_literal27_tree=null;
        var stream_112=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 112");
        var stream_113=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 113");
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_declarator=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule declarator");
        var stream_shiftExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule shiftExpr");
        var stream_type=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule type");
        var stream_assignmentOp=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule assignmentOp");
        try {
            // SimpleCv4.g:144:5: ( type declarator ( assignmentOp shiftExpr )? ( ',' ( '*' )? declarator ( assignmentOp shiftExpr )? )* ';' -> ^( VAR_DEF type ( ^( VAR_NAME declarator ) ( ^( DEFAULT_VALUE shiftExpr ) )? )+ ) )
            // SimpleCv4.g:144:9: type declarator ( assignmentOp shiftExpr )? ( ',' ( '*' )? declarator ( assignmentOp shiftExpr )? )* ';'
            this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_variable978);
            type18=this.type();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_type.add(type18.getTree());
            this.pushFollow(SimpleCv4Parser.FOLLOW_declarator_in_variable980);
            declarator19=this.declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_declarator.add(declarator19.getTree());
            // SimpleCv4.g:144:25: ( assignmentOp shiftExpr )?
            var alt4=2;
            var LA4_0 = this.input.LA(1);

            if ( ((LA4_0>=137 && LA4_0<=146)) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // SimpleCv4.g:144:26: assignmentOp shiftExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentOp_in_variable983);
                    assignmentOp20=this.assignmentOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_assignmentOp.add(assignmentOp20.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_variable985);
                    shiftExpr21=this.shiftExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr21.getTree());


                    break;

            }

            // SimpleCv4.g:144:51: ( ',' ( '*' )? declarator ( assignmentOp shiftExpr )? )*
            loop7:
            do {
                var alt7=2;
                var LA7_0 = this.input.LA(1);

                if ( (LA7_0==112) ) {
                    alt7=1;
                }


                switch (alt7) {
                case 1 :
                    // SimpleCv4.g:144:52: ',' ( '*' )? declarator ( assignmentOp shiftExpr )?
                    char_literal22=this.match(this.input,112,SimpleCv4Parser.FOLLOW_112_in_variable990); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_112.add(char_literal22);

                    // SimpleCv4.g:144:56: ( '*' )?
                    var alt5=2;
                    var LA5_0 = this.input.LA(1);

                    if ( (LA5_0==113) ) {
                        alt5=1;
                    }
                    switch (alt5) {
                        case 1 :
                            // SimpleCv4.g:0:0: '*'
                            char_literal23=this.match(this.input,113,SimpleCv4Parser.FOLLOW_113_in_variable992); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_113.add(char_literal23);



                            break;

                    }

                    this.pushFollow(SimpleCv4Parser.FOLLOW_declarator_in_variable995);
                    declarator24=this.declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_declarator.add(declarator24.getTree());
                    // SimpleCv4.g:144:72: ( assignmentOp shiftExpr )?
                    var alt6=2;
                    var LA6_0 = this.input.LA(1);

                    if ( ((LA6_0>=137 && LA6_0<=146)) ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // SimpleCv4.g:144:73: assignmentOp shiftExpr
                            this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentOp_in_variable998);
                            assignmentOp25=this.assignmentOp();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_assignmentOp.add(assignmentOp25.getTree());
                            this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_variable1000);
                            shiftExpr26=this.shiftExpr();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr26.getTree());


                            break;

                    }



                    break;

                default :
                    break loop7;
                }
            } while (true);

            char_literal27=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_variable1006); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_106.add(char_literal27);



            // AST REWRITE
            // elements: declarator, type, shiftExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 145:6: -> ^( VAR_DEF type ( ^( VAR_NAME declarator ) ( ^( DEFAULT_VALUE shiftExpr ) )? )+ )
            {
                // SimpleCv4.g:145:9: ^( VAR_DEF type ( ^( VAR_NAME declarator ) ( ^( DEFAULT_VALUE shiftExpr ) )? )+ )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(VAR_DEF, "VAR_DEF"), root_1);

                this.adaptor.addChild(root_1, stream_type.nextTree());
                if ( !(stream_declarator.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_declarator.hasNext() ) {
                    // SimpleCv4.g:145:25: ^( VAR_NAME declarator )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(this.adaptor.create(VAR_NAME, "VAR_NAME"), root_2);

                    this.adaptor.addChild(root_2, stream_declarator.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }
                    // SimpleCv4.g:145:48: ( ^( DEFAULT_VALUE shiftExpr ) )?
                    if ( stream_shiftExpr.hasNext() ) {
                        // SimpleCv4.g:145:48: ^( DEFAULT_VALUE shiftExpr )
                        {
                        var root_2 = this.adaptor.nil();
                        root_2 = this.adaptor.becomeRoot(this.adaptor.create(DEFAULT_VALUE, "DEFAULT_VALUE"), root_2);

                        this.adaptor.addChild(root_2, stream_shiftExpr.nextTree());

                        this.adaptor.addChild(root_1, root_2);
                        }

                    }
                    stream_shiftExpr.reset();

                }
                stream_declarator.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    type_return: (function() {
        SimpleCv4Parser.type_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.type_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:148:1: type : typeSpecifier ( '*' )? -> ^( C_TYPE typeSpecifier ( '*' )? ) ;
    // $ANTLR start "type"
    type: function() {
        var retval = new SimpleCv4Parser.type_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal29 = null;
         var typeSpecifier28 = null;

        var char_literal29_tree=null;
        var stream_113=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 113");
        var stream_typeSpecifier=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeSpecifier");
        try {
            // SimpleCv4.g:149:5: ( typeSpecifier ( '*' )? -> ^( C_TYPE typeSpecifier ( '*' )? ) )
            // SimpleCv4.g:149:9: typeSpecifier ( '*' )?
            this.pushFollow(SimpleCv4Parser.FOLLOW_typeSpecifier_in_type1054);
            typeSpecifier28=this.typeSpecifier();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_typeSpecifier.add(typeSpecifier28.getTree());
            // SimpleCv4.g:149:23: ( '*' )?
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0==113) ) {
                alt8=1;
            }
            switch (alt8) {
                case 1 :
                    // SimpleCv4.g:0:0: '*'
                    char_literal29=this.match(this.input,113,SimpleCv4Parser.FOLLOW_113_in_type1056); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_113.add(char_literal29);



                    break;

            }



            // AST REWRITE
            // elements: typeSpecifier, 113
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 150:6: -> ^( C_TYPE typeSpecifier ( '*' )? )
            {
                // SimpleCv4.g:150:9: ^( C_TYPE typeSpecifier ( '*' )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(C_TYPE, "C_TYPE"), root_1);

                this.adaptor.addChild(root_1, stream_typeSpecifier.nextTree());
                // SimpleCv4.g:150:32: ( '*' )?
                if ( stream_113.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_113.nextNode());

                }
                stream_113.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    typeSpecifier_return: (function() {
        SimpleCv4Parser.typeSpecifier_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.typeSpecifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:153:1: typeSpecifier : ( 'void' -> TYPE_VOID | 'char' -> TYPE_I8 | 'short' -> TYPE_I16 | 'int' -> TYPE_I32 | 'long' -> TYPE_I32 | 'float' -> TYPE_F32 | 'double' -> TYPE_F64 | 'signed' -> TYPE_I32 | 'unsigned' -> ^( TYPE_I32 TYPE_UNSIGNED ) | ID -> ^( TYPE_CUSTOM ID ) );
    // $ANTLR start "typeSpecifier"
    typeSpecifier: function() {
        var retval = new SimpleCv4Parser.typeSpecifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal30 = null;
        var string_literal31 = null;
        var string_literal32 = null;
        var string_literal33 = null;
        var string_literal34 = null;
        var string_literal35 = null;
        var string_literal36 = null;
        var string_literal37 = null;
        var string_literal38 = null;
        var ID39 = null;

        var string_literal30_tree=null;
        var string_literal31_tree=null;
        var string_literal32_tree=null;
        var string_literal33_tree=null;
        var string_literal34_tree=null;
        var string_literal35_tree=null;
        var string_literal36_tree=null;
        var string_literal37_tree=null;
        var string_literal38_tree=null;
        var ID39_tree=null;
        var stream_116=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 116");
        var stream_117=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 117");
        var stream_114=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 114");
        var stream_115=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 115");
        var stream_121=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 121");
        var stream_122=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 122");
        var stream_ID=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ID");
        var stream_120=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 120");
        var stream_118=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 118");
        var stream_119=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 119");

        try {
            // SimpleCv4.g:154:2: ( 'void' -> TYPE_VOID | 'char' -> TYPE_I8 | 'short' -> TYPE_I16 | 'int' -> TYPE_I32 | 'long' -> TYPE_I32 | 'float' -> TYPE_F32 | 'double' -> TYPE_F64 | 'signed' -> TYPE_I32 | 'unsigned' -> ^( TYPE_I32 TYPE_UNSIGNED ) | ID -> ^( TYPE_CUSTOM ID ) )
            var alt9=10;
            switch ( this.input.LA(1) ) {
            case 114:
                alt9=1;
                break;
            case 115:
                alt9=2;
                break;
            case 116:
                alt9=3;
                break;
            case 117:
                alt9=4;
                break;
            case 118:
                alt9=5;
                break;
            case 119:
                alt9=6;
                break;
            case 120:
                alt9=7;
                break;
            case 121:
                alt9=8;
                break;
            case 122:
                alt9=9;
                break;
            case ID:
                alt9=10;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 9, 0, this.input);

                throw nvae;
            }

            switch (alt9) {
                case 1 :
                    // SimpleCv4.g:154:4: 'void'
                    string_literal30=this.match(this.input,114,SimpleCv4Parser.FOLLOW_114_in_typeSpecifier1091); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_114.add(string_literal30);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 155:3: -> TYPE_VOID
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_VOID, "TYPE_VOID"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:156:4: 'char'
                    string_literal31=this.match(this.input,115,SimpleCv4Parser.FOLLOW_115_in_typeSpecifier1102); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_115.add(string_literal31);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 157:3: -> TYPE_I8
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_I8, "TYPE_I8"));

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:158:4: 'short'
                    string_literal32=this.match(this.input,116,SimpleCv4Parser.FOLLOW_116_in_typeSpecifier1113); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_116.add(string_literal32);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 159:3: -> TYPE_I16
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_I16, "TYPE_I16"));

                    }

                    retval.tree = root_0;}

                    break;
                case 4 :
                    // SimpleCv4.g:160:4: 'int'
                    string_literal33=this.match(this.input,117,SimpleCv4Parser.FOLLOW_117_in_typeSpecifier1124); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_117.add(string_literal33);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 161:3: -> TYPE_I32
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_I32, "TYPE_I32"));

                    }

                    retval.tree = root_0;}

                    break;
                case 5 :
                    // SimpleCv4.g:162:4: 'long'
                    string_literal34=this.match(this.input,118,SimpleCv4Parser.FOLLOW_118_in_typeSpecifier1135); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_118.add(string_literal34);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 163:3: -> TYPE_I32
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_I32, "TYPE_I32"));

                    }

                    retval.tree = root_0;}

                    break;
                case 6 :
                    // SimpleCv4.g:164:4: 'float'
                    string_literal35=this.match(this.input,119,SimpleCv4Parser.FOLLOW_119_in_typeSpecifier1146); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_119.add(string_literal35);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 165:3: -> TYPE_F32
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_F32, "TYPE_F32"));

                    }

                    retval.tree = root_0;}

                    break;
                case 7 :
                    // SimpleCv4.g:166:4: 'double'
                    string_literal36=this.match(this.input,120,SimpleCv4Parser.FOLLOW_120_in_typeSpecifier1157); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_120.add(string_literal36);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 167:3: -> TYPE_F64
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_F64, "TYPE_F64"));

                    }

                    retval.tree = root_0;}

                    break;
                case 8 :
                    // SimpleCv4.g:168:4: 'signed'
                    string_literal37=this.match(this.input,121,SimpleCv4Parser.FOLLOW_121_in_typeSpecifier1168); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_121.add(string_literal37);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 169:3: -> TYPE_I32
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_I32, "TYPE_I32"));

                    }

                    retval.tree = root_0;}

                    break;
                case 9 :
                    // SimpleCv4.g:170:4: 'unsigned'
                    string_literal38=this.match(this.input,122,SimpleCv4Parser.FOLLOW_122_in_typeSpecifier1179); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_122.add(string_literal38);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 171:3: -> ^( TYPE_I32 TYPE_UNSIGNED )
                    {
                        // SimpleCv4.g:171:6: ^( TYPE_I32 TYPE_UNSIGNED )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(TYPE_I32, "TYPE_I32"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(TYPE_UNSIGNED, "TYPE_UNSIGNED"));

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 10 :
                    // SimpleCv4.g:172:4: ID
                    ID39=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_typeSpecifier1194); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_ID.add(ID39);



                    // AST REWRITE
                    // elements: ID
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 173:3: -> ^( TYPE_CUSTOM ID )
                    {
                        // SimpleCv4.g:173:6: ^( TYPE_CUSTOM ID )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(TYPE_CUSTOM, "TYPE_CUSTOM"), root_1);

                        this.adaptor.addChild(root_1, stream_ID.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    declarator_return: (function() {
        SimpleCv4Parser.declarator_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.declarator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:176:1: declarator : ID ;
    // $ANTLR start "declarator"
    declarator: function() {
        var retval = new SimpleCv4Parser.declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID40 = null;

        var ID40_tree=null;

        try {
            // SimpleCv4.g:177:5: ( ID )
            // SimpleCv4.g:177:10: ID
            root_0 = this.adaptor.nil();

            ID40=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_declarator1222); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            ID40_tree = this.adaptor.create(ID40);
            this.adaptor.addChild(root_0, ID40_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    typeDefinition_return: (function() {
        SimpleCv4Parser.typeDefinition_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.typeDefinition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:180:1: typeDefinition : 'typedef' oldTypeName newTypeName ';' -> ^( TYPE_DEF ^( TYPE_OLD oldTypeName ) ^( TYPE_NEW newTypeName ) ) ;
    // $ANTLR start "typeDefinition"
    typeDefinition: function() {
        var retval = new SimpleCv4Parser.typeDefinition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal41 = null;
        var char_literal44 = null;
         var oldTypeName42 = null;
         var newTypeName43 = null;

        var string_literal41_tree=null;
        var char_literal44_tree=null;
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_newTypeName=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule newTypeName");
        var stream_oldTypeName=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule oldTypeName");
        try {
            // SimpleCv4.g:181:5: ( 'typedef' oldTypeName newTypeName ';' -> ^( TYPE_DEF ^( TYPE_OLD oldTypeName ) ^( TYPE_NEW newTypeName ) ) )
            // SimpleCv4.g:181:10: 'typedef' oldTypeName newTypeName ';'
            string_literal41=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_typeDefinition1243); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_123.add(string_literal41);

            this.pushFollow(SimpleCv4Parser.FOLLOW_oldTypeName_in_typeDefinition1245);
            oldTypeName42=this.oldTypeName();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_oldTypeName.add(oldTypeName42.getTree());
            this.pushFollow(SimpleCv4Parser.FOLLOW_newTypeName_in_typeDefinition1247);
            newTypeName43=this.newTypeName();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_newTypeName.add(newTypeName43.getTree());
            char_literal44=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_typeDefinition1249); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_106.add(char_literal44);



            // AST REWRITE
            // elements: oldTypeName, newTypeName
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 182:6: -> ^( TYPE_DEF ^( TYPE_OLD oldTypeName ) ^( TYPE_NEW newTypeName ) )
            {
                // SimpleCv4.g:182:9: ^( TYPE_DEF ^( TYPE_OLD oldTypeName ) ^( TYPE_NEW newTypeName ) )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(TYPE_DEF, "TYPE_DEF"), root_1);

                // SimpleCv4.g:182:20: ^( TYPE_OLD oldTypeName )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(TYPE_OLD, "TYPE_OLD"), root_2);

                this.adaptor.addChild(root_2, stream_oldTypeName.nextTree());

                this.adaptor.addChild(root_1, root_2);
                }
                // SimpleCv4.g:182:44: ^( TYPE_NEW newTypeName )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(TYPE_NEW, "TYPE_NEW"), root_2);

                this.adaptor.addChild(root_2, stream_newTypeName.nextTree());

                this.adaptor.addChild(root_1, root_2);
                }

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    oldTypeName_return: (function() {
        SimpleCv4Parser.oldTypeName_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.oldTypeName_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:185:1: oldTypeName : typeSpecifier ;
    // $ANTLR start "oldTypeName"
    oldTypeName: function() {
        var retval = new SimpleCv4Parser.oldTypeName_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var typeSpecifier45 = null;


        try {
            // SimpleCv4.g:186:5: ( typeSpecifier )
            // SimpleCv4.g:186:7: typeSpecifier
            root_0 = this.adaptor.nil();

            this.pushFollow(SimpleCv4Parser.FOLLOW_typeSpecifier_in_oldTypeName1290);
            typeSpecifier45=this.typeSpecifier();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, typeSpecifier45.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    newTypeName_return: (function() {
        SimpleCv4Parser.newTypeName_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.newTypeName_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:189:1: newTypeName : ID ;
    // $ANTLR start "newTypeName"
    newTypeName: function() {
        var retval = new SimpleCv4Parser.newTypeName_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID46 = null;

        var ID46_tree=null;

        try {
            // SimpleCv4.g:190:5: ( ID )
            // SimpleCv4.g:190:9: ID
            root_0 = this.adaptor.nil();

            ID46=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_newTypeName1310); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            ID46_tree = this.adaptor.create(ID46);
            this.adaptor.addChild(root_0, ID46_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    structDefinition_return: (function() {
        SimpleCv4Parser.structDefinition_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.structDefinition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:193:1: structDefinition : ( 'typedef' )? 'struct' structName structBlock ( structVar ( ',' structVar )* )? ';' -> ^( STRUCT_DEF ^( structName ( structVar )* structBlock ) ) ;
    // $ANTLR start "structDefinition"
    structDefinition: function() {
        var retval = new SimpleCv4Parser.structDefinition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal47 = null;
        var string_literal48 = null;
        var char_literal52 = null;
        var char_literal54 = null;
         var structName49 = null;
         var structBlock50 = null;
         var structVar51 = null;
         var structVar53 = null;

        var string_literal47_tree=null;
        var string_literal48_tree=null;
        var char_literal52_tree=null;
        var char_literal54_tree=null;
        var stream_112=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 112");
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_124=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 124");
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_structName=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule structName");
        var stream_structBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule structBlock");
        var stream_structVar=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule structVar");
        try {
            // SimpleCv4.g:194:5: ( ( 'typedef' )? 'struct' structName structBlock ( structVar ( ',' structVar )* )? ';' -> ^( STRUCT_DEF ^( structName ( structVar )* structBlock ) ) )
            // SimpleCv4.g:194:9: ( 'typedef' )? 'struct' structName structBlock ( structVar ( ',' structVar )* )? ';'
            // SimpleCv4.g:194:9: ( 'typedef' )?
            var alt10=2;
            var LA10_0 = this.input.LA(1);

            if ( (LA10_0==123) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // SimpleCv4.g:194:11: 'typedef'
                    string_literal47=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_structDefinition1337); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_123.add(string_literal47);



                    break;

            }

            string_literal48=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_structDefinition1342); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_124.add(string_literal48);

            this.pushFollow(SimpleCv4Parser.FOLLOW_structName_in_structDefinition1344);
            structName49=this.structName();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_structName.add(structName49.getTree());
            this.pushFollow(SimpleCv4Parser.FOLLOW_structBlock_in_structDefinition1346);
            structBlock50=this.structBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_structBlock.add(structBlock50.getTree());
            // SimpleCv4.g:194:56: ( structVar ( ',' structVar )* )?
            var alt12=2;
            var LA12_0 = this.input.LA(1);

            if ( (LA12_0==ID) ) {
                alt12=1;
            }
            switch (alt12) {
                case 1 :
                    // SimpleCv4.g:194:58: structVar ( ',' structVar )*
                    this.pushFollow(SimpleCv4Parser.FOLLOW_structVar_in_structDefinition1350);
                    structVar51=this.structVar();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_structVar.add(structVar51.getTree());
                    // SimpleCv4.g:194:68: ( ',' structVar )*
                    loop11:
                    do {
                        var alt11=2;
                        var LA11_0 = this.input.LA(1);

                        if ( (LA11_0==112) ) {
                            alt11=1;
                        }


                        switch (alt11) {
                        case 1 :
                            // SimpleCv4.g:194:70: ',' structVar
                            char_literal52=this.match(this.input,112,SimpleCv4Parser.FOLLOW_112_in_structDefinition1354); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_112.add(char_literal52);

                            this.pushFollow(SimpleCv4Parser.FOLLOW_structVar_in_structDefinition1356);
                            structVar53=this.structVar();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_structVar.add(structVar53.getTree());


                            break;

                        default :
                            break loop11;
                        }
                    } while (true);



                    break;

            }

            char_literal54=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_structDefinition1364); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_106.add(char_literal54);



            // AST REWRITE
            // elements: structName, structBlock, structVar
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 195:6: -> ^( STRUCT_DEF ^( structName ( structVar )* structBlock ) )
            {
                // SimpleCv4.g:195:9: ^( STRUCT_DEF ^( structName ( structVar )* structBlock ) )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(STRUCT_DEF, "STRUCT_DEF"), root_1);

                // SimpleCv4.g:195:22: ^( structName ( structVar )* structBlock )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(stream_structName.nextNode(), root_2);

                // SimpleCv4.g:195:35: ( structVar )*
                while ( stream_structVar.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_structVar.nextTree());

                }
                stream_structVar.reset();
                this.adaptor.addChild(root_2, stream_structBlock.nextTree());

                this.adaptor.addChild(root_1, root_2);
                }

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    structName_return: (function() {
        SimpleCv4Parser.structName_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.structName_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:198:1: structName : ID ;
    // $ANTLR start "structName"
    structName: function() {
        var retval = new SimpleCv4Parser.structName_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID55 = null;

        var ID55_tree=null;

        try {
            // SimpleCv4.g:199:5: ( ID )
            // SimpleCv4.g:199:9: ID
            root_0 = this.adaptor.nil();

            ID55=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_structName1405); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            ID55_tree = this.adaptor.create(ID55);
            this.adaptor.addChild(root_0, ID55_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    structVar_return: (function() {
        SimpleCv4Parser.structVar_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.structVar_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:202:1: structVar : declarator -> ^( STRUCT_CNAME declarator ) ;
    // $ANTLR start "structVar"
    structVar: function() {
        var retval = new SimpleCv4Parser.structVar_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var declarator56 = null;

        var stream_declarator=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule declarator");
        try {
            // SimpleCv4.g:203:5: ( declarator -> ^( STRUCT_CNAME declarator ) )
            // SimpleCv4.g:203:9: declarator
            this.pushFollow(SimpleCv4Parser.FOLLOW_declarator_in_structVar1424);
            declarator56=this.declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_declarator.add(declarator56.getTree());


            // AST REWRITE
            // elements: declarator
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 204:6: -> ^( STRUCT_CNAME declarator )
            {
                // SimpleCv4.g:204:9: ^( STRUCT_CNAME declarator )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(STRUCT_CNAME, "STRUCT_CNAME"), root_1);

                this.adaptor.addChild(root_1, stream_declarator.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    structBlock_return: (function() {
        SimpleCv4Parser.structBlock_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.structBlock_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:207:1: structBlock : '{' ( variable )* '}' -> ( variable )* ;
    // $ANTLR start "structBlock"
    structBlock: function() {
        var retval = new SimpleCv4Parser.structBlock_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal57 = null;
        var char_literal59 = null;
         var variable58 = null;

        var char_literal57_tree=null;
        var char_literal59_tree=null;
        var stream_125=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 125");
        var stream_126=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 126");
        var stream_variable=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule variable");
        try {
            // SimpleCv4.g:208:5: ( '{' ( variable )* '}' -> ( variable )* )
            // SimpleCv4.g:208:9: '{' ( variable )* '}'
            char_literal57=this.match(this.input,125,SimpleCv4Parser.FOLLOW_125_in_structBlock1456); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_125.add(char_literal57);

            // SimpleCv4.g:209:13: ( variable )*
            loop13:
            do {
                var alt13=2;
                var LA13_0 = this.input.LA(1);

                if ( (LA13_0==ID||(LA13_0>=114 && LA13_0<=122)) ) {
                    alt13=1;
                }


                switch (alt13) {
                case 1 :
                    // SimpleCv4.g:0:0: variable
                    this.pushFollow(SimpleCv4Parser.FOLLOW_variable_in_structBlock1470);
                    variable58=this.variable();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_variable.add(variable58.getTree());


                    break;

                default :
                    break loop13;
                }
            } while (true);

            char_literal59=this.match(this.input,126,SimpleCv4Parser.FOLLOW_126_in_structBlock1481); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_126.add(char_literal59);



            // AST REWRITE
            // elements: variable
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 211:6: -> ( variable )*
            {
                // SimpleCv4.g:211:9: ( variable )*
                while ( stream_variable.hasNext() ) {
                    this.adaptor.addChild(root_0, stream_variable.nextTree());

                }
                stream_variable.reset();

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    functionHeader_return: (function() {
        SimpleCv4Parser.functionHeader_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.functionHeader_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:214:1: functionHeader : type ID '(' ( formalParameter ( ',' formalParameter )* )? ')' -> ^( FUNC_HEADER type ^( FUNC_NAME ID ) ( formalParameter )* ) ;
    // $ANTLR start "functionHeader"
    functionHeader: function() {
        var retval = new SimpleCv4Parser.functionHeader_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID61 = null;
        var char_literal62 = null;
        var char_literal64 = null;
        var char_literal66 = null;
         var type60 = null;
         var formalParameter63 = null;
         var formalParameter65 = null;

        var ID61_tree=null;
        var char_literal62_tree=null;
        var char_literal64_tree=null;
        var char_literal66_tree=null;
        var stream_127=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 127");
        var stream_128=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 128");
        var stream_112=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 112");
        var stream_ID=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ID");
        var stream_formalParameter=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule formalParameter");
        var stream_type=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule type");
        try {
            // SimpleCv4.g:215:5: ( type ID '(' ( formalParameter ( ',' formalParameter )* )? ')' -> ^( FUNC_HEADER type ^( FUNC_NAME ID ) ( formalParameter )* ) )
            // SimpleCv4.g:215:9: type ID '(' ( formalParameter ( ',' formalParameter )* )? ')'
            this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_functionHeader1510);
            type60=this.type();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_type.add(type60.getTree());
            ID61=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_functionHeader1512); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ID.add(ID61);

            char_literal62=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_functionHeader1514); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_127.add(char_literal62);

            // SimpleCv4.g:215:21: ( formalParameter ( ',' formalParameter )* )?
            var alt15=2;
            var LA15_0 = this.input.LA(1);

            if ( (LA15_0==ID||(LA15_0>=114 && LA15_0<=122)) ) {
                alt15=1;
            }
            switch (alt15) {
                case 1 :
                    // SimpleCv4.g:215:23: formalParameter ( ',' formalParameter )*
                    this.pushFollow(SimpleCv4Parser.FOLLOW_formalParameter_in_functionHeader1518);
                    formalParameter63=this.formalParameter();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_formalParameter.add(formalParameter63.getTree());
                    // SimpleCv4.g:215:39: ( ',' formalParameter )*
                    loop14:
                    do {
                        var alt14=2;
                        var LA14_0 = this.input.LA(1);

                        if ( (LA14_0==112) ) {
                            alt14=1;
                        }


                        switch (alt14) {
                        case 1 :
                            // SimpleCv4.g:215:41: ',' formalParameter
                            char_literal64=this.match(this.input,112,SimpleCv4Parser.FOLLOW_112_in_functionHeader1522); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_112.add(char_literal64);

                            this.pushFollow(SimpleCv4Parser.FOLLOW_formalParameter_in_functionHeader1524);
                            formalParameter65=this.formalParameter();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_formalParameter.add(formalParameter65.getTree());


                            break;

                        default :
                            break loop14;
                        }
                    } while (true);



                    break;

            }

            char_literal66=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_functionHeader1532); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_128.add(char_literal66);



            // AST REWRITE
            // elements: formalParameter, type, ID
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 216:6: -> ^( FUNC_HEADER type ^( FUNC_NAME ID ) ( formalParameter )* )
            {
                // SimpleCv4.g:216:9: ^( FUNC_HEADER type ^( FUNC_NAME ID ) ( formalParameter )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_HEADER, "FUNC_HEADER"), root_1);

                this.adaptor.addChild(root_1, stream_type.nextTree());
                // SimpleCv4.g:216:28: ^( FUNC_NAME ID )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_NAME, "FUNC_NAME"), root_2);

                this.adaptor.addChild(root_2, stream_ID.nextNode());

                this.adaptor.addChild(root_1, root_2);
                }
                // SimpleCv4.g:216:44: ( formalParameter )*
                while ( stream_formalParameter.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_formalParameter.nextTree());

                }
                stream_formalParameter.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    formalParameter_return: (function() {
        SimpleCv4Parser.formalParameter_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.formalParameter_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:219:1: formalParameter : type declarator -> ^( FUNC_PARAM type declarator ) ;
    // $ANTLR start "formalParameter"
    formalParameter: function() {
        var retval = new SimpleCv4Parser.formalParameter_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var type67 = null;
         var declarator68 = null;

        var stream_declarator=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule declarator");
        var stream_type=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule type");
        try {
            // SimpleCv4.g:220:5: ( type declarator -> ^( FUNC_PARAM type declarator ) )
            // SimpleCv4.g:220:9: type declarator
            this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_formalParameter1573);
            type67=this.type();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_type.add(type67.getTree());
            this.pushFollow(SimpleCv4Parser.FOLLOW_declarator_in_formalParameter1575);
            declarator68=this.declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_declarator.add(declarator68.getTree());


            // AST REWRITE
            // elements: type, declarator
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 221:6: -> ^( FUNC_PARAM type declarator )
            {
                // SimpleCv4.g:221:9: ^( FUNC_PARAM type declarator )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_PARAM, "FUNC_PARAM"), root_1);

                this.adaptor.addChild(root_1, stream_type.nextTree());
                this.adaptor.addChild(root_1, stream_declarator.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    block_return: (function() {
        SimpleCv4Parser.block_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.block_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:224:1: block : ( '{' ( variable )* ( stat )* '}' -> ^( BLOCK ( variable )* ( stat )* ) | stat -> ^( BLOCK stat ) | ';' -> EMPTY_BLOCK );
    // $ANTLR start "block"
    block: function() {
        var retval = new SimpleCv4Parser.block_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal69 = null;
        var char_literal72 = null;
        var char_literal74 = null;
         var variable70 = null;
         var stat71 = null;
         var stat73 = null;

        var char_literal69_tree=null;
        var char_literal72_tree=null;
        var char_literal74_tree=null;
        var stream_125=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 125");
        var stream_126=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 126");
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_variable=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule variable");
        var stream_stat=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule stat");
        try {
            // SimpleCv4.g:225:5: ( '{' ( variable )* ( stat )* '}' -> ^( BLOCK ( variable )* ( stat )* ) | stat -> ^( BLOCK stat ) | ';' -> EMPTY_BLOCK )
            var alt18=3;
            switch ( this.input.LA(1) ) {
            case 125:
                alt18=1;
                break;
            case ID:
            case INT:
            case STRING:
            case 113:
            case 127:
            case 129:
            case 130:
            case 131:
            case 132:
            case 134:
            case 135:
            case 136:
            case 147:
            case 148:
            case 149:
            case 150:
            case 151:
                alt18=2;
                break;
            case 106:
                alt18=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                throw nvae;
            }

            switch (alt18) {
                case 1 :
                    // SimpleCv4.g:225:9: '{' ( variable )* ( stat )* '}'
                    char_literal69=this.match(this.input,125,SimpleCv4Parser.FOLLOW_125_in_block1617); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_125.add(char_literal69);

                    // SimpleCv4.g:226:13: ( variable )*
                    loop16:
                    do {
                        var alt16=2;
                        var LA16_0 = this.input.LA(1);

                        if ( (LA16_0==ID) ) {
                            var LA16_2 = this.input.LA(2);

                            if ( (LA16_2==113) ) {
                                var LA16_4 = this.input.LA(3);

                                if ( (LA16_4==ID) ) {
                                    var LA16_5 = this.input.LA(4);

                                    if ( (LA16_5==106) ) {
                                        var LA16_6 = this.input.LA(5);

                                        if ( (this.synpred28_SimpleCv4()) ) {
                                            alt16=1;
                                        }


                                    }
                                    else if ( (LA16_5==112||(LA16_5>=137 && LA16_5<=146)) ) {
                                        alt16=1;
                                    }


                                }


                            }
                            else if ( (LA16_2==ID) ) {
                                alt16=1;
                            }


                        }
                        else if ( ((LA16_0>=114 && LA16_0<=122)) ) {
                            alt16=1;
                        }


                        switch (alt16) {
                        case 1 :
                            // SimpleCv4.g:0:0: variable
                            this.pushFollow(SimpleCv4Parser.FOLLOW_variable_in_block1631);
                            variable70=this.variable();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_variable.add(variable70.getTree());


                            break;

                        default :
                            break loop16;
                        }
                    } while (true);

                    // SimpleCv4.g:227:13: ( stat )*
                    loop17:
                    do {
                        var alt17=2;
                        var LA17_0 = this.input.LA(1);

                        if ( ((LA17_0>=ID && LA17_0<=STRING)||LA17_0==113||LA17_0==127||(LA17_0>=129 && LA17_0<=132)||(LA17_0>=134 && LA17_0<=136)||(LA17_0>=147 && LA17_0<=151)) ) {
                            alt17=1;
                        }


                        switch (alt17) {
                        case 1 :
                            // SimpleCv4.g:0:0: stat
                            this.pushFollow(SimpleCv4Parser.FOLLOW_stat_in_block1646);
                            stat71=this.stat();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_stat.add(stat71.getTree());


                            break;

                        default :
                            break loop17;
                        }
                    } while (true);

                    char_literal72=this.match(this.input,126,SimpleCv4Parser.FOLLOW_126_in_block1657); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_126.add(char_literal72);



                    // AST REWRITE
                    // elements: variable, stat
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 229:9: -> ^( BLOCK ( variable )* ( stat )* )
                    {
                        // SimpleCv4.g:229:12: ^( BLOCK ( variable )* ( stat )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(BLOCK, "BLOCK"), root_1);

                        // SimpleCv4.g:229:20: ( variable )*
                        while ( stream_variable.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_variable.nextTree());

                        }
                        stream_variable.reset();
                        // SimpleCv4.g:229:30: ( stat )*
                        while ( stream_stat.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_stat.nextTree());

                        }
                        stream_stat.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:230:9: stat
                    this.pushFollow(SimpleCv4Parser.FOLLOW_stat_in_block1687);
                    stat73=this.stat();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_stat.add(stat73.getTree());


                    // AST REWRITE
                    // elements: stat
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 231:6: -> ^( BLOCK stat )
                    {
                        // SimpleCv4.g:231:9: ^( BLOCK stat )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(BLOCK, "BLOCK"), root_1);

                        this.adaptor.addChild(root_1, stream_stat.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:232:9: ';'
                    char_literal74=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_block1710); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_106.add(char_literal74);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 233:6: -> EMPTY_BLOCK
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(EMPTY_BLOCK, "EMPTY_BLOCK"));

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    stat_return: (function() {
        SimpleCv4Parser.stat_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.stat_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:236:1: stat : ( forStat | whileStat | ifStat | expression ';' -> expression | jumpStat );
    // $ANTLR start "stat"
    stat: function() {
        var retval = new SimpleCv4Parser.stat_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal79 = null;
         var forStat75 = null;
         var whileStat76 = null;
         var ifStat77 = null;
         var expression78 = null;
         var jumpStat80 = null;

        var char_literal79_tree=null;
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        try {
            // SimpleCv4.g:237:5: ( forStat | whileStat | ifStat | expression ';' -> expression | jumpStat )
            var alt19=5;
            switch ( this.input.LA(1) ) {
            case 129:
                alt19=1;
                break;
            case 130:
            case 131:
                alt19=2;
                break;
            case 132:
                alt19=3;
                break;
            case ID:
            case INT:
            case STRING:
            case 113:
            case 127:
            case 147:
            case 148:
            case 149:
            case 150:
            case 151:
                alt19=4;
                break;
            case 134:
            case 135:
            case 136:
                alt19=5;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 19, 0, this.input);

                throw nvae;
            }

            switch (alt19) {
                case 1 :
                    // SimpleCv4.g:237:9: forStat
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_forStat_in_stat1738);
                    forStat75=this.forStat();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forStat75.getTree());


                    break;
                case 2 :
                    // SimpleCv4.g:238:9: whileStat
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_whileStat_in_stat1748);
                    whileStat76=this.whileStat();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, whileStat76.getTree());


                    break;
                case 3 :
                    // SimpleCv4.g:239:9: ifStat
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_ifStat_in_stat1758);
                    ifStat77=this.ifStat();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, ifStat77.getTree());


                    break;
                case 4 :
                    // SimpleCv4.g:240:9: expression ';'
                    this.pushFollow(SimpleCv4Parser.FOLLOW_expression_in_stat1768);
                    expression78=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression78.getTree());
                    char_literal79=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_stat1770); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_106.add(char_literal79);



                    // AST REWRITE
                    // elements: expression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 241:6: -> expression
                    {
                        this.adaptor.addChild(root_0, stream_expression.nextTree());

                    }

                    retval.tree = root_0;}

                    break;
                case 5 :
                    // SimpleCv4.g:242:9: jumpStat
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_jumpStat_in_stat1800);
                    jumpStat80=this.jumpStat();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, jumpStat80.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    forStat_return: (function() {
        SimpleCv4Parser.forStat_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.forStat_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:245:1: forStat : 'for' '(' assignmentExpr ';' conditionalExpr ';' expression ')' block -> ^( FOR_STAT assignmentExpr conditionalExpr expression block ) ;
    // $ANTLR start "forStat"
    forStat: function() {
        var retval = new SimpleCv4Parser.forStat_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal81 = null;
        var char_literal82 = null;
        var char_literal84 = null;
        var char_literal86 = null;
        var char_literal88 = null;
         var assignmentExpr83 = null;
         var conditionalExpr85 = null;
         var expression87 = null;
         var block89 = null;

        var string_literal81_tree=null;
        var char_literal82_tree=null;
        var char_literal84_tree=null;
        var char_literal86_tree=null;
        var char_literal88_tree=null;
        var stream_127=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 127");
        var stream_128=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 128");
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_129=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 129");
        var stream_assignmentExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule assignmentExpr");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        var stream_conditionalExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule conditionalExpr");
        var stream_block=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule block");
        try {
            // SimpleCv4.g:246:5: ( 'for' '(' assignmentExpr ';' conditionalExpr ';' expression ')' block -> ^( FOR_STAT assignmentExpr conditionalExpr expression block ) )
            // SimpleCv4.g:246:9: 'for' '(' assignmentExpr ';' conditionalExpr ';' expression ')' block
            string_literal81=this.match(this.input,129,SimpleCv4Parser.FOLLOW_129_in_forStat1820); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_129.add(string_literal81);

            char_literal82=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_forStat1822); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_127.add(char_literal82);

            this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentExpr_in_forStat1824);
            assignmentExpr83=this.assignmentExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_assignmentExpr.add(assignmentExpr83.getTree());
            char_literal84=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_forStat1826); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_106.add(char_literal84);

            this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_forStat1828);
            conditionalExpr85=this.conditionalExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr85.getTree());
            char_literal86=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_forStat1830); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_106.add(char_literal86);

            this.pushFollow(SimpleCv4Parser.FOLLOW_expression_in_forStat1832);
            expression87=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_expression.add(expression87.getTree());
            char_literal88=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_forStat1834); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_128.add(char_literal88);

            this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_forStat1836);
            block89=this.block();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_block.add(block89.getTree());


            // AST REWRITE
            // elements: conditionalExpr, block, assignmentExpr, expression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 247:6: -> ^( FOR_STAT assignmentExpr conditionalExpr expression block )
            {
                // SimpleCv4.g:247:9: ^( FOR_STAT assignmentExpr conditionalExpr expression block )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FOR_STAT, "FOR_STAT"), root_1);

                this.adaptor.addChild(root_1, stream_assignmentExpr.nextTree());
                this.adaptor.addChild(root_1, stream_conditionalExpr.nextTree());
                this.adaptor.addChild(root_1, stream_expression.nextTree());
                this.adaptor.addChild(root_1, stream_block.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    whileStat_return: (function() {
        SimpleCv4Parser.whileStat_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.whileStat_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:250:1: whileStat : ( 'while' '(' conditionalExpr ')' block -> ^( WHILE_STAT conditionalExpr block ) | 'do' block 'while' '(' conditionalExpr ')' ';' -> ^( DOWHILE_STAT block conditionalExpr ) );
    // $ANTLR start "whileStat"
    whileStat: function() {
        var retval = new SimpleCv4Parser.whileStat_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal90 = null;
        var char_literal91 = null;
        var char_literal93 = null;
        var string_literal95 = null;
        var string_literal97 = null;
        var char_literal98 = null;
        var char_literal100 = null;
        var char_literal101 = null;
         var conditionalExpr92 = null;
         var block94 = null;
         var block96 = null;
         var conditionalExpr99 = null;

        var string_literal90_tree=null;
        var char_literal91_tree=null;
        var char_literal93_tree=null;
        var string_literal95_tree=null;
        var string_literal97_tree=null;
        var char_literal98_tree=null;
        var char_literal100_tree=null;
        var char_literal101_tree=null;
        var stream_127=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 127");
        var stream_128=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 128");
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_131=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 131");
        var stream_130=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 130");
        var stream_conditionalExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule conditionalExpr");
        var stream_block=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule block");
        try {
            // SimpleCv4.g:251:5: ( 'while' '(' conditionalExpr ')' block -> ^( WHILE_STAT conditionalExpr block ) | 'do' block 'while' '(' conditionalExpr ')' ';' -> ^( DOWHILE_STAT block conditionalExpr ) )
            var alt20=2;
            var LA20_0 = this.input.LA(1);

            if ( (LA20_0==130) ) {
                alt20=1;
            }
            else if ( (LA20_0==131) ) {
                alt20=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 20, 0, this.input);

                throw nvae;
            }
            switch (alt20) {
                case 1 :
                    // SimpleCv4.g:251:9: 'while' '(' conditionalExpr ')' block
                    string_literal90=this.match(this.input,130,SimpleCv4Parser.FOLLOW_130_in_whileStat1885); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_130.add(string_literal90);

                    char_literal91=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_whileStat1887); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_127.add(char_literal91);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_whileStat1889);
                    conditionalExpr92=this.conditionalExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr92.getTree());
                    char_literal93=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_whileStat1891); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_128.add(char_literal93);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_whileStat1893);
                    block94=this.block();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_block.add(block94.getTree());


                    // AST REWRITE
                    // elements: conditionalExpr, block
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 252:5: -> ^( WHILE_STAT conditionalExpr block )
                    {
                        // SimpleCv4.g:252:8: ^( WHILE_STAT conditionalExpr block )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(WHILE_STAT, "WHILE_STAT"), root_1);

                        this.adaptor.addChild(root_1, stream_conditionalExpr.nextTree());
                        this.adaptor.addChild(root_1, stream_block.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:253:9: 'do' block 'while' '(' conditionalExpr ')' ';'
                    string_literal95=this.match(this.input,131,SimpleCv4Parser.FOLLOW_131_in_whileStat1917); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_131.add(string_literal95);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_whileStat1919);
                    block96=this.block();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_block.add(block96.getTree());
                    string_literal97=this.match(this.input,130,SimpleCv4Parser.FOLLOW_130_in_whileStat1921); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_130.add(string_literal97);

                    char_literal98=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_whileStat1923); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_127.add(char_literal98);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_whileStat1925);
                    conditionalExpr99=this.conditionalExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr99.getTree());
                    char_literal100=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_whileStat1927); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_128.add(char_literal100);

                    char_literal101=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_whileStat1929); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_106.add(char_literal101);



                    // AST REWRITE
                    // elements: block, conditionalExpr
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 254:5: -> ^( DOWHILE_STAT block conditionalExpr )
                    {
                        // SimpleCv4.g:254:8: ^( DOWHILE_STAT block conditionalExpr )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(DOWHILE_STAT, "DOWHILE_STAT"), root_1);

                        this.adaptor.addChild(root_1, stream_block.nextTree());
                        this.adaptor.addChild(root_1, stream_conditionalExpr.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    ifStat_return: (function() {
        SimpleCv4Parser.ifStat_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.ifStat_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:257:1: ifStat : 'if' '(' conditionalExpr ')' block ( 'else' block )? -> ^( IF_STAT ^( IF_BRANCH conditionalExpr block ) ( ^( ELSE_BRANCH block ) )? ) ;
    // $ANTLR start "ifStat"
    ifStat: function() {
        var retval = new SimpleCv4Parser.ifStat_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal102 = null;
        var char_literal103 = null;
        var char_literal105 = null;
        var string_literal107 = null;
         var conditionalExpr104 = null;
         var block106 = null;
         var block108 = null;

        var string_literal102_tree=null;
        var char_literal103_tree=null;
        var char_literal105_tree=null;
        var string_literal107_tree=null;
        var stream_127=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 127");
        var stream_132=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 132");
        var stream_128=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 128");
        var stream_133=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 133");
        var stream_conditionalExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule conditionalExpr");
        var stream_block=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule block");
        try {
            // SimpleCv4.g:258:5: ( 'if' '(' conditionalExpr ')' block ( 'else' block )? -> ^( IF_STAT ^( IF_BRANCH conditionalExpr block ) ( ^( ELSE_BRANCH block ) )? ) )
            // SimpleCv4.g:258:9: 'if' '(' conditionalExpr ')' block ( 'else' block )?
            string_literal102=this.match(this.input,132,SimpleCv4Parser.FOLLOW_132_in_ifStat1962); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_132.add(string_literal102);

            char_literal103=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_ifStat1964); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_127.add(char_literal103);

            this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_ifStat1966);
            conditionalExpr104=this.conditionalExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr104.getTree());
            char_literal105=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_ifStat1968); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_128.add(char_literal105);

            this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_ifStat1970);
            block106=this.block();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_block.add(block106.getTree());
            // SimpleCv4.g:258:45: ( 'else' block )?
            var alt21=2;
            var LA21_0 = this.input.LA(1);

            if ( (LA21_0==133) ) {
                var LA21_1 = this.input.LA(2);

                if ( (this.synpred37_SimpleCv4()) ) {
                    alt21=1;
                }
            }
            switch (alt21) {
                case 1 :
                    // SimpleCv4.g:258:47: 'else' block
                    string_literal107=this.match(this.input,133,SimpleCv4Parser.FOLLOW_133_in_ifStat1975); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_133.add(string_literal107);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_ifStat1977);
                    block108=this.block();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_block.add(block108.getTree());


                    break;

            }



            // AST REWRITE
            // elements: block, block, conditionalExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 259:5: -> ^( IF_STAT ^( IF_BRANCH conditionalExpr block ) ( ^( ELSE_BRANCH block ) )? )
            {
                // SimpleCv4.g:259:8: ^( IF_STAT ^( IF_BRANCH conditionalExpr block ) ( ^( ELSE_BRANCH block ) )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(IF_STAT, "IF_STAT"), root_1);

                // SimpleCv4.g:259:18: ^( IF_BRANCH conditionalExpr block )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(IF_BRANCH, "IF_BRANCH"), root_2);

                this.adaptor.addChild(root_2, stream_conditionalExpr.nextTree());
                this.adaptor.addChild(root_2, stream_block.nextTree());

                this.adaptor.addChild(root_1, root_2);
                }
                // SimpleCv4.g:259:53: ( ^( ELSE_BRANCH block ) )?
                if ( stream_block.hasNext() ) {
                    // SimpleCv4.g:259:53: ^( ELSE_BRANCH block )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(this.adaptor.create(ELSE_BRANCH, "ELSE_BRANCH"), root_2);

                    this.adaptor.addChild(root_2, stream_block.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }

                }
                stream_block.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    jumpStat_return: (function() {
        SimpleCv4Parser.jumpStat_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.jumpStat_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:262:1: jumpStat : ( 'continue' ';' -> ^( JUMP_STAT JUMP_CONTINUE ) | 'break' ';' -> ^( JUMP_STAT JUMP_BREAK ) | 'return' ( primaryExpr )? ';' -> ^( JUMP_STAT ( ^( JUMP_RETURN primaryExpr ) )? ) );
    // $ANTLR start "jumpStat"
    jumpStat: function() {
        var retval = new SimpleCv4Parser.jumpStat_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal109 = null;
        var char_literal110 = null;
        var string_literal111 = null;
        var char_literal112 = null;
        var string_literal113 = null;
        var char_literal115 = null;
         var primaryExpr114 = null;

        var string_literal109_tree=null;
        var char_literal110_tree=null;
        var string_literal111_tree=null;
        var char_literal112_tree=null;
        var string_literal113_tree=null;
        var char_literal115_tree=null;
        var stream_134=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 134");
        var stream_135=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 135");
        var stream_136=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 136");
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_primaryExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule primaryExpr");
        try {
            // SimpleCv4.g:263:5: ( 'continue' ';' -> ^( JUMP_STAT JUMP_CONTINUE ) | 'break' ';' -> ^( JUMP_STAT JUMP_BREAK ) | 'return' ( primaryExpr )? ';' -> ^( JUMP_STAT ( ^( JUMP_RETURN primaryExpr ) )? ) )
            var alt23=3;
            switch ( this.input.LA(1) ) {
            case 134:
                alt23=1;
                break;
            case 135:
                alt23=2;
                break;
            case 136:
                alt23=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 23, 0, this.input);

                throw nvae;
            }

            switch (alt23) {
                case 1 :
                    // SimpleCv4.g:263:8: 'continue' ';'
                    string_literal109=this.match(this.input,134,SimpleCv4Parser.FOLLOW_134_in_jumpStat2023); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_134.add(string_literal109);

                    char_literal110=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_jumpStat2025); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_106.add(char_literal110);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 264:5: -> ^( JUMP_STAT JUMP_CONTINUE )
                    {
                        // SimpleCv4.g:264:8: ^( JUMP_STAT JUMP_CONTINUE )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(JUMP_STAT, "JUMP_STAT"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(JUMP_CONTINUE, "JUMP_CONTINUE"));

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:265:8: 'break' ';'
                    string_literal111=this.match(this.input,135,SimpleCv4Parser.FOLLOW_135_in_jumpStat2046); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_135.add(string_literal111);

                    char_literal112=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_jumpStat2048); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_106.add(char_literal112);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 266:5: -> ^( JUMP_STAT JUMP_BREAK )
                    {
                        // SimpleCv4.g:266:8: ^( JUMP_STAT JUMP_BREAK )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(JUMP_STAT, "JUMP_STAT"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(JUMP_BREAK, "JUMP_BREAK"));

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:267:8: 'return' ( primaryExpr )? ';'
                    string_literal113=this.match(this.input,136,SimpleCv4Parser.FOLLOW_136_in_jumpStat2069); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_136.add(string_literal113);

                    // SimpleCv4.g:267:17: ( primaryExpr )?
                    var alt22=2;
                    var LA22_0 = this.input.LA(1);

                    if ( ((LA22_0>=ID && LA22_0<=STRING)||LA22_0==127) ) {
                        alt22=1;
                    }
                    switch (alt22) {
                        case 1 :
                            // SimpleCv4.g:267:18: primaryExpr
                            this.pushFollow(SimpleCv4Parser.FOLLOW_primaryExpr_in_jumpStat2072);
                            primaryExpr114=this.primaryExpr();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_primaryExpr.add(primaryExpr114.getTree());


                            break;

                    }

                    char_literal115=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_jumpStat2076); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_106.add(char_literal115);



                    // AST REWRITE
                    // elements: primaryExpr
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 268:5: -> ^( JUMP_STAT ( ^( JUMP_RETURN primaryExpr ) )? )
                    {
                        // SimpleCv4.g:268:8: ^( JUMP_STAT ( ^( JUMP_RETURN primaryExpr ) )? )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(JUMP_STAT, "JUMP_STAT"), root_1);

                        // SimpleCv4.g:268:20: ( ^( JUMP_RETURN primaryExpr ) )?
                        if ( stream_primaryExpr.hasNext() ) {
                            // SimpleCv4.g:268:20: ^( JUMP_RETURN primaryExpr )
                            {
                            var root_2 = this.adaptor.nil();
                            root_2 = this.adaptor.becomeRoot(this.adaptor.create(JUMP_RETURN, "JUMP_RETURN"), root_2);

                            this.adaptor.addChild(root_2, stream_primaryExpr.nextTree());

                            this.adaptor.addChild(root_1, root_2);
                            }

                        }
                        stream_primaryExpr.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    funcInvoke_return: (function() {
        SimpleCv4Parser.funcInvoke_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.funcInvoke_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:271:1: funcInvoke : ID '(' ( shiftExpr ( ',' shiftExpr )* )? ')' -> ^( FUNC_INVOKE ^( FUNC_NAME ID ) ( ^( FUNC_PARAM shiftExpr ) )* ) ;
    // $ANTLR start "funcInvoke"
    funcInvoke: function() {
        var retval = new SimpleCv4Parser.funcInvoke_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID116 = null;
        var char_literal117 = null;
        var char_literal119 = null;
        var char_literal121 = null;
         var shiftExpr118 = null;
         var shiftExpr120 = null;

        var ID116_tree=null;
        var char_literal117_tree=null;
        var char_literal119_tree=null;
        var char_literal121_tree=null;
        var stream_127=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 127");
        var stream_128=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 128");
        var stream_112=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 112");
        var stream_ID=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ID");
        var stream_shiftExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule shiftExpr");
        try {
            // SimpleCv4.g:272:5: ( ID '(' ( shiftExpr ( ',' shiftExpr )* )? ')' -> ^( FUNC_INVOKE ^( FUNC_NAME ID ) ( ^( FUNC_PARAM shiftExpr ) )* ) )
            // SimpleCv4.g:272:9: ID '(' ( shiftExpr ( ',' shiftExpr )* )? ')'
            ID116=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_funcInvoke2114); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ID.add(ID116);

            char_literal117=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_funcInvoke2116); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_127.add(char_literal117);

            // SimpleCv4.g:272:16: ( shiftExpr ( ',' shiftExpr )* )?
            var alt25=2;
            var LA25_0 = this.input.LA(1);

            if ( ((LA25_0>=ID && LA25_0<=STRING)||LA25_0==113||LA25_0==127||(LA25_0>=147 && LA25_0<=151)) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // SimpleCv4.g:272:18: shiftExpr ( ',' shiftExpr )*
                    this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_funcInvoke2120);
                    shiftExpr118=this.shiftExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr118.getTree());
                    // SimpleCv4.g:272:28: ( ',' shiftExpr )*
                    loop24:
                    do {
                        var alt24=2;
                        var LA24_0 = this.input.LA(1);

                        if ( (LA24_0==112) ) {
                            alt24=1;
                        }


                        switch (alt24) {
                        case 1 :
                            // SimpleCv4.g:272:30: ',' shiftExpr
                            char_literal119=this.match(this.input,112,SimpleCv4Parser.FOLLOW_112_in_funcInvoke2124); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_112.add(char_literal119);

                            this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_funcInvoke2126);
                            shiftExpr120=this.shiftExpr();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr120.getTree());


                            break;

                        default :
                            break loop24;
                        }
                    } while (true);



                    break;

            }

            char_literal121=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_funcInvoke2133); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_128.add(char_literal121);



            // AST REWRITE
            // elements: ID, shiftExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 273:5: -> ^( FUNC_INVOKE ^( FUNC_NAME ID ) ( ^( FUNC_PARAM shiftExpr ) )* )
            {
                // SimpleCv4.g:273:8: ^( FUNC_INVOKE ^( FUNC_NAME ID ) ( ^( FUNC_PARAM shiftExpr ) )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_INVOKE, "FUNC_INVOKE"), root_1);

                // SimpleCv4.g:273:22: ^( FUNC_NAME ID )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_NAME, "FUNC_NAME"), root_2);

                this.adaptor.addChild(root_2, stream_ID.nextNode());

                this.adaptor.addChild(root_1, root_2);
                }
                // SimpleCv4.g:273:38: ( ^( FUNC_PARAM shiftExpr ) )*
                while ( stream_shiftExpr.hasNext() ) {
                    // SimpleCv4.g:273:38: ^( FUNC_PARAM shiftExpr )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_PARAM, "FUNC_PARAM"), root_2);

                    this.adaptor.addChild(root_2, stream_shiftExpr.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }

                }
                stream_shiftExpr.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expression_return: (function() {
        SimpleCv4Parser.expression_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:276:1: expression : ( assignmentExpr | conditionalExpr );
    // $ANTLR start "expression"
    expression: function() {
        var retval = new SimpleCv4Parser.expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var assignmentExpr122 = null;
         var conditionalExpr123 = null;


        try {
            // SimpleCv4.g:277:5: ( assignmentExpr | conditionalExpr )
            var alt26=2;
            alt26 = this.dfa26.predict(this.input);
            switch (alt26) {
                case 1 :
                    // SimpleCv4.g:277:9: assignmentExpr
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentExpr_in_expression2175);
                    assignmentExpr122=this.assignmentExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpr122.getTree());


                    break;
                case 2 :
                    // SimpleCv4.g:278:7: conditionalExpr
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_expression2183);
                    conditionalExpr123=this.conditionalExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, conditionalExpr123.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    assignmentExpr_return: (function() {
        SimpleCv4Parser.assignmentExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.assignmentExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:281:1: assignmentExpr : unaryExpr ( assignmentOp shiftExpr )? -> ^( ASSIGNMENT ^( ASSIGNMENT_LEFT unaryExpr ) ( assignmentOp ^( ASSIGNMENT_RIGHT shiftExpr ) )? ) ;
    // $ANTLR start "assignmentExpr"
    assignmentExpr: function() {
        var retval = new SimpleCv4Parser.assignmentExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var unaryExpr124 = null;
         var assignmentOp125 = null;
         var shiftExpr126 = null;

        var stream_unaryExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryExpr");
        var stream_shiftExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule shiftExpr");
        var stream_assignmentOp=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule assignmentOp");
        try {
            // SimpleCv4.g:282:5: ( unaryExpr ( assignmentOp shiftExpr )? -> ^( ASSIGNMENT ^( ASSIGNMENT_LEFT unaryExpr ) ( assignmentOp ^( ASSIGNMENT_RIGHT shiftExpr ) )? ) )
            // SimpleCv4.g:282:9: unaryExpr ( assignmentOp shiftExpr )?
            this.pushFollow(SimpleCv4Parser.FOLLOW_unaryExpr_in_assignmentExpr2202);
            unaryExpr124=this.unaryExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_unaryExpr.add(unaryExpr124.getTree());
            // SimpleCv4.g:282:19: ( assignmentOp shiftExpr )?
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( ((LA27_0>=137 && LA27_0<=146)) ) {
                alt27=1;
            }
            switch (alt27) {
                case 1 :
                    // SimpleCv4.g:282:20: assignmentOp shiftExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentOp_in_assignmentExpr2205);
                    assignmentOp125=this.assignmentOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_assignmentOp.add(assignmentOp125.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_assignmentExpr2207);
                    shiftExpr126=this.shiftExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr126.getTree());


                    break;

            }



            // AST REWRITE
            // elements: unaryExpr, assignmentOp, shiftExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 283:6: -> ^( ASSIGNMENT ^( ASSIGNMENT_LEFT unaryExpr ) ( assignmentOp ^( ASSIGNMENT_RIGHT shiftExpr ) )? )
            {
                // SimpleCv4.g:283:9: ^( ASSIGNMENT ^( ASSIGNMENT_LEFT unaryExpr ) ( assignmentOp ^( ASSIGNMENT_RIGHT shiftExpr ) )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ASSIGNMENT, "ASSIGNMENT"), root_1);

                // SimpleCv4.g:283:22: ^( ASSIGNMENT_LEFT unaryExpr )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(ASSIGNMENT_LEFT, "ASSIGNMENT_LEFT"), root_2);

                this.adaptor.addChild(root_2, stream_unaryExpr.nextTree());

                this.adaptor.addChild(root_1, root_2);
                }
                // SimpleCv4.g:283:51: ( assignmentOp ^( ASSIGNMENT_RIGHT shiftExpr ) )?
                if ( stream_assignmentOp.hasNext()||stream_shiftExpr.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_assignmentOp.nextTree());
                    // SimpleCv4.g:283:65: ^( ASSIGNMENT_RIGHT shiftExpr )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(this.adaptor.create(ASSIGNMENT_RIGHT, "ASSIGNMENT_RIGHT"), root_2);

                    this.adaptor.addChild(root_2, stream_shiftExpr.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }

                }
                stream_assignmentOp.reset();
                stream_shiftExpr.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    assignmentOp_return: (function() {
        SimpleCv4Parser.assignmentOp_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.assignmentOp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:286:1: assignmentOp : ( '=' -> ASSIGN | '+=' -> PLUS_ASSIGN | '-=' -> MINUS_ASSIGN | '*=' -> MULTI_ASSIGN | '/=' -> DIVIDE_ASSIGN | '<<=' -> SHL_ASSIGN | '>>=' -> SHR_ASSIGN | '&=' -> AND_ASSIGN | '|=' -> OR_ASSIGN | '^=' -> NOT_ASSIGN );
    // $ANTLR start "assignmentOp"
    assignmentOp: function() {
        var retval = new SimpleCv4Parser.assignmentOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal127 = null;
        var string_literal128 = null;
        var string_literal129 = null;
        var string_literal130 = null;
        var string_literal131 = null;
        var string_literal132 = null;
        var string_literal133 = null;
        var string_literal134 = null;
        var string_literal135 = null;
        var string_literal136 = null;

        var char_literal127_tree=null;
        var string_literal128_tree=null;
        var string_literal129_tree=null;
        var string_literal130_tree=null;
        var string_literal131_tree=null;
        var string_literal132_tree=null;
        var string_literal133_tree=null;
        var string_literal134_tree=null;
        var string_literal135_tree=null;
        var string_literal136_tree=null;
        var stream_143=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 143");
        var stream_144=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 144");
        var stream_145=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 145");
        var stream_146=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 146");
        var stream_138=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 138");
        var stream_139=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 139");
        var stream_137=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 137");
        var stream_140=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 140");
        var stream_142=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 142");
        var stream_141=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 141");

        try {
            // SimpleCv4.g:287:5: ( '=' -> ASSIGN | '+=' -> PLUS_ASSIGN | '-=' -> MINUS_ASSIGN | '*=' -> MULTI_ASSIGN | '/=' -> DIVIDE_ASSIGN | '<<=' -> SHL_ASSIGN | '>>=' -> SHR_ASSIGN | '&=' -> AND_ASSIGN | '|=' -> OR_ASSIGN | '^=' -> NOT_ASSIGN )
            var alt28=10;
            switch ( this.input.LA(1) ) {
            case 137:
                alt28=1;
                break;
            case 138:
                alt28=2;
                break;
            case 139:
                alt28=3;
                break;
            case 140:
                alt28=4;
                break;
            case 141:
                alt28=5;
                break;
            case 142:
                alt28=6;
                break;
            case 143:
                alt28=7;
                break;
            case 144:
                alt28=8;
                break;
            case 145:
                alt28=9;
                break;
            case 146:
                alt28=10;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 28, 0, this.input);

                throw nvae;
            }

            switch (alt28) {
                case 1 :
                    // SimpleCv4.g:287:9: '='
                    char_literal127=this.match(this.input,137,SimpleCv4Parser.FOLLOW_137_in_assignmentOp2256); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_137.add(char_literal127);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 288:6: -> ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(ASSIGN, "ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:289:9: '+='
                    string_literal128=this.match(this.input,138,SimpleCv4Parser.FOLLOW_138_in_assignmentOp2275); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_138.add(string_literal128);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 290:6: -> PLUS_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(PLUS_ASSIGN, "PLUS_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:291:9: '-='
                    string_literal129=this.match(this.input,139,SimpleCv4Parser.FOLLOW_139_in_assignmentOp2294); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_139.add(string_literal129);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 292:6: -> MINUS_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(MINUS_ASSIGN, "MINUS_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 4 :
                    // SimpleCv4.g:293:9: '*='
                    string_literal130=this.match(this.input,140,SimpleCv4Parser.FOLLOW_140_in_assignmentOp2313); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_140.add(string_literal130);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 294:6: -> MULTI_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(MULTI_ASSIGN, "MULTI_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 5 :
                    // SimpleCv4.g:295:9: '/='
                    string_literal131=this.match(this.input,141,SimpleCv4Parser.FOLLOW_141_in_assignmentOp2332); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_141.add(string_literal131);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 296:6: -> DIVIDE_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(DIVIDE_ASSIGN, "DIVIDE_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 6 :
                    // SimpleCv4.g:297:9: '<<='
                    string_literal132=this.match(this.input,142,SimpleCv4Parser.FOLLOW_142_in_assignmentOp2351); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_142.add(string_literal132);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 298:6: -> SHL_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(SHL_ASSIGN, "SHL_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 7 :
                    // SimpleCv4.g:299:9: '>>='
                    string_literal133=this.match(this.input,143,SimpleCv4Parser.FOLLOW_143_in_assignmentOp2370); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_143.add(string_literal133);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 300:6: -> SHR_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(SHR_ASSIGN, "SHR_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 8 :
                    // SimpleCv4.g:301:9: '&='
                    string_literal134=this.match(this.input,144,SimpleCv4Parser.FOLLOW_144_in_assignmentOp2389); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_144.add(string_literal134);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 302:6: -> AND_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(AND_ASSIGN, "AND_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 9 :
                    // SimpleCv4.g:303:9: '|='
                    string_literal135=this.match(this.input,145,SimpleCv4Parser.FOLLOW_145_in_assignmentOp2408); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_145.add(string_literal135);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 304:6: -> OR_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(OR_ASSIGN, "OR_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 10 :
                    // SimpleCv4.g:305:9: '^='
                    string_literal136=this.match(this.input,146,SimpleCv4Parser.FOLLOW_146_in_assignmentOp2427); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_146.add(string_literal136);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 306:6: -> NOT_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(NOT_ASSIGN, "NOT_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unaryExpr_return: (function() {
        SimpleCv4Parser.unaryExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.unaryExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:309:1: unaryExpr : ( postfixExpr | '++' unaryExpr -> ^( PREFIX_PLUS unaryExpr ) | '--' unaryExpr -> ^( PREFIX_MINUS unaryExpr ) | 'sizeof' '(' type ')' -> ^( SIZEOF type ) | unaryOp castExpr | funcInvoke );
    // $ANTLR start "unaryExpr"
    unaryExpr: function() {
        var retval = new SimpleCv4Parser.unaryExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal138 = null;
        var string_literal140 = null;
        var string_literal142 = null;
        var char_literal143 = null;
        var char_literal145 = null;
         var postfixExpr137 = null;
         var unaryExpr139 = null;
         var unaryExpr141 = null;
         var type144 = null;
         var unaryOp146 = null;
         var castExpr147 = null;
         var funcInvoke148 = null;

        var string_literal138_tree=null;
        var string_literal140_tree=null;
        var string_literal142_tree=null;
        var char_literal143_tree=null;
        var char_literal145_tree=null;
        var stream_127=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 127");
        var stream_128=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 128");
        var stream_147=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 147");
        var stream_148=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 148");
        var stream_149=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 149");
        var stream_unaryExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryExpr");
        var stream_type=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule type");
        try {
            // SimpleCv4.g:310:5: ( postfixExpr | '++' unaryExpr -> ^( PREFIX_PLUS unaryExpr ) | '--' unaryExpr -> ^( PREFIX_MINUS unaryExpr ) | 'sizeof' '(' type ')' -> ^( SIZEOF type ) | unaryOp castExpr | funcInvoke )
            var alt29=6;
            switch ( this.input.LA(1) ) {
            case ID:
                var LA29_1 = this.input.LA(2);

                if ( (LA29_1==127) ) {
                    alt29=6;
                }
                else if ( (LA29_1==EOF||LA29_1==106||(LA29_1>=109 && LA29_1<=110)||(LA29_1>=112 && LA29_1<=113)||LA29_1==128||(LA29_1>=137 && LA29_1<=148)||(LA29_1>=152 && LA29_1<=166)) ) {
                    alt29=1;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 29, 1, this.input);

                    throw nvae;
                }
                break;
            case INT:
            case STRING:
            case 127:
                alt29=1;
                break;
            case 147:
                alt29=2;
                break;
            case 148:
                alt29=3;
                break;
            case 149:
                alt29=4;
                break;
            case 113:
            case 150:
            case 151:
                alt29=5;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 29, 0, this.input);

                throw nvae;
            }

            switch (alt29) {
                case 1 :
                    // SimpleCv4.g:310:9: postfixExpr
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_postfixExpr_in_unaryExpr2458);
                    postfixExpr137=this.postfixExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, postfixExpr137.getTree());


                    break;
                case 2 :
                    // SimpleCv4.g:311:9: '++' unaryExpr
                    string_literal138=this.match(this.input,147,SimpleCv4Parser.FOLLOW_147_in_unaryExpr2468); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_147.add(string_literal138);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_unaryExpr_in_unaryExpr2470);
                    unaryExpr139=this.unaryExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unaryExpr.add(unaryExpr139.getTree());


                    // AST REWRITE
                    // elements: unaryExpr
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 312:5: -> ^( PREFIX_PLUS unaryExpr )
                    {
                        // SimpleCv4.g:312:8: ^( PREFIX_PLUS unaryExpr )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(PREFIX_PLUS, "PREFIX_PLUS"), root_1);

                        this.adaptor.addChild(root_1, stream_unaryExpr.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:313:9: '--' unaryExpr
                    string_literal140=this.match(this.input,148,SimpleCv4Parser.FOLLOW_148_in_unaryExpr2492); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_148.add(string_literal140);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_unaryExpr_in_unaryExpr2494);
                    unaryExpr141=this.unaryExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unaryExpr.add(unaryExpr141.getTree());


                    // AST REWRITE
                    // elements: unaryExpr
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 314:5: -> ^( PREFIX_MINUS unaryExpr )
                    {
                        // SimpleCv4.g:314:8: ^( PREFIX_MINUS unaryExpr )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(PREFIX_MINUS, "PREFIX_MINUS"), root_1);

                        this.adaptor.addChild(root_1, stream_unaryExpr.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 4 :
                    // SimpleCv4.g:315:9: 'sizeof' '(' type ')'
                    string_literal142=this.match(this.input,149,SimpleCv4Parser.FOLLOW_149_in_unaryExpr2516); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_149.add(string_literal142);

                    char_literal143=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_unaryExpr2518); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_127.add(char_literal143);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_unaryExpr2520);
                    type144=this.type();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_type.add(type144.getTree());
                    char_literal145=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_unaryExpr2522); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_128.add(char_literal145);



                    // AST REWRITE
                    // elements: type
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 316:5: -> ^( SIZEOF type )
                    {
                        // SimpleCv4.g:316:8: ^( SIZEOF type )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(SIZEOF, "SIZEOF"), root_1);

                        this.adaptor.addChild(root_1, stream_type.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 5 :
                    // SimpleCv4.g:317:9: unaryOp castExpr
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_unaryOp_in_unaryExpr2544);
                    unaryOp146=this.unaryOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unaryOp146.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_castExpr_in_unaryExpr2546);
                    castExpr147=this.castExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, castExpr147.getTree());


                    break;
                case 6 :
                    // SimpleCv4.g:318:7: funcInvoke
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_funcInvoke_in_unaryExpr2554);
                    funcInvoke148=this.funcInvoke();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, funcInvoke148.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unaryOp_return: (function() {
        SimpleCv4Parser.unaryOp_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.unaryOp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:321:1: unaryOp : ( '!' -> PREFIX_NOT | '&' -> PREFIX_AND | '*' -> PREFIX_STAR );
    // $ANTLR start "unaryOp"
    unaryOp: function() {
        var retval = new SimpleCv4Parser.unaryOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal149 = null;
        var char_literal150 = null;
        var char_literal151 = null;

        var char_literal149_tree=null;
        var char_literal150_tree=null;
        var char_literal151_tree=null;
        var stream_150=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 150");
        var stream_151=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 151");
        var stream_113=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 113");

        try {
            // SimpleCv4.g:322:5: ( '!' -> PREFIX_NOT | '&' -> PREFIX_AND | '*' -> PREFIX_STAR )
            var alt30=3;
            switch ( this.input.LA(1) ) {
            case 150:
                alt30=1;
                break;
            case 151:
                alt30=2;
                break;
            case 113:
                alt30=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 30, 0, this.input);

                throw nvae;
            }

            switch (alt30) {
                case 1 :
                    // SimpleCv4.g:322:9: '!'
                    char_literal149=this.match(this.input,150,SimpleCv4Parser.FOLLOW_150_in_unaryOp2577); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_150.add(char_literal149);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 323:5: -> PREFIX_NOT
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(PREFIX_NOT, "PREFIX_NOT"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:324:9: '&'
                    char_literal150=this.match(this.input,151,SimpleCv4Parser.FOLLOW_151_in_unaryOp2595); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_151.add(char_literal150);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 325:5: -> PREFIX_AND
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(PREFIX_AND, "PREFIX_AND"));

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:326:9: '*'
                    char_literal151=this.match(this.input,113,SimpleCv4Parser.FOLLOW_113_in_unaryOp2613); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_113.add(char_literal151);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 327:5: -> PREFIX_STAR
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(PREFIX_STAR, "PREFIX_STAR"));

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    postfixExpr_return: (function() {
        SimpleCv4Parser.postfixExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.postfixExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:330:1: postfixExpr : primaryExpr ( postfix )* -> ^( VARIABLE primaryExpr ( postfix )* ) ;
    // $ANTLR start "postfixExpr"
    postfixExpr: function() {
        var retval = new SimpleCv4Parser.postfixExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var primaryExpr152 = null;
         var postfix153 = null;

        var stream_postfix=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule postfix");
        var stream_primaryExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule primaryExpr");
        try {
            // SimpleCv4.g:331:5: ( primaryExpr ( postfix )* -> ^( VARIABLE primaryExpr ( postfix )* ) )
            // SimpleCv4.g:331:9: primaryExpr ( postfix )*
            this.pushFollow(SimpleCv4Parser.FOLLOW_primaryExpr_in_postfixExpr2640);
            primaryExpr152=this.primaryExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_primaryExpr.add(primaryExpr152.getTree());
            // SimpleCv4.g:331:21: ( postfix )*
            loop31:
            do {
                var alt31=2;
                var LA31_0 = this.input.LA(1);

                if ( ((LA31_0>=147 && LA31_0<=148)||(LA31_0>=152 && LA31_0<=153)) ) {
                    alt31=1;
                }


                switch (alt31) {
                case 1 :
                    // SimpleCv4.g:331:22: postfix
                    this.pushFollow(SimpleCv4Parser.FOLLOW_postfix_in_postfixExpr2643);
                    postfix153=this.postfix();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_postfix.add(postfix153.getTree());


                    break;

                default :
                    break loop31;
                }
            } while (true);



            // AST REWRITE
            // elements: postfix, primaryExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 332:6: -> ^( VARIABLE primaryExpr ( postfix )* )
            {
                // SimpleCv4.g:332:9: ^( VARIABLE primaryExpr ( postfix )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(VARIABLE, "VARIABLE"), root_1);

                this.adaptor.addChild(root_1, stream_primaryExpr.nextTree());
                // SimpleCv4.g:332:32: ( postfix )*
                while ( stream_postfix.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_postfix.nextTree());

                }
                stream_postfix.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    postfix_return: (function() {
        SimpleCv4Parser.postfix_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.postfix_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:335:1: postfix : ( '->' ID ( '[' shiftExpr ']' )? -> ^( MEMBERVAR ID ( ^( ARRAYINDEX shiftExpr ) )? ) | '++' -> ^( POSTFIX_PLUS ) | '--' -> ^( POSTFIX_MINUS ) | '[' expression ']' -> ^( ARRAYINDEX expression ) );
    // $ANTLR start "postfix"
    postfix: function() {
        var retval = new SimpleCv4Parser.postfix_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal154 = null;
        var ID155 = null;
        var char_literal156 = null;
        var char_literal158 = null;
        var string_literal159 = null;
        var string_literal160 = null;
        var char_literal161 = null;
        var char_literal163 = null;
         var shiftExpr157 = null;
         var expression162 = null;

        var string_literal154_tree=null;
        var ID155_tree=null;
        var char_literal156_tree=null;
        var char_literal158_tree=null;
        var string_literal159_tree=null;
        var string_literal160_tree=null;
        var char_literal161_tree=null;
        var char_literal163_tree=null;
        var stream_152=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 152");
        var stream_153=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 153");
        var stream_147=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 147");
        var stream_148=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 148");
        var stream_ID=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ID");
        var stream_154=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 154");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        var stream_shiftExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule shiftExpr");
        try {
            // SimpleCv4.g:336:5: ( '->' ID ( '[' shiftExpr ']' )? -> ^( MEMBERVAR ID ( ^( ARRAYINDEX shiftExpr ) )? ) | '++' -> ^( POSTFIX_PLUS ) | '--' -> ^( POSTFIX_MINUS ) | '[' expression ']' -> ^( ARRAYINDEX expression ) )
            var alt33=4;
            switch ( this.input.LA(1) ) {
            case 152:
                alt33=1;
                break;
            case 147:
                alt33=2;
                break;
            case 148:
                alt33=3;
                break;
            case 153:
                alt33=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 33, 0, this.input);

                throw nvae;
            }

            switch (alt33) {
                case 1 :
                    // SimpleCv4.g:336:7: '->' ID ( '[' shiftExpr ']' )?
                    string_literal154=this.match(this.input,152,SimpleCv4Parser.FOLLOW_152_in_postfix2681); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_152.add(string_literal154);

                    ID155=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_postfix2683); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_ID.add(ID155);

                    // SimpleCv4.g:336:15: ( '[' shiftExpr ']' )?
                    var alt32=2;
                    alt32 = this.dfa32.predict(this.input);
                    switch (alt32) {
                        case 1 :
                            // SimpleCv4.g:336:16: '[' shiftExpr ']'
                            char_literal156=this.match(this.input,153,SimpleCv4Parser.FOLLOW_153_in_postfix2686); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_153.add(char_literal156);

                            this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_postfix2688);
                            shiftExpr157=this.shiftExpr();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr157.getTree());
                            char_literal158=this.match(this.input,154,SimpleCv4Parser.FOLLOW_154_in_postfix2690); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_154.add(char_literal158);



                            break;

                    }



                    // AST REWRITE
                    // elements: ID, shiftExpr
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 337:5: -> ^( MEMBERVAR ID ( ^( ARRAYINDEX shiftExpr ) )? )
                    {
                        // SimpleCv4.g:337:8: ^( MEMBERVAR ID ( ^( ARRAYINDEX shiftExpr ) )? )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(MEMBERVAR, "MEMBERVAR"), root_1);

                        this.adaptor.addChild(root_1, stream_ID.nextNode());
                        // SimpleCv4.g:337:23: ( ^( ARRAYINDEX shiftExpr ) )?
                        if ( stream_shiftExpr.hasNext() ) {
                            // SimpleCv4.g:337:23: ^( ARRAYINDEX shiftExpr )
                            {
                            var root_2 = this.adaptor.nil();
                            root_2 = this.adaptor.becomeRoot(this.adaptor.create(ARRAYINDEX, "ARRAYINDEX"), root_2);

                            this.adaptor.addChild(root_2, stream_shiftExpr.nextTree());

                            this.adaptor.addChild(root_1, root_2);
                            }

                        }
                        stream_shiftExpr.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:338:8: '++'
                    string_literal159=this.match(this.input,147,SimpleCv4Parser.FOLLOW_147_in_postfix2721); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_147.add(string_literal159);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 339:5: -> ^( POSTFIX_PLUS )
                    {
                        // SimpleCv4.g:339:8: ^( POSTFIX_PLUS )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(POSTFIX_PLUS, "POSTFIX_PLUS"), root_1);

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:340:8: '--'
                    string_literal160=this.match(this.input,148,SimpleCv4Parser.FOLLOW_148_in_postfix2741); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_148.add(string_literal160);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 341:5: -> ^( POSTFIX_MINUS )
                    {
                        // SimpleCv4.g:341:8: ^( POSTFIX_MINUS )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(POSTFIX_MINUS, "POSTFIX_MINUS"), root_1);

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 4 :
                    // SimpleCv4.g:342:8: '[' expression ']'
                    char_literal161=this.match(this.input,153,SimpleCv4Parser.FOLLOW_153_in_postfix2761); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_153.add(char_literal161);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_expression_in_postfix2763);
                    expression162=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression162.getTree());
                    char_literal163=this.match(this.input,154,SimpleCv4Parser.FOLLOW_154_in_postfix2765); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_154.add(char_literal163);



                    // AST REWRITE
                    // elements: expression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 343:5: -> ^( ARRAYINDEX expression )
                    {
                        // SimpleCv4.g:343:8: ^( ARRAYINDEX expression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(ARRAYINDEX, "ARRAYINDEX"), root_1);

                        this.adaptor.addChild(root_1, stream_expression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    primaryExpr_return: (function() {
        SimpleCv4Parser.primaryExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.primaryExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:346:1: primaryExpr : ( declarator -> ^( DECLARATOR declarator ) | INT -> ^( CONSTNUM INT ) | STRING | '(' expression ')' -> expression );
    // $ANTLR start "primaryExpr"
    primaryExpr: function() {
        var retval = new SimpleCv4Parser.primaryExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var INT165 = null;
        var STRING166 = null;
        var char_literal167 = null;
        var char_literal169 = null;
         var declarator164 = null;
         var expression168 = null;

        var INT165_tree=null;
        var STRING166_tree=null;
        var char_literal167_tree=null;
        var char_literal169_tree=null;
        var stream_127=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 127");
        var stream_128=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 128");
        var stream_INT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token INT");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        var stream_declarator=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule declarator");
        try {
            // SimpleCv4.g:347:5: ( declarator -> ^( DECLARATOR declarator ) | INT -> ^( CONSTNUM INT ) | STRING | '(' expression ')' -> expression )
            var alt34=4;
            switch ( this.input.LA(1) ) {
            case ID:
                alt34=1;
                break;
            case INT:
                alt34=2;
                break;
            case STRING:
                alt34=3;
                break;
            case 127:
                alt34=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 34, 0, this.input);

                throw nvae;
            }

            switch (alt34) {
                case 1 :
                    // SimpleCv4.g:347:9: declarator
                    this.pushFollow(SimpleCv4Parser.FOLLOW_declarator_in_primaryExpr2796);
                    declarator164=this.declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_declarator.add(declarator164.getTree());


                    // AST REWRITE
                    // elements: declarator
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 348:9: -> ^( DECLARATOR declarator )
                    {
                        // SimpleCv4.g:348:12: ^( DECLARATOR declarator )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(DECLARATOR, "DECLARATOR"), root_1);

                        this.adaptor.addChild(root_1, stream_declarator.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:349:7: INT
                    INT165=this.match(this.input,INT,SimpleCv4Parser.FOLLOW_INT_in_primaryExpr2820); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_INT.add(INT165);



                    // AST REWRITE
                    // elements: INT
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 350:6: -> ^( CONSTNUM INT )
                    {
                        // SimpleCv4.g:350:9: ^( CONSTNUM INT )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(CONSTNUM, "CONSTNUM"), root_1);

                        this.adaptor.addChild(root_1, stream_INT.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:351:9: STRING
                    root_0 = this.adaptor.nil();

                    STRING166=this.match(this.input,STRING,SimpleCv4Parser.FOLLOW_STRING_in_primaryExpr2843); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    STRING166_tree = this.adaptor.create(STRING166);
                    this.adaptor.addChild(root_0, STRING166_tree);
                    }


                    break;
                case 4 :
                    // SimpleCv4.g:352:9: '(' expression ')'
                    char_literal167=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_primaryExpr2853); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_127.add(char_literal167);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_expression_in_primaryExpr2855);
                    expression168=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression168.getTree());
                    char_literal169=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_primaryExpr2857); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_128.add(char_literal169);



                    // AST REWRITE
                    // elements: expression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 353:6: -> expression
                    {
                        this.adaptor.addChild(root_0, stream_expression.nextTree());

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    conditionalExpr_return: (function() {
        SimpleCv4Parser.conditionalExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.conditionalExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:356:1: conditionalExpr : logicalOrExpr -> ^( CONDITION logicalOrExpr ) ;
    // $ANTLR start "conditionalExpr"
    conditionalExpr: function() {
        var retval = new SimpleCv4Parser.conditionalExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var logicalOrExpr170 = null;

        var stream_logicalOrExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalOrExpr");
        try {
            // SimpleCv4.g:357:5: ( logicalOrExpr -> ^( CONDITION logicalOrExpr ) )
            // SimpleCv4.g:357:9: logicalOrExpr
            this.pushFollow(SimpleCv4Parser.FOLLOW_logicalOrExpr_in_conditionalExpr2885);
            logicalOrExpr170=this.logicalOrExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalOrExpr.add(logicalOrExpr170.getTree());


            // AST REWRITE
            // elements: logicalOrExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 358:5: -> ^( CONDITION logicalOrExpr )
            {
                // SimpleCv4.g:358:8: ^( CONDITION logicalOrExpr )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(CONDITION, "CONDITION"), root_1);

                this.adaptor.addChild(root_1, stream_logicalOrExpr.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    logicalOrExpr_return: (function() {
        SimpleCv4Parser.logicalOrExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.logicalOrExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:361:1: logicalOrExpr : logicalAndExpr ( '||' logicalAndExpr )* ;
    // $ANTLR start "logicalOrExpr"
    logicalOrExpr: function() {
        var retval = new SimpleCv4Parser.logicalOrExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal172 = null;
         var logicalAndExpr171 = null;
         var logicalAndExpr173 = null;

        var string_literal172_tree=null;

        try {
            // SimpleCv4.g:362:5: ( logicalAndExpr ( '||' logicalAndExpr )* )
            // SimpleCv4.g:362:7: logicalAndExpr ( '||' logicalAndExpr )*
            root_0 = this.adaptor.nil();

            this.pushFollow(SimpleCv4Parser.FOLLOW_logicalAndExpr_in_logicalOrExpr2915);
            logicalAndExpr171=this.logicalAndExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalAndExpr171.getTree());
            // SimpleCv4.g:362:22: ( '||' logicalAndExpr )*
            loop35:
            do {
                var alt35=2;
                var LA35_0 = this.input.LA(1);

                if ( (LA35_0==155) ) {
                    alt35=1;
                }


                switch (alt35) {
                case 1 :
                    // SimpleCv4.g:362:23: '||' logicalAndExpr
                    string_literal172=this.match(this.input,155,SimpleCv4Parser.FOLLOW_155_in_logicalOrExpr2918); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal172_tree = this.adaptor.create(string_literal172);
                    root_0 = this.adaptor.becomeRoot(string_literal172_tree, root_0);
                    }
                    this.pushFollow(SimpleCv4Parser.FOLLOW_logicalAndExpr_in_logicalOrExpr2921);
                    logicalAndExpr173=this.logicalAndExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalAndExpr173.getTree());


                    break;

                default :
                    break loop35;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    logicalAndExpr_return: (function() {
        SimpleCv4Parser.logicalAndExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.logicalAndExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:365:1: logicalAndExpr : relationExpr ( '&&' relationExpr )* ;
    // $ANTLR start "logicalAndExpr"
    logicalAndExpr: function() {
        var retval = new SimpleCv4Parser.logicalAndExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal175 = null;
         var relationExpr174 = null;
         var relationExpr176 = null;

        var string_literal175_tree=null;

        try {
            // SimpleCv4.g:366:5: ( relationExpr ( '&&' relationExpr )* )
            // SimpleCv4.g:366:7: relationExpr ( '&&' relationExpr )*
            root_0 = this.adaptor.nil();

            this.pushFollow(SimpleCv4Parser.FOLLOW_relationExpr_in_logicalAndExpr2940);
            relationExpr174=this.relationExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationExpr174.getTree());
            // SimpleCv4.g:366:20: ( '&&' relationExpr )*
            loop36:
            do {
                var alt36=2;
                var LA36_0 = this.input.LA(1);

                if ( (LA36_0==156) ) {
                    alt36=1;
                }


                switch (alt36) {
                case 1 :
                    // SimpleCv4.g:366:21: '&&' relationExpr
                    string_literal175=this.match(this.input,156,SimpleCv4Parser.FOLLOW_156_in_logicalAndExpr2943); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal175_tree = this.adaptor.create(string_literal175);
                    root_0 = this.adaptor.becomeRoot(string_literal175_tree, root_0);
                    }
                    this.pushFollow(SimpleCv4Parser.FOLLOW_relationExpr_in_logicalAndExpr2946);
                    relationExpr176=this.relationExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationExpr176.getTree());


                    break;

                default :
                    break loop36;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    relationExpr_return: (function() {
        SimpleCv4Parser.relationExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.relationExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:369:1: relationExpr : shiftExpr ( relationOp shiftExpr )* ;
    // $ANTLR start "relationExpr"
    relationExpr: function() {
        var retval = new SimpleCv4Parser.relationExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var shiftExpr177 = null;
         var relationOp178 = null;
         var shiftExpr179 = null;


        try {
            // SimpleCv4.g:370:5: ( shiftExpr ( relationOp shiftExpr )* )
            // SimpleCv4.g:370:7: shiftExpr ( relationOp shiftExpr )*
            root_0 = this.adaptor.nil();

            this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_relationExpr2965);
            shiftExpr177=this.shiftExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, shiftExpr177.getTree());
            // SimpleCv4.g:370:17: ( relationOp shiftExpr )*
            loop37:
            do {
                var alt37=2;
                var LA37_0 = this.input.LA(1);

                if ( ((LA37_0>=109 && LA37_0<=110)||(LA37_0>=157 && LA37_0<=160)) ) {
                    alt37=1;
                }


                switch (alt37) {
                case 1 :
                    // SimpleCv4.g:370:18: relationOp shiftExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_relationOp_in_relationExpr2968);
                    relationOp178=this.relationOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(relationOp178.getTree(), root_0);
                    this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_relationExpr2971);
                    shiftExpr179=this.shiftExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, shiftExpr179.getTree());


                    break;

                default :
                    break loop37;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    relationOp_return: (function() {
        SimpleCv4Parser.relationOp_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.relationOp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:373:1: relationOp : ( '==' -> EQUAL_RE | '!=' -> NOTEQUAL_RE | '<' -> LESS_RE | '>' -> GREATER_RE | '<=' -> LESSEQUAL_RE | '>=' -> GREATEREQUAL_RE );
    // $ANTLR start "relationOp"
    relationOp: function() {
        var retval = new SimpleCv4Parser.relationOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal180 = null;
        var string_literal181 = null;
        var char_literal182 = null;
        var char_literal183 = null;
        var string_literal184 = null;
        var string_literal185 = null;

        var string_literal180_tree=null;
        var string_literal181_tree=null;
        var char_literal182_tree=null;
        var char_literal183_tree=null;
        var string_literal184_tree=null;
        var string_literal185_tree=null;
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");
        var stream_110=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 110");
        var stream_160=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 160");
        var stream_159=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 159");
        var stream_158=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 158");
        var stream_157=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 157");

        try {
            // SimpleCv4.g:374:5: ( '==' -> EQUAL_RE | '!=' -> NOTEQUAL_RE | '<' -> LESS_RE | '>' -> GREATER_RE | '<=' -> LESSEQUAL_RE | '>=' -> GREATEREQUAL_RE )
            var alt38=6;
            switch ( this.input.LA(1) ) {
            case 157:
                alt38=1;
                break;
            case 158:
                alt38=2;
                break;
            case 109:
                alt38=3;
                break;
            case 110:
                alt38=4;
                break;
            case 159:
                alt38=5;
                break;
            case 160:
                alt38=6;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 38, 0, this.input);

                throw nvae;
            }

            switch (alt38) {
                case 1 :
                    // SimpleCv4.g:374:7: '=='
                    string_literal180=this.match(this.input,157,SimpleCv4Parser.FOLLOW_157_in_relationOp2994); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_157.add(string_literal180);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 375:5: -> EQUAL_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(EQUAL_RE, "EQUAL_RE"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:376:7: '!='
                    string_literal181=this.match(this.input,158,SimpleCv4Parser.FOLLOW_158_in_relationOp3011); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_158.add(string_literal181);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 377:5: -> NOTEQUAL_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(NOTEQUAL_RE, "NOTEQUAL_RE"));

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:378:7: '<'
                    char_literal182=this.match(this.input,109,SimpleCv4Parser.FOLLOW_109_in_relationOp3028); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_109.add(char_literal182);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 379:5: -> LESS_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(LESS_RE, "LESS_RE"));

                    }

                    retval.tree = root_0;}

                    break;
                case 4 :
                    // SimpleCv4.g:380:7: '>'
                    char_literal183=this.match(this.input,110,SimpleCv4Parser.FOLLOW_110_in_relationOp3045); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_110.add(char_literal183);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 381:5: -> GREATER_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(GREATER_RE, "GREATER_RE"));

                    }

                    retval.tree = root_0;}

                    break;
                case 5 :
                    // SimpleCv4.g:382:7: '<='
                    string_literal184=this.match(this.input,159,SimpleCv4Parser.FOLLOW_159_in_relationOp3062); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_159.add(string_literal184);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 383:5: -> LESSEQUAL_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(LESSEQUAL_RE, "LESSEQUAL_RE"));

                    }

                    retval.tree = root_0;}

                    break;
                case 6 :
                    // SimpleCv4.g:384:7: '>='
                    string_literal185=this.match(this.input,160,SimpleCv4Parser.FOLLOW_160_in_relationOp3079); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_160.add(string_literal185);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 385:5: -> GREATEREQUAL_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(GREATEREQUAL_RE, "GREATEREQUAL_RE"));

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    shiftExpr_return: (function() {
        SimpleCv4Parser.shiftExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.shiftExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:388:1: shiftExpr : addSubExpr ( shiftOp addSubExpr )* ;
    // $ANTLR start "shiftExpr"
    shiftExpr: function() {
        var retval = new SimpleCv4Parser.shiftExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var addSubExpr186 = null;
         var shiftOp187 = null;
         var addSubExpr188 = null;


        try {
            // SimpleCv4.g:389:5: ( addSubExpr ( shiftOp addSubExpr )* )
            // SimpleCv4.g:389:9: addSubExpr ( shiftOp addSubExpr )*
            root_0 = this.adaptor.nil();

            this.pushFollow(SimpleCv4Parser.FOLLOW_addSubExpr_in_shiftExpr3108);
            addSubExpr186=this.addSubExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, addSubExpr186.getTree());
            // SimpleCv4.g:389:20: ( shiftOp addSubExpr )*
            loop39:
            do {
                var alt39=2;
                var LA39_0 = this.input.LA(1);

                if ( ((LA39_0>=161 && LA39_0<=162)) ) {
                    alt39=1;
                }


                switch (alt39) {
                case 1 :
                    // SimpleCv4.g:389:21: shiftOp addSubExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_shiftOp_in_shiftExpr3111);
                    shiftOp187=this.shiftOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(shiftOp187.getTree(), root_0);
                    this.pushFollow(SimpleCv4Parser.FOLLOW_addSubExpr_in_shiftExpr3114);
                    addSubExpr188=this.addSubExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, addSubExpr188.getTree());


                    break;

                default :
                    break loop39;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    shiftOp_return: (function() {
        SimpleCv4Parser.shiftOp_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.shiftOp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:391:1: shiftOp : ( '<<' -> SHL_OP | '>>' -> SHR_OP );
    // $ANTLR start "shiftOp"
    shiftOp: function() {
        var retval = new SimpleCv4Parser.shiftOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal189 = null;
        var string_literal190 = null;

        var string_literal189_tree=null;
        var string_literal190_tree=null;
        var stream_161=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 161");
        var stream_162=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 162");

        try {
            // SimpleCv4.g:392:5: ( '<<' -> SHL_OP | '>>' -> SHR_OP )
            var alt40=2;
            var LA40_0 = this.input.LA(1);

            if ( (LA40_0==161) ) {
                alt40=1;
            }
            else if ( (LA40_0==162) ) {
                alt40=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 40, 0, this.input);

                throw nvae;
            }
            switch (alt40) {
                case 1 :
                    // SimpleCv4.g:392:7: '<<'
                    string_literal189=this.match(this.input,161,SimpleCv4Parser.FOLLOW_161_in_shiftOp3132); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_161.add(string_literal189);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 393:5: -> SHL_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(SHL_OP, "SHL_OP"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:394:7: '>>'
                    string_literal190=this.match(this.input,162,SimpleCv4Parser.FOLLOW_162_in_shiftOp3148); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_162.add(string_literal190);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 395:5: -> SHR_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(SHR_OP, "SHR_OP"));

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    addSubExpr_return: (function() {
        SimpleCv4Parser.addSubExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.addSubExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:398:1: addSubExpr : multDivExpr ( addSubOp multDivExpr )* ;
    // $ANTLR start "addSubExpr"
    addSubExpr: function() {
        var retval = new SimpleCv4Parser.addSubExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var multDivExpr191 = null;
         var addSubOp192 = null;
         var multDivExpr193 = null;


        try {
            // SimpleCv4.g:399:5: ( multDivExpr ( addSubOp multDivExpr )* )
            // SimpleCv4.g:399:9: multDivExpr ( addSubOp multDivExpr )*
            root_0 = this.adaptor.nil();

            this.pushFollow(SimpleCv4Parser.FOLLOW_multDivExpr_in_addSubExpr3175);
            multDivExpr191=this.multDivExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multDivExpr191.getTree());
            // SimpleCv4.g:399:21: ( addSubOp multDivExpr )*
            loop41:
            do {
                var alt41=2;
                var LA41_0 = this.input.LA(1);

                if ( ((LA41_0>=163 && LA41_0<=164)) ) {
                    alt41=1;
                }


                switch (alt41) {
                case 1 :
                    // SimpleCv4.g:399:22: addSubOp multDivExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_addSubOp_in_addSubExpr3178);
                    addSubOp192=this.addSubOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(addSubOp192.getTree(), root_0);
                    this.pushFollow(SimpleCv4Parser.FOLLOW_multDivExpr_in_addSubExpr3181);
                    multDivExpr193=this.multDivExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multDivExpr193.getTree());


                    break;

                default :
                    break loop41;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    addSubOp_return: (function() {
        SimpleCv4Parser.addSubOp_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.addSubOp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:401:1: addSubOp : ( '+' -> ADD_OP | '-' -> SUB_OP );
    // $ANTLR start "addSubOp"
    addSubOp: function() {
        var retval = new SimpleCv4Parser.addSubOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal194 = null;
        var char_literal195 = null;

        var char_literal194_tree=null;
        var char_literal195_tree=null;
        var stream_163=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 163");
        var stream_164=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 164");

        try {
            // SimpleCv4.g:402:5: ( '+' -> ADD_OP | '-' -> SUB_OP )
            var alt42=2;
            var LA42_0 = this.input.LA(1);

            if ( (LA42_0==163) ) {
                alt42=1;
            }
            else if ( (LA42_0==164) ) {
                alt42=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 42, 0, this.input);

                throw nvae;
            }
            switch (alt42) {
                case 1 :
                    // SimpleCv4.g:402:7: '+'
                    char_literal194=this.match(this.input,163,SimpleCv4Parser.FOLLOW_163_in_addSubOp3199); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_163.add(char_literal194);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 403:5: -> ADD_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(ADD_OP, "ADD_OP"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:404:7: '-'
                    char_literal195=this.match(this.input,164,SimpleCv4Parser.FOLLOW_164_in_addSubOp3215); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_164.add(char_literal195);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 405:5: -> SUB_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(SUB_OP, "SUB_OP"));

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    multDivExpr_return: (function() {
        SimpleCv4Parser.multDivExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.multDivExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:408:1: multDivExpr : castExpr ( multDivOp castExpr )* ;
    // $ANTLR start "multDivExpr"
    multDivExpr: function() {
        var retval = new SimpleCv4Parser.multDivExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var castExpr196 = null;
         var multDivOp197 = null;
         var castExpr198 = null;


        try {
            // SimpleCv4.g:409:5: ( castExpr ( multDivOp castExpr )* )
            // SimpleCv4.g:409:9: castExpr ( multDivOp castExpr )*
            root_0 = this.adaptor.nil();

            this.pushFollow(SimpleCv4Parser.FOLLOW_castExpr_in_multDivExpr3243);
            castExpr196=this.castExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, castExpr196.getTree());
            // SimpleCv4.g:409:18: ( multDivOp castExpr )*
            loop43:
            do {
                var alt43=2;
                var LA43_0 = this.input.LA(1);

                if ( (LA43_0==113||(LA43_0>=165 && LA43_0<=166)) ) {
                    alt43=1;
                }


                switch (alt43) {
                case 1 :
                    // SimpleCv4.g:409:19: multDivOp castExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_multDivOp_in_multDivExpr3246);
                    multDivOp197=this.multDivOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(multDivOp197.getTree(), root_0);
                    this.pushFollow(SimpleCv4Parser.FOLLOW_castExpr_in_multDivExpr3249);
                    castExpr198=this.castExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, castExpr198.getTree());


                    break;

                default :
                    break loop43;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    multDivOp_return: (function() {
        SimpleCv4Parser.multDivOp_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.multDivOp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:412:1: multDivOp : ( '*' -> MULTI_OP | '/' -> DIV_OP | '%' -> MOD_OP );
    // $ANTLR start "multDivOp"
    multDivOp: function() {
        var retval = new SimpleCv4Parser.multDivOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal199 = null;
        var char_literal200 = null;
        var char_literal201 = null;

        var char_literal199_tree=null;
        var char_literal200_tree=null;
        var char_literal201_tree=null;
        var stream_113=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 113");
        var stream_166=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 166");
        var stream_165=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 165");

        try {
            // SimpleCv4.g:413:5: ( '*' -> MULTI_OP | '/' -> DIV_OP | '%' -> MOD_OP )
            var alt44=3;
            switch ( this.input.LA(1) ) {
            case 113:
                alt44=1;
                break;
            case 165:
                alt44=2;
                break;
            case 166:
                alt44=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 44, 0, this.input);

                throw nvae;
            }

            switch (alt44) {
                case 1 :
                    // SimpleCv4.g:413:7: '*'
                    char_literal199=this.match(this.input,113,SimpleCv4Parser.FOLLOW_113_in_multDivOp3268); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_113.add(char_literal199);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 414:5: -> MULTI_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(MULTI_OP, "MULTI_OP"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:415:7: '/'
                    char_literal200=this.match(this.input,165,SimpleCv4Parser.FOLLOW_165_in_multDivOp3284); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_165.add(char_literal200);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 416:5: -> DIV_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(DIV_OP, "DIV_OP"));

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:417:7: '%'
                    char_literal201=this.match(this.input,166,SimpleCv4Parser.FOLLOW_166_in_multDivOp3300); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_166.add(char_literal201);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 418:5: -> MOD_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(MOD_OP, "MOD_OP"));

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    castExpr_return: (function() {
        SimpleCv4Parser.castExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.castExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:421:1: castExpr : ( '(' type ')' castExpr -> ^( CASTTYPE type castExpr ) | '(' conditionalExpr ')' -> ^( SUB_CONDITION conditionalExpr ) | unaryExpr );
    // $ANTLR start "castExpr"
    castExpr: function() {
        var retval = new SimpleCv4Parser.castExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal202 = null;
        var char_literal204 = null;
        var char_literal206 = null;
        var char_literal208 = null;
         var type203 = null;
         var castExpr205 = null;
         var conditionalExpr207 = null;
         var unaryExpr209 = null;

        var char_literal202_tree=null;
        var char_literal204_tree=null;
        var char_literal206_tree=null;
        var char_literal208_tree=null;
        var stream_127=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 127");
        var stream_128=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 128");
        var stream_conditionalExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule conditionalExpr");
        var stream_castExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule castExpr");
        var stream_type=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule type");
        try {
            // SimpleCv4.g:422:5: ( '(' type ')' castExpr -> ^( CASTTYPE type castExpr ) | '(' conditionalExpr ')' -> ^( SUB_CONDITION conditionalExpr ) | unaryExpr )
            var alt45=3;
            alt45 = this.dfa45.predict(this.input);
            switch (alt45) {
                case 1 :
                    // SimpleCv4.g:422:9: '(' type ')' castExpr
                    char_literal202=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_castExpr3327); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_127.add(char_literal202);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_castExpr3329);
                    type203=this.type();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_type.add(type203.getTree());
                    char_literal204=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_castExpr3331); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_128.add(char_literal204);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_castExpr_in_castExpr3333);
                    castExpr205=this.castExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_castExpr.add(castExpr205.getTree());


                    // AST REWRITE
                    // elements: castExpr, type
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 423:5: -> ^( CASTTYPE type castExpr )
                    {
                        // SimpleCv4.g:423:8: ^( CASTTYPE type castExpr )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(CASTTYPE, "CASTTYPE"), root_1);

                        this.adaptor.addChild(root_1, stream_type.nextTree());
                        this.adaptor.addChild(root_1, stream_castExpr.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:424:7: '(' conditionalExpr ')'
                    char_literal206=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_castExpr3355); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_127.add(char_literal206);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_castExpr3357);
                    conditionalExpr207=this.conditionalExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr207.getTree());
                    char_literal208=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_castExpr3359); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_128.add(char_literal208);



                    // AST REWRITE
                    // elements: conditionalExpr
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 425:5: -> ^( SUB_CONDITION conditionalExpr )
                    {
                        // SimpleCv4.g:425:8: ^( SUB_CONDITION conditionalExpr )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(SUB_CONDITION, "SUB_CONDITION"), root_1);

                        this.adaptor.addChild(root_1, stream_conditionalExpr.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:426:9: unaryExpr
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_unaryExpr_in_castExpr3381);
                    unaryExpr209=this.unaryExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unaryExpr209.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // $ANTLR start "synpred6_SimpleCv4"
    synpred6_SimpleCv4_fragment: function() {
        // SimpleCv4.g:128:9: ( functionHeader ';' )
        // SimpleCv4.g:128:9: functionHeader ';'
        this.pushFollow(SimpleCv4Parser.FOLLOW_functionHeader_in_synpred6_SimpleCv4849);
        this.functionHeader();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_synpred6_SimpleCv4851); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred6_SimpleCv4",

    // $ANTLR start "synpred28_SimpleCv4"
    synpred28_SimpleCv4_fragment: function() {
        // SimpleCv4.g:226:13: ( variable )
        // SimpleCv4.g:226:13: variable
        this.pushFollow(SimpleCv4Parser.FOLLOW_variable_in_synpred28_SimpleCv41631);
        this.variable();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred28_SimpleCv4",

    // $ANTLR start "synpred37_SimpleCv4"
    synpred37_SimpleCv4_fragment: function() {
        // SimpleCv4.g:258:47: ( 'else' block )
        // SimpleCv4.g:258:47: 'else' block
        this.match(this.input,133,SimpleCv4Parser.FOLLOW_133_in_synpred37_SimpleCv41975); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_synpred37_SimpleCv41977);
        this.block();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred37_SimpleCv4",

    // $ANTLR start "synpred43_SimpleCv4"
    synpred43_SimpleCv4_fragment: function() {
        // SimpleCv4.g:277:9: ( assignmentExpr )
        // SimpleCv4.g:277:9: assignmentExpr
        this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentExpr_in_synpred43_SimpleCv42175);
        this.assignmentExpr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred43_SimpleCv4",

    // $ANTLR start "synpred62_SimpleCv4"
    synpred62_SimpleCv4_fragment: function() {
        // SimpleCv4.g:336:16: ( '[' shiftExpr ']' )
        // SimpleCv4.g:336:16: '[' shiftExpr ']'
        this.match(this.input,153,SimpleCv4Parser.FOLLOW_153_in_synpred62_SimpleCv42686); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_synpred62_SimpleCv42688);
        this.shiftExpr();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,154,SimpleCv4Parser.FOLLOW_154_in_synpred62_SimpleCv42690); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred62_SimpleCv4",

    // $ANTLR start "synpred84_SimpleCv4"
    synpred84_SimpleCv4_fragment: function() {
        // SimpleCv4.g:422:9: ( '(' type ')' castExpr )
        // SimpleCv4.g:422:9: '(' type ')' castExpr
        this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_synpred84_SimpleCv43327); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_synpred84_SimpleCv43329);
        this.type();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_synpred84_SimpleCv43331); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_castExpr_in_synpred84_SimpleCv43333);
        this.castExpr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred84_SimpleCv4",

    // $ANTLR start "synpred85_SimpleCv4"
    synpred85_SimpleCv4_fragment: function() {
        // SimpleCv4.g:424:7: ( '(' conditionalExpr ')' )
        // SimpleCv4.g:424:7: '(' conditionalExpr ')'
        this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_synpred85_SimpleCv43355); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_synpred85_SimpleCv43357);
        this.conditionalExpr();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_synpred85_SimpleCv43359); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred85_SimpleCv4"

    // Delegated rules



    synpred85_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred85_SimpleCv4_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred43_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred43_SimpleCv4_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred37_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred37_SimpleCv4_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred28_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred28_SimpleCv4_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred84_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred84_SimpleCv4_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred6_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred6_SimpleCv4_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred62_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred62_SimpleCv4_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA2_eotS:
        "\u0030\uffff",
    DFA2_eofS:
        "\u0030\uffff",
    DFA2_minS:
        "\u0001\u005f\u0001\uffff\u000b\u005f\u0001\uffff\u0001\u005f\u0001"+
    "\u006a\u0001\uffff\u0001\u005f\u0001\uffff\u000c\u005f\u0001\u0070\u0001"+
    "\u0000\u0001\uffff\u0001\u005f\u0001\uffff\u000b\u005f\u0001\u0070",
    DFA2_maxS:
        "\u0001\u007c\u0001\uffff\u000a\u0071\u0001\u007c\u0001\uffff\u0001"+
    "\u005f\u0001\u0092\u0001\uffff\u0001\u0080\u0001\uffff\u000a\u0071\u0001"+
    "\u0097\u0001\u005f\u0001\u0080\u0001\u0000\u0001\uffff\u0001\u007a\u0001"+
    "\uffff\u000a\u0071\u0001\u005f\u0001\u0080",
    DFA2_acceptS:
        "\u0001\uffff\u0001\u0001\u000b\uffff\u0001\u0003\u0002\uffff\u0001"+
    "\u0004\u0001\uffff\u0001\u0002\u000e\uffff\u0001\u0006\u0001\uffff\u0001"+
    "\u0005\u000c\uffff",
    DFA2_specialS:
        "\u0020\uffff\u0001\u0000\u000f\uffff}>",
    DFA2_transitionS: [
            "\u0001\u000b\u000b\uffff\u0001\u0001\u0006\uffff\u0001\u0002"+
            "\u0001\u0003\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0007"+
            "\u0001\u0008\u0001\u0009\u0001\u000a\u0001\u000c\u0001\u000d",
            "",
            "\u0001\u000f\u0011\uffff\u0001\u000e",
            "\u0001\u000f\u0011\uffff\u0001\u000e",
            "\u0001\u000f\u0011\uffff\u0001\u000e",
            "\u0001\u000f\u0011\uffff\u0001\u000e",
            "\u0001\u000f\u0011\uffff\u0001\u000e",
            "\u0001\u000f\u0011\uffff\u0001\u000e",
            "\u0001\u000f\u0011\uffff\u0001\u000e",
            "\u0001\u000f\u0011\uffff\u0001\u000e",
            "\u0001\u000f\u0011\uffff\u0001\u000e",
            "\u0001\u000f\u0011\uffff\u0001\u000e",
            "\u0001\u0010\u0012\uffff\u0009\u0010\u0001\uffff\u0001\u000d",
            "",
            "\u0001\u000f",
            "\u0001\u0012\u0005\uffff\u0001\u0012\u000e\uffff\u0001\u0011"+
            "\u0009\uffff\u000a\u0012",
            "",
            "\u0001\u001c\u0012\uffff\u0001\u0013\u0001\u0014\u0001\u0015"+
            "\u0001\u0016\u0001\u0017\u0001\u0018\u0001\u0019\u0001\u001a"+
            "\u0001\u001b\u0005\uffff\u0001\u001d",
            "",
            "\u0001\u001f\u0011\uffff\u0001\u001e",
            "\u0001\u001f\u0011\uffff\u0001\u001e",
            "\u0001\u001f\u0011\uffff\u0001\u001e",
            "\u0001\u001f\u0011\uffff\u0001\u001e",
            "\u0001\u001f\u0011\uffff\u0001\u001e",
            "\u0001\u001f\u0011\uffff\u0001\u001e",
            "\u0001\u001f\u0011\uffff\u0001\u001e",
            "\u0001\u001f\u0011\uffff\u0001\u001e",
            "\u0001\u001f\u0011\uffff\u0001\u001e",
            "\u0001\u001f\u0011\uffff\u0001\u001e",
            "\u0003\u0021\u0008\uffff\u0001\u0020\u0006\uffff\u0001\u0021"+
            "\u000b\uffff\u0001\u0021\u0001\uffff\u0001\u0021\u0001\uffff"+
            "\u0004\u0021\u0001\uffff\u0003\u0021\u000a\uffff\u0005\u0021",
            "\u0001\u001f",
            "\u0001\u0022\u000f\uffff\u0001\u001d",
            "\u0001\uffff",
            "",
            "\u0001\u002d\u0012\uffff\u0001\u0024\u0001\u0025\u0001\u0026"+
            "\u0001\u0027\u0001\u0028\u0001\u0029\u0001\u002a\u0001\u002b"+
            "\u0001\u002c",
            "",
            "\u0001\u002f\u0011\uffff\u0001\u002e",
            "\u0001\u002f\u0011\uffff\u0001\u002e",
            "\u0001\u002f\u0011\uffff\u0001\u002e",
            "\u0001\u002f\u0011\uffff\u0001\u002e",
            "\u0001\u002f\u0011\uffff\u0001\u002e",
            "\u0001\u002f\u0011\uffff\u0001\u002e",
            "\u0001\u002f\u0011\uffff\u0001\u002e",
            "\u0001\u002f\u0011\uffff\u0001\u002e",
            "\u0001\u002f\u0011\uffff\u0001\u002e",
            "\u0001\u002f\u0011\uffff\u0001\u002e",
            "\u0001\u002f",
            "\u0001\u0022\u000f\uffff\u0001\u001d"
    ]
});

org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA2_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA2_eotS),
    DFA2_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA2_eofS),
    DFA2_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA2_minS),
    DFA2_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA2_maxS),
    DFA2_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA2_acceptS),
    DFA2_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA2_specialS),
    DFA2_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv4Parser.DFA2_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA2_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv4Parser.DFA2 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 2;
    this.eot = SimpleCv4Parser.DFA2_eot;
    this.eof = SimpleCv4Parser.DFA2_eof;
    this.min = SimpleCv4Parser.DFA2_min;
    this.max = SimpleCv4Parser.DFA2_max;
    this.accept = SimpleCv4Parser.DFA2_accept;
    this.special = SimpleCv4Parser.DFA2_special;
    this.transition = SimpleCv4Parser.DFA2_transition;
};

org.antlr.lang.extend(SimpleCv4Parser.DFA2, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "123:1: statement : ( declaration | variable | structDefinition | typeDefinition | functionHeader ';' -> ^( FUNC_STAT functionHeader ) | functionHeader block -> ^( FUNC_DEF functionHeader block ) );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA2_32 = input.LA(1);

                             
                            var index2_32 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_SimpleCv4()) ) {s = 35;}

                            else if ( (true) ) {s = 33;}

                             
                            input.seek(index2_32);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 2, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA26_eotS:
        "\u000d\uffff",
    DFA26_eofS:
        "\u000d\uffff",
    DFA26_minS:
        "\u0001\u005f\u000a\u0000\u0002\uffff",
    DFA26_maxS:
        "\u0001\u0097\u000a\u0000\u0002\uffff",
    DFA26_acceptS:
        "\u000b\uffff\u0001\u0001\u0001\u0002",
    DFA26_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0002"+
    "\uffff}>",
    DFA26_transitionS: [
            "\u0001\u0001\u0001\u0002\u0001\u0003\u000f\uffff\u0001\u000a"+
            "\u000d\uffff\u0001\u0004\u0013\uffff\u0001\u0005\u0001\u0006"+
            "\u0001\u0007\u0001\u0008\u0001\u0009",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA26_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA26_eotS),
    DFA26_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA26_eofS),
    DFA26_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA26_minS),
    DFA26_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA26_maxS),
    DFA26_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA26_acceptS),
    DFA26_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA26_specialS),
    DFA26_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv4Parser.DFA26_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA26_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv4Parser.DFA26 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 26;
    this.eot = SimpleCv4Parser.DFA26_eot;
    this.eof = SimpleCv4Parser.DFA26_eof;
    this.min = SimpleCv4Parser.DFA26_min;
    this.max = SimpleCv4Parser.DFA26_max;
    this.accept = SimpleCv4Parser.DFA26_accept;
    this.special = SimpleCv4Parser.DFA26_special;
    this.transition = SimpleCv4Parser.DFA26_transition;
};

org.antlr.lang.extend(SimpleCv4Parser.DFA26, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "276:1: expression : ( assignmentExpr | conditionalExpr );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA26_1 = input.LA(1);

                             
                            var index26_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred43_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index26_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA26_2 = input.LA(1);

                             
                            var index26_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred43_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index26_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA26_3 = input.LA(1);

                             
                            var index26_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred43_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index26_3);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA26_4 = input.LA(1);

                             
                            var index26_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred43_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index26_4);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA26_5 = input.LA(1);

                             
                            var index26_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred43_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index26_5);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA26_6 = input.LA(1);

                             
                            var index26_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred43_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index26_6);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA26_7 = input.LA(1);

                             
                            var index26_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred43_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index26_7);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA26_8 = input.LA(1);

                             
                            var index26_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred43_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index26_8);
                            if ( s>=0 ) return s;
                            break;
                        case 8 : 
                            var LA26_9 = input.LA(1);

                             
                            var index26_9 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred43_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index26_9);
                            if ( s>=0 ) return s;
                            break;
                        case 9 : 
                            var LA26_10 = input.LA(1);

                             
                            var index26_10 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred43_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index26_10);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 26, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA32_eotS:
        "\u0024\uffff",
    DFA32_eofS:
        "\u0001\u0002\u0023\uffff",
    DFA32_minS:
        "\u0001\u006a\u0001\u0000\u0022\uffff",
    DFA32_maxS:
        "\u0001\u00a6\u0001\u0000\u0022\uffff",
    DFA32_acceptS:
        "\u0002\uffff\u0001\u0002\u0020\uffff\u0001\u0001",
    DFA32_specialS:
        "\u0001\uffff\u0001\u0000\u0022\uffff}>",
    DFA32_transitionS: [
            "\u0001\u0002\u0002\uffff\u0002\u0002\u0001\uffff\u0002\u0002"+
            "\u000e\uffff\u0001\u0002\u0008\uffff\u000c\u0002\u0003\uffff"+
            "\u0001\u0002\u0001\u0001\u000d\u0002",
            "\u0001\uffff",
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
            ""
    ]
});

org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA32_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA32_eotS),
    DFA32_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA32_eofS),
    DFA32_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA32_minS),
    DFA32_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA32_maxS),
    DFA32_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA32_acceptS),
    DFA32_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA32_specialS),
    DFA32_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv4Parser.DFA32_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA32_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv4Parser.DFA32 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 32;
    this.eot = SimpleCv4Parser.DFA32_eot;
    this.eof = SimpleCv4Parser.DFA32_eof;
    this.min = SimpleCv4Parser.DFA32_min;
    this.max = SimpleCv4Parser.DFA32_max;
    this.accept = SimpleCv4Parser.DFA32_accept;
    this.special = SimpleCv4Parser.DFA32_special;
    this.transition = SimpleCv4Parser.DFA32_transition;
};

org.antlr.lang.extend(SimpleCv4Parser.DFA32, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "336:15: ( '[' shiftExpr ']' )?";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA32_1 = input.LA(1);

                             
                            var index32_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred62_SimpleCv4()) ) {s = 35;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index32_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 32, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA45_eotS:
        "\u000d\uffff",
    DFA45_eofS:
        "\u000d\uffff",
    DFA45_minS:
        "\u0001\u005f\u0001\u0000\u000b\uffff",
    DFA45_maxS:
        "\u0001\u0097\u0001\u0000\u000b\uffff",
    DFA45_acceptS:
        "\u0002\uffff\u0001\u0003\u0008\uffff\u0001\u0001\u0001\u0002",
    DFA45_specialS:
        "\u0001\uffff\u0001\u0000\u000b\uffff}>",
    DFA45_transitionS: [
            "\u0003\u0002\u000f\uffff\u0001\u0002\u000d\uffff\u0001\u0001"+
            "\u0013\uffff\u0005\u0002",
            "\u0001\uffff",
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
            ""
    ]
});

org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA45_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA45_eotS),
    DFA45_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA45_eofS),
    DFA45_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA45_minS),
    DFA45_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA45_maxS),
    DFA45_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA45_acceptS),
    DFA45_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA45_specialS),
    DFA45_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv4Parser.DFA45_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA45_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv4Parser.DFA45 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 45;
    this.eot = SimpleCv4Parser.DFA45_eot;
    this.eof = SimpleCv4Parser.DFA45_eof;
    this.min = SimpleCv4Parser.DFA45_min;
    this.max = SimpleCv4Parser.DFA45_max;
    this.accept = SimpleCv4Parser.DFA45_accept;
    this.special = SimpleCv4Parser.DFA45_special;
    this.transition = SimpleCv4Parser.DFA45_transition;
};

org.antlr.lang.extend(SimpleCv4Parser.DFA45, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "421:1: castExpr : ( '(' type ')' castExpr -> ^( CASTTYPE type castExpr ) | '(' conditionalExpr ')' -> ^( SUB_CONDITION conditionalExpr ) | unaryExpr );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA45_1 = input.LA(1);

                             
                            var index45_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred84_SimpleCv4()) ) {s = 11;}

                            else if ( (this.synpred85_SimpleCv4()) ) {s = 12;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index45_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 45, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(SimpleCv4Parser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "PROG", "INCLUDE_SYSTEM", "TYPE_DEF", "TYPE_OLD", "TYPE_NEW", "STRUCT_DEF", "STRUCT_CNAME", "VAR_DEF", "VAR_NAME", "C_TYPE", "C_ID", "DEFAULT_VALUE", "TYPE_VOID", "TYPE_I8", "TYPE_I16", "TYPE_I32", "TYPE_UNSIGNED", "TYPE_F32", "TYPE_F64", "TYPE_CUSTOM", "FUNC_DEF", "FUNC_STAT", "FUNC_NAME", "FUNC_HEADER", "FUNC_PARAM", "FUNC_INVOKE", "FOR_STAT", "WHILE_STAT", "DOWHILE_STAT", "IF_STAT", "IF_BRANCH", "ELSEIF_BRANCH", "ELSE_BRANCH", "JUMP_STAT", "JUMP_RETURN", "JUMP_BREAK", "JUMP_CONTINUE", "BLOCK", "EMPTY_BLOCK", "ASSIGNMENT", "ASSIGN", "PLUS_ASSIGN", "MINUS_ASSIGN", "MULTI_ASSIGN", "DIVIDE_ASSIGN", "SHL_ASSIGN", "SHR_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "NOT_ASSIGN", "CONDITION", "SUB_CONDITION", "OR_EXPR", "OR_BRANCH", "AND_EXPR", "AND_BRANCH", "SHIFT_EXPR", "ADDSUB_EXPR", "MULTDIV_EXPR", "CASTTYPE", "SHL_OP", "SHR_OP", "ADD_OP", "SUB_OP", "MULTI_OP", "DIV_OP", "MOD_OP", "RELATION_EXPR", "EQUAL_RE", "NOTEQUAL_RE", "LESS_RE", "GREATER_RE", "GREATEREQUAL_RE", "LESSEQUAL_RE", "PREFIX_PLUS", "PREFIX_MINUS", "PREFIX_NOT", "PREFIX_AND", "PREFIX_STAR", "SIZEOF", "POSTFIX_EXPR", "POSTFIX", "POSTFIX_PLUS", "POSTFIX_MINUS", "MEMBERVAR", "ARRAYINDEX", "CONSTNUM", "DECLARATOR", "ASSIGNMENT_LEFT", "ASSIGNMENT_RIGHT", "VARIABLE", "ID", "INT", "STRING", "EXPONENT", "FLOAT", "WS", "CHINESECHAR", "MULTILINE_COMMENT", "SINGLELINE_COMMENT", "EscapeSequence", "OctalEscape", "';'", "'#'", "'include'", "'<'", "'>'", "'.'", "','", "'*'", "'void'", "'char'", "'short'", "'int'", "'long'", "'float'", "'double'", "'signed'", "'unsigned'", "'typedef'", "'struct'", "'{'", "'}'", "'('", "')'", "'for'", "'while'", "'do'", "'if'", "'else'", "'continue'", "'break'", "'return'", "'='", "'+='", "'-='", "'*='", "'/='", "'<<='", "'>>='", "'&='", "'|='", "'^='", "'++'", "'--'", "'sizeof'", "'!'", "'&'", "'->'", "'['", "']'", "'||'", "'&&'", "'=='", "'!='", "'<='", "'>='", "'<<'", "'>>'", "'+'", "'-'", "'/'", "'%'"],
    FOLLOW_statement_in_program775: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x80000000, 0x1FFC0800]),
    FOLLOW_declaration_in_statement809: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_variable_in_statement819: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_structDefinition_in_statement829: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_typeDefinition_in_statement839: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionHeader_in_statement849: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_statement851: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionHeader_in_statement874: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0xA0020403,0x00F801DE, 0x00000000]),
    FOLLOW_block_in_statement876: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_107_in_declaration910: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00001000]),
    FOLLOW_108_in_declaration912: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00002000]),
    FOLLOW_109_in_declaration914: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_libname_in_declaration916: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00004000]),
    FOLLOW_110_in_declaration918: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_libname951: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00008000]),
    FOLLOW_111_in_libname954: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_ID_in_libname956: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_in_variable978: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_declarator_in_variable980: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00010400,0x0007FE00, 0x00000000]),
    FOLLOW_assignmentOp_in_variable983: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_shiftExpr_in_variable985: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00010400]),
    FOLLOW_112_in_variable990: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00020000]),
    FOLLOW_113_in_variable992: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_declarator_in_variable995: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00010400,0x0007FE00, 0x00000000]),
    FOLLOW_assignmentOp_in_variable998: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_shiftExpr_in_variable1000: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00010400]),
    FOLLOW_106_in_variable1006: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_typeSpecifier_in_type1054: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00020000]),
    FOLLOW_113_in_type1056: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_114_in_typeSpecifier1091: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_115_in_typeSpecifier1102: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_116_in_typeSpecifier1113: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_117_in_typeSpecifier1124: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_118_in_typeSpecifier1135: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_119_in_typeSpecifier1146: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_120_in_typeSpecifier1157: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_121_in_typeSpecifier1168: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_122_in_typeSpecifier1179: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_typeSpecifier1194: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_declarator1222: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_123_in_typeDefinition1243: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x07FC0000]),
    FOLLOW_oldTypeName_in_typeDefinition1245: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_newTypeName_in_typeDefinition1247: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_typeDefinition1249: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_typeSpecifier_in_oldTypeName1290: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_newTypeName1310: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_123_in_structDefinition1337: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_structDefinition1342: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_structName_in_structDefinition1344: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x20000000]),
    FOLLOW_structBlock_in_structDefinition1346: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000400]),
    FOLLOW_structVar_in_structDefinition1350: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00010400]),
    FOLLOW_112_in_structDefinition1354: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_structVar_in_structDefinition1356: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00010400]),
    FOLLOW_106_in_structDefinition1364: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_structName1405: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_in_structVar1424: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_125_in_structBlock1456: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x47FC0000]),
    FOLLOW_variable_in_structBlock1470: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x47FC0000]),
    FOLLOW_126_in_structBlock1481: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_in_functionHeader1510: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_ID_in_functionHeader1512: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x80000000]),
    FOLLOW_127_in_functionHeader1514: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x07FC0000,0x00000001, 0x00000000]),
    FOLLOW_formalParameter_in_functionHeader1518: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00010000,0x00000001, 0x00000000]),
    FOLLOW_112_in_functionHeader1522: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x07FC0000]),
    FOLLOW_formalParameter_in_functionHeader1524: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00010000,0x00000001, 0x00000000]),
    FOLLOW_128_in_functionHeader1532: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_in_formalParameter1573: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_declarator_in_formalParameter1575: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_125_in_block1617: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0xC7FE0003,0x00F801DE, 0x00000000]),
    FOLLOW_variable_in_block1631: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0xC7FE0003,0x00F801DE, 0x00000000]),
    FOLLOW_stat_in_block1646: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0xC0020003,0x00F801DE, 0x00000000]),
    FOLLOW_126_in_block1657: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_stat_in_block1687: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_106_in_block1710: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forStat_in_stat1738: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_whileStat_in_stat1748: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ifStat_in_stat1758: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_stat1768: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_stat1770: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_jumpStat_in_stat1800: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_129_in_forStat1820: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x80000000]),
    FOLLOW_127_in_forStat1822: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_assignmentExpr_in_forStat1824: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_forStat1826: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_conditionalExpr_in_forStat1828: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_forStat1830: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_expression_in_forStat1832: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_forStat1834: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0xA0020403,0x00F801DE, 0x00000000]),
    FOLLOW_block_in_forStat1836: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_130_in_whileStat1885: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x80000000]),
    FOLLOW_127_in_whileStat1887: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_conditionalExpr_in_whileStat1889: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_whileStat1891: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0xA0020403,0x00F801DE, 0x00000000]),
    FOLLOW_block_in_whileStat1893: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_131_in_whileStat1917: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0xA0020403,0x00F801DE, 0x00000000]),
    FOLLOW_block_in_whileStat1919: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000004, 0x00000000]),
    FOLLOW_130_in_whileStat1921: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x80000000]),
    FOLLOW_127_in_whileStat1923: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_conditionalExpr_in_whileStat1925: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_whileStat1927: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_whileStat1929: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_132_in_ifStat1962: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x80000000]),
    FOLLOW_127_in_ifStat1964: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_conditionalExpr_in_ifStat1966: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_ifStat1968: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0xA0020403,0x00F801DE, 0x00000000]),
    FOLLOW_block_in_ifStat1970: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00000020, 0x00000000]),
    FOLLOW_133_in_ifStat1975: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0xA0020403,0x00F801DE, 0x00000000]),
    FOLLOW_block_in_ifStat1977: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_134_in_jumpStat2023: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_jumpStat2025: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_135_in_jumpStat2046: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_jumpStat2048: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_136_in_jumpStat2069: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80000403]),
    FOLLOW_primaryExpr_in_jumpStat2072: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_jumpStat2076: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_funcInvoke2114: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x80000000]),
    FOLLOW_127_in_funcInvoke2116: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80001, 0x00000000]),
    FOLLOW_shiftExpr_in_funcInvoke2120: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00010000,0x00000001, 0x00000000]),
    FOLLOW_112_in_funcInvoke2124: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_shiftExpr_in_funcInvoke2126: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00010000,0x00000001, 0x00000000]),
    FOLLOW_128_in_funcInvoke2133: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignmentExpr_in_expression2175: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_conditionalExpr_in_expression2183: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unaryExpr_in_assignmentExpr2202: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x0007FE00, 0x00000000]),
    FOLLOW_assignmentOp_in_assignmentExpr2205: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_shiftExpr_in_assignmentExpr2207: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_137_in_assignmentOp2256: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_138_in_assignmentOp2275: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_139_in_assignmentOp2294: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_140_in_assignmentOp2313: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_141_in_assignmentOp2332: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_142_in_assignmentOp2351: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_143_in_assignmentOp2370: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_144_in_assignmentOp2389: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_145_in_assignmentOp2408: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_146_in_assignmentOp2427: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_postfixExpr_in_unaryExpr2458: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_147_in_unaryExpr2468: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_unaryExpr_in_unaryExpr2470: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_148_in_unaryExpr2492: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_unaryExpr_in_unaryExpr2494: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_149_in_unaryExpr2516: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x80000000]),
    FOLLOW_127_in_unaryExpr2518: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x07FC0000]),
    FOLLOW_type_in_unaryExpr2520: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_unaryExpr2522: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unaryOp_in_unaryExpr2544: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_castExpr_in_unaryExpr2546: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_funcInvoke_in_unaryExpr2554: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_150_in_unaryOp2577: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_151_in_unaryOp2595: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_113_in_unaryOp2613: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primaryExpr_in_postfixExpr2640: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x03180000, 0x00000000]),
    FOLLOW_postfix_in_postfixExpr2643: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x03180000, 0x00000000]),
    FOLLOW_152_in_postfix2681: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_ID_in_postfix2683: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x02000000, 0x00000000]),
    FOLLOW_153_in_postfix2686: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_shiftExpr_in_postfix2688: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x04000000, 0x00000000]),
    FOLLOW_154_in_postfix2690: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_147_in_postfix2721: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_148_in_postfix2741: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_153_in_postfix2761: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_expression_in_postfix2763: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x04000000, 0x00000000]),
    FOLLOW_154_in_postfix2765: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_in_primaryExpr2796: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INT_in_primaryExpr2820: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_primaryExpr2843: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_127_in_primaryExpr2853: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_expression_in_primaryExpr2855: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_primaryExpr2857: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalOrExpr_in_conditionalExpr2885: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalAndExpr_in_logicalOrExpr2915: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_155_in_logicalOrExpr2918: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_logicalAndExpr_in_logicalOrExpr2921: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_relationExpr_in_logicalAndExpr2940: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x10000000, 0x00000000]),
    FOLLOW_156_in_logicalAndExpr2943: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_relationExpr_in_logicalAndExpr2946: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x10000000, 0x00000000]),
    FOLLOW_shiftExpr_in_relationExpr2965: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00006000,0xE0000000, 0x00000001]),
    FOLLOW_relationOp_in_relationExpr2968: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_shiftExpr_in_relationExpr2971: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00006000,0xE0000000, 0x00000001]),
    FOLLOW_157_in_relationOp2994: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_158_in_relationOp3011: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_109_in_relationOp3028: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_110_in_relationOp3045: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_159_in_relationOp3062: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_160_in_relationOp3079: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_addSubExpr_in_shiftExpr3108: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00000000, 0x00000006]),
    FOLLOW_shiftOp_in_shiftExpr3111: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_addSubExpr_in_shiftExpr3114: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00000000, 0x00000006]),
    FOLLOW_161_in_shiftOp3132: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_162_in_shiftOp3148: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_multDivExpr_in_addSubExpr3175: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00000000, 0x00000018]),
    FOLLOW_addSubOp_in_addSubExpr3178: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_multDivExpr_in_addSubExpr3181: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00000000, 0x00000018]),
    FOLLOW_163_in_addSubOp3199: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_164_in_addSubOp3215: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_castExpr_in_multDivExpr3243: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00020000,0x00000000, 0x00000060]),
    FOLLOW_multDivOp_in_multDivExpr3246: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_castExpr_in_multDivExpr3249: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00020000,0x00000000, 0x00000060]),
    FOLLOW_113_in_multDivOp3268: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_165_in_multDivOp3284: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_166_in_multDivOp3300: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_127_in_castExpr3327: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x07FC0000]),
    FOLLOW_type_in_castExpr3329: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_castExpr3331: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_castExpr_in_castExpr3333: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_127_in_castExpr3355: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_conditionalExpr_in_castExpr3357: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_castExpr3359: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unaryExpr_in_castExpr3381: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionHeader_in_synpred6_SimpleCv4849: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_synpred6_SimpleCv4851: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_variable_in_synpred28_SimpleCv41631: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_133_in_synpred37_SimpleCv41975: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0xA0020403,0x00F801DE, 0x00000000]),
    FOLLOW_block_in_synpred37_SimpleCv41977: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignmentExpr_in_synpred43_SimpleCv42175: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_153_in_synpred62_SimpleCv42686: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_shiftExpr_in_synpred62_SimpleCv42688: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x04000000, 0x00000000]),
    FOLLOW_154_in_synpred62_SimpleCv42690: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_127_in_synpred84_SimpleCv43327: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x07FC0000]),
    FOLLOW_type_in_synpred84_SimpleCv43329: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_synpred84_SimpleCv43331: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_castExpr_in_synpred84_SimpleCv43333: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_127_in_synpred85_SimpleCv43355: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x80020003,0x00F80000, 0x00000000]),
    FOLLOW_conditionalExpr_in_synpred85_SimpleCv43357: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_synpred85_SimpleCv43359: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();

module.exports = SimpleCv4Parser;