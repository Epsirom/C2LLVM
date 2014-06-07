/**
 * Created by Epsirom on 14-5-30.
 */

var fs = require('fs');

module.exports = CParser;

require('antlr3');

function CParser(grammar){
    if(!(this instanceof  CParser)){
        return new CParser(grammar);
    }else{

        this.lexerClassName = grammar + 'Lexer';
        this.parserClassName = grammar + 'Parser';

        GLOBAL[this.lexerClassName] = require('./'+ this.lexerClassName + '.js');
        GLOBAL[this.parserClassName] = require('./' + this.parserClassName + '.js');
    }
}

CParser.prototype.parsec = function(inputfname, callback) {
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
        console.log(treeStream);//.root.children[0]);
        return tree;
//    console.log(parser.state);
    });
};