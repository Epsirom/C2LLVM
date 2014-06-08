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
        this.data = {
            types: {},  // int:lexer.TYPE_I32, ArrayList:'arrayList'
            target: [], // {name:"triple", value:"i386-pc-linux-gnu"}
            struct: {}, // arrayList: {capacity:{memberIndex: 0, type: lexer.TYPE_I32, pointer: false} }
            funcs: {},  // create: {rtn:{type:'ArrayList', pointer:true}, args:[{name:a,type:{type:lexer.TYPE_I32, pointer:false}]}
            params: {}, // result:[{type:'ArrayList', pointer:true, lv=2, llvmname='result'}]
            pmap: {}    // llvm parameter table, like: {1:true, result1:result}
        };
        this.paramlv = 0;
        this.pmapcount = 0;
        this.body = [];
    }
}

LLVMGenerator.prototype.lvup = function() {
    ++(this.paramlv);
};

LLVMGenerator.prototype.lvdown = function() {
    for (var p in this.data.params) {
        this.removeParam(p);
    }
    --(this.paramlv);
};

LLVMGenerator.prototype.setType = function(typename, realtype) {
    this.data.types[typename] = realtype;
};

LLVMGenerator.prototype.setTarget = function(name, value) {
    this.data.target.push({name: name, value: value});
};

LLVMGenerator.prototype.setStruct = function(name, members) {
    this.data.struct[name] = members;
};

LLVMGenerator.prototype.setFunc = function(name, func) {
    this.data.funcs[name] = func;
};

LLVMGenerator.prototype.setParam = function(name, type, pointer) {
    if (!this.data.params[name]) {
        this.data.params[name] = [];
    }
    var i = 0;
    while (this.data.pmap[name + i]) {
        ++i;
    }
    this.data.pmap[name + i] = name;
    this.data.params[name].push({
        type: type, pointer: pointer, lv: this.paramlv, llvmname: name + i
    });
    return name + i;
};

LLVMGenerator.prototype.removeParam = function(name) {
    if (this.data.params[name]) {
        var p = this.data.params[name];
        while (p.length > 0 && p[p.length - 1].lv >= this.paramlv) {
            p.pop();
        }
        if (p.length == 0) {
            delete this.data.params[name];
        }
    }
};

LLVMGenerator.prototype.getParam = function(name) {
    if (this.data.params[name]) {
        var p = this.data.params[name];
        if (p.length > 0) {
            return p[p.length - 1];
        }
    }
    return null;
};

LLVMGenerator.prototype.newPmap = function() {
    do {
        ++this.pmapcount;
    } while (this.data.pmap[this.pmapcount]);
    this.data.pmap[this.pmapcount] = true;
    return this.pmapcount;
};

var lexer;

LLVMGenerator.prototype.analyze = function () {
    lexer = require("../parser/" + this.grammar + "Lexer.js");
    this.data.types = {
        int: lexer.TYPE_I32,
        char: lexer.TYPE_I8,
        void: lexer.TYPE_VOID
    };
    this.data.target.push({name: 'datalayout', value: 'e-p:32:32:32-i1:8:8-i8:8:8-i16:16:16-i32:32:32-i64:32:64-f32:32:32-f64:32:64-v64:64:64-v128:128:128-a0:0:64-f80:32:32-n8:16:32-S128'});
    this.data.target.push({name: 'triple', value: 'i386-pc-linux-gnu'});

    this.handlePROG(this.tree);

    console.log(JSON.stringify(this.data, null, 2));
    console.log(JSON.stringify(this.body, null, 2));
};

LLVMGenerator.prototype.handlePROG = function (node) {
    this.lvup();
    for (var i = 0, len = node.children.length; i < len; ++i) {
        switch (node.children[i].token.type) {
            case lexer.INCLUDE_SYSTEM:
                this.handleINCLUDE(node.children[i]);
                break;

            case lexer.TYPE_DEF:
                this.handleTYPEDEF(node.children[i]);
                break;

            case lexer.STRUCT_DEF:
                this.handleSTRUCT(node.children[i]);
                break;

            case lexer.FUNC_DEF:
                this.handleFUNC(node.children[i]);
                break;

        }
    }
    this.lvdown();
};

LLVMGenerator.prototype.handleFUNC = function(node) {
    this.lvup();
    this.handleFUNCHEAD(node.children[0]);
    this.handleBLOCK(node.children[1]);
    this.body.push('}\n');
    this.lvdown();
};

