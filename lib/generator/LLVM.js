/**
 * Created by Epsirom on 14-6-7.
 * LLVM生成器。
 * analyze：进行生成代码的预处理。
 * generate：根据分析结果生成LLVM代码。
 */

module.exports = LLVMGenerator;

function LLVMGenerator(ast, grammar) {
    if(!(this instanceof LLVMGenerator)){
        return new LLVMGenerator(ast);
    }else{
        this.tree = ast;
        this.grammar = grammar;
    }
}

LLVMGenerator.prototype.analyze = function () {

};

LLVMGenerator.prototype.generate = function () {
    var lexer = require("../parser/" + this.grammar + "Lexer.js");
    var llvmCode = 'target datalayout = "e-p:64:64:64-i1:8:8-i8:8:8-i16:16:16-i32:32:32-i64:64:64-f32:32:32-f64:64:64-v64:64:64-v128:128:128-a0:0:64-s0:64:64-f80:128:128-n8:16:32:64-S128"';
    var rootNode = this.tree;
    var segNum = rootNode.children.length;
    for(var i = 0; i < segNum; i ++){
        var childNode = rootNode.children[i];
        switch(childNode.token.type){
            case lexer.TYPE_DEF:
                break;
            case lexer.STRUCT_DEF:
                break;
            case lexer.
            default:
                break;
        }
    }
    return '这是生成的LLVM代码。'
};

