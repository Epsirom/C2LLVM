// $ANTLR 3.3 Nov 30, 2010 12:50:56 SimpleCv4.g 2014-06-08 04:22:19

var SimpleCv4Parser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    SimpleCv4Parser.superclass.constructor.call(this, input, state);

    this.dfa2 = new SimpleCv4Parser.DFA2(this);
    this.dfa27 = new SimpleCv4Parser.DFA27(this);
    this.dfa33 = new SimpleCv4Parser.DFA33(this);
    this.dfa46 = new SimpleCv4Parser.DFA46(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(SimpleCv4Parser, {
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
// public class variables
var EOF= -1,
    T__102= 102,
    T__103= 103,
    T__104= 104,
    T__105= 105,
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
    DECLARATOR= 90,
    ID= 91,
    INT= 92,
    STRING= 93,
    EXPONENT= 94,
    FLOAT= 95,
    WS= 96,
    CHINESECHAR= 97,
    MULTILINE_COMMENT= 98,
    SINGLELINE_COMMENT= 99,
    EscapeSequence= 100,
    OctalEscape= 101;

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

    // SimpleCv4.g:112:1: program : ( statement )+ -> ^( PROG ( statement )+ ) ;
    // $ANTLR start "program"
    program: function() {
        var retval = new SimpleCv4Parser.program_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var statement1 = null;

        var stream_statement=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule statement");
        try {
            // SimpleCv4.g:113:5: ( ( statement )+ -> ^( PROG ( statement )+ ) )
            // SimpleCv4.g:113:9: ( statement )+
            // SimpleCv4.g:113:9: ( statement )+
            var cnt1=0;
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==ID||LA1_0==103||(LA1_0>=110 && LA1_0<=120)) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // SimpleCv4.g:0:0: statement
                    this.pushFollow(SimpleCv4Parser.FOLLOW_statement_in_program737);
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
            // 114:6: -> ^( PROG ( statement )+ )
            {
                // SimpleCv4.g:114:9: ^( PROG ( statement )+ )
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

    // SimpleCv4.g:117:1: statement : ( declaration | variable | structDefinition | typeDefinition | functionHeader ';' -> ^( FUNC_STAT functionHeader ) | functionHeader block -> ^( FUNC_DEF functionHeader block ) );
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
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_functionHeader=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule functionHeader");
        var stream_block=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule block");
        try {
            // SimpleCv4.g:118:5: ( declaration | variable | structDefinition | typeDefinition | functionHeader ';' -> ^( FUNC_STAT functionHeader ) | functionHeader block -> ^( FUNC_DEF functionHeader block ) )
            var alt2=6;
            alt2 = this.dfa2.predict(this.input);
            switch (alt2) {
                case 1 :
                    // SimpleCv4.g:118:9: declaration
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_declaration_in_statement771);
                    declaration2=this.declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration2.getTree());


                    break;
                case 2 :
                    // SimpleCv4.g:119:9: variable
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_variable_in_statement781);
                    variable3=this.variable();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variable3.getTree());


                    break;
                case 3 :
                    // SimpleCv4.g:120:9: structDefinition
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_structDefinition_in_statement791);
                    structDefinition4=this.structDefinition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, structDefinition4.getTree());


                    break;
                case 4 :
                    // SimpleCv4.g:121:9: typeDefinition
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_typeDefinition_in_statement801);
                    typeDefinition5=this.typeDefinition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, typeDefinition5.getTree());


                    break;
                case 5 :
                    // SimpleCv4.g:122:9: functionHeader ';'
                    this.pushFollow(SimpleCv4Parser.FOLLOW_functionHeader_in_statement811);
                    functionHeader6=this.functionHeader();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_functionHeader.add(functionHeader6.getTree());
                    char_literal7=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_statement813); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_102.add(char_literal7);



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
                    // 123:6: -> ^( FUNC_STAT functionHeader )
                    {
                        // SimpleCv4.g:123:9: ^( FUNC_STAT functionHeader )
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
                    // SimpleCv4.g:124:9: functionHeader block
                    this.pushFollow(SimpleCv4Parser.FOLLOW_functionHeader_in_statement836);
                    functionHeader8=this.functionHeader();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_functionHeader.add(functionHeader8.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_statement838);
                    block9=this.block();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_block.add(block9.getTree());


                    // AST REWRITE
                    // elements: block, functionHeader
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 125:6: -> ^( FUNC_DEF functionHeader block )
                    {
                        // SimpleCv4.g:125:9: ^( FUNC_DEF functionHeader block )
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

    // SimpleCv4.g:128:1: declaration : '#' 'include' '<' libname '>' -> ^( INCLUDE_SYSTEM libname ) ;
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
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_105=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 105");
        var stream_104=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 104");
        var stream_103=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 103");
        var stream_libname=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule libname");
        try {
            // SimpleCv4.g:129:5: ( '#' 'include' '<' libname '>' -> ^( INCLUDE_SYSTEM libname ) )
            // SimpleCv4.g:129:9: '#' 'include' '<' libname '>'
            char_literal10=this.match(this.input,103,SimpleCv4Parser.FOLLOW_103_in_declaration872); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_103.add(char_literal10);

            string_literal11=this.match(this.input,104,SimpleCv4Parser.FOLLOW_104_in_declaration874); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_104.add(string_literal11);

            char_literal12=this.match(this.input,105,SimpleCv4Parser.FOLLOW_105_in_declaration876); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_105.add(char_literal12);

            this.pushFollow(SimpleCv4Parser.FOLLOW_libname_in_declaration878);
            libname13=this.libname();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_libname.add(libname13.getTree());
            char_literal14=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_declaration880); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_106.add(char_literal14);



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
            // 130:6: -> ^( INCLUDE_SYSTEM libname )
            {
                // SimpleCv4.g:130:9: ^( INCLUDE_SYSTEM libname )
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

    // SimpleCv4.g:133:1: libname : ID ( '.' ID )? ;
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
            // SimpleCv4.g:134:5: ( ID ( '.' ID )? )
            // SimpleCv4.g:134:9: ID ( '.' ID )?
            root_0 = this.adaptor.nil();

            ID15=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_libname913); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            ID15_tree = this.adaptor.create(ID15);
            this.adaptor.addChild(root_0, ID15_tree);
            }
            // SimpleCv4.g:134:12: ( '.' ID )?
            var alt3=2;
            var LA3_0 = this.input.LA(1);

            if ( (LA3_0==107) ) {
                alt3=1;
            }
            switch (alt3) {
                case 1 :
                    // SimpleCv4.g:134:13: '.' ID
                    char_literal16=this.match(this.input,107,SimpleCv4Parser.FOLLOW_107_in_libname916); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal16_tree = this.adaptor.create(char_literal16);
                    this.adaptor.addChild(root_0, char_literal16_tree);
                    }
                    ID17=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_libname918); if (this.state.failed) return retval;
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

    // SimpleCv4.g:137:1: variable : type declarator ( assignmentOp conditionalExpr )? ( ',' ( '*' )? declarator ( assignmentOp shiftExpr )? )* ';' -> ^( VAR_DEF type ( ^( VAR_NAME declarator ) ( ^( DEFAULT_VALUE shiftExpr ) )? )+ ) ;
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
         var conditionalExpr21 = null;
         var declarator24 = null;
         var assignmentOp25 = null;
         var shiftExpr26 = null;

        var char_literal22_tree=null;
        var char_literal23_tree=null;
        var char_literal27_tree=null;
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_declarator=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule declarator");
        var stream_conditionalExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule conditionalExpr");
        var stream_shiftExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule shiftExpr");
        var stream_type=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule type");
        var stream_assignmentOp=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule assignmentOp");
        try {
            // SimpleCv4.g:138:5: ( type declarator ( assignmentOp conditionalExpr )? ( ',' ( '*' )? declarator ( assignmentOp shiftExpr )? )* ';' -> ^( VAR_DEF type ( ^( VAR_NAME declarator ) ( ^( DEFAULT_VALUE shiftExpr ) )? )+ ) )
            // SimpleCv4.g:138:9: type declarator ( assignmentOp conditionalExpr )? ( ',' ( '*' )? declarator ( assignmentOp shiftExpr )? )* ';'
            this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_variable940);
            type18=this.type();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_type.add(type18.getTree());
            this.pushFollow(SimpleCv4Parser.FOLLOW_declarator_in_variable942);
            declarator19=this.declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_declarator.add(declarator19.getTree());
            // SimpleCv4.g:138:25: ( assignmentOp conditionalExpr )?
            var alt4=2;
            var LA4_0 = this.input.LA(1);

            if ( ((LA4_0>=133 && LA4_0<=142)) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // SimpleCv4.g:138:26: assignmentOp conditionalExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentOp_in_variable945);
                    assignmentOp20=this.assignmentOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_assignmentOp.add(assignmentOp20.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_variable947);
                    conditionalExpr21=this.conditionalExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr21.getTree());


                    break;

            }

            // SimpleCv4.g:138:57: ( ',' ( '*' )? declarator ( assignmentOp shiftExpr )? )*
            loop7:
            do {
                var alt7=2;
                var LA7_0 = this.input.LA(1);

                if ( (LA7_0==108) ) {
                    alt7=1;
                }


                switch (alt7) {
                case 1 :
                    // SimpleCv4.g:138:58: ',' ( '*' )? declarator ( assignmentOp shiftExpr )?
                    char_literal22=this.match(this.input,108,SimpleCv4Parser.FOLLOW_108_in_variable952); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_108.add(char_literal22);

                    // SimpleCv4.g:138:62: ( '*' )?
                    var alt5=2;
                    var LA5_0 = this.input.LA(1);

                    if ( (LA5_0==109) ) {
                        alt5=1;
                    }
                    switch (alt5) {
                        case 1 :
                            // SimpleCv4.g:0:0: '*'
                            char_literal23=this.match(this.input,109,SimpleCv4Parser.FOLLOW_109_in_variable954); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_109.add(char_literal23);



                            break;

                    }

                    this.pushFollow(SimpleCv4Parser.FOLLOW_declarator_in_variable957);
                    declarator24=this.declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_declarator.add(declarator24.getTree());
                    // SimpleCv4.g:138:78: ( assignmentOp shiftExpr )?
                    var alt6=2;
                    var LA6_0 = this.input.LA(1);

                    if ( ((LA6_0>=133 && LA6_0<=142)) ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // SimpleCv4.g:138:79: assignmentOp shiftExpr
                            this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentOp_in_variable960);
                            assignmentOp25=this.assignmentOp();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_assignmentOp.add(assignmentOp25.getTree());
                            this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_variable962);
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

            char_literal27=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_variable968); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_102.add(char_literal27);



            // AST REWRITE
            // elements: shiftExpr, declarator, type
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 139:6: -> ^( VAR_DEF type ( ^( VAR_NAME declarator ) ( ^( DEFAULT_VALUE shiftExpr ) )? )+ )
            {
                // SimpleCv4.g:139:9: ^( VAR_DEF type ( ^( VAR_NAME declarator ) ( ^( DEFAULT_VALUE shiftExpr ) )? )+ )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(VAR_DEF, "VAR_DEF"), root_1);

                this.adaptor.addChild(root_1, stream_type.nextTree());
                if ( !(stream_declarator.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_declarator.hasNext() ) {
                    // SimpleCv4.g:139:25: ^( VAR_NAME declarator )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(this.adaptor.create(VAR_NAME, "VAR_NAME"), root_2);

                    this.adaptor.addChild(root_2, stream_declarator.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }
                    // SimpleCv4.g:139:48: ( ^( DEFAULT_VALUE shiftExpr ) )?
                    if ( stream_shiftExpr.hasNext() ) {
                        // SimpleCv4.g:139:48: ^( DEFAULT_VALUE shiftExpr )
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

    // SimpleCv4.g:142:1: type : typeSpecifier ( '*' )? -> ^( C_TYPE typeSpecifier ( '*' )? ) ;
    // $ANTLR start "type"
    type: function() {
        var retval = new SimpleCv4Parser.type_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal29 = null;
         var typeSpecifier28 = null;

        var char_literal29_tree=null;
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");
        var stream_typeSpecifier=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeSpecifier");
        try {
            // SimpleCv4.g:143:5: ( typeSpecifier ( '*' )? -> ^( C_TYPE typeSpecifier ( '*' )? ) )
            // SimpleCv4.g:143:9: typeSpecifier ( '*' )?
            this.pushFollow(SimpleCv4Parser.FOLLOW_typeSpecifier_in_type1016);
            typeSpecifier28=this.typeSpecifier();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_typeSpecifier.add(typeSpecifier28.getTree());
            // SimpleCv4.g:143:23: ( '*' )?
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0==109) ) {
                alt8=1;
            }
            switch (alt8) {
                case 1 :
                    // SimpleCv4.g:0:0: '*'
                    char_literal29=this.match(this.input,109,SimpleCv4Parser.FOLLOW_109_in_type1018); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_109.add(char_literal29);



                    break;

            }



            // AST REWRITE
            // elements: typeSpecifier, 109
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 144:6: -> ^( C_TYPE typeSpecifier ( '*' )? )
            {
                // SimpleCv4.g:144:9: ^( C_TYPE typeSpecifier ( '*' )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(C_TYPE, "C_TYPE"), root_1);

                this.adaptor.addChild(root_1, stream_typeSpecifier.nextTree());
                // SimpleCv4.g:144:32: ( '*' )?
                if ( stream_109.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_109.nextNode());

                }
                stream_109.reset();

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

    // SimpleCv4.g:147:1: typeSpecifier : ( 'void' -> TYPE_VOID | 'char' -> TYPE_I8 | 'short' -> TYPE_I16 | 'int' -> TYPE_I32 | 'long' -> TYPE_I32 | 'float' -> TYPE_F32 | 'double' -> TYPE_F64 | 'signed' -> TYPE_I32 | 'unsigned' -> ^( TYPE_I32 TYPE_UNSIGNED ) | ID -> ^( TYPE_CUSTOM ID ) );
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
        var stream_112=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 112");
        var stream_113=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 113");
        var stream_110=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 110");
        var stream_111=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 111");
        var stream_ID=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ID");
        var stream_118=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 118");

        try {
            // SimpleCv4.g:148:2: ( 'void' -> TYPE_VOID | 'char' -> TYPE_I8 | 'short' -> TYPE_I16 | 'int' -> TYPE_I32 | 'long' -> TYPE_I32 | 'float' -> TYPE_F32 | 'double' -> TYPE_F64 | 'signed' -> TYPE_I32 | 'unsigned' -> ^( TYPE_I32 TYPE_UNSIGNED ) | ID -> ^( TYPE_CUSTOM ID ) )
            var alt9=10;
            switch ( this.input.LA(1) ) {
            case 110:
                alt9=1;
                break;
            case 111:
                alt9=2;
                break;
            case 112:
                alt9=3;
                break;
            case 113:
                alt9=4;
                break;
            case 114:
                alt9=5;
                break;
            case 115:
                alt9=6;
                break;
            case 116:
                alt9=7;
                break;
            case 117:
                alt9=8;
                break;
            case 118:
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
                    // SimpleCv4.g:148:4: 'void'
                    string_literal30=this.match(this.input,110,SimpleCv4Parser.FOLLOW_110_in_typeSpecifier1053); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_110.add(string_literal30);



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
                    // 149:3: -> TYPE_VOID
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_VOID, "TYPE_VOID"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:150:4: 'char'
                    string_literal31=this.match(this.input,111,SimpleCv4Parser.FOLLOW_111_in_typeSpecifier1064); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_111.add(string_literal31);



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
                    // 151:3: -> TYPE_I8
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_I8, "TYPE_I8"));

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:152:4: 'short'
                    string_literal32=this.match(this.input,112,SimpleCv4Parser.FOLLOW_112_in_typeSpecifier1075); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_112.add(string_literal32);



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
                    // 153:3: -> TYPE_I16
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_I16, "TYPE_I16"));

                    }

                    retval.tree = root_0;}

                    break;
                case 4 :
                    // SimpleCv4.g:154:4: 'int'
                    string_literal33=this.match(this.input,113,SimpleCv4Parser.FOLLOW_113_in_typeSpecifier1086); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_113.add(string_literal33);



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
                    // 155:3: -> TYPE_I32
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_I32, "TYPE_I32"));

                    }

                    retval.tree = root_0;}

                    break;
                case 5 :
                    // SimpleCv4.g:156:4: 'long'
                    string_literal34=this.match(this.input,114,SimpleCv4Parser.FOLLOW_114_in_typeSpecifier1097); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_114.add(string_literal34);



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
                    // 157:3: -> TYPE_I32
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_I32, "TYPE_I32"));

                    }

                    retval.tree = root_0;}

                    break;
                case 6 :
                    // SimpleCv4.g:158:4: 'float'
                    string_literal35=this.match(this.input,115,SimpleCv4Parser.FOLLOW_115_in_typeSpecifier1108); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_115.add(string_literal35);



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
                    // 159:3: -> TYPE_F32
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_F32, "TYPE_F32"));

                    }

                    retval.tree = root_0;}

                    break;
                case 7 :
                    // SimpleCv4.g:160:4: 'double'
                    string_literal36=this.match(this.input,116,SimpleCv4Parser.FOLLOW_116_in_typeSpecifier1119); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_116.add(string_literal36);



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
                    // 161:3: -> TYPE_F64
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(TYPE_F64, "TYPE_F64"));

                    }

                    retval.tree = root_0;}

                    break;
                case 8 :
                    // SimpleCv4.g:162:4: 'signed'
                    string_literal37=this.match(this.input,117,SimpleCv4Parser.FOLLOW_117_in_typeSpecifier1130); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_117.add(string_literal37);



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
                case 9 :
                    // SimpleCv4.g:164:4: 'unsigned'
                    string_literal38=this.match(this.input,118,SimpleCv4Parser.FOLLOW_118_in_typeSpecifier1141); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_118.add(string_literal38);



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
                    // 165:3: -> ^( TYPE_I32 TYPE_UNSIGNED )
                    {
                        // SimpleCv4.g:165:6: ^( TYPE_I32 TYPE_UNSIGNED )
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
                    // SimpleCv4.g:166:4: ID
                    ID39=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_typeSpecifier1156); if (this.state.failed) return retval; 
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
                    // 167:3: -> ^( TYPE_CUSTOM ID )
                    {
                        // SimpleCv4.g:167:6: ^( TYPE_CUSTOM ID )
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

    // SimpleCv4.g:170:1: declarator : ID ;
    // $ANTLR start "declarator"
    declarator: function() {
        var retval = new SimpleCv4Parser.declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID40 = null;

        var ID40_tree=null;

        try {
            // SimpleCv4.g:171:5: ( ID )
            // SimpleCv4.g:171:10: ID
            root_0 = this.adaptor.nil();

            ID40=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_declarator1184); if (this.state.failed) return retval;
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

    // SimpleCv4.g:174:1: typeDefinition : 'typedef' oldTypeName newTypeName ';' -> ^( TYPE_DEF ^( TYPE_OLD oldTypeName ) ^( TYPE_NEW newTypeName ) ) ;
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
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_119=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 119");
        var stream_newTypeName=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule newTypeName");
        var stream_oldTypeName=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule oldTypeName");
        try {
            // SimpleCv4.g:175:5: ( 'typedef' oldTypeName newTypeName ';' -> ^( TYPE_DEF ^( TYPE_OLD oldTypeName ) ^( TYPE_NEW newTypeName ) ) )
            // SimpleCv4.g:175:10: 'typedef' oldTypeName newTypeName ';'
            string_literal41=this.match(this.input,119,SimpleCv4Parser.FOLLOW_119_in_typeDefinition1205); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_119.add(string_literal41);

            this.pushFollow(SimpleCv4Parser.FOLLOW_oldTypeName_in_typeDefinition1207);
            oldTypeName42=this.oldTypeName();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_oldTypeName.add(oldTypeName42.getTree());
            this.pushFollow(SimpleCv4Parser.FOLLOW_newTypeName_in_typeDefinition1209);
            newTypeName43=this.newTypeName();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_newTypeName.add(newTypeName43.getTree());
            char_literal44=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_typeDefinition1211); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_102.add(char_literal44);



            // AST REWRITE
            // elements: newTypeName, oldTypeName
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 176:6: -> ^( TYPE_DEF ^( TYPE_OLD oldTypeName ) ^( TYPE_NEW newTypeName ) )
            {
                // SimpleCv4.g:176:9: ^( TYPE_DEF ^( TYPE_OLD oldTypeName ) ^( TYPE_NEW newTypeName ) )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(TYPE_DEF, "TYPE_DEF"), root_1);

                // SimpleCv4.g:176:20: ^( TYPE_OLD oldTypeName )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(TYPE_OLD, "TYPE_OLD"), root_2);

                this.adaptor.addChild(root_2, stream_oldTypeName.nextTree());

                this.adaptor.addChild(root_1, root_2);
                }
                // SimpleCv4.g:176:44: ^( TYPE_NEW newTypeName )
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

    // SimpleCv4.g:179:1: oldTypeName : typeSpecifier ;
    // $ANTLR start "oldTypeName"
    oldTypeName: function() {
        var retval = new SimpleCv4Parser.oldTypeName_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var typeSpecifier45 = null;


        try {
            // SimpleCv4.g:180:5: ( typeSpecifier )
            // SimpleCv4.g:180:7: typeSpecifier
            root_0 = this.adaptor.nil();

            this.pushFollow(SimpleCv4Parser.FOLLOW_typeSpecifier_in_oldTypeName1252);
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

    // SimpleCv4.g:183:1: newTypeName : ID ;
    // $ANTLR start "newTypeName"
    newTypeName: function() {
        var retval = new SimpleCv4Parser.newTypeName_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID46 = null;

        var ID46_tree=null;

        try {
            // SimpleCv4.g:184:5: ( ID )
            // SimpleCv4.g:184:9: ID
            root_0 = this.adaptor.nil();

            ID46=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_newTypeName1272); if (this.state.failed) return retval;
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

    // SimpleCv4.g:187:1: structDefinition : ( 'typedef' )? 'struct' structName structBlock ( structVar ( ',' structVar )* )? ';' -> ^( STRUCT_DEF ^( structName ( structVar )* structBlock ) ) ;
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
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_120=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 120");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_119=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 119");
        var stream_structName=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule structName");
        var stream_structBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule structBlock");
        var stream_structVar=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule structVar");
        try {
            // SimpleCv4.g:188:5: ( ( 'typedef' )? 'struct' structName structBlock ( structVar ( ',' structVar )* )? ';' -> ^( STRUCT_DEF ^( structName ( structVar )* structBlock ) ) )
            // SimpleCv4.g:188:9: ( 'typedef' )? 'struct' structName structBlock ( structVar ( ',' structVar )* )? ';'
            // SimpleCv4.g:188:9: ( 'typedef' )?
            var alt10=2;
            var LA10_0 = this.input.LA(1);

            if ( (LA10_0==119) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // SimpleCv4.g:188:11: 'typedef'
                    string_literal47=this.match(this.input,119,SimpleCv4Parser.FOLLOW_119_in_structDefinition1299); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_119.add(string_literal47);



                    break;

            }

            string_literal48=this.match(this.input,120,SimpleCv4Parser.FOLLOW_120_in_structDefinition1304); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_120.add(string_literal48);

            this.pushFollow(SimpleCv4Parser.FOLLOW_structName_in_structDefinition1306);
            structName49=this.structName();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_structName.add(structName49.getTree());
            this.pushFollow(SimpleCv4Parser.FOLLOW_structBlock_in_structDefinition1308);
            structBlock50=this.structBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_structBlock.add(structBlock50.getTree());
            // SimpleCv4.g:188:56: ( structVar ( ',' structVar )* )?
            var alt12=2;
            var LA12_0 = this.input.LA(1);

            if ( (LA12_0==ID) ) {
                alt12=1;
            }
            switch (alt12) {
                case 1 :
                    // SimpleCv4.g:188:58: structVar ( ',' structVar )*
                    this.pushFollow(SimpleCv4Parser.FOLLOW_structVar_in_structDefinition1312);
                    structVar51=this.structVar();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_structVar.add(structVar51.getTree());
                    // SimpleCv4.g:188:68: ( ',' structVar )*
                    loop11:
                    do {
                        var alt11=2;
                        var LA11_0 = this.input.LA(1);

                        if ( (LA11_0==108) ) {
                            alt11=1;
                        }


                        switch (alt11) {
                        case 1 :
                            // SimpleCv4.g:188:70: ',' structVar
                            char_literal52=this.match(this.input,108,SimpleCv4Parser.FOLLOW_108_in_structDefinition1316); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_108.add(char_literal52);

                            this.pushFollow(SimpleCv4Parser.FOLLOW_structVar_in_structDefinition1318);
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

            char_literal54=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_structDefinition1326); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_102.add(char_literal54);



            // AST REWRITE
            // elements: structName, structVar, structBlock
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 189:6: -> ^( STRUCT_DEF ^( structName ( structVar )* structBlock ) )
            {
                // SimpleCv4.g:189:9: ^( STRUCT_DEF ^( structName ( structVar )* structBlock ) )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(STRUCT_DEF, "STRUCT_DEF"), root_1);

                // SimpleCv4.g:189:22: ^( structName ( structVar )* structBlock )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(stream_structName.nextNode(), root_2);

                // SimpleCv4.g:189:35: ( structVar )*
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

    // SimpleCv4.g:192:1: structName : ID ;
    // $ANTLR start "structName"
    structName: function() {
        var retval = new SimpleCv4Parser.structName_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID55 = null;

        var ID55_tree=null;

        try {
            // SimpleCv4.g:193:5: ( ID )
            // SimpleCv4.g:193:9: ID
            root_0 = this.adaptor.nil();

            ID55=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_structName1367); if (this.state.failed) return retval;
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

    // SimpleCv4.g:196:1: structVar : declarator -> ^( STRUCT_CNAME declarator ) ;
    // $ANTLR start "structVar"
    structVar: function() {
        var retval = new SimpleCv4Parser.structVar_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var declarator56 = null;

        var stream_declarator=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule declarator");
        try {
            // SimpleCv4.g:197:5: ( declarator -> ^( STRUCT_CNAME declarator ) )
            // SimpleCv4.g:197:9: declarator
            this.pushFollow(SimpleCv4Parser.FOLLOW_declarator_in_structVar1386);
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
            // 198:6: -> ^( STRUCT_CNAME declarator )
            {
                // SimpleCv4.g:198:9: ^( STRUCT_CNAME declarator )
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

    // SimpleCv4.g:201:1: structBlock : '{' ( variable )* '}' -> ( variable )* ;
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
        var stream_121=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 121");
        var stream_122=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 122");
        var stream_variable=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule variable");
        try {
            // SimpleCv4.g:202:5: ( '{' ( variable )* '}' -> ( variable )* )
            // SimpleCv4.g:202:9: '{' ( variable )* '}'
            char_literal57=this.match(this.input,121,SimpleCv4Parser.FOLLOW_121_in_structBlock1418); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_121.add(char_literal57);

            // SimpleCv4.g:203:13: ( variable )*
            loop13:
            do {
                var alt13=2;
                var LA13_0 = this.input.LA(1);

                if ( (LA13_0==ID||(LA13_0>=110 && LA13_0<=118)) ) {
                    alt13=1;
                }


                switch (alt13) {
                case 1 :
                    // SimpleCv4.g:0:0: variable
                    this.pushFollow(SimpleCv4Parser.FOLLOW_variable_in_structBlock1432);
                    variable58=this.variable();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_variable.add(variable58.getTree());


                    break;

                default :
                    break loop13;
                }
            } while (true);

            char_literal59=this.match(this.input,122,SimpleCv4Parser.FOLLOW_122_in_structBlock1443); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_122.add(char_literal59);



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
            // 205:6: -> ( variable )*
            {
                // SimpleCv4.g:205:9: ( variable )*
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

    // SimpleCv4.g:208:1: functionHeader : type ID '(' ( formalParameter ( ',' formalParameter )* )? ')' -> ^( FUNC_HEADER type ^( FUNC_NAME ID ) ( formalParameter )* ) ;
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
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_124=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 124");
        var stream_ID=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ID");
        var stream_formalParameter=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule formalParameter");
        var stream_type=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule type");
        try {
            // SimpleCv4.g:209:5: ( type ID '(' ( formalParameter ( ',' formalParameter )* )? ')' -> ^( FUNC_HEADER type ^( FUNC_NAME ID ) ( formalParameter )* ) )
            // SimpleCv4.g:209:9: type ID '(' ( formalParameter ( ',' formalParameter )* )? ')'
            this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_functionHeader1472);
            type60=this.type();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_type.add(type60.getTree());
            ID61=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_functionHeader1474); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ID.add(ID61);

            char_literal62=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_functionHeader1476); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_123.add(char_literal62);

            // SimpleCv4.g:209:21: ( formalParameter ( ',' formalParameter )* )?
            var alt15=2;
            var LA15_0 = this.input.LA(1);

            if ( (LA15_0==ID||(LA15_0>=110 && LA15_0<=118)) ) {
                alt15=1;
            }
            switch (alt15) {
                case 1 :
                    // SimpleCv4.g:209:23: formalParameter ( ',' formalParameter )*
                    this.pushFollow(SimpleCv4Parser.FOLLOW_formalParameter_in_functionHeader1480);
                    formalParameter63=this.formalParameter();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_formalParameter.add(formalParameter63.getTree());
                    // SimpleCv4.g:209:39: ( ',' formalParameter )*
                    loop14:
                    do {
                        var alt14=2;
                        var LA14_0 = this.input.LA(1);

                        if ( (LA14_0==108) ) {
                            alt14=1;
                        }


                        switch (alt14) {
                        case 1 :
                            // SimpleCv4.g:209:41: ',' formalParameter
                            char_literal64=this.match(this.input,108,SimpleCv4Parser.FOLLOW_108_in_functionHeader1484); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_108.add(char_literal64);

                            this.pushFollow(SimpleCv4Parser.FOLLOW_formalParameter_in_functionHeader1486);
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

            char_literal66=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_functionHeader1494); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_124.add(char_literal66);



            // AST REWRITE
            // elements: type, ID, formalParameter
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 210:6: -> ^( FUNC_HEADER type ^( FUNC_NAME ID ) ( formalParameter )* )
            {
                // SimpleCv4.g:210:9: ^( FUNC_HEADER type ^( FUNC_NAME ID ) ( formalParameter )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_HEADER, "FUNC_HEADER"), root_1);

                this.adaptor.addChild(root_1, stream_type.nextTree());
                // SimpleCv4.g:210:28: ^( FUNC_NAME ID )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_NAME, "FUNC_NAME"), root_2);

                this.adaptor.addChild(root_2, stream_ID.nextNode());

                this.adaptor.addChild(root_1, root_2);
                }
                // SimpleCv4.g:210:44: ( formalParameter )*
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

    // SimpleCv4.g:213:1: formalParameter : type declarator -> ^( FUNC_PARAM type declarator ) ;
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
            // SimpleCv4.g:214:5: ( type declarator -> ^( FUNC_PARAM type declarator ) )
            // SimpleCv4.g:214:9: type declarator
            this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_formalParameter1535);
            type67=this.type();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_type.add(type67.getTree());
            this.pushFollow(SimpleCv4Parser.FOLLOW_declarator_in_formalParameter1537);
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
            // 215:6: -> ^( FUNC_PARAM type declarator )
            {
                // SimpleCv4.g:215:9: ^( FUNC_PARAM type declarator )
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

    // SimpleCv4.g:218:1: block : ( '{' ( variable )* ( stat )* '}' -> ^( BLOCK ( variable )* ( stat )* ) | stat -> ^( BLOCK stat ) | ';' -> EMPTY_BLOCK );
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
        var stream_121=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 121");
        var stream_122=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 122");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_variable=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule variable");
        var stream_stat=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule stat");
        try {
            // SimpleCv4.g:219:5: ( '{' ( variable )* ( stat )* '}' -> ^( BLOCK ( variable )* ( stat )* ) | stat -> ^( BLOCK stat ) | ';' -> EMPTY_BLOCK )
            var alt18=3;
            switch ( this.input.LA(1) ) {
            case 121:
                alt18=1;
                break;
            case ID:
            case INT:
            case STRING:
            case 109:
            case 123:
            case 125:
            case 126:
            case 127:
            case 128:
            case 130:
            case 131:
            case 132:
            case 143:
            case 144:
            case 145:
            case 146:
            case 147:
                alt18=2;
                break;
            case 102:
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
                    // SimpleCv4.g:219:9: '{' ( variable )* ( stat )* '}'
                    char_literal69=this.match(this.input,121,SimpleCv4Parser.FOLLOW_121_in_block1579); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_121.add(char_literal69);

                    // SimpleCv4.g:220:13: ( variable )*
                    loop16:
                    do {
                        var alt16=2;
                        var LA16_0 = this.input.LA(1);

                        if ( (LA16_0==ID) ) {
                            var LA16_2 = this.input.LA(2);

                            if ( (LA16_2==109) ) {
                                var LA16_4 = this.input.LA(3);

                                if ( (LA16_4==ID) ) {
                                    var LA16_5 = this.input.LA(4);

                                    if ( (LA16_5==102) ) {
                                        var LA16_6 = this.input.LA(5);

                                        if ( (this.synpred28_SimpleCv4()) ) {
                                            alt16=1;
                                        }


                                    }
                                    else if ( (LA16_5==108||(LA16_5>=133 && LA16_5<=142)) ) {
                                        alt16=1;
                                    }


                                }


                            }
                            else if ( (LA16_2==ID) ) {
                                alt16=1;
                            }


                        }
                        else if ( ((LA16_0>=110 && LA16_0<=118)) ) {
                            alt16=1;
                        }


                        switch (alt16) {
                        case 1 :
                            // SimpleCv4.g:0:0: variable
                            this.pushFollow(SimpleCv4Parser.FOLLOW_variable_in_block1593);
                            variable70=this.variable();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_variable.add(variable70.getTree());


                            break;

                        default :
                            break loop16;
                        }
                    } while (true);

                    // SimpleCv4.g:221:13: ( stat )*
                    loop17:
                    do {
                        var alt17=2;
                        var LA17_0 = this.input.LA(1);

                        if ( ((LA17_0>=ID && LA17_0<=STRING)||LA17_0==109||LA17_0==123||(LA17_0>=125 && LA17_0<=128)||(LA17_0>=130 && LA17_0<=132)||(LA17_0>=143 && LA17_0<=147)) ) {
                            alt17=1;
                        }


                        switch (alt17) {
                        case 1 :
                            // SimpleCv4.g:0:0: stat
                            this.pushFollow(SimpleCv4Parser.FOLLOW_stat_in_block1608);
                            stat71=this.stat();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_stat.add(stat71.getTree());


                            break;

                        default :
                            break loop17;
                        }
                    } while (true);

                    char_literal72=this.match(this.input,122,SimpleCv4Parser.FOLLOW_122_in_block1619); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_122.add(char_literal72);



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
                    // 223:9: -> ^( BLOCK ( variable )* ( stat )* )
                    {
                        // SimpleCv4.g:223:12: ^( BLOCK ( variable )* ( stat )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(BLOCK, "BLOCK"), root_1);

                        // SimpleCv4.g:223:20: ( variable )*
                        while ( stream_variable.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_variable.nextTree());

                        }
                        stream_variable.reset();
                        // SimpleCv4.g:223:30: ( stat )*
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
                    // SimpleCv4.g:224:9: stat
                    this.pushFollow(SimpleCv4Parser.FOLLOW_stat_in_block1649);
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
                    // 225:6: -> ^( BLOCK stat )
                    {
                        // SimpleCv4.g:225:9: ^( BLOCK stat )
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
                    // SimpleCv4.g:226:9: ';'
                    char_literal74=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_block1672); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_102.add(char_literal74);



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
                    // 227:6: -> EMPTY_BLOCK
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

    // SimpleCv4.g:230:1: stat : ( forStat | whileStat | ifStat | expression ';' -> expression | jumpStat );
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
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        try {
            // SimpleCv4.g:231:5: ( forStat | whileStat | ifStat | expression ';' -> expression | jumpStat )
            var alt19=5;
            switch ( this.input.LA(1) ) {
            case 125:
                alt19=1;
                break;
            case 126:
            case 127:
                alt19=2;
                break;
            case 128:
                alt19=3;
                break;
            case ID:
            case INT:
            case STRING:
            case 109:
            case 123:
            case 143:
            case 144:
            case 145:
            case 146:
            case 147:
                alt19=4;
                break;
            case 130:
            case 131:
            case 132:
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
                    // SimpleCv4.g:231:9: forStat
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_forStat_in_stat1700);
                    forStat75=this.forStat();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forStat75.getTree());


                    break;
                case 2 :
                    // SimpleCv4.g:232:9: whileStat
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_whileStat_in_stat1710);
                    whileStat76=this.whileStat();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, whileStat76.getTree());


                    break;
                case 3 :
                    // SimpleCv4.g:233:9: ifStat
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_ifStat_in_stat1720);
                    ifStat77=this.ifStat();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, ifStat77.getTree());


                    break;
                case 4 :
                    // SimpleCv4.g:234:9: expression ';'
                    this.pushFollow(SimpleCv4Parser.FOLLOW_expression_in_stat1730);
                    expression78=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression78.getTree());
                    char_literal79=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_stat1732); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_102.add(char_literal79);



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
                    // 235:6: -> expression
                    {
                        this.adaptor.addChild(root_0, stream_expression.nextTree());

                    }

                    retval.tree = root_0;}

                    break;
                case 5 :
                    // SimpleCv4.g:236:9: jumpStat
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_jumpStat_in_stat1762);
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

    // SimpleCv4.g:239:1: forStat : 'for' '(' assignmentExpr ';' conditionalExpr ';' expression ')' block -> ^( FOR_STAT assignmentExpr conditionalExpr expression block ) ;
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
        var stream_125=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 125");
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_124=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 124");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_assignmentExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule assignmentExpr");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        var stream_conditionalExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule conditionalExpr");
        var stream_block=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule block");
        try {
            // SimpleCv4.g:240:5: ( 'for' '(' assignmentExpr ';' conditionalExpr ';' expression ')' block -> ^( FOR_STAT assignmentExpr conditionalExpr expression block ) )
            // SimpleCv4.g:240:9: 'for' '(' assignmentExpr ';' conditionalExpr ';' expression ')' block
            string_literal81=this.match(this.input,125,SimpleCv4Parser.FOLLOW_125_in_forStat1782); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_125.add(string_literal81);

            char_literal82=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_forStat1784); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_123.add(char_literal82);

            this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentExpr_in_forStat1786);
            assignmentExpr83=this.assignmentExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_assignmentExpr.add(assignmentExpr83.getTree());
            char_literal84=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_forStat1788); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_102.add(char_literal84);

            this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_forStat1790);
            conditionalExpr85=this.conditionalExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr85.getTree());
            char_literal86=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_forStat1792); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_102.add(char_literal86);

            this.pushFollow(SimpleCv4Parser.FOLLOW_expression_in_forStat1794);
            expression87=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_expression.add(expression87.getTree());
            char_literal88=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_forStat1796); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_124.add(char_literal88);

            this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_forStat1798);
            block89=this.block();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_block.add(block89.getTree());


            // AST REWRITE
            // elements: block, conditionalExpr, assignmentExpr, expression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 241:6: -> ^( FOR_STAT assignmentExpr conditionalExpr expression block )
            {
                // SimpleCv4.g:241:9: ^( FOR_STAT assignmentExpr conditionalExpr expression block )
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

    // SimpleCv4.g:244:1: whileStat : ( 'while' '(' conditionalExpr ')' block -> ^( WHILE_STAT conditionalExpr block ) | 'do' block 'while' '(' conditionalExpr ')' ';' -> ^( DOWHILE_STAT block conditionalExpr ) );
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
        var stream_126=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 126");
        var stream_127=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 127");
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_124=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 124");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_conditionalExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule conditionalExpr");
        var stream_block=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule block");
        try {
            // SimpleCv4.g:245:5: ( 'while' '(' conditionalExpr ')' block -> ^( WHILE_STAT conditionalExpr block ) | 'do' block 'while' '(' conditionalExpr ')' ';' -> ^( DOWHILE_STAT block conditionalExpr ) )
            var alt20=2;
            var LA20_0 = this.input.LA(1);

            if ( (LA20_0==126) ) {
                alt20=1;
            }
            else if ( (LA20_0==127) ) {
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
                    // SimpleCv4.g:245:9: 'while' '(' conditionalExpr ')' block
                    string_literal90=this.match(this.input,126,SimpleCv4Parser.FOLLOW_126_in_whileStat1847); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_126.add(string_literal90);

                    char_literal91=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_whileStat1849); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_123.add(char_literal91);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_whileStat1851);
                    conditionalExpr92=this.conditionalExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr92.getTree());
                    char_literal93=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_whileStat1853); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_124.add(char_literal93);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_whileStat1855);
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
                    // 246:5: -> ^( WHILE_STAT conditionalExpr block )
                    {
                        // SimpleCv4.g:246:8: ^( WHILE_STAT conditionalExpr block )
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
                    // SimpleCv4.g:247:9: 'do' block 'while' '(' conditionalExpr ')' ';'
                    string_literal95=this.match(this.input,127,SimpleCv4Parser.FOLLOW_127_in_whileStat1879); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_127.add(string_literal95);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_whileStat1881);
                    block96=this.block();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_block.add(block96.getTree());
                    string_literal97=this.match(this.input,126,SimpleCv4Parser.FOLLOW_126_in_whileStat1883); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_126.add(string_literal97);

                    char_literal98=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_whileStat1885); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_123.add(char_literal98);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_whileStat1887);
                    conditionalExpr99=this.conditionalExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr99.getTree());
                    char_literal100=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_whileStat1889); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_124.add(char_literal100);

                    char_literal101=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_whileStat1891); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_102.add(char_literal101);



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
                    // 248:5: -> ^( DOWHILE_STAT block conditionalExpr )
                    {
                        // SimpleCv4.g:248:8: ^( DOWHILE_STAT block conditionalExpr )
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

    // SimpleCv4.g:251:1: ifStat : 'if' '(' conditionalExpr ')' block ( 'else' 'if' '(' conditionalExpr ')' block )* ( 'else' block )? -> ^( IF_STAT ^( IF_BRANCH conditionalExpr block ) ( ^( ELSEIF_BRANCH conditionalExpr block ) )* ( ^( ELSE_BRANCH block ) )? ) ;
    // $ANTLR start "ifStat"
    ifStat: function() {
        var retval = new SimpleCv4Parser.ifStat_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal102 = null;
        var char_literal103 = null;
        var char_literal105 = null;
        var string_literal107 = null;
        var string_literal108 = null;
        var char_literal109 = null;
        var char_literal111 = null;
        var string_literal113 = null;
         var conditionalExpr104 = null;
         var block106 = null;
         var conditionalExpr110 = null;
         var block112 = null;
         var block114 = null;

        var string_literal102_tree=null;
        var char_literal103_tree=null;
        var char_literal105_tree=null;
        var string_literal107_tree=null;
        var string_literal108_tree=null;
        var char_literal109_tree=null;
        var char_literal111_tree=null;
        var string_literal113_tree=null;
        var stream_128=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 128");
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_124=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 124");
        var stream_129=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 129");
        var stream_conditionalExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule conditionalExpr");
        var stream_block=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule block");
        try {
            // SimpleCv4.g:252:5: ( 'if' '(' conditionalExpr ')' block ( 'else' 'if' '(' conditionalExpr ')' block )* ( 'else' block )? -> ^( IF_STAT ^( IF_BRANCH conditionalExpr block ) ( ^( ELSEIF_BRANCH conditionalExpr block ) )* ( ^( ELSE_BRANCH block ) )? ) )
            // SimpleCv4.g:252:9: 'if' '(' conditionalExpr ')' block ( 'else' 'if' '(' conditionalExpr ')' block )* ( 'else' block )?
            string_literal102=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_ifStat1924); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_128.add(string_literal102);

            char_literal103=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_ifStat1926); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_123.add(char_literal103);

            this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_ifStat1928);
            conditionalExpr104=this.conditionalExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr104.getTree());
            char_literal105=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_ifStat1930); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_124.add(char_literal105);

            this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_ifStat1932);
            block106=this.block();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_block.add(block106.getTree());
            // SimpleCv4.g:252:44: ( 'else' 'if' '(' conditionalExpr ')' block )*
            loop21:
            do {
                var alt21=2;
                var LA21_0 = this.input.LA(1);

                if ( (LA21_0==129) ) {
                    var LA21_1 = this.input.LA(2);

                    if ( (this.synpred37_SimpleCv4()) ) {
                        alt21=1;
                    }


                }


                switch (alt21) {
                case 1 :
                    // SimpleCv4.g:252:46: 'else' 'if' '(' conditionalExpr ')' block
                    string_literal107=this.match(this.input,129,SimpleCv4Parser.FOLLOW_129_in_ifStat1936); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_129.add(string_literal107);

                    string_literal108=this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_ifStat1938); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_128.add(string_literal108);

                    char_literal109=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_ifStat1940); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_123.add(char_literal109);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_ifStat1942);
                    conditionalExpr110=this.conditionalExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr110.getTree());
                    char_literal111=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_ifStat1944); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_124.add(char_literal111);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_ifStat1946);
                    block112=this.block();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_block.add(block112.getTree());


                    break;

                default :
                    break loop21;
                }
            } while (true);

            // SimpleCv4.g:252:91: ( 'else' block )?
            var alt22=2;
            var LA22_0 = this.input.LA(1);

            if ( (LA22_0==129) ) {
                var LA22_1 = this.input.LA(2);

                if ( (this.synpred38_SimpleCv4()) ) {
                    alt22=1;
                }
            }
            switch (alt22) {
                case 1 :
                    // SimpleCv4.g:252:93: 'else' block
                    string_literal113=this.match(this.input,129,SimpleCv4Parser.FOLLOW_129_in_ifStat1953); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_129.add(string_literal113);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_ifStat1955);
                    block114=this.block();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_block.add(block114.getTree());


                    break;

            }



            // AST REWRITE
            // elements: block, block, conditionalExpr, block, conditionalExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 253:5: -> ^( IF_STAT ^( IF_BRANCH conditionalExpr block ) ( ^( ELSEIF_BRANCH conditionalExpr block ) )* ( ^( ELSE_BRANCH block ) )? )
            {
                // SimpleCv4.g:253:8: ^( IF_STAT ^( IF_BRANCH conditionalExpr block ) ( ^( ELSEIF_BRANCH conditionalExpr block ) )* ( ^( ELSE_BRANCH block ) )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(IF_STAT, "IF_STAT"), root_1);

                // SimpleCv4.g:253:18: ^( IF_BRANCH conditionalExpr block )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(IF_BRANCH, "IF_BRANCH"), root_2);

                this.adaptor.addChild(root_2, stream_conditionalExpr.nextTree());
                this.adaptor.addChild(root_2, stream_block.nextTree());

                this.adaptor.addChild(root_1, root_2);
                }
                // SimpleCv4.g:253:53: ( ^( ELSEIF_BRANCH conditionalExpr block ) )*
                while ( stream_block.hasNext()||stream_conditionalExpr.hasNext() ) {
                    // SimpleCv4.g:253:53: ^( ELSEIF_BRANCH conditionalExpr block )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(this.adaptor.create(ELSEIF_BRANCH, "ELSEIF_BRANCH"), root_2);

                    this.adaptor.addChild(root_2, stream_conditionalExpr.nextTree());
                    this.adaptor.addChild(root_2, stream_block.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }

                }
                stream_block.reset();
                stream_conditionalExpr.reset();
                // SimpleCv4.g:253:93: ( ^( ELSE_BRANCH block ) )?
                if ( stream_block.hasNext() ) {
                    // SimpleCv4.g:253:93: ^( ELSE_BRANCH block )
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

    // SimpleCv4.g:256:1: jumpStat : ( 'continue' ';' -> ^( JUMP_STAT JUMP_CONTINUE ) | 'break' ';' -> ^( JUMP_STAT JUMP_BREAK ) | 'return' ( expression )? ';' -> ^( JUMP_STAT ( ^( JUMP_RETURN expression ) )? ) );
    // $ANTLR start "jumpStat"
    jumpStat: function() {
        var retval = new SimpleCv4Parser.jumpStat_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal115 = null;
        var char_literal116 = null;
        var string_literal117 = null;
        var char_literal118 = null;
        var string_literal119 = null;
        var char_literal121 = null;
         var expression120 = null;

        var string_literal115_tree=null;
        var char_literal116_tree=null;
        var string_literal117_tree=null;
        var char_literal118_tree=null;
        var string_literal119_tree=null;
        var char_literal121_tree=null;
        var stream_132=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 132");
        var stream_131=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 131");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_130=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 130");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        try {
            // SimpleCv4.g:257:5: ( 'continue' ';' -> ^( JUMP_STAT JUMP_CONTINUE ) | 'break' ';' -> ^( JUMP_STAT JUMP_BREAK ) | 'return' ( expression )? ';' -> ^( JUMP_STAT ( ^( JUMP_RETURN expression ) )? ) )
            var alt24=3;
            switch ( this.input.LA(1) ) {
            case 130:
                alt24=1;
                break;
            case 131:
                alt24=2;
                break;
            case 132:
                alt24=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 24, 0, this.input);

                throw nvae;
            }

            switch (alt24) {
                case 1 :
                    // SimpleCv4.g:257:8: 'continue' ';'
                    string_literal115=this.match(this.input,130,SimpleCv4Parser.FOLLOW_130_in_jumpStat2010); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_130.add(string_literal115);

                    char_literal116=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_jumpStat2012); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_102.add(char_literal116);



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
                    // 258:5: -> ^( JUMP_STAT JUMP_CONTINUE )
                    {
                        // SimpleCv4.g:258:8: ^( JUMP_STAT JUMP_CONTINUE )
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
                    // SimpleCv4.g:259:8: 'break' ';'
                    string_literal117=this.match(this.input,131,SimpleCv4Parser.FOLLOW_131_in_jumpStat2033); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_131.add(string_literal117);

                    char_literal118=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_jumpStat2035); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_102.add(char_literal118);



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
                    // 260:5: -> ^( JUMP_STAT JUMP_BREAK )
                    {
                        // SimpleCv4.g:260:8: ^( JUMP_STAT JUMP_BREAK )
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
                    // SimpleCv4.g:261:8: 'return' ( expression )? ';'
                    string_literal119=this.match(this.input,132,SimpleCv4Parser.FOLLOW_132_in_jumpStat2056); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_132.add(string_literal119);

                    // SimpleCv4.g:261:17: ( expression )?
                    var alt23=2;
                    var LA23_0 = this.input.LA(1);

                    if ( ((LA23_0>=ID && LA23_0<=STRING)||LA23_0==109||LA23_0==123||(LA23_0>=143 && LA23_0<=147)) ) {
                        alt23=1;
                    }
                    switch (alt23) {
                        case 1 :
                            // SimpleCv4.g:261:18: expression
                            this.pushFollow(SimpleCv4Parser.FOLLOW_expression_in_jumpStat2059);
                            expression120=this.expression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_expression.add(expression120.getTree());


                            break;

                    }

                    char_literal121=this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_jumpStat2063); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_102.add(char_literal121);



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
                    // 262:5: -> ^( JUMP_STAT ( ^( JUMP_RETURN expression ) )? )
                    {
                        // SimpleCv4.g:262:8: ^( JUMP_STAT ( ^( JUMP_RETURN expression ) )? )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(JUMP_STAT, "JUMP_STAT"), root_1);

                        // SimpleCv4.g:262:20: ( ^( JUMP_RETURN expression ) )?
                        if ( stream_expression.hasNext() ) {
                            // SimpleCv4.g:262:20: ^( JUMP_RETURN expression )
                            {
                            var root_2 = this.adaptor.nil();
                            root_2 = this.adaptor.becomeRoot(this.adaptor.create(JUMP_RETURN, "JUMP_RETURN"), root_2);

                            this.adaptor.addChild(root_2, stream_expression.nextTree());

                            this.adaptor.addChild(root_1, root_2);
                            }

                        }
                        stream_expression.reset();

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

    // SimpleCv4.g:265:1: funcInvoke : ID '(' ( shiftExpr ( ',' shiftExpr )* )? ')' -> ^( FUNC_INVOKE ^( FUNC_NAME ID ) ( ^( FUNC_PARAM shiftExpr ) )* ) ;
    // $ANTLR start "funcInvoke"
    funcInvoke: function() {
        var retval = new SimpleCv4Parser.funcInvoke_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID122 = null;
        var char_literal123 = null;
        var char_literal125 = null;
        var char_literal127 = null;
         var shiftExpr124 = null;
         var shiftExpr126 = null;

        var ID122_tree=null;
        var char_literal123_tree=null;
        var char_literal125_tree=null;
        var char_literal127_tree=null;
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_124=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 124");
        var stream_ID=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ID");
        var stream_shiftExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule shiftExpr");
        try {
            // SimpleCv4.g:266:5: ( ID '(' ( shiftExpr ( ',' shiftExpr )* )? ')' -> ^( FUNC_INVOKE ^( FUNC_NAME ID ) ( ^( FUNC_PARAM shiftExpr ) )* ) )
            // SimpleCv4.g:266:9: ID '(' ( shiftExpr ( ',' shiftExpr )* )? ')'
            ID122=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_funcInvoke2101); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ID.add(ID122);

            char_literal123=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_funcInvoke2103); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_123.add(char_literal123);

            // SimpleCv4.g:266:16: ( shiftExpr ( ',' shiftExpr )* )?
            var alt26=2;
            var LA26_0 = this.input.LA(1);

            if ( ((LA26_0>=ID && LA26_0<=STRING)||LA26_0==109||LA26_0==123||(LA26_0>=143 && LA26_0<=147)) ) {
                alt26=1;
            }
            switch (alt26) {
                case 1 :
                    // SimpleCv4.g:266:18: shiftExpr ( ',' shiftExpr )*
                    this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_funcInvoke2107);
                    shiftExpr124=this.shiftExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr124.getTree());
                    // SimpleCv4.g:266:28: ( ',' shiftExpr )*
                    loop25:
                    do {
                        var alt25=2;
                        var LA25_0 = this.input.LA(1);

                        if ( (LA25_0==108) ) {
                            alt25=1;
                        }


                        switch (alt25) {
                        case 1 :
                            // SimpleCv4.g:266:30: ',' shiftExpr
                            char_literal125=this.match(this.input,108,SimpleCv4Parser.FOLLOW_108_in_funcInvoke2111); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_108.add(char_literal125);

                            this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_funcInvoke2113);
                            shiftExpr126=this.shiftExpr();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr126.getTree());


                            break;

                        default :
                            break loop25;
                        }
                    } while (true);



                    break;

            }

            char_literal127=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_funcInvoke2120); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_124.add(char_literal127);



            // AST REWRITE
            // elements: shiftExpr, ID
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 267:5: -> ^( FUNC_INVOKE ^( FUNC_NAME ID ) ( ^( FUNC_PARAM shiftExpr ) )* )
            {
                // SimpleCv4.g:267:8: ^( FUNC_INVOKE ^( FUNC_NAME ID ) ( ^( FUNC_PARAM shiftExpr ) )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_INVOKE, "FUNC_INVOKE"), root_1);

                // SimpleCv4.g:267:22: ^( FUNC_NAME ID )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(FUNC_NAME, "FUNC_NAME"), root_2);

                this.adaptor.addChild(root_2, stream_ID.nextNode());

                this.adaptor.addChild(root_1, root_2);
                }
                // SimpleCv4.g:267:38: ( ^( FUNC_PARAM shiftExpr ) )*
                while ( stream_shiftExpr.hasNext() ) {
                    // SimpleCv4.g:267:38: ^( FUNC_PARAM shiftExpr )
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

    // SimpleCv4.g:270:1: expression : ( assignmentExpr | conditionalExpr );
    // $ANTLR start "expression"
    expression: function() {
        var retval = new SimpleCv4Parser.expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var assignmentExpr128 = null;
         var conditionalExpr129 = null;


        try {
            // SimpleCv4.g:271:5: ( assignmentExpr | conditionalExpr )
            var alt27=2;
            alt27 = this.dfa27.predict(this.input);
            switch (alt27) {
                case 1 :
                    // SimpleCv4.g:271:9: assignmentExpr
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentExpr_in_expression2162);
                    assignmentExpr128=this.assignmentExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpr128.getTree());


                    break;
                case 2 :
                    // SimpleCv4.g:272:7: conditionalExpr
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_expression2170);
                    conditionalExpr129=this.conditionalExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, conditionalExpr129.getTree());


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

    // SimpleCv4.g:275:1: assignmentExpr : unaryExpr ( assignmentOp shiftExpr )? -> ^( ASSIGNMENT unaryExpr ( assignmentOp shiftExpr )? ) ;
    // $ANTLR start "assignmentExpr"
    assignmentExpr: function() {
        var retval = new SimpleCv4Parser.assignmentExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var unaryExpr130 = null;
         var assignmentOp131 = null;
         var shiftExpr132 = null;

        var stream_unaryExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryExpr");
        var stream_shiftExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule shiftExpr");
        var stream_assignmentOp=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule assignmentOp");
        try {
            // SimpleCv4.g:276:5: ( unaryExpr ( assignmentOp shiftExpr )? -> ^( ASSIGNMENT unaryExpr ( assignmentOp shiftExpr )? ) )
            // SimpleCv4.g:276:9: unaryExpr ( assignmentOp shiftExpr )?
            this.pushFollow(SimpleCv4Parser.FOLLOW_unaryExpr_in_assignmentExpr2189);
            unaryExpr130=this.unaryExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_unaryExpr.add(unaryExpr130.getTree());
            // SimpleCv4.g:276:19: ( assignmentOp shiftExpr )?
            var alt28=2;
            var LA28_0 = this.input.LA(1);

            if ( ((LA28_0>=133 && LA28_0<=142)) ) {
                alt28=1;
            }
            switch (alt28) {
                case 1 :
                    // SimpleCv4.g:276:20: assignmentOp shiftExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentOp_in_assignmentExpr2192);
                    assignmentOp131=this.assignmentOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_assignmentOp.add(assignmentOp131.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_assignmentExpr2194);
                    shiftExpr132=this.shiftExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr132.getTree());


                    break;

            }



            // AST REWRITE
            // elements: shiftExpr, assignmentOp, unaryExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 277:6: -> ^( ASSIGNMENT unaryExpr ( assignmentOp shiftExpr )? )
            {
                // SimpleCv4.g:277:9: ^( ASSIGNMENT unaryExpr ( assignmentOp shiftExpr )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ASSIGNMENT, "ASSIGNMENT"), root_1);

                this.adaptor.addChild(root_1, stream_unaryExpr.nextTree());
                // SimpleCv4.g:277:32: ( assignmentOp shiftExpr )?
                if ( stream_shiftExpr.hasNext()||stream_assignmentOp.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_assignmentOp.nextTree());
                    this.adaptor.addChild(root_1, stream_shiftExpr.nextTree());

                }
                stream_shiftExpr.reset();
                stream_assignmentOp.reset();

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

    // SimpleCv4.g:280:1: assignmentOp : ( '=' -> ASSIGN | '+=' -> PLUS_ASSIGN | '-=' -> MINUS_ASSIGN | '*=' -> MULTI_ASSIGN | '/=' -> DIVIDE_ASSIGN | '<<=' -> SHL_ASSIGN | '>>=' -> SHR_ASSIGN | '&=' -> AND_ASSIGN | '|=' -> OR_ASSIGN | '^=' -> NOT_ASSIGN );
    // $ANTLR start "assignmentOp"
    assignmentOp: function() {
        var retval = new SimpleCv4Parser.assignmentOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal133 = null;
        var string_literal134 = null;
        var string_literal135 = null;
        var string_literal136 = null;
        var string_literal137 = null;
        var string_literal138 = null;
        var string_literal139 = null;
        var string_literal140 = null;
        var string_literal141 = null;
        var string_literal142 = null;

        var char_literal133_tree=null;
        var string_literal134_tree=null;
        var string_literal135_tree=null;
        var string_literal136_tree=null;
        var string_literal137_tree=null;
        var string_literal138_tree=null;
        var string_literal139_tree=null;
        var string_literal140_tree=null;
        var string_literal141_tree=null;
        var string_literal142_tree=null;
        var stream_134=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 134");
        var stream_135=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 135");
        var stream_133=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 133");
        var stream_138=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 138");
        var stream_139=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 139");
        var stream_136=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 136");
        var stream_137=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 137");
        var stream_140=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 140");
        var stream_142=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 142");
        var stream_141=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 141");

        try {
            // SimpleCv4.g:281:5: ( '=' -> ASSIGN | '+=' -> PLUS_ASSIGN | '-=' -> MINUS_ASSIGN | '*=' -> MULTI_ASSIGN | '/=' -> DIVIDE_ASSIGN | '<<=' -> SHL_ASSIGN | '>>=' -> SHR_ASSIGN | '&=' -> AND_ASSIGN | '|=' -> OR_ASSIGN | '^=' -> NOT_ASSIGN )
            var alt29=10;
            switch ( this.input.LA(1) ) {
            case 133:
                alt29=1;
                break;
            case 134:
                alt29=2;
                break;
            case 135:
                alt29=3;
                break;
            case 136:
                alt29=4;
                break;
            case 137:
                alt29=5;
                break;
            case 138:
                alt29=6;
                break;
            case 139:
                alt29=7;
                break;
            case 140:
                alt29=8;
                break;
            case 141:
                alt29=9;
                break;
            case 142:
                alt29=10;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 29, 0, this.input);

                throw nvae;
            }

            switch (alt29) {
                case 1 :
                    // SimpleCv4.g:281:9: '='
                    char_literal133=this.match(this.input,133,SimpleCv4Parser.FOLLOW_133_in_assignmentOp2235); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_133.add(char_literal133);



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
                    // 282:6: -> ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(ASSIGN, "ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:283:9: '+='
                    string_literal134=this.match(this.input,134,SimpleCv4Parser.FOLLOW_134_in_assignmentOp2254); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_134.add(string_literal134);



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
                    // 284:6: -> PLUS_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(PLUS_ASSIGN, "PLUS_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:285:9: '-='
                    string_literal135=this.match(this.input,135,SimpleCv4Parser.FOLLOW_135_in_assignmentOp2273); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_135.add(string_literal135);



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
                    // 286:6: -> MINUS_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(MINUS_ASSIGN, "MINUS_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 4 :
                    // SimpleCv4.g:287:9: '*='
                    string_literal136=this.match(this.input,136,SimpleCv4Parser.FOLLOW_136_in_assignmentOp2292); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_136.add(string_literal136);



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
                    // 288:6: -> MULTI_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(MULTI_ASSIGN, "MULTI_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 5 :
                    // SimpleCv4.g:289:9: '/='
                    string_literal137=this.match(this.input,137,SimpleCv4Parser.FOLLOW_137_in_assignmentOp2311); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_137.add(string_literal137);



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
                    // 290:6: -> DIVIDE_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(DIVIDE_ASSIGN, "DIVIDE_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 6 :
                    // SimpleCv4.g:291:9: '<<='
                    string_literal138=this.match(this.input,138,SimpleCv4Parser.FOLLOW_138_in_assignmentOp2330); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_138.add(string_literal138);



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
                    // 292:6: -> SHL_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(SHL_ASSIGN, "SHL_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 7 :
                    // SimpleCv4.g:293:9: '>>='
                    string_literal139=this.match(this.input,139,SimpleCv4Parser.FOLLOW_139_in_assignmentOp2349); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_139.add(string_literal139);



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
                    // 294:6: -> SHR_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(SHR_ASSIGN, "SHR_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 8 :
                    // SimpleCv4.g:295:9: '&='
                    string_literal140=this.match(this.input,140,SimpleCv4Parser.FOLLOW_140_in_assignmentOp2368); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_140.add(string_literal140);



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
                    // 296:6: -> AND_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(AND_ASSIGN, "AND_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 9 :
                    // SimpleCv4.g:297:9: '|='
                    string_literal141=this.match(this.input,141,SimpleCv4Parser.FOLLOW_141_in_assignmentOp2387); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_141.add(string_literal141);



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
                    // 298:6: -> OR_ASSIGN
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(OR_ASSIGN, "OR_ASSIGN"));

                    }

                    retval.tree = root_0;}

                    break;
                case 10 :
                    // SimpleCv4.g:299:9: '^='
                    string_literal142=this.match(this.input,142,SimpleCv4Parser.FOLLOW_142_in_assignmentOp2406); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_142.add(string_literal142);



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
                    // 300:6: -> NOT_ASSIGN
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

    // SimpleCv4.g:303:1: unaryExpr : ( postfixExpr | '++' unaryExpr -> ^( PREFIX_PLUS unaryExpr ) | '--' unaryExpr -> ^( PREFIX_MINUS unaryExpr ) | 'sizeof' '(' type ')' -> ^( SIZEOF type ) | unaryOp castExpr | funcInvoke );
    // $ANTLR start "unaryExpr"
    unaryExpr: function() {
        var retval = new SimpleCv4Parser.unaryExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal144 = null;
        var string_literal146 = null;
        var string_literal148 = null;
        var char_literal149 = null;
        var char_literal151 = null;
         var postfixExpr143 = null;
         var unaryExpr145 = null;
         var unaryExpr147 = null;
         var type150 = null;
         var unaryOp152 = null;
         var castExpr153 = null;
         var funcInvoke154 = null;

        var string_literal144_tree=null;
        var string_literal146_tree=null;
        var string_literal148_tree=null;
        var char_literal149_tree=null;
        var char_literal151_tree=null;
        var stream_143=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 143");
        var stream_144=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 144");
        var stream_145=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 145");
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_124=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 124");
        var stream_unaryExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryExpr");
        var stream_type=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule type");
        try {
            // SimpleCv4.g:304:5: ( postfixExpr | '++' unaryExpr -> ^( PREFIX_PLUS unaryExpr ) | '--' unaryExpr -> ^( PREFIX_MINUS unaryExpr ) | 'sizeof' '(' type ')' -> ^( SIZEOF type ) | unaryOp castExpr | funcInvoke )
            var alt30=6;
            switch ( this.input.LA(1) ) {
            case ID:
                var LA30_1 = this.input.LA(2);

                if ( (LA30_1==123) ) {
                    alt30=6;
                }
                else if ( (LA30_1==EOF||LA30_1==102||(LA30_1>=105 && LA30_1<=106)||(LA30_1>=108 && LA30_1<=109)||LA30_1==124||(LA30_1>=133 && LA30_1<=144)||(LA30_1>=148 && LA30_1<=162)) ) {
                    alt30=1;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 30, 1, this.input);

                    throw nvae;
                }
                break;
            case INT:
            case STRING:
            case 123:
                alt30=1;
                break;
            case 143:
                alt30=2;
                break;
            case 144:
                alt30=3;
                break;
            case 145:
                alt30=4;
                break;
            case 109:
            case 146:
            case 147:
                alt30=5;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 30, 0, this.input);

                throw nvae;
            }

            switch (alt30) {
                case 1 :
                    // SimpleCv4.g:304:9: postfixExpr
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_postfixExpr_in_unaryExpr2437);
                    postfixExpr143=this.postfixExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, postfixExpr143.getTree());


                    break;
                case 2 :
                    // SimpleCv4.g:305:9: '++' unaryExpr
                    string_literal144=this.match(this.input,143,SimpleCv4Parser.FOLLOW_143_in_unaryExpr2447); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_143.add(string_literal144);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_unaryExpr_in_unaryExpr2449);
                    unaryExpr145=this.unaryExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unaryExpr.add(unaryExpr145.getTree());


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
                    // 306:5: -> ^( PREFIX_PLUS unaryExpr )
                    {
                        // SimpleCv4.g:306:8: ^( PREFIX_PLUS unaryExpr )
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
                    // SimpleCv4.g:307:9: '--' unaryExpr
                    string_literal146=this.match(this.input,144,SimpleCv4Parser.FOLLOW_144_in_unaryExpr2471); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_144.add(string_literal146);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_unaryExpr_in_unaryExpr2473);
                    unaryExpr147=this.unaryExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unaryExpr.add(unaryExpr147.getTree());


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
                    // 308:5: -> ^( PREFIX_MINUS unaryExpr )
                    {
                        // SimpleCv4.g:308:8: ^( PREFIX_MINUS unaryExpr )
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
                    // SimpleCv4.g:309:9: 'sizeof' '(' type ')'
                    string_literal148=this.match(this.input,145,SimpleCv4Parser.FOLLOW_145_in_unaryExpr2495); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_145.add(string_literal148);

                    char_literal149=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_unaryExpr2497); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_123.add(char_literal149);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_unaryExpr2499);
                    type150=this.type();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_type.add(type150.getTree());
                    char_literal151=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_unaryExpr2501); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_124.add(char_literal151);



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
                    // 310:5: -> ^( SIZEOF type )
                    {
                        // SimpleCv4.g:310:8: ^( SIZEOF type )
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
                    // SimpleCv4.g:311:9: unaryOp castExpr
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_unaryOp_in_unaryExpr2523);
                    unaryOp152=this.unaryOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unaryOp152.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_castExpr_in_unaryExpr2525);
                    castExpr153=this.castExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, castExpr153.getTree());


                    break;
                case 6 :
                    // SimpleCv4.g:312:7: funcInvoke
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_funcInvoke_in_unaryExpr2533);
                    funcInvoke154=this.funcInvoke();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, funcInvoke154.getTree());


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

    // SimpleCv4.g:315:1: unaryOp : ( '!' -> PREFIX_NOT | '&' -> PREFIX_AND | '*' -> PREFIX_STAR );
    // $ANTLR start "unaryOp"
    unaryOp: function() {
        var retval = new SimpleCv4Parser.unaryOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal155 = null;
        var char_literal156 = null;
        var char_literal157 = null;

        var char_literal155_tree=null;
        var char_literal156_tree=null;
        var char_literal157_tree=null;
        var stream_146=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 146");
        var stream_147=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 147");
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");

        try {
            // SimpleCv4.g:316:5: ( '!' -> PREFIX_NOT | '&' -> PREFIX_AND | '*' -> PREFIX_STAR )
            var alt31=3;
            switch ( this.input.LA(1) ) {
            case 146:
                alt31=1;
                break;
            case 147:
                alt31=2;
                break;
            case 109:
                alt31=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 31, 0, this.input);

                throw nvae;
            }

            switch (alt31) {
                case 1 :
                    // SimpleCv4.g:316:9: '!'
                    char_literal155=this.match(this.input,146,SimpleCv4Parser.FOLLOW_146_in_unaryOp2556); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_146.add(char_literal155);



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
                    // 317:5: -> PREFIX_NOT
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(PREFIX_NOT, "PREFIX_NOT"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:318:9: '&'
                    char_literal156=this.match(this.input,147,SimpleCv4Parser.FOLLOW_147_in_unaryOp2574); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_147.add(char_literal156);



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
                    // 319:5: -> PREFIX_AND
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(PREFIX_AND, "PREFIX_AND"));

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:320:9: '*'
                    char_literal157=this.match(this.input,109,SimpleCv4Parser.FOLLOW_109_in_unaryOp2592); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_109.add(char_literal157);



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
                    // 321:5: -> PREFIX_STAR
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

    // SimpleCv4.g:324:1: postfixExpr : primaryExpr ( postfix )* -> ^( POSTFIX_EXPR primaryExpr ( ^( POSTFIX postfix ) )* ) ;
    // $ANTLR start "postfixExpr"
    postfixExpr: function() {
        var retval = new SimpleCv4Parser.postfixExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var primaryExpr158 = null;
         var postfix159 = null;

        var stream_postfix=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule postfix");
        var stream_primaryExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule primaryExpr");
        try {
            // SimpleCv4.g:325:5: ( primaryExpr ( postfix )* -> ^( POSTFIX_EXPR primaryExpr ( ^( POSTFIX postfix ) )* ) )
            // SimpleCv4.g:325:9: primaryExpr ( postfix )*
            this.pushFollow(SimpleCv4Parser.FOLLOW_primaryExpr_in_postfixExpr2619);
            primaryExpr158=this.primaryExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_primaryExpr.add(primaryExpr158.getTree());
            // SimpleCv4.g:325:21: ( postfix )*
            loop32:
            do {
                var alt32=2;
                var LA32_0 = this.input.LA(1);

                if ( ((LA32_0>=143 && LA32_0<=144)||(LA32_0>=148 && LA32_0<=149)) ) {
                    alt32=1;
                }


                switch (alt32) {
                case 1 :
                    // SimpleCv4.g:325:22: postfix
                    this.pushFollow(SimpleCv4Parser.FOLLOW_postfix_in_postfixExpr2622);
                    postfix159=this.postfix();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_postfix.add(postfix159.getTree());


                    break;

                default :
                    break loop32;
                }
            } while (true);



            // AST REWRITE
            // elements: primaryExpr, postfix
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 326:5: -> ^( POSTFIX_EXPR primaryExpr ( ^( POSTFIX postfix ) )* )
            {
                // SimpleCv4.g:326:8: ^( POSTFIX_EXPR primaryExpr ( ^( POSTFIX postfix ) )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(POSTFIX_EXPR, "POSTFIX_EXPR"), root_1);

                this.adaptor.addChild(root_1, stream_primaryExpr.nextTree());
                // SimpleCv4.g:326:35: ( ^( POSTFIX postfix ) )*
                while ( stream_postfix.hasNext() ) {
                    // SimpleCv4.g:326:35: ^( POSTFIX postfix )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(this.adaptor.create(POSTFIX, "POSTFIX"), root_2);

                    this.adaptor.addChild(root_2, stream_postfix.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }

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

    // SimpleCv4.g:329:1: postfix : ( '->' ID ( '[' shiftExpr ']' )? -> ^( MEMBERVAR ID ( ^( ARRAYINDEX shiftExpr ) )? ) | '++' -> ^( POSTFIX_PLUS ) | '--' -> ^( POSTFIX_MINUS ) | '[' expression ']' -> ^( ARRAYINDEX expression ) );
    // $ANTLR start "postfix"
    postfix: function() {
        var retval = new SimpleCv4Parser.postfix_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal160 = null;
        var ID161 = null;
        var char_literal162 = null;
        var char_literal164 = null;
        var string_literal165 = null;
        var string_literal166 = null;
        var char_literal167 = null;
        var char_literal169 = null;
         var shiftExpr163 = null;
         var expression168 = null;

        var string_literal160_tree=null;
        var ID161_tree=null;
        var char_literal162_tree=null;
        var char_literal164_tree=null;
        var string_literal165_tree=null;
        var string_literal166_tree=null;
        var char_literal167_tree=null;
        var char_literal169_tree=null;
        var stream_143=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 143");
        var stream_144=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 144");
        var stream_150=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 150");
        var stream_148=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 148");
        var stream_149=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 149");
        var stream_ID=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ID");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        var stream_shiftExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule shiftExpr");
        try {
            // SimpleCv4.g:330:5: ( '->' ID ( '[' shiftExpr ']' )? -> ^( MEMBERVAR ID ( ^( ARRAYINDEX shiftExpr ) )? ) | '++' -> ^( POSTFIX_PLUS ) | '--' -> ^( POSTFIX_MINUS ) | '[' expression ']' -> ^( ARRAYINDEX expression ) )
            var alt34=4;
            switch ( this.input.LA(1) ) {
            case 148:
                alt34=1;
                break;
            case 143:
                alt34=2;
                break;
            case 144:
                alt34=3;
                break;
            case 149:
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
                    // SimpleCv4.g:330:7: '->' ID ( '[' shiftExpr ']' )?
                    string_literal160=this.match(this.input,148,SimpleCv4Parser.FOLLOW_148_in_postfix2664); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_148.add(string_literal160);

                    ID161=this.match(this.input,ID,SimpleCv4Parser.FOLLOW_ID_in_postfix2666); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_ID.add(ID161);

                    // SimpleCv4.g:330:15: ( '[' shiftExpr ']' )?
                    var alt33=2;
                    alt33 = this.dfa33.predict(this.input);
                    switch (alt33) {
                        case 1 :
                            // SimpleCv4.g:330:16: '[' shiftExpr ']'
                            char_literal162=this.match(this.input,149,SimpleCv4Parser.FOLLOW_149_in_postfix2669); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_149.add(char_literal162);

                            this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_postfix2671);
                            shiftExpr163=this.shiftExpr();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr163.getTree());
                            char_literal164=this.match(this.input,150,SimpleCv4Parser.FOLLOW_150_in_postfix2673); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_150.add(char_literal164);



                            break;

                    }



                    // AST REWRITE
                    // elements: shiftExpr, ID
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 331:5: -> ^( MEMBERVAR ID ( ^( ARRAYINDEX shiftExpr ) )? )
                    {
                        // SimpleCv4.g:331:8: ^( MEMBERVAR ID ( ^( ARRAYINDEX shiftExpr ) )? )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(MEMBERVAR, "MEMBERVAR"), root_1);

                        this.adaptor.addChild(root_1, stream_ID.nextNode());
                        // SimpleCv4.g:331:23: ( ^( ARRAYINDEX shiftExpr ) )?
                        if ( stream_shiftExpr.hasNext() ) {
                            // SimpleCv4.g:331:23: ^( ARRAYINDEX shiftExpr )
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
                    // SimpleCv4.g:332:8: '++'
                    string_literal165=this.match(this.input,143,SimpleCv4Parser.FOLLOW_143_in_postfix2704); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_143.add(string_literal165);



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
                    // 333:5: -> ^( POSTFIX_PLUS )
                    {
                        // SimpleCv4.g:333:8: ^( POSTFIX_PLUS )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(POSTFIX_PLUS, "POSTFIX_PLUS"), root_1);

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:334:8: '--'
                    string_literal166=this.match(this.input,144,SimpleCv4Parser.FOLLOW_144_in_postfix2724); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_144.add(string_literal166);



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
                    // 335:5: -> ^( POSTFIX_MINUS )
                    {
                        // SimpleCv4.g:335:8: ^( POSTFIX_MINUS )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(POSTFIX_MINUS, "POSTFIX_MINUS"), root_1);

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 4 :
                    // SimpleCv4.g:336:8: '[' expression ']'
                    char_literal167=this.match(this.input,149,SimpleCv4Parser.FOLLOW_149_in_postfix2744); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_149.add(char_literal167);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_expression_in_postfix2746);
                    expression168=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression168.getTree());
                    char_literal169=this.match(this.input,150,SimpleCv4Parser.FOLLOW_150_in_postfix2748); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_150.add(char_literal169);



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
                    // 337:5: -> ^( ARRAYINDEX expression )
                    {
                        // SimpleCv4.g:337:8: ^( ARRAYINDEX expression )
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

    // SimpleCv4.g:340:1: primaryExpr : ( declarator -> ^( DECLARATOR declarator ) | INT | STRING | '(' expression ')' );
    // $ANTLR start "primaryExpr"
    primaryExpr: function() {
        var retval = new SimpleCv4Parser.primaryExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var INT171 = null;
        var STRING172 = null;
        var char_literal173 = null;
        var char_literal175 = null;
         var declarator170 = null;
         var expression174 = null;

        var INT171_tree=null;
        var STRING172_tree=null;
        var char_literal173_tree=null;
        var char_literal175_tree=null;
        var stream_declarator=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule declarator");
        try {
            // SimpleCv4.g:341:5: ( declarator -> ^( DECLARATOR declarator ) | INT | STRING | '(' expression ')' )
            var alt35=4;
            switch ( this.input.LA(1) ) {
            case ID:
                alt35=1;
                break;
            case INT:
                alt35=2;
                break;
            case STRING:
                alt35=3;
                break;
            case 123:
                alt35=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 35, 0, this.input);

                throw nvae;
            }

            switch (alt35) {
                case 1 :
                    // SimpleCv4.g:341:9: declarator
                    this.pushFollow(SimpleCv4Parser.FOLLOW_declarator_in_primaryExpr2779);
                    declarator170=this.declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_declarator.add(declarator170.getTree());


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
                    // 342:9: -> ^( DECLARATOR declarator )
                    {
                        // SimpleCv4.g:342:12: ^( DECLARATOR declarator )
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
                    // SimpleCv4.g:343:7: INT
                    root_0 = this.adaptor.nil();

                    INT171=this.match(this.input,INT,SimpleCv4Parser.FOLLOW_INT_in_primaryExpr2803); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    INT171_tree = this.adaptor.create(INT171);
                    this.adaptor.addChild(root_0, INT171_tree);
                    }


                    break;
                case 3 :
                    // SimpleCv4.g:344:9: STRING
                    root_0 = this.adaptor.nil();

                    STRING172=this.match(this.input,STRING,SimpleCv4Parser.FOLLOW_STRING_in_primaryExpr2813); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    STRING172_tree = this.adaptor.create(STRING172);
                    this.adaptor.addChild(root_0, STRING172_tree);
                    }


                    break;
                case 4 :
                    // SimpleCv4.g:345:9: '(' expression ')'
                    root_0 = this.adaptor.nil();

                    char_literal173=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_primaryExpr2823); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal173_tree = this.adaptor.create(char_literal173);
                    this.adaptor.addChild(root_0, char_literal173_tree);
                    }
                    this.pushFollow(SimpleCv4Parser.FOLLOW_expression_in_primaryExpr2825);
                    expression174=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression174.getTree());
                    char_literal175=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_primaryExpr2827); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal175_tree = this.adaptor.create(char_literal175);
                    this.adaptor.addChild(root_0, char_literal175_tree);
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
    conditionalExpr_return: (function() {
        SimpleCv4Parser.conditionalExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.conditionalExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:348:1: conditionalExpr : logicalOrExpr -> ^( CONDITION logicalOrExpr ) ;
    // $ANTLR start "conditionalExpr"
    conditionalExpr: function() {
        var retval = new SimpleCv4Parser.conditionalExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var logicalOrExpr176 = null;

        var stream_logicalOrExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalOrExpr");
        try {
            // SimpleCv4.g:349:5: ( logicalOrExpr -> ^( CONDITION logicalOrExpr ) )
            // SimpleCv4.g:349:9: logicalOrExpr
            this.pushFollow(SimpleCv4Parser.FOLLOW_logicalOrExpr_in_conditionalExpr2846);
            logicalOrExpr176=this.logicalOrExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalOrExpr.add(logicalOrExpr176.getTree());


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
            // 350:5: -> ^( CONDITION logicalOrExpr )
            {
                // SimpleCv4.g:350:8: ^( CONDITION logicalOrExpr )
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

    // SimpleCv4.g:353:1: logicalOrExpr : logicalAndExpr ( '||' logicalAndExpr )* -> ^( OR_EXPR ( ^( OR_BRANCH logicalAndExpr ) )+ ) ;
    // $ANTLR start "logicalOrExpr"
    logicalOrExpr: function() {
        var retval = new SimpleCv4Parser.logicalOrExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal178 = null;
         var logicalAndExpr177 = null;
         var logicalAndExpr179 = null;

        var string_literal178_tree=null;
        var stream_151=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 151");
        var stream_logicalAndExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalAndExpr");
        try {
            // SimpleCv4.g:354:5: ( logicalAndExpr ( '||' logicalAndExpr )* -> ^( OR_EXPR ( ^( OR_BRANCH logicalAndExpr ) )+ ) )
            // SimpleCv4.g:354:7: logicalAndExpr ( '||' logicalAndExpr )*
            this.pushFollow(SimpleCv4Parser.FOLLOW_logicalAndExpr_in_logicalOrExpr2876);
            logicalAndExpr177=this.logicalAndExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalAndExpr.add(logicalAndExpr177.getTree());
            // SimpleCv4.g:354:22: ( '||' logicalAndExpr )*
            loop36:
            do {
                var alt36=2;
                var LA36_0 = this.input.LA(1);

                if ( (LA36_0==151) ) {
                    alt36=1;
                }


                switch (alt36) {
                case 1 :
                    // SimpleCv4.g:354:23: '||' logicalAndExpr
                    string_literal178=this.match(this.input,151,SimpleCv4Parser.FOLLOW_151_in_logicalOrExpr2879); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_151.add(string_literal178);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_logicalAndExpr_in_logicalOrExpr2881);
                    logicalAndExpr179=this.logicalAndExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalAndExpr.add(logicalAndExpr179.getTree());


                    break;

                default :
                    break loop36;
                }
            } while (true);



            // AST REWRITE
            // elements: logicalAndExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 355:5: -> ^( OR_EXPR ( ^( OR_BRANCH logicalAndExpr ) )+ )
            {
                // SimpleCv4.g:355:8: ^( OR_EXPR ( ^( OR_BRANCH logicalAndExpr ) )+ )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(OR_EXPR, "OR_EXPR"), root_1);

                if ( !(stream_logicalAndExpr.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_logicalAndExpr.hasNext() ) {
                    // SimpleCv4.g:355:18: ^( OR_BRANCH logicalAndExpr )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(this.adaptor.create(OR_BRANCH, "OR_BRANCH"), root_2);

                    this.adaptor.addChild(root_2, stream_logicalAndExpr.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }

                }
                stream_logicalAndExpr.reset();

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
    logicalAndExpr_return: (function() {
        SimpleCv4Parser.logicalAndExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.logicalAndExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:358:1: logicalAndExpr : relationExpr ( '&&' relationExpr )* -> ^( AND_EXPR ( ^( AND_BRANCH relationExpr ) )+ ) ;
    // $ANTLR start "logicalAndExpr"
    logicalAndExpr: function() {
        var retval = new SimpleCv4Parser.logicalAndExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal181 = null;
         var relationExpr180 = null;
         var relationExpr182 = null;

        var string_literal181_tree=null;
        var stream_152=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 152");
        var stream_relationExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule relationExpr");
        try {
            // SimpleCv4.g:359:5: ( relationExpr ( '&&' relationExpr )* -> ^( AND_EXPR ( ^( AND_BRANCH relationExpr ) )+ ) )
            // SimpleCv4.g:359:7: relationExpr ( '&&' relationExpr )*
            this.pushFollow(SimpleCv4Parser.FOLLOW_relationExpr_in_logicalAndExpr2917);
            relationExpr180=this.relationExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_relationExpr.add(relationExpr180.getTree());
            // SimpleCv4.g:359:20: ( '&&' relationExpr )*
            loop37:
            do {
                var alt37=2;
                var LA37_0 = this.input.LA(1);

                if ( (LA37_0==152) ) {
                    alt37=1;
                }


                switch (alt37) {
                case 1 :
                    // SimpleCv4.g:359:21: '&&' relationExpr
                    string_literal181=this.match(this.input,152,SimpleCv4Parser.FOLLOW_152_in_logicalAndExpr2920); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_152.add(string_literal181);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_relationExpr_in_logicalAndExpr2922);
                    relationExpr182=this.relationExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_relationExpr.add(relationExpr182.getTree());


                    break;

                default :
                    break loop37;
                }
            } while (true);



            // AST REWRITE
            // elements: relationExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 360:5: -> ^( AND_EXPR ( ^( AND_BRANCH relationExpr ) )+ )
            {
                // SimpleCv4.g:360:8: ^( AND_EXPR ( ^( AND_BRANCH relationExpr ) )+ )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(AND_EXPR, "AND_EXPR"), root_1);

                if ( !(stream_relationExpr.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_relationExpr.hasNext() ) {
                    // SimpleCv4.g:360:19: ^( AND_BRANCH relationExpr )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(this.adaptor.create(AND_BRANCH, "AND_BRANCH"), root_2);

                    this.adaptor.addChild(root_2, stream_relationExpr.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }

                }
                stream_relationExpr.reset();

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
    relationExpr_return: (function() {
        SimpleCv4Parser.relationExpr_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.relationExpr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:363:1: relationExpr : shiftExpr ( relationOp shiftExpr )* -> ^( RELATION_EXPR shiftExpr ( relationOp shiftExpr )* ) ;
    // $ANTLR start "relationExpr"
    relationExpr: function() {
        var retval = new SimpleCv4Parser.relationExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var shiftExpr183 = null;
         var relationOp184 = null;
         var shiftExpr185 = null;

        var stream_relationOp=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule relationOp");
        var stream_shiftExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule shiftExpr");
        try {
            // SimpleCv4.g:364:5: ( shiftExpr ( relationOp shiftExpr )* -> ^( RELATION_EXPR shiftExpr ( relationOp shiftExpr )* ) )
            // SimpleCv4.g:364:7: shiftExpr ( relationOp shiftExpr )*
            this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_relationExpr2958);
            shiftExpr183=this.shiftExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr183.getTree());
            // SimpleCv4.g:364:17: ( relationOp shiftExpr )*
            loop38:
            do {
                var alt38=2;
                var LA38_0 = this.input.LA(1);

                if ( ((LA38_0>=105 && LA38_0<=106)||(LA38_0>=153 && LA38_0<=156)) ) {
                    alt38=1;
                }


                switch (alt38) {
                case 1 :
                    // SimpleCv4.g:364:18: relationOp shiftExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_relationOp_in_relationExpr2961);
                    relationOp184=this.relationOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_relationOp.add(relationOp184.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_relationExpr2963);
                    shiftExpr185=this.shiftExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_shiftExpr.add(shiftExpr185.getTree());


                    break;

                default :
                    break loop38;
                }
            } while (true);



            // AST REWRITE
            // elements: relationOp, shiftExpr, shiftExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 365:5: -> ^( RELATION_EXPR shiftExpr ( relationOp shiftExpr )* )
            {
                // SimpleCv4.g:365:8: ^( RELATION_EXPR shiftExpr ( relationOp shiftExpr )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(RELATION_EXPR, "RELATION_EXPR"), root_1);

                this.adaptor.addChild(root_1, stream_shiftExpr.nextTree());
                // SimpleCv4.g:365:34: ( relationOp shiftExpr )*
                while ( stream_relationOp.hasNext()||stream_shiftExpr.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_relationOp.nextTree());
                    this.adaptor.addChild(root_1, stream_shiftExpr.nextTree());

                }
                stream_relationOp.reset();
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
    relationOp_return: (function() {
        SimpleCv4Parser.relationOp_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.relationOp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:368:1: relationOp : ( '==' -> EQUAL_RE | '!=' -> NOTEQUAL_RE | '<' -> LESS_RE | '>' -> GREATER_RE | '<=' -> LESSEQUAL_RE | '>=' -> GREATEREQUAL_RE );
    // $ANTLR start "relationOp"
    relationOp: function() {
        var retval = new SimpleCv4Parser.relationOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal186 = null;
        var string_literal187 = null;
        var char_literal188 = null;
        var char_literal189 = null;
        var string_literal190 = null;
        var string_literal191 = null;

        var string_literal186_tree=null;
        var string_literal187_tree=null;
        var char_literal188_tree=null;
        var char_literal189_tree=null;
        var string_literal190_tree=null;
        var string_literal191_tree=null;
        var stream_153=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 153");
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_105=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 105");
        var stream_156=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 156");
        var stream_155=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 155");
        var stream_154=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 154");

        try {
            // SimpleCv4.g:369:5: ( '==' -> EQUAL_RE | '!=' -> NOTEQUAL_RE | '<' -> LESS_RE | '>' -> GREATER_RE | '<=' -> LESSEQUAL_RE | '>=' -> GREATEREQUAL_RE )
            var alt39=6;
            switch ( this.input.LA(1) ) {
            case 153:
                alt39=1;
                break;
            case 154:
                alt39=2;
                break;
            case 105:
                alt39=3;
                break;
            case 106:
                alt39=4;
                break;
            case 155:
                alt39=5;
                break;
            case 156:
                alt39=6;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 39, 0, this.input);

                throw nvae;
            }

            switch (alt39) {
                case 1 :
                    // SimpleCv4.g:369:7: '=='
                    string_literal186=this.match(this.input,153,SimpleCv4Parser.FOLLOW_153_in_relationOp3005); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_153.add(string_literal186);



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
                    // 370:5: -> EQUAL_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(EQUAL_RE, "EQUAL_RE"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:371:7: '!='
                    string_literal187=this.match(this.input,154,SimpleCv4Parser.FOLLOW_154_in_relationOp3022); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_154.add(string_literal187);



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
                    // 372:5: -> NOTEQUAL_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(NOTEQUAL_RE, "NOTEQUAL_RE"));

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:373:7: '<'
                    char_literal188=this.match(this.input,105,SimpleCv4Parser.FOLLOW_105_in_relationOp3039); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_105.add(char_literal188);



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
                    // 374:5: -> LESS_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(LESS_RE, "LESS_RE"));

                    }

                    retval.tree = root_0;}

                    break;
                case 4 :
                    // SimpleCv4.g:375:7: '>'
                    char_literal189=this.match(this.input,106,SimpleCv4Parser.FOLLOW_106_in_relationOp3056); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_106.add(char_literal189);



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
                    // 376:5: -> GREATER_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(GREATER_RE, "GREATER_RE"));

                    }

                    retval.tree = root_0;}

                    break;
                case 5 :
                    // SimpleCv4.g:377:7: '<='
                    string_literal190=this.match(this.input,155,SimpleCv4Parser.FOLLOW_155_in_relationOp3073); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_155.add(string_literal190);



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
                    // 378:5: -> LESSEQUAL_RE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(LESSEQUAL_RE, "LESSEQUAL_RE"));

                    }

                    retval.tree = root_0;}

                    break;
                case 6 :
                    // SimpleCv4.g:379:7: '>='
                    string_literal191=this.match(this.input,156,SimpleCv4Parser.FOLLOW_156_in_relationOp3090); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_156.add(string_literal191);



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
                    // 380:5: -> GREATEREQUAL_RE
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

    // SimpleCv4.g:383:1: shiftExpr : addSubExpr ( shiftOp addSubExpr )* -> ^( SHIFT_EXPR addSubExpr ( ^( shiftOp addSubExpr ) )* ) ;
    // $ANTLR start "shiftExpr"
    shiftExpr: function() {
        var retval = new SimpleCv4Parser.shiftExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var addSubExpr192 = null;
         var shiftOp193 = null;
         var addSubExpr194 = null;

        var stream_addSubExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule addSubExpr");
        var stream_shiftOp=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule shiftOp");
        try {
            // SimpleCv4.g:384:5: ( addSubExpr ( shiftOp addSubExpr )* -> ^( SHIFT_EXPR addSubExpr ( ^( shiftOp addSubExpr ) )* ) )
            // SimpleCv4.g:384:9: addSubExpr ( shiftOp addSubExpr )*
            this.pushFollow(SimpleCv4Parser.FOLLOW_addSubExpr_in_shiftExpr3119);
            addSubExpr192=this.addSubExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_addSubExpr.add(addSubExpr192.getTree());
            // SimpleCv4.g:384:20: ( shiftOp addSubExpr )*
            loop40:
            do {
                var alt40=2;
                var LA40_0 = this.input.LA(1);

                if ( ((LA40_0>=157 && LA40_0<=158)) ) {
                    alt40=1;
                }


                switch (alt40) {
                case 1 :
                    // SimpleCv4.g:384:21: shiftOp addSubExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_shiftOp_in_shiftExpr3122);
                    shiftOp193=this.shiftOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_shiftOp.add(shiftOp193.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_addSubExpr_in_shiftExpr3124);
                    addSubExpr194=this.addSubExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_addSubExpr.add(addSubExpr194.getTree());


                    break;

                default :
                    break loop40;
                }
            } while (true);



            // AST REWRITE
            // elements: addSubExpr, shiftOp, addSubExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 385:5: -> ^( SHIFT_EXPR addSubExpr ( ^( shiftOp addSubExpr ) )* )
            {
                // SimpleCv4.g:385:8: ^( SHIFT_EXPR addSubExpr ( ^( shiftOp addSubExpr ) )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(SHIFT_EXPR, "SHIFT_EXPR"), root_1);

                this.adaptor.addChild(root_1, stream_addSubExpr.nextTree());
                // SimpleCv4.g:385:32: ( ^( shiftOp addSubExpr ) )*
                while ( stream_shiftOp.hasNext()||stream_addSubExpr.hasNext() ) {
                    // SimpleCv4.g:385:32: ^( shiftOp addSubExpr )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(stream_shiftOp.nextNode(), root_2);

                    this.adaptor.addChild(root_2, stream_addSubExpr.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }

                }
                stream_shiftOp.reset();
                stream_addSubExpr.reset();

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
    shiftOp_return: (function() {
        SimpleCv4Parser.shiftOp_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.shiftOp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:387:1: shiftOp : ( '<<' -> SHL_OP | '>>' -> SHR_OP );
    // $ANTLR start "shiftOp"
    shiftOp: function() {
        var retval = new SimpleCv4Parser.shiftOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal195 = null;
        var string_literal196 = null;

        var string_literal195_tree=null;
        var string_literal196_tree=null;
        var stream_158=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 158");
        var stream_157=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 157");

        try {
            // SimpleCv4.g:388:5: ( '<<' -> SHL_OP | '>>' -> SHR_OP )
            var alt41=2;
            var LA41_0 = this.input.LA(1);

            if ( (LA41_0==157) ) {
                alt41=1;
            }
            else if ( (LA41_0==158) ) {
                alt41=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 41, 0, this.input);

                throw nvae;
            }
            switch (alt41) {
                case 1 :
                    // SimpleCv4.g:388:7: '<<'
                    string_literal195=this.match(this.input,157,SimpleCv4Parser.FOLLOW_157_in_shiftOp3161); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_157.add(string_literal195);



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
                    // 389:5: -> SHL_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(SHL_OP, "SHL_OP"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:390:7: '>>'
                    string_literal196=this.match(this.input,158,SimpleCv4Parser.FOLLOW_158_in_shiftOp3177); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_158.add(string_literal196);



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
                    // 391:5: -> SHR_OP
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

    // SimpleCv4.g:394:1: addSubExpr : multDivExpr ( addSubOp multDivExpr )* -> ^( ADDSUB_EXPR multDivExpr ( ^( addSubOp multDivExpr ) )* ) ;
    // $ANTLR start "addSubExpr"
    addSubExpr: function() {
        var retval = new SimpleCv4Parser.addSubExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var multDivExpr197 = null;
         var addSubOp198 = null;
         var multDivExpr199 = null;

        var stream_multDivExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule multDivExpr");
        var stream_addSubOp=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule addSubOp");
        try {
            // SimpleCv4.g:395:5: ( multDivExpr ( addSubOp multDivExpr )* -> ^( ADDSUB_EXPR multDivExpr ( ^( addSubOp multDivExpr ) )* ) )
            // SimpleCv4.g:395:9: multDivExpr ( addSubOp multDivExpr )*
            this.pushFollow(SimpleCv4Parser.FOLLOW_multDivExpr_in_addSubExpr3204);
            multDivExpr197=this.multDivExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_multDivExpr.add(multDivExpr197.getTree());
            // SimpleCv4.g:395:21: ( addSubOp multDivExpr )*
            loop42:
            do {
                var alt42=2;
                var LA42_0 = this.input.LA(1);

                if ( ((LA42_0>=159 && LA42_0<=160)) ) {
                    alt42=1;
                }


                switch (alt42) {
                case 1 :
                    // SimpleCv4.g:395:22: addSubOp multDivExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_addSubOp_in_addSubExpr3207);
                    addSubOp198=this.addSubOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_addSubOp.add(addSubOp198.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_multDivExpr_in_addSubExpr3209);
                    multDivExpr199=this.multDivExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_multDivExpr.add(multDivExpr199.getTree());


                    break;

                default :
                    break loop42;
                }
            } while (true);



            // AST REWRITE
            // elements: multDivExpr, addSubOp, multDivExpr
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 396:5: -> ^( ADDSUB_EXPR multDivExpr ( ^( addSubOp multDivExpr ) )* )
            {
                // SimpleCv4.g:396:8: ^( ADDSUB_EXPR multDivExpr ( ^( addSubOp multDivExpr ) )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ADDSUB_EXPR, "ADDSUB_EXPR"), root_1);

                this.adaptor.addChild(root_1, stream_multDivExpr.nextTree());
                // SimpleCv4.g:396:34: ( ^( addSubOp multDivExpr ) )*
                while ( stream_multDivExpr.hasNext()||stream_addSubOp.hasNext() ) {
                    // SimpleCv4.g:396:34: ^( addSubOp multDivExpr )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(stream_addSubOp.nextNode(), root_2);

                    this.adaptor.addChild(root_2, stream_multDivExpr.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }

                }
                stream_multDivExpr.reset();
                stream_addSubOp.reset();

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
    addSubOp_return: (function() {
        SimpleCv4Parser.addSubOp_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.addSubOp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:398:1: addSubOp : ( '+' -> ADD_OP | '-' -> SUB_OP );
    // $ANTLR start "addSubOp"
    addSubOp: function() {
        var retval = new SimpleCv4Parser.addSubOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal200 = null;
        var char_literal201 = null;

        var char_literal200_tree=null;
        var char_literal201_tree=null;
        var stream_160=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 160");
        var stream_159=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 159");

        try {
            // SimpleCv4.g:399:5: ( '+' -> ADD_OP | '-' -> SUB_OP )
            var alt43=2;
            var LA43_0 = this.input.LA(1);

            if ( (LA43_0==159) ) {
                alt43=1;
            }
            else if ( (LA43_0==160) ) {
                alt43=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 43, 0, this.input);

                throw nvae;
            }
            switch (alt43) {
                case 1 :
                    // SimpleCv4.g:399:7: '+'
                    char_literal200=this.match(this.input,159,SimpleCv4Parser.FOLLOW_159_in_addSubOp3246); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_159.add(char_literal200);



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
                    // 400:5: -> ADD_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(ADD_OP, "ADD_OP"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:401:7: '-'
                    char_literal201=this.match(this.input,160,SimpleCv4Parser.FOLLOW_160_in_addSubOp3262); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_160.add(char_literal201);



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
                    // 402:5: -> SUB_OP
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

    // SimpleCv4.g:405:1: multDivExpr : castExpr ( multDivOp castExpr )* -> ^( MULTDIV_EXPR castExpr ( ^( multDivOp castExpr ) )* ) ;
    // $ANTLR start "multDivExpr"
    multDivExpr: function() {
        var retval = new SimpleCv4Parser.multDivExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var castExpr202 = null;
         var multDivOp203 = null;
         var castExpr204 = null;

        var stream_multDivOp=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule multDivOp");
        var stream_castExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule castExpr");
        try {
            // SimpleCv4.g:406:5: ( castExpr ( multDivOp castExpr )* -> ^( MULTDIV_EXPR castExpr ( ^( multDivOp castExpr ) )* ) )
            // SimpleCv4.g:406:9: castExpr ( multDivOp castExpr )*
            this.pushFollow(SimpleCv4Parser.FOLLOW_castExpr_in_multDivExpr3290);
            castExpr202=this.castExpr();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_castExpr.add(castExpr202.getTree());
            // SimpleCv4.g:406:18: ( multDivOp castExpr )*
            loop44:
            do {
                var alt44=2;
                var LA44_0 = this.input.LA(1);

                if ( (LA44_0==109||(LA44_0>=161 && LA44_0<=162)) ) {
                    alt44=1;
                }


                switch (alt44) {
                case 1 :
                    // SimpleCv4.g:406:19: multDivOp castExpr
                    this.pushFollow(SimpleCv4Parser.FOLLOW_multDivOp_in_multDivExpr3293);
                    multDivOp203=this.multDivOp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_multDivOp.add(multDivOp203.getTree());
                    this.pushFollow(SimpleCv4Parser.FOLLOW_castExpr_in_multDivExpr3295);
                    castExpr204=this.castExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_castExpr.add(castExpr204.getTree());


                    break;

                default :
                    break loop44;
                }
            } while (true);



            // AST REWRITE
            // elements: castExpr, castExpr, multDivOp
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 407:5: -> ^( MULTDIV_EXPR castExpr ( ^( multDivOp castExpr ) )* )
            {
                // SimpleCv4.g:407:8: ^( MULTDIV_EXPR castExpr ( ^( multDivOp castExpr ) )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(MULTDIV_EXPR, "MULTDIV_EXPR"), root_1);

                this.adaptor.addChild(root_1, stream_castExpr.nextTree());
                // SimpleCv4.g:407:32: ( ^( multDivOp castExpr ) )*
                while ( stream_castExpr.hasNext()||stream_multDivOp.hasNext() ) {
                    // SimpleCv4.g:407:32: ^( multDivOp castExpr )
                    {
                    var root_2 = this.adaptor.nil();
                    root_2 = this.adaptor.becomeRoot(stream_multDivOp.nextNode(), root_2);

                    this.adaptor.addChild(root_2, stream_castExpr.nextTree());

                    this.adaptor.addChild(root_1, root_2);
                    }

                }
                stream_castExpr.reset();
                stream_multDivOp.reset();

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
    multDivOp_return: (function() {
        SimpleCv4Parser.multDivOp_return = function(){};
        org.antlr.lang.extend(SimpleCv4Parser.multDivOp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // SimpleCv4.g:410:1: multDivOp : ( '*' -> MULTI_OP | '/' -> DIV_OP | '%' -> MOD_OP );
    // $ANTLR start "multDivOp"
    multDivOp: function() {
        var retval = new SimpleCv4Parser.multDivOp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal205 = null;
        var char_literal206 = null;
        var char_literal207 = null;

        var char_literal205_tree=null;
        var char_literal206_tree=null;
        var char_literal207_tree=null;
        var stream_161=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 161");
        var stream_162=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 162");
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");

        try {
            // SimpleCv4.g:411:5: ( '*' -> MULTI_OP | '/' -> DIV_OP | '%' -> MOD_OP )
            var alt45=3;
            switch ( this.input.LA(1) ) {
            case 109:
                alt45=1;
                break;
            case 161:
                alt45=2;
                break;
            case 162:
                alt45=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 45, 0, this.input);

                throw nvae;
            }

            switch (alt45) {
                case 1 :
                    // SimpleCv4.g:411:7: '*'
                    char_literal205=this.match(this.input,109,SimpleCv4Parser.FOLLOW_109_in_multDivOp3333); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_109.add(char_literal205);



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
                    // 412:5: -> MULTI_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(MULTI_OP, "MULTI_OP"));

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // SimpleCv4.g:413:7: '/'
                    char_literal206=this.match(this.input,161,SimpleCv4Parser.FOLLOW_161_in_multDivOp3349); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_161.add(char_literal206);



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
                    // 414:5: -> DIV_OP
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(DIV_OP, "DIV_OP"));

                    }

                    retval.tree = root_0;}

                    break;
                case 3 :
                    // SimpleCv4.g:415:7: '%'
                    char_literal207=this.match(this.input,162,SimpleCv4Parser.FOLLOW_162_in_multDivOp3365); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_162.add(char_literal207);



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
                    // 416:5: -> MOD_OP
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

    // SimpleCv4.g:419:1: castExpr : ( '(' type ')' castExpr -> ^( CASTTYPE type castExpr ) | '(' conditionalExpr ')' -> ^( SUB_CONDITION conditionalExpr ) | unaryExpr );
    // $ANTLR start "castExpr"
    castExpr: function() {
        var retval = new SimpleCv4Parser.castExpr_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal208 = null;
        var char_literal210 = null;
        var char_literal212 = null;
        var char_literal214 = null;
         var type209 = null;
         var castExpr211 = null;
         var conditionalExpr213 = null;
         var unaryExpr215 = null;

        var char_literal208_tree=null;
        var char_literal210_tree=null;
        var char_literal212_tree=null;
        var char_literal214_tree=null;
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_124=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 124");
        var stream_conditionalExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule conditionalExpr");
        var stream_castExpr=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule castExpr");
        var stream_type=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule type");
        try {
            // SimpleCv4.g:420:5: ( '(' type ')' castExpr -> ^( CASTTYPE type castExpr ) | '(' conditionalExpr ')' -> ^( SUB_CONDITION conditionalExpr ) | unaryExpr )
            var alt46=3;
            alt46 = this.dfa46.predict(this.input);
            switch (alt46) {
                case 1 :
                    // SimpleCv4.g:420:9: '(' type ')' castExpr
                    char_literal208=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_castExpr3392); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_123.add(char_literal208);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_castExpr3394);
                    type209=this.type();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_type.add(type209.getTree());
                    char_literal210=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_castExpr3396); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_124.add(char_literal210);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_castExpr_in_castExpr3398);
                    castExpr211=this.castExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_castExpr.add(castExpr211.getTree());


                    // AST REWRITE
                    // elements: type, castExpr
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 421:5: -> ^( CASTTYPE type castExpr )
                    {
                        // SimpleCv4.g:421:8: ^( CASTTYPE type castExpr )
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
                    // SimpleCv4.g:422:7: '(' conditionalExpr ')'
                    char_literal212=this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_castExpr3420); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_123.add(char_literal212);

                    this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_castExpr3422);
                    conditionalExpr213=this.conditionalExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_conditionalExpr.add(conditionalExpr213.getTree());
                    char_literal214=this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_castExpr3424); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_124.add(char_literal214);



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
                    // 423:5: -> ^( SUB_CONDITION conditionalExpr )
                    {
                        // SimpleCv4.g:423:8: ^( SUB_CONDITION conditionalExpr )
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
                    // SimpleCv4.g:424:9: unaryExpr
                    root_0 = this.adaptor.nil();

                    this.pushFollow(SimpleCv4Parser.FOLLOW_unaryExpr_in_castExpr3446);
                    unaryExpr215=this.unaryExpr();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unaryExpr215.getTree());


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
        // SimpleCv4.g:122:9: ( functionHeader ';' )
        // SimpleCv4.g:122:9: functionHeader ';'
        this.pushFollow(SimpleCv4Parser.FOLLOW_functionHeader_in_synpred6_SimpleCv4811);
        this.functionHeader();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,102,SimpleCv4Parser.FOLLOW_102_in_synpred6_SimpleCv4813); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred6_SimpleCv4",

    // $ANTLR start "synpred28_SimpleCv4"
    synpred28_SimpleCv4_fragment: function() {
        // SimpleCv4.g:220:13: ( variable )
        // SimpleCv4.g:220:13: variable
        this.pushFollow(SimpleCv4Parser.FOLLOW_variable_in_synpred28_SimpleCv41593);
        this.variable();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred28_SimpleCv4",

    // $ANTLR start "synpred37_SimpleCv4"
    synpred37_SimpleCv4_fragment: function() {
        // SimpleCv4.g:252:46: ( 'else' 'if' '(' conditionalExpr ')' block )
        // SimpleCv4.g:252:46: 'else' 'if' '(' conditionalExpr ')' block
        this.match(this.input,129,SimpleCv4Parser.FOLLOW_129_in_synpred37_SimpleCv41936); if (this.state.failed) return ;
        this.match(this.input,128,SimpleCv4Parser.FOLLOW_128_in_synpred37_SimpleCv41938); if (this.state.failed) return ;
        this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_synpred37_SimpleCv41940); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_synpred37_SimpleCv41942);
        this.conditionalExpr();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_synpred37_SimpleCv41944); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_synpred37_SimpleCv41946);
        this.block();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred37_SimpleCv4",

    // $ANTLR start "synpred38_SimpleCv4"
    synpred38_SimpleCv4_fragment: function() {
        // SimpleCv4.g:252:93: ( 'else' block )
        // SimpleCv4.g:252:93: 'else' block
        this.match(this.input,129,SimpleCv4Parser.FOLLOW_129_in_synpred38_SimpleCv41953); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_block_in_synpred38_SimpleCv41955);
        this.block();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred38_SimpleCv4",

    // $ANTLR start "synpred44_SimpleCv4"
    synpred44_SimpleCv4_fragment: function() {
        // SimpleCv4.g:271:9: ( assignmentExpr )
        // SimpleCv4.g:271:9: assignmentExpr
        this.pushFollow(SimpleCv4Parser.FOLLOW_assignmentExpr_in_synpred44_SimpleCv42162);
        this.assignmentExpr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred44_SimpleCv4",

    // $ANTLR start "synpred63_SimpleCv4"
    synpred63_SimpleCv4_fragment: function() {
        // SimpleCv4.g:330:16: ( '[' shiftExpr ']' )
        // SimpleCv4.g:330:16: '[' shiftExpr ']'
        this.match(this.input,149,SimpleCv4Parser.FOLLOW_149_in_synpred63_SimpleCv42669); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_shiftExpr_in_synpred63_SimpleCv42671);
        this.shiftExpr();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,150,SimpleCv4Parser.FOLLOW_150_in_synpred63_SimpleCv42673); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred63_SimpleCv4",

    // $ANTLR start "synpred85_SimpleCv4"
    synpred85_SimpleCv4_fragment: function() {
        // SimpleCv4.g:420:9: ( '(' type ')' castExpr )
        // SimpleCv4.g:420:9: '(' type ')' castExpr
        this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_synpred85_SimpleCv43392); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_type_in_synpred85_SimpleCv43394);
        this.type();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_synpred85_SimpleCv43396); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_castExpr_in_synpred85_SimpleCv43398);
        this.castExpr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred85_SimpleCv4",

    // $ANTLR start "synpred86_SimpleCv4"
    synpred86_SimpleCv4_fragment: function() {
        // SimpleCv4.g:422:7: ( '(' conditionalExpr ')' )
        // SimpleCv4.g:422:7: '(' conditionalExpr ')'
        this.match(this.input,123,SimpleCv4Parser.FOLLOW_123_in_synpred86_SimpleCv43420); if (this.state.failed) return ;
        this.pushFollow(SimpleCv4Parser.FOLLOW_conditionalExpr_in_synpred86_SimpleCv43422);
        this.conditionalExpr();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,124,SimpleCv4Parser.FOLLOW_124_in_synpred86_SimpleCv43424); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred86_SimpleCv4"

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
    synpred44_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred44_SimpleCv4_fragment(); // can never throw exception
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
    synpred63_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred63_SimpleCv4_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred38_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred38_SimpleCv4_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred86_SimpleCv4: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred86_SimpleCv4_fragment(); // can never throw exception
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
    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA2_eotS:
        "\u0030\uffff",
    DFA2_eofS:
        "\u0030\uffff",
    DFA2_minS:
        "\u0001\u005b\u0001\uffff\u000b\u005b\u0001\uffff\u0001\u005b\u0001"+
    "\u0066\u0001\uffff\u0001\u005b\u0001\uffff\u000c\u005b\u0001\u006c\u0001"+
    "\u0000\u0001\uffff\u0001\u005b\u0001\uffff\u000b\u005b\u0001\u006c",
    DFA2_maxS:
        "\u0001\u0078\u0001\uffff\u000a\u006d\u0001\u0078\u0001\uffff\u0001"+
    "\u005b\u0001\u008e\u0001\uffff\u0001\u007c\u0001\uffff\u000a\u006d\u0001"+
    "\u0093\u0001\u005b\u0001\u007c\u0001\u0000\u0001\uffff\u0001\u0076\u0001"+
    "\uffff\u000a\u006d\u0001\u005b\u0001\u007c",
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
        return "117:1: statement : ( declaration | variable | structDefinition | typeDefinition | functionHeader ';' -> ^( FUNC_STAT functionHeader ) | functionHeader block -> ^( FUNC_DEF functionHeader block ) );";
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
    DFA27_eotS:
        "\u000d\uffff",
    DFA27_eofS:
        "\u000d\uffff",
    DFA27_minS:
        "\u0001\u005b\u000a\u0000\u0002\uffff",
    DFA27_maxS:
        "\u0001\u0093\u000a\u0000\u0002\uffff",
    DFA27_acceptS:
        "\u000b\uffff\u0001\u0001\u0001\u0002",
    DFA27_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0002"+
    "\uffff}>",
    DFA27_transitionS: [
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
    DFA27_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA27_eotS),
    DFA27_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA27_eofS),
    DFA27_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA27_minS),
    DFA27_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA27_maxS),
    DFA27_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA27_acceptS),
    DFA27_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA27_specialS),
    DFA27_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv4Parser.DFA27_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA27_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv4Parser.DFA27 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 27;
    this.eot = SimpleCv4Parser.DFA27_eot;
    this.eof = SimpleCv4Parser.DFA27_eof;
    this.min = SimpleCv4Parser.DFA27_min;
    this.max = SimpleCv4Parser.DFA27_max;
    this.accept = SimpleCv4Parser.DFA27_accept;
    this.special = SimpleCv4Parser.DFA27_special;
    this.transition = SimpleCv4Parser.DFA27_transition;
};

org.antlr.lang.extend(SimpleCv4Parser.DFA27, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "270:1: expression : ( assignmentExpr | conditionalExpr );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA27_1 = input.LA(1);

                             
                            var index27_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred44_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index27_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA27_2 = input.LA(1);

                             
                            var index27_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred44_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index27_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA27_3 = input.LA(1);

                             
                            var index27_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred44_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index27_3);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA27_4 = input.LA(1);

                             
                            var index27_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred44_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index27_4);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA27_5 = input.LA(1);

                             
                            var index27_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred44_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index27_5);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA27_6 = input.LA(1);

                             
                            var index27_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred44_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index27_6);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA27_7 = input.LA(1);

                             
                            var index27_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred44_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index27_7);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA27_8 = input.LA(1);

                             
                            var index27_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred44_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index27_8);
                            if ( s>=0 ) return s;
                            break;
                        case 8 : 
                            var LA27_9 = input.LA(1);

                             
                            var index27_9 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred44_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index27_9);
                            if ( s>=0 ) return s;
                            break;
                        case 9 : 
                            var LA27_10 = input.LA(1);

                             
                            var index27_10 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred44_SimpleCv4()) ) {s = 11;}

                            else if ( (true) ) {s = 12;}

                             
                            input.seek(index27_10);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 27, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA33_eotS:
        "\u0024\uffff",
    DFA33_eofS:
        "\u0001\u0002\u0023\uffff",
    DFA33_minS:
        "\u0001\u0066\u0001\u0000\u0022\uffff",
    DFA33_maxS:
        "\u0001\u00a2\u0001\u0000\u0022\uffff",
    DFA33_acceptS:
        "\u0002\uffff\u0001\u0002\u0020\uffff\u0001\u0001",
    DFA33_specialS:
        "\u0001\uffff\u0001\u0000\u0022\uffff}>",
    DFA33_transitionS: [
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
    DFA33_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA33_eotS),
    DFA33_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA33_eofS),
    DFA33_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA33_minS),
    DFA33_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA33_maxS),
    DFA33_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA33_acceptS),
    DFA33_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA33_specialS),
    DFA33_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv4Parser.DFA33_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA33_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv4Parser.DFA33 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 33;
    this.eot = SimpleCv4Parser.DFA33_eot;
    this.eof = SimpleCv4Parser.DFA33_eof;
    this.min = SimpleCv4Parser.DFA33_min;
    this.max = SimpleCv4Parser.DFA33_max;
    this.accept = SimpleCv4Parser.DFA33_accept;
    this.special = SimpleCv4Parser.DFA33_special;
    this.transition = SimpleCv4Parser.DFA33_transition;
};

org.antlr.lang.extend(SimpleCv4Parser.DFA33, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "330:15: ( '[' shiftExpr ']' )?";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA33_1 = input.LA(1);

                             
                            var index33_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred63_SimpleCv4()) ) {s = 35;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index33_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 33, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(SimpleCv4Parser, {
    DFA46_eotS:
        "\u000d\uffff",
    DFA46_eofS:
        "\u000d\uffff",
    DFA46_minS:
        "\u0001\u005b\u0001\u0000\u000b\uffff",
    DFA46_maxS:
        "\u0001\u0093\u0001\u0000\u000b\uffff",
    DFA46_acceptS:
        "\u0002\uffff\u0001\u0003\u0008\uffff\u0001\u0001\u0001\u0002",
    DFA46_specialS:
        "\u0001\uffff\u0001\u0000\u000b\uffff}>",
    DFA46_transitionS: [
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
    DFA46_eot:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA46_eotS),
    DFA46_eof:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA46_eofS),
    DFA46_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA46_minS),
    DFA46_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(SimpleCv4Parser.DFA46_maxS),
    DFA46_accept:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA46_acceptS),
    DFA46_special:
        org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA46_specialS),
    DFA46_transition: (function() {
        var a = [],
            i,
            numStates = SimpleCv4Parser.DFA46_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(SimpleCv4Parser.DFA46_transitionS[i]));
        }
        return a;
    })()
});

SimpleCv4Parser.DFA46 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 46;
    this.eot = SimpleCv4Parser.DFA46_eot;
    this.eof = SimpleCv4Parser.DFA46_eof;
    this.min = SimpleCv4Parser.DFA46_min;
    this.max = SimpleCv4Parser.DFA46_max;
    this.accept = SimpleCv4Parser.DFA46_accept;
    this.special = SimpleCv4Parser.DFA46_special;
    this.transition = SimpleCv4Parser.DFA46_transition;
};

org.antlr.lang.extend(SimpleCv4Parser.DFA46, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "419:1: castExpr : ( '(' type ')' castExpr -> ^( CASTTYPE type castExpr ) | '(' conditionalExpr ')' -> ^( SUB_CONDITION conditionalExpr ) | unaryExpr );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA46_1 = input.LA(1);

                             
                            var index46_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred85_SimpleCv4()) ) {s = 11;}

                            else if ( (this.synpred86_SimpleCv4()) ) {s = 12;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index46_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 46, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(SimpleCv4Parser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "PROG", "INCLUDE_SYSTEM", "TYPE_DEF", "TYPE_OLD", "TYPE_NEW", "STRUCT_DEF", "STRUCT_CNAME", "VAR_DEF", "VAR_NAME", "C_TYPE", "C_ID", "DEFAULT_VALUE", "TYPE_VOID", "TYPE_I8", "TYPE_I16", "TYPE_I32", "TYPE_UNSIGNED", "TYPE_F32", "TYPE_F64", "TYPE_CUSTOM", "FUNC_DEF", "FUNC_STAT", "FUNC_NAME", "FUNC_HEADER", "FUNC_PARAM", "FUNC_INVOKE", "FOR_STAT", "WHILE_STAT", "DOWHILE_STAT", "IF_STAT", "IF_BRANCH", "ELSEIF_BRANCH", "ELSE_BRANCH", "JUMP_STAT", "JUMP_RETURN", "JUMP_BREAK", "JUMP_CONTINUE", "BLOCK", "EMPTY_BLOCK", "ASSIGNMENT", "ASSIGN", "PLUS_ASSIGN", "MINUS_ASSIGN", "MULTI_ASSIGN", "DIVIDE_ASSIGN", "SHL_ASSIGN", "SHR_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "NOT_ASSIGN", "CONDITION", "SUB_CONDITION", "OR_EXPR", "OR_BRANCH", "AND_EXPR", "AND_BRANCH", "SHIFT_EXPR", "ADDSUB_EXPR", "MULTDIV_EXPR", "CASTTYPE", "SHL_OP", "SHR_OP", "ADD_OP", "SUB_OP", "MULTI_OP", "DIV_OP", "MOD_OP", "RELATION_EXPR", "EQUAL_RE", "NOTEQUAL_RE", "LESS_RE", "GREATER_RE", "GREATEREQUAL_RE", "LESSEQUAL_RE", "PREFIX_PLUS", "PREFIX_MINUS", "PREFIX_NOT", "PREFIX_AND", "PREFIX_STAR", "SIZEOF", "POSTFIX_EXPR", "POSTFIX", "POSTFIX_PLUS", "POSTFIX_MINUS", "MEMBERVAR", "ARRAYINDEX", "DECLARATOR", "ID", "INT", "STRING", "EXPONENT", "FLOAT", "WS", "CHINESECHAR", "MULTILINE_COMMENT", "SINGLELINE_COMMENT", "EscapeSequence", "OctalEscape", "';'", "'#'", "'include'", "'<'", "'>'", "'.'", "','", "'*'", "'void'", "'char'", "'short'", "'int'", "'long'", "'float'", "'double'", "'signed'", "'unsigned'", "'typedef'", "'struct'", "'{'", "'}'", "'('", "')'", "'for'", "'while'", "'do'", "'if'", "'else'", "'continue'", "'break'", "'return'", "'='", "'+='", "'-='", "'*='", "'/='", "'<<='", "'>>='", "'&='", "'|='", "'^='", "'++'", "'--'", "'sizeof'", "'!'", "'&'", "'->'", "'['", "']'", "'||'", "'&&'", "'=='", "'!='", "'<='", "'>='", "'<<'", "'>>'", "'+'", "'-'", "'/'", "'%'"],
    FOLLOW_statement_in_program737: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x08000000, 0x01FFC080]),
    FOLLOW_declaration_in_statement771: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_variable_in_statement781: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_structDefinition_in_statement791: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_typeDefinition_in_statement801: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionHeader_in_statement811: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_statement813: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionHeader_in_statement836: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEA002040,0x000F801D, 0x00000000]),
    FOLLOW_block_in_statement838: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_103_in_declaration872: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000100]),
    FOLLOW_104_in_declaration874: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_105_in_declaration876: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_libname_in_declaration878: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_declaration880: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_libname913: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000800]),
    FOLLOW_107_in_libname916: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_ID_in_libname918: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_in_variable940: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_declarator_in_variable942: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00001040,0x00007FE0, 0x00000000]),
    FOLLOW_assignmentOp_in_variable945: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_conditionalExpr_in_variable947: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00001040]),
    FOLLOW_108_in_variable952: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00002000]),
    FOLLOW_109_in_variable954: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_declarator_in_variable957: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00001040,0x00007FE0, 0x00000000]),
    FOLLOW_assignmentOp_in_variable960: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_shiftExpr_in_variable962: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00001040]),
    FOLLOW_102_in_variable968: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_typeSpecifier_in_type1016: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00002000]),
    FOLLOW_109_in_type1018: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_110_in_typeSpecifier1053: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_111_in_typeSpecifier1064: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_112_in_typeSpecifier1075: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_113_in_typeSpecifier1086: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_114_in_typeSpecifier1097: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_115_in_typeSpecifier1108: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_116_in_typeSpecifier1119: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_117_in_typeSpecifier1130: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_118_in_typeSpecifier1141: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_typeSpecifier1156: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_declarator1184: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_119_in_typeDefinition1205: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x007FC000]),
    FOLLOW_oldTypeName_in_typeDefinition1207: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_newTypeName_in_typeDefinition1209: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_typeDefinition1211: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_typeSpecifier_in_oldTypeName1252: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_newTypeName1272: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_119_in_structDefinition1299: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x01000000]),
    FOLLOW_120_in_structDefinition1304: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_structName_in_structDefinition1306: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x02000000]),
    FOLLOW_structBlock_in_structDefinition1308: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000040]),
    FOLLOW_structVar_in_structDefinition1312: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00001040]),
    FOLLOW_108_in_structDefinition1316: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_structVar_in_structDefinition1318: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00001040]),
    FOLLOW_102_in_structDefinition1326: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_structName1367: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_in_structVar1386: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_121_in_structBlock1418: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x047FC000]),
    FOLLOW_variable_in_structBlock1432: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x047FC000]),
    FOLLOW_122_in_structBlock1443: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_in_functionHeader1472: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_ID_in_functionHeader1474: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_functionHeader1476: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x107FC000]),
    FOLLOW_formalParameter_in_functionHeader1480: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10001000]),
    FOLLOW_108_in_functionHeader1484: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x007FC000]),
    FOLLOW_formalParameter_in_functionHeader1486: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10001000]),
    FOLLOW_124_in_functionHeader1494: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_in_formalParameter1535: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_declarator_in_formalParameter1537: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_121_in_block1579: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEC7FE000,0x000F801D, 0x00000000]),
    FOLLOW_variable_in_block1593: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEC7FE000,0x000F801D, 0x00000000]),
    FOLLOW_stat_in_block1608: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEC002000,0x000F801D, 0x00000000]),
    FOLLOW_122_in_block1619: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_stat_in_block1649: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_102_in_block1672: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forStat_in_stat1700: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_whileStat_in_stat1710: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ifStat_in_stat1720: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_stat1730: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_stat1732: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_jumpStat_in_stat1762: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_125_in_forStat1782: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_forStat1784: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_assignmentExpr_in_forStat1786: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_forStat1788: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_conditionalExpr_in_forStat1790: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_forStat1792: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_expression_in_forStat1794: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_forStat1796: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEA002040,0x000F801D, 0x00000000]),
    FOLLOW_block_in_forStat1798: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_126_in_whileStat1847: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_whileStat1849: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_conditionalExpr_in_whileStat1851: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_whileStat1853: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEA002040,0x000F801D, 0x00000000]),
    FOLLOW_block_in_whileStat1855: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_127_in_whileStat1879: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEA002040,0x000F801D, 0x00000000]),
    FOLLOW_block_in_whileStat1881: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x40000000]),
    FOLLOW_126_in_whileStat1883: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_whileStat1885: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_conditionalExpr_in_whileStat1887: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_whileStat1889: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_whileStat1891: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_128_in_ifStat1924: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_ifStat1926: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_conditionalExpr_in_ifStat1928: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_ifStat1930: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEA002040,0x000F801D, 0x00000000]),
    FOLLOW_block_in_ifStat1932: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00000002, 0x00000000]),
    FOLLOW_129_in_ifStat1936: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_ifStat1938: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_ifStat1940: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_conditionalExpr_in_ifStat1942: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_ifStat1944: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEA002040,0x000F801D, 0x00000000]),
    FOLLOW_block_in_ifStat1946: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00000002, 0x00000000]),
    FOLLOW_129_in_ifStat1953: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEA002040,0x000F801D, 0x00000000]),
    FOLLOW_block_in_ifStat1955: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_130_in_jumpStat2010: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_jumpStat2012: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_131_in_jumpStat2033: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_jumpStat2035: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_132_in_jumpStat2056: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002040,0x000F8000, 0x00000000]),
    FOLLOW_expression_in_jumpStat2059: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_jumpStat2063: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_funcInvoke2101: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_funcInvoke2103: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x18002000,0x000F8000, 0x00000000]),
    FOLLOW_shiftExpr_in_funcInvoke2107: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10001000]),
    FOLLOW_108_in_funcInvoke2111: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_shiftExpr_in_funcInvoke2113: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10001000]),
    FOLLOW_124_in_funcInvoke2120: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignmentExpr_in_expression2162: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_conditionalExpr_in_expression2170: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unaryExpr_in_assignmentExpr2189: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00007FE0, 0x00000000]),
    FOLLOW_assignmentOp_in_assignmentExpr2192: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_shiftExpr_in_assignmentExpr2194: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_133_in_assignmentOp2235: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_134_in_assignmentOp2254: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_135_in_assignmentOp2273: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_136_in_assignmentOp2292: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_137_in_assignmentOp2311: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_138_in_assignmentOp2330: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_139_in_assignmentOp2349: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_140_in_assignmentOp2368: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_141_in_assignmentOp2387: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_142_in_assignmentOp2406: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_postfixExpr_in_unaryExpr2437: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_143_in_unaryExpr2447: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_unaryExpr_in_unaryExpr2449: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_144_in_unaryExpr2471: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_unaryExpr_in_unaryExpr2473: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_145_in_unaryExpr2495: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_unaryExpr2497: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x007FC000]),
    FOLLOW_type_in_unaryExpr2499: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_unaryExpr2501: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unaryOp_in_unaryExpr2523: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_castExpr_in_unaryExpr2525: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_funcInvoke_in_unaryExpr2533: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_146_in_unaryOp2556: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_147_in_unaryOp2574: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_109_in_unaryOp2592: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primaryExpr_in_postfixExpr2619: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00318000, 0x00000000]),
    FOLLOW_postfix_in_postfixExpr2622: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00318000, 0x00000000]),
    FOLLOW_148_in_postfix2664: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_ID_in_postfix2666: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00200000, 0x00000000]),
    FOLLOW_149_in_postfix2669: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_shiftExpr_in_postfix2671: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00400000, 0x00000000]),
    FOLLOW_150_in_postfix2673: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_143_in_postfix2704: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_144_in_postfix2724: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_149_in_postfix2744: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_expression_in_postfix2746: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00400000, 0x00000000]),
    FOLLOW_150_in_postfix2748: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_in_primaryExpr2779: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INT_in_primaryExpr2803: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_primaryExpr2813: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_123_in_primaryExpr2823: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_expression_in_primaryExpr2825: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_primaryExpr2827: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalOrExpr_in_conditionalExpr2846: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalAndExpr_in_logicalOrExpr2876: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00800000, 0x00000000]),
    FOLLOW_151_in_logicalOrExpr2879: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_logicalAndExpr_in_logicalOrExpr2881: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x00800000, 0x00000000]),
    FOLLOW_relationExpr_in_logicalAndExpr2917: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_152_in_logicalAndExpr2920: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_relationExpr_in_logicalAndExpr2922: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_shiftExpr_in_relationExpr2958: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000600,0x1E000000, 0x00000000]),
    FOLLOW_relationOp_in_relationExpr2961: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_shiftExpr_in_relationExpr2963: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000600,0x1E000000, 0x00000000]),
    FOLLOW_153_in_relationOp3005: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_154_in_relationOp3022: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_105_in_relationOp3039: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_106_in_relationOp3056: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_155_in_relationOp3073: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_156_in_relationOp3090: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_addSubExpr_in_shiftExpr3119: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_shiftOp_in_shiftExpr3122: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_addSubExpr_in_shiftExpr3124: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_157_in_shiftOp3161: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_158_in_shiftOp3177: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_multDivExpr_in_addSubExpr3204: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x80000000, 0x00000001]),
    FOLLOW_addSubOp_in_addSubExpr3207: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_multDivExpr_in_addSubExpr3209: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000000,0x80000000, 0x00000001]),
    FOLLOW_159_in_addSubOp3246: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_160_in_addSubOp3262: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_castExpr_in_multDivExpr3290: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00002000,0x00000000, 0x00000006]),
    FOLLOW_multDivOp_in_multDivExpr3293: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_castExpr_in_multDivExpr3295: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00002000,0x00000000, 0x00000006]),
    FOLLOW_109_in_multDivOp3333: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_161_in_multDivOp3349: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_162_in_multDivOp3365: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_123_in_castExpr3392: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x007FC000]),
    FOLLOW_type_in_castExpr3394: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_castExpr3396: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_castExpr_in_castExpr3398: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_123_in_castExpr3420: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_conditionalExpr_in_castExpr3422: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_castExpr3424: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unaryExpr_in_castExpr3446: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionHeader_in_synpred6_SimpleCv4811: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_synpred6_SimpleCv4813: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_variable_in_synpred28_SimpleCv41593: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_129_in_synpred37_SimpleCv41936: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_128_in_synpred37_SimpleCv41938: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_synpred37_SimpleCv41940: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_conditionalExpr_in_synpred37_SimpleCv41942: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_synpred37_SimpleCv41944: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEA002040,0x000F801D, 0x00000000]),
    FOLLOW_block_in_synpred37_SimpleCv41946: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_129_in_synpred38_SimpleCv41953: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0xEA002040,0x000F801D, 0x00000000]),
    FOLLOW_block_in_synpred38_SimpleCv41955: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignmentExpr_in_synpred44_SimpleCv42162: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_149_in_synpred63_SimpleCv42669: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_shiftExpr_in_synpred63_SimpleCv42671: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000000,0x00400000, 0x00000000]),
    FOLLOW_150_in_synpred63_SimpleCv42673: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_123_in_synpred85_SimpleCv43392: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08000000, 0x007FC000]),
    FOLLOW_type_in_synpred85_SimpleCv43394: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_synpred85_SimpleCv43396: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_castExpr_in_synpred85_SimpleCv43398: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_123_in_synpred86_SimpleCv43420: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x38000000, 0x08002000,0x000F8000, 0x00000000]),
    FOLLOW_conditionalExpr_in_synpred86_SimpleCv43422: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x10000000]),
    FOLLOW_124_in_synpred86_SimpleCv43424: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();

module.exports = SimpleCv4Parser;