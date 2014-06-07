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
    console.log(rootNode.children[0].children[0]);

    var typeDef = [];
    var structDef = [];
    var structVar = [];
    var structVarName = null, structName = null;
    for(var i = 0; i < segNum; i ++){
        var childNode = rootNode.children[i];
        switch(childNode.token.type){
            case lexer.TYPE_DEF:
                typeDef[childNode.children[1].children[0].toString()] = childNode.children[0].children[0].toString();
                // eg. typeDef['ListData'] = 'TYPE_I32'
                break;
            case lexer.STRUCT_DEF:
                llvmCode += genStructDef(childNode);
                structVarName = childNode.children[0].toString();
                structName = childNode.children[0].children[0].children[0].toString();
                structVar[structVarName] = structName;
                // eg. structVar['arrayList'] = 'ArrayList'
                structDef[structName] = [];
                for(var j in childNode.children[0].children) {
                    if(j > 0) {
                        structDef[structName][childNode.children[0].children[j].children[1].children[0].toString()] = j - 1;
                    }
                }
                // eg. arrayList
                // structDef['ArrayList']['capacity'] = 0
                // structDef['ArrayList']['size'] = 1
                // structDef['ArrayList']['data'] = 2
                break;
            case lexer.FUNC_DEF:
                break;
            default:
                break;
        }
    }

    llvmCode += 'attributes #0 = { nounwind ssp uwtable "less-precise-fpmad"="false" "no-frame-pointer-elim"="true" "no-frame-pointer-elim-non-leaf"' +
        ' "no-infs-fp-math"="false" "no-nans-fp-math"="false" "stack-protector-buffer-size"="8" "unsafe-fp-math"="false" "use-soft-float"="false" } \n' +
        'attributes #1 = { "less-precise-fpmad"="false" "no-frame-pointer-elim"="true" "no-frame-pointer-elim-non-leaf" "no-infs-fp-math"="false" ' +
        '"no-nans-fp-math"="false" "stack-protector-buffer-size"="8" "unsafe-fp-math"="false" "use-soft-float"="false" }\n' +
        'attributes #2 = { nounwind }';
    return '这是生成的LLVM代码。'
};

var genStructDef = function(childNode) {
    // eg. %struct.arrayList = type { i32, i32, i32* }

    var tempCode = '%struct.';
    structVarName = childNode.children[0].toString();
    tempCode += structVarName;
    tempCode +=  '= type { ';
    var structType = [];
    for(var j in childNode.children[0].children) {
        if (j > 0) {
            if (j != 1) {
                tempCode +=  ', ';
            }
            tempCode += childNode.children[0].children[j].children[0].children[0].toString();
        }
    }
    tempCode +=  ' }';
    console.log(tempCode);

    return tempCode;
}