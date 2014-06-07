/**
 * Created by Epsirom on 14-5-30.
 */

var CParser = require('./parser/parser-entry');
var IDInspector = require('./inspector/id-inspector');
var LLVMGenerator = require('./generator/LLVM');

module.exports = Compiler;

function Compiler(grammar){
    if(!(this instanceof Compiler)){
        return new Compiler(grammar);
    }else{
        this.grammar = grammar;
    }
}

Compiler.prototype.compile = function(inputfname){
    var cparser = new CParser(this.grammar);
    var ast = cparser.parsec(inputfname);
    var inspector = new IDInspector(ast);
    inspector.analyze();
    var inspect_result = inspector.inspect();
    if (inspect_result && inspect_result.length > 0) {
        // TODO: show errors
        return null;
    } else {
        var generator = new LLVMGenerator(ast);
        generator.analyze();
        return generator.generate();
    }
};
