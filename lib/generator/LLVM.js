/**
 * Created by Epsirom on 14-6-7.
 * LLVM生成器。
 * analyze：进行生成代码的预处理。
 * generate：根据分析结果生成LLVM代码。
 */

module.exports = LLVMGenerator;

function LLVMGenerator(ast) {
    if(!(this instanceof LLVMGenerator)){
        return new LLVMGenerator(ast);
    }else{
        this.tree = ast;
    }
}

LLVMGenerator.prototype.analyze = function () {

};

LLVMGenerator.prototype.generate = function () {
    return '这是生成的LLVM代码。'
};