LLVMGenerator.prototype.handleBLOCK = function(node) {
    for (var i = 0, len = node.children.length; i < len; ++i) {
        switch (node.children[i].token.type) {
            case lexer.VAR_DEF:
                this.handleVARDEF(node.children[i]);
                break;

            case lexer.IF_STAT:
                // TODO
                break;

            case lexer.ASSIGNMENT:
                this.handleASSIGN(node.children[i]);
                break;
        }
    }
};

LLVMGenerator.prototype.handleASSIGN = function(node) {
    var left = node.children[0].children[0].token.text;
    var rightnode = node.children[2];
    switch (rightnode.token.type) {
        case lexer.CONSTANT:
            var c = rightnode.children[0].token.text;

    }
};

LLVMGenerator.prototype.handleVARDEF = function(node) {
    var tp = get_type_obj(node.children[0]);
    var varname = node.children[1].children[0].token.text;
    var llvmname = this.setParam(varname, tp.type, tp.pointer);
    this.body.push('%' + llvmname + ' = alloca %' + this.get_full_type_id(tp));
};

LLVMGenerator.prototype.handleFUNCHEAD = function(node) {
    var rtn = get_type_obj(node.children[0]);
    var name = node.children[1].children[0].token.text;
    var args = [];
    for (var i = 2, len = node.children.length; i < len; ++i) {
        var ag = {
            type: get_type_obj(node.children[i].children[0]),
            name: node.children[i].children[1].token.text
        };
        args.push(ag);
        this.setParam(ag.name, ag.type.type, ag.type.pointer);
    }
    this.setFunc(name, {rtn: rtn, args: args});
    this.body.push(this.get_func_define(name));
};

LLVMGenerator.prototype.get_func_define = function(name) {
    var obj = this.data.funcs[name];
    var rtn = 'define ' + this.get_type_id(obj.rtn.type) + (obj.rtn.pointer ? '*' : '') + ' @' + name + '(';
    var i, len;
    for (i = 0, len = obj.args.length; i < len; ++i) {
        rtn += ((i > 0 ? ', ' : '') + this.get_full_type_id(obj.args[i].type) + ' %' + obj.args[i].name);
    }
    rtn += ') {\n';
    for (i = 0, len = obj.args.length; i < len; ++i) {
        var pr = this.getParam(obj.args[i].name), ft = this.get_full_type_id(pr);
        rtn += ('%' + pr.llvmname + ' = alloca ' + ft + '\n');
        rtn += ('store ' + ft + ' %' + obj.args[i].name + ', ' + ft + '* %' + pr.llvmname + '\n');
    }
    return rtn.substring(0, rtn.length - 1);
};

LLVMGenerator.prototype.get_full_type_id = function(tp) {
    return this.get_type_id(tp.type) + (tp.pointer ? '*' : '');
};

LLVMGenerator.prototype.get_type_id = function(tp) {
    while (typeof tp == 'string' && this.data.types[tp]) {
        tp = this.data.types[tp];
    }
    if (typeof tp == 'string') {
        if (this.data.struct[tp]) {
            return '%struct.' + tp;
        } else {
            return 'error'
        }
    }
    switch (tp) {
        case lexer.TYPE_I32:
            return 'i32';

        case lexer.TYPE_I8:
            return 'i8';

        case lexer.TYPE_VOID:
            return 'void';
    }
    return 'unknown';
};

function get_type_obj(node) {
    var tp;
    if (node.children[0].token.type == lexer.TYPE_CUSTOM) {
        tp = node.children[0].children[0].token.text;
    } else {
        tp = node.children[0].token.type;
    }
    return {
        type: tp,
        pointer: (node.children[1] && node.children[1].token.type == lexer.T__109)
    };
}

LLVMGenerator.prototype.handleSTRUCT = function(node) {
    var sName = node.children[0].token.text;
    var map = {};
    for (var i = 0, len = node.children[0].children.length; i < len; ++i) {
        var nd = node.children[0].children[i];
        if (nd.token.type == lexer.STRUCT_CNAME) {
            this.setType(nd.children[0].token.text, sName);
        } else if (nd.token.type == lexer.VAR_DEF) {
            map[nd.children[1].children[0].token.text] = get_type_obj(nd.children[0])
        }
    }
    this.setStruct(sName, map);
};

LLVMGenerator.prototype.handleTYPEDEF = function(node) {
    this.setType(node.children[1].children[0].token.text, node.children[0].children[0].token.type);
};

LLVMGenerator.prototype.handleINCLUDE = function(node) {
    switch (node.children[0].token.text) {
        case 'stdlib':
            this.body.push('declare i8* @malloc(i32)');
            this.body.push('declare void @free(i8*)');
            this.body.push('declare void @llvm.memcpy.p0i8.p0i8.i32(i8* nocapture, i8* nocapture, i32, i32, i1)');
            break;
        case 'stdio':
            this.body.push('declare i32 @printf(i8*, ...)');
            break;
    }
};

