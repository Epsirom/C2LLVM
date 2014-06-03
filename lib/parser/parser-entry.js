/**
 * Created by Epsirom on 14-5-30.
 */

var fs = require('fs');

module.exports = CParser;

function CParser(grammar){
    if(!(this instanceof  CParser)){
        return new CParser(grammar);
    }else{
        GLOBAL.org = require('../../node_modules/antlr3').runtime.org;

        this.lexerClassName = grammar + 'Lexer';
        this.parserClassName = grammar + 'Parser';

        GLOBAL[this.lexerClassName] = require('./'+ this.lexerClassName + '.js');
        GLOBAL[this.parserClassName] = require('./' + this.parserClassName + '.js');
    }
}

CParser.prototype.parsec = function(inputfname) {
    var lexerClassName = this.lexerClassName;
    var parserClassName = this.parserClassName;
    fs.readFile(inputfname, function(err, input){
        if(err) throw err;

        var cstream = new org.antlr.runtime.ANTLRStringStream(String(input));
        var lexer = new GLOBAL[lexerClassName](cstream);
        var tstream = new org.antlr.runtime.CommonTokenStream(lexer);
        var parser = new GLOBAL[parserClassName](tstream);
        var r = parser.program();
        var tree = r.tree;
        var treeStream = new org.antlr.runtime.tree.CommonTreeNodeStream(tree);
//        console.log(treeStream);
//    console.log(parser.state);
    });
}