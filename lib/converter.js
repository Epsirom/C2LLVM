/**
 * Created by Epsirom on 14-5-30.
 */

var CParser = require('./parser/parser-entry');

module.exports = Converter;

function Converter(grammar){
    if(!(this instanceof  Converter)){
        return new Converter(grammar);
    }else{
        this.grammar = grammar;
    }
}

Converter.prototype.convert = function(inputfname){
    var cparser = new CParser(this.grammar);
    cparser.parsec(inputfname);
}