LLVMGenerator.prototype.generate = function () {

    return this.body.join('\n');

    //var lexer = require("../parser/" + this.grammar + "Lexer.js");
/*
    initialTypeMap(lexer);
    var llvmCode = ['target datalayout = "e-p:32:32:32-i1:8:8-i8:8:8-i16:16:16-i32:32:32-i64:64:64-f32:32:32-f64:64:64-v64:64:64-v128:128:128-a0:0:64-s0:64:64-f80:128:128-n8:16:32:64-S128"'];
    var rootNode = this.tree;
    var segNum = rootNode.children.length;
  //  console.log(rootNode.children[0].children[0]);

    var structDef = [];
    var structVar = [];
    var structVarName = null, structName = null;
    for(var i = 0; i < segNum; i ++){
        var childNode = rootNode.children[i];
        switch(childNode.token.type){
            case lexer.TYPE_DEF:
                typeDef[childNode.children[1].children[0].toString()] = childNode.children[0].children[0].token.type;
                // eg. typeDef['ListData'] = 'TYPE_I32'
                break;
            case lexer.STRUCT_DEF:
                llvmCode.push(genStructDef(childNode));
                structVarName = childNode.children[0].toString();
                structName = childNode.children[0].children[0].children[0].toString();
                structVar[structName] = structVarName;
                // eg. structVar['ArrayList'] = 'arrayList'
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
                llvmCode.push(genFuncDef(childNode));
                break;
            default:
                break;
        }
    }

    llvmCode.push('attributes #0 = { nounwind ssp uwtable "less-precise-fpmad"="false" "no-frame-pointer-elim"="true" "no-frame-pointer-elim-non-leaf"' +
        ' "no-infs-fp-math"="false" "no-nans-fp-math"="false" "stack-protector-buffer-size"="8" "unsafe-fp-math"="false" "use-soft-float"="false" } \n' +
        'attributes #1 = { "less-precise-fpmad"="false" "no-frame-pointer-elim"="true" "no-frame-pointer-elim-non-leaf" "no-infs-fp-math"="false" ' +
        '"no-nans-fp-math"="false" "stack-protector-buffer-size"="8" "unsafe-fp-math"="false" "use-soft-float"="false" }\n' +
        'attributes #2 = { nounwind }');
    return llvmCode.join('\n');
    */
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
            var typeNode = childNode.children[0].children[j].children[0];
            tempCode += getTypeFromNode(typeNode);
            if(typeNode.children[1] != undefined)
                tempCode += '*';
        }
    }
    tempCode +=  ' }';
    //console.log(tempCode);

    return tempCode;
};

var genFuncDef = function(node) {
    var tempCode = "";
    var headNode = node.children[0];
    var blockNode = node.children[1];
    var funcType;
    var funcName = headNode.children[1].children[0].token.text;
//    console.log(headNode.children[0].children[0]);
    funcType = getTypeFromNode(headNode.children[0]);
    if(headNode.children[0].children[1] != undefined)
        funcType += '*';
    tempCode += 'define '+ funcType + ' @' + funcName + '(';
    var paramNumP2 = headNode.children.length;
    for(var i = 2; i < paramNumP2; i ++) {
        var paramNode = headNode.children[i];
        var paramType;
        var paramName;
        paramType = getTypeFromNodeWithStruct(paramNode.children[0]);
        if(paramNode.children[0].children[1] != undefined)
            paramType += '*';
        paramName = paramNode.children[1].token.text;
        if(i > 2)
            tempCode += ', ';
        tempCode += funcType + ' %' + paramName;
    }
    tempCode += ') #0 {';

    tempCode += '}';
    //console.log(tempCode);
    return tempCode;
};

var getTypeFromNode = function(node){
    var typeStr;
    if(typeMap[node.children[0].token.type] != undefined){
        typeStr = typeMap[node.children[0].token.type];
    } else {
        typeStr = node.children[0].children[0].token.text;
        typeStr = typeMap[typeDef[typeStr]];
    }
    return typeStr;
}

var getTypeFromNodeWithStruct = function(node) {
    var typeStr;
    if(typeMap[node.children[0].token.type] != undefined){
        typeStr = typeMap[node.children[0].token.type];
    } else {
        typeStr = node.children[0].children[0].token.text;
        if (structVarName[typeStr] != undefined) {
            typeStr = '%struct.' + typeStr;
        }
    }
    return typeStr;
}