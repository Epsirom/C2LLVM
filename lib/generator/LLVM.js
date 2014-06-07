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

var typeMap;

LLVMGenerator.prototype.analyze = function () {

};

LLVMGenerator.prototype.generate = function () {
    var lexer = require("../parser/" + this.grammar + "Lexer.js");
    initialTypeMap(lexer);
    var llvmCode = 'target datalayout = "e-p:64:64:64-i1:8:8-i8:8:8-i16:16:16-i32:32:32-i64:64:64-f32:32:32-f64:64:64-v64:64:64-v128:128:128-a0:0:64-s0:64:64-f80:128:128-n8:16:32:64-S128"';
    var rootNode = this.tree;
    var segNum = rootNode.children.length;
  //  console.log(rootNode.children[0].children[0]);
    for(var i = 0; i < segNum; i ++){
        var childNode = rootNode.children[i];
        switch(childNode.token.type){
            case lexer.TYPE_DEF:
                break;
            case lexer.STRUCT_DEF:
                llvmCode += genStructDef(childNode);
                break;
            case lexer.FUNC_DEF:
                llvmCode += genFuncDef(childNode);
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

var initialTypeMap = function(lexer) {
  //  typeMap.add(lexer.TYPE_VOID, "void");
  //  typeMap.add(lexer.TYPE_I8, "i8");
//    typeMap.add(lexer.TYPE_I16, "i16");
//    typeMap.add(lexer.TYPE_I32, "i32");
//    typeMap.add(lexer.TYPE_F32, "f32");
//    typeMap.add(lexer.TYPE_F64, "f64");
    typeMap = [];
    typeMap[lexer.TYPE_VOID] = "void";
    typeMap[lexer.TYPE_I8] = "i8";
    typeMap[lexer.TYPE_I16] = "i16";
    typeMap[lexer.TYPE_I32] = "i32";
}

var genStructDef = function(node) {
    var tempCode;

    return tempCode;
}

var genFuncDef = function(node) {
    var tempCode = "";
    var headNode = node.children[0];
    var blockNode = node.children[1];
    var funcType;
    var funcName = headNode.children[1].children[0].token.text;
//    console.log(headNode.children[0].children[0]);
    if(typeMap[headNode.children[0].children[0].token.type] != undefined){
        funcType = typeMap[headNode.children[0].children[0].token.type];
    } else {
        funcType = headNode.children[0].children[0].children[0].token.text;
    }
    if(headNode.children[0].children[1] != undefined)
        funcType += '*';
    tempCode += 'define '+ funcType + ' @' + funcName + '(';
    var paramNumP2 = headNode.children.length;
    for(var i = 2; i < paramNumP2; i ++) {
        var paramNode = headNode.children[i];
        var paramType;
        var paramName;
        if(typeMap[paramNode.children[0].children[0].token.type] != undefined){
            paramType = typeMap[paramNode.children[0].children[0].token.type];
        } else {
            paramType = paramNode.children[0].children[0].children[0].token.text;
        }
        if(paramNode.children[0].children[1] != undefined)
            paramType += '*';
        paramName = paramNode.children[1].token.text;
        if(i > 2)
            tempCode += ', ';
        tempCode += funcType + ' %' + paramName;
    }
    tempCode += ') #0 {';

    tempCode += '}';
    console.log(tempCode);
    return tempCode;
}