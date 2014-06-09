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
            pmap: {},   // llvm parameter table, like: {1:true, result1:result}
            cstr: []    // static const strings
        };
        this.paramlv = 0;
        this.pmapcount = 0;
        this.body = [];
        this.labelcount = {
            iflabel: 0,
            whilelabel: 0,
            forlabel: 0
        };
        this.currentFunc = [];
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
    var count = 0;
    for (var member in members) {
        members[member].memberIndex = count;
        ++count;
    }
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
        type: type, pointer: pointer, lv: this.paramlv, llvmname: '%' + name + i
    });
    return '%' + name + i;
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
    return '%' + this.pmapcount;
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
    if (this.data.funcs[this.currentFunc[this.currentFunc.length - 1]].rtn.type == lexer.TYPE_VOID) {
        this.body.push('ret void');
    }
    this.body.push('}\n');
    this.currentFunc.pop();
    this.lvdown();
};

LLVMGenerator.prototype.handleBLOCK = function(node) {
    this.lvup();
    for (var i = 0, len = node.children.length; i < len; ++i) {
        switch (node.children[i].token.type) {
            case lexer.VAR_DEF:
                this.handleVARDEF(node.children[i]);
                break;

            case lexer.IF_STAT:
                this.handleIFSTAT(node.children[i]);
                break;

            case lexer.FOR_STAT:
                this.handleFORSTAT(node.children[i]);
                break;

            case lexer.WHILE_STAT:
                this.handleWHILESTAT(node.children[i]);
                break;

            case lexer.ASSIGNMENT:
                this.handleASSIGN(node.children[i]);
                break;

            case lexer.JUMP_STAT:
                this.handleJUMP_STAT(node.children[i]);
                break;
        }
    }
    this.lvdown();
};

LLVMGenerator.prototype.handleJUMP_STAT = function(node) {
    switch (node.children[0].token.type) {
        case lexer.JUMP_RETURN:
            this.handleJUMP_RETURN(node.children[0]);
            break;
    }
};

LLVMGenerator.prototype.handleJUMP_RETURN = function(node) {
    var rtni = this.loadVARIABLE(node.children);
    var rtntype = this.get_full_type_id(this.data.funcs[this.currentFunc[this.currentFunc.length - 1]].rtn);
    var tllvm = rtni.llvmname;
    if (rtni.type != rtntype) {
        tllvm = this.newPmap();
        this.body.push(tllvm + ' = bitcast ' + rtni.type + ' ' + rtni.llvmname + ' to ' + rtntype);
    }
    var rllvm = tllvm;
    if (rllvm[0] == '%') {
        rllvm = this.newPmap();
        this.body.push(rllvm + ' = load ' + rtntype + '* ' + tllvm);
    }
    this.body.push('ret ' + rtntype + ' ' + rllvm);
};

LLVMGenerator.prototype.handleASSIGN = function(node) {
    if (node.children.length == 1) {
        var onode = node;
        node = node.children[0].children[0];
        if (node.token.type == lexer.PREFIX_PLUS) {
            return this.handlePREFIX_PLUS(node);
        } else if (node.token.type == lexer.PREFIX_MINUS) {
            return this.handlePREFIX_MINUS(node);
        } else if (node.token.type == lexer.FUNC_INVOKE) {
            return this.handleFUNC_INVOKE(node);
        } else if (node.token.type == lexer.VARIABLE) {
            return this.loadVARIABLE(node.children);
        } else if (node.token.type == lexer.CASTTYPE) {
            return this.handleCASTTYPE(node);
        }
    }
    var lefttype;
    var leftllvm;
    var righttype;
    var rightllvm;
    var rightnode = node.children[2];
    var leftnode = node.children[0];
    var vl = this.loadVARIABLE(leftnode.children[0].children);
    lefttype = vl.type;
    leftllvm = vl.llvmname;
    if (rightnode.children[0].token.type == lexer.VARIABLE) {
        var vr = this.loadVARIABLE(rightnode.children[0].children);
        righttype = vr.type;
        rightllvm = vr.llvmname;

        if (lefttype != righttype) {
            rightllvm = this.newPmap();
            this.body.push(rightllvm + ' = bitcast ' + righttype + ' ' + vr.llvmname + ' to ' + lefttype);
        }

        this.body.push('store ' + righttype + ' ' + rightllvm + ', ' + lefttype + '* ' + leftllvm);

    } else if (rightnode.children[0].token.type == lexer.CONSTNUM) {
        this.body.push('store ' + lefttype + ' ' + rightnode.children[0].children[0].token.text + ', ' + lefttype + '* ' + leftllvm);
    } else if (rightnode.children[0].token.type == lexer.FUNC_INVOKE) {
        var fi = this.handleFUNC_INVOKE(rightnode.children[0]);
        righttype = fi.type;
        rightllvm = fi.llvmname;
        this.body.push('store ' + righttype + ' ' + rightllvm + ', ' + lefttype + '* ' + leftllvm);
    } else if (rightnode.children[0].token.type == lexer.CASTTYPE) {
        var ci = this.handleCASTTYPE(rightnode.children[0]);
        righttype = ci.type;
        rightllvm = ci.llvmname;
        this.body.push('store ' + righttype + ' ' + rightllvm + ', ' + lefttype + '* ' + leftllvm);
    } else {
        console.log(rightnode);
    }
    return {
        type: lefttype,
        llvmname: leftllvm
    };

/*
    if (leftnode.children.length == 1) {
        var left = leftnode.children[0].children[0].token.text;
        var pr = this.getParam(left);
        lefttype = this.get_full_type_id(pr);
        leftllvm = pr.llvmname;

    } else if (leftnode.children.length == 2) {
        var sname = leftnode.children[0].children[0].token.text;
        var spr = this.getParam(sname);
        var stype = this.get_full_type_id(spr);
        var loadllvm = this.newPmap();
        this.body.push('%' + loadllvm + ' = load %' + stype + '* %' + spr.llvmname);
        leftllvm = this.newPmap();

    }*/
    /*
    if (node.children.length == 3) {
        var left = node.children[0].children[0].token.text;
        var pr = this.getParam(left);
        lefttype = this.get_full_type_id(pr);
        leftllvm = pr.llvmname;
        rightnode = node.children[2];
    } else if (node.children.length == 4) {

    }
    if (!rightnode) {
        console.log(node);
        return '';
    }
    switch (rightnode.token.type) {
        case lexer.CONSTNUM:
            var c = rightnode.children[0].token.text;
            this.body.push('store %' + this.get_full_type_id(pr) + ' ' + c + ', ' + this.get_full_type_id(pr) + '* %' + pr.llvmname);
            return pr.llvmname;
    }
    */
};

LLVMGenerator.prototype.loadVARIABLE = function(nodes) {
    if (nodes.length == 1) {
        if (nodes[0].token.type == lexer.DECLARATOR) {
            var left = nodes[0].children[0].token.text;
            var pr = this.getParam(left);
            return {
                type: this.get_full_type_id(pr),
                llvmname: pr.llvmname
            };
        } else if (nodes[0].token.type == lexer.CONSTNUM) {
            return {
                type: 'i32',
                llvmname: nodes[0].children[0].token.text
            };
        } else if (nodes[0].token.type == lexer.STRING) {
            var str = nodes[0].token.text;
            str = str.substring(1, str.length - 1);
            str = str.replace(/\\n/g, '\n');
            var strid = this.data.cstr.push(str) - 1;
            return {
                type: 'i8*',
                llvmname: 'getelementptr inbounds ([' + (str.length + 1) + ' x i8]* @.str' + strid + ', i32 0, i32 0)'
            }
        }
    } else if (nodes.length == 2) {
        var sname = nodes[0].children[0].token.text;
        var spr = this.getParam(sname);
        if (!spr) {
            console.log(nodes);
        }
        var stype = this.get_full_type_id(spr);
        var sllvm = this.newPmap();
        this.body.push(sllvm + ' = load ' + stype + '* ' + spr.llvmname);
        var mname = nodes[1].children[0].token.text;
        var mllvm = this.newPmap();
        var ppp = spr.type;
        while (typeof ppp == 'string' && this.data.types[ppp]) {
            ppp = this.data.types[ppp];
        }
        if (mname == 'DECLARATOR') {
            console.log(nodes);
        }
        var mtpobj = this.data.struct[ppp][mname];
        var mtype = this.get_full_type_id(mtpobj);
        this.body.push(mllvm + ' = getelementptr inbounds ' + stype + ' ' + sllvm + ', i32 0, i32 ' + mtpobj.memberIndex);
        if (nodes[1].children.length == 1) {
            return {
                type: mtype,
                llvmname: mllvm
            }
        }
        var mllvm2 = this.newPmap();
        this.body.push(mllvm2 + ' = load ' + mtype + '* ' + mllvm);

        var ii = this.handleSHIFT_EXPR(nodes[1].children[1].children[0]);
        var illvm = this.newPmap();
        this.body.push(illvm + ' = load ' + ii.type + '* ' + ii.llvmname);
        var rtnllvm = this.newPmap();
        var rtntype = this.get_type_id(mtpobj.type);
        this.body.push(rtnllvm + ' = getelementptr inbounds ' + mtype + ' ' + mllvm2 + ', ' + ii.type + ' ' + illvm);
        //var rtnllvm2 = this.newPmap();
        //this.body.push('%' + rtnllvm2 + ' = load ' + rtntype + '* %' + rtnllvm);
        return {
            type: rtntype,
            llvmname: rtnllvm
        };
    } else {
        console.log(nodes);
    }
};

LLVMGenerator.prototype.handleCASTTYPE = function(node) {
    var tobj = get_type_obj(node.children[0]);
    var targettype = this.get_full_type_id(tobj);
    var mb = node.children[1];
    var mbt;
    switch (mb.token.type) {
        case lexer.ASSIGNMENT:
            mbt = this.handleASSIGN(mb);
            break;
        case lexer.FUNC_INVOKE:
            mbt = this.handleFUNC_INVOKE(mb);
            break;
        case lexer.VARIABLE:
            mbt = this.loadVARIABLE(mb.children);
            break;
    }
    var nllvm = this.newPmap();
    if (mbt.type[mbt.type.length - 1] == '*' && tobj.type == lexer.TYPE_I32 && !tobj.pointer) {
        var tllvm = this.newPmap();
        this.body.push(tllvm + ' = load ' + mbt.type + '* ' + mbt.llvmname);
        this.body.push(nllvm + ' = ptrtoint ' + mbt.type + ' ' + tllvm + ' to ' + targettype)
    } else {
        this.body.push(nllvm + ' = bitcast ' + mbt.type + ' ' + mbt.llvmname + ' to ' + targettype);
    }
    return {
        type: targettype,
        llvmname: nllvm
    };
};

LLVMGenerator.prototype.handleSHIFT_EXPR = function(node) {
    var opname;
    switch (node.token.type) {
        case lexer.VARIABLE:
            return this.loadVARIABLE(node.children);

        case lexer.ADD_OP:
            opname = 'add nsw';
            break;

        case lexer.SUB_OP:
            opname = 'sub nsw';
            break;

        case lexer.DIV_OP:
            opname = 'sdiv';
            break;

        default :
            console.log(node);
    }
    var s1 = this.handleSHIFT_EXPR(node.children[0]);
    var s2 = this.handleSHIFT_EXPR(node.children[1]);
    var stype = s1.type;
    var s1llvm = s1.llvmname;
    var s2llvm = s2.llvmname;
    if (s1.type != s2.type) {
        s2llvm = this.newPmap();
        this.body.push(s2llvm + ' = bitcast ' + s2.type + ' ' + s2.llvmname + ' to ' + s1.type);
    }
    var sllvm = this.newPmap();
    this.body.push(sllvm + ' = ' + opname + ' ' + stype + ' ' + s1llvm + ', ' + s2llvm);
    return {
        type: stype,
        llvmname: sllvm
    };
};

LLVMGenerator.prototype.handleFUNC_INVOKE = function(node) {
    var llvmname = this.newPmap();
    var func = node.children[0].children[0].token.text;
    var rtntype;
    if (func == 'malloc') {
        this.body.push(llvmname + ' = call i8* @malloc(i32 ' + node.children[1].children[0].children[0].token.text + ')');
        rtntype = 'i8*';
    } else if (func == 'memcpy') {
        this.body.push(llvmname + ' = call void @llvm.memcpy.p0i8.p0i8.i32(' + this.loadFUNC_PARAMS(node.children) + ', i32 1, i1 false)')
        rtntype = 'void';
    } else if (func == 'free') {
        var v = this.loadVARIABLE(node.children[1].children[0].children);
        var cst = this.newPmap();
        this.body.push(cst + ' = bitcast ' + v.type + ' ' + v.llvmname + ' to i8*');
        this.body.push(llvmname + ' = call void @free(i8* ' + cst + ')');
        rtntype = 'void';
    } else if (func == 'printf') {
        this.body.push(llvmname + ' = call i32(i8*,...)* @printf(' + this.loadFUNC_PARAMS(node.children) + ')');
    } else {
        var funcobj = this.data.funcs[func];
        var rtn = funcobj.rtn;
        rtntype = this.get_full_type_id(rtn);
        this.body.push(llvmname + ' = call ' + rtntype + ' @' + func + '(' + this.loadFUNC_PARAMS(node.children) + ')');
    }
    return {
        type: rtntype,
        llvmname: llvmname
    }
};

LLVMGenerator.prototype.loadFUNC_PARAMS = function(nodes) {
    var rtn = '';
    for (var i = 1, len = nodes.length; i < len; ++i) {
        if (i > 1) {
            rtn += ', ';
        }
        switch (nodes[i].children[0].token.type) {
            case lexer.STRING:
                var str = nodes[i].children[0].token.text;
                str = str.substring(1, str.length - 1);
                str = str.replace(/\\n/g, '\n');
                var strid = this.data.cstr.push(str) - 1;
                rtn += ('i8* getelementptr inbounds ([' + (str.length + 1) + ' x i8]* @.str' + strid + ', i32 0, i32 0)');
                break;

            case lexer.CONSTNUM:
                rtn += ('i32 ' + nodes[i].children[0].children[0].token.text);
                break;

            case lexer.VARIABLE:
                var llvm = this.newPmap();
                var v = this.loadVARIABLE(nodes[i].children[0].children);
                if (!v) {
                    console.log(nodes);
                }
                this.body.push(llvm + ' = load ' + v.type + '* ' + v.llvmname);
                rtn += (v.type + ' ' + llvm);
                break;

            case lexer.FUNC_INVOKE:
                var fi = this.handleFUNC_INVOKE(nodes[i].children[0]);
                rtn += (fi.type + ' ' + fi.llvmname);
                break;

            case lexer.CASTTYPE:
                var fi2 = this.handleCASTTYPE(nodes[i].children[0]);
                rtn += (fi2.type + ' ' + fi2.llvmname);
                break;
        }
    }
    return rtn;
};

LLVMGenerator.prototype.handlePREFIX_PLUS = function(node) {
    if (node.children[0].token.type == lexer.ASSIGNMENT) {
        var v = this.handleASSIGN(node.children[0]);
        var l1 = this.newPmap();
        this.body.push(l1 + ' = load ' + v.type + '* ' + v.llvmname);
        var l2 = this.newPmap();
        this.body.push(l2 + ' = add nsw ' + v.type + ' ' + l1 + ', 1');
        this.body.push('store ' + v.type + ' ' + l2 + ', ' + v.type + '* ' + v.llvmname);
        return v;
    }
};

LLVMGenerator.prototype.handlePREFIX_MINUS = function(node) {
    if (node.children[0].token.type == lexer.ASSIGNMENT) {
        var v = this.handleASSIGN(node.children[0]);
        var l1 = this.newPmap();
        this.body.push(l1 + ' = load ' + v.type + '* ' + v.llvmname);
        var l2 = this.newPmap();
        this.body.push(l2 + ' = add nsw ' + v.type + ' ' + l1 + ', -1');
        this.body.push('store ' + v.type + ' ' + l2 + ', ' + v.type + '* ' + v.llvmname);
        return v;
    }
};

LLVMGenerator.prototype.handleVARDEF = function(node) {
    var tp = get_type_obj(node.children[0]);
    var varname = node.children[1].children[0].token.text;
    var llvmname = this.setParam(varname, tp.type, tp.pointer);
    this.body.push(llvmname + ' = alloca ' + this.get_full_type_id(tp));
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
    this.currentFunc.push(name);
    this.body.push(this.get_func_define(name));
};

LLVMGenerator.prototype.get_func_define = function(name) {
    var obj = this.data.funcs[name];
    var rtn = 'define ' + this.get_type_id(obj.rtn.type) + (obj.rtn.pointer ? '*' : '') + ' @' + name + '(';
    var i, len;
    for (i = 0, len = obj.args.length; i < len; ++i) {
        rtn += ((i > 0 ? ', ' : '') + this.get_full_type_id(obj.args[i].type) + ' ' + obj.args[i].name);
    }
    rtn += ') {\n';
    for (i = 0, len = obj.args.length; i < len; ++i) {
        var pr = this.getParam(obj.args[i].name), ft = this.get_full_type_id(pr);
        rtn += (pr.llvmname + ' = alloca ' + ft + '\n');
        rtn += ('store ' + ft + ' ' + obj.args[i].name + ', ' + ft + '* ' + pr.llvmname + '\n');
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
        pointer: !!(node.children[1])
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
            this.body.push('');
            break;
        case 'stdio':
            this.body.push('declare i32 @printf(i8*, ...)');
            this.body.push('');
            break;
    }
};

LLVMGenerator.prototype.handleCONDITION = function(node) {
    var cmpOp = '';
    var firstllvm;
    var secondllvm;
    var unaryFlag = false;
    switch(node.children[0].token.type) {
        case lexer.NOTEQUAL_RE:
            cmpOp = 'ne';
            node = node.children[0];
            break;
        case lexer.LESSEQUAL_RE:
            node = node.children[0];
            cmpOp = 'sle';
            break;
        case lexer.LESS_RE:
            node = node.children[0];
            cmpOp = 'slt';
            break;
        case lexer.GREATEREQUAL_RE:
            node = node.children[0];
            cmpOp = 'sge';
            break;
        case lexer.GREATER_RE:
            node = node.children[0];
            cmpOp = 'sgt';
            break;
        case lexer.EQUAL_RE:
            node = node.children[0];
            cmpOp = 'eq';
            break;
        default:
            unaryFlag = true;
            break;
    }

    var condllvm;
    if(unaryFlag) {
        var v = this.loadVARIABLE(node.children[0].children);
        if(node.children.length == 1) {
            var newllvm = this.newPmap();
            this.body.push(newllvm + ' = ' + 'load ' + v.type + v.llvmname);
            v.llvmname = newllvm;
        }
        condllvm = this.newPmap();
        this.body.push(condllvm + ' = ' + 'icmp ne ' + v.type + ' '+ v.llvmname + ', 0');
    } else {
        var eleset = [[], []];
        var v1, v2;
        var cmpCode = '';
        v1 = this.handleSHIFT_EXPR(node.children[0]);
        v2 = this.handleSHIFT_EXPR(node.children[1]);
        condllvm = this.newPmap();
        cmpCode += (condllvm + ' = ' + 'icmp '+ cmpOp + ' ');
        if(v1.type != 'i32')
            cmpCode += v1.type + ' '+ v1.llvmname + ', ';
        else
            cmpCode += v1.llvmname + ', ';
        if(v2.type != 'i32')
            cmpCode += v2.type + ' '+ v2.llvmname;
        else
            cmpCode += v2.llvmname;
        this.body.push(cmpCode);
    }
    return condllvm;
};

LLVMGenerator.prototype.handleIFSTAT = function(node) {
    //if.then; if.else; if.end
    this.labelcount.iflabel++;
    var labelnum = this.labelcount.iflabel;
    var condllvm = this.handleCONDITION(node.children[0].children[0]);
    var brCode = 'br i1 %' + condllvm + ', label %if' + labelnum + '.then, ';
    var hasElse = false;
    if(node.children[1] != undefined && node.children[1].token.type == lexer.ELSE_BRANCH) {
        hasElse = true;
    }
    if(hasElse)
        brCode += 'label %if' + labelnum + '.else';
    else
        brCode += 'label %if' + labelnum + '.end';
    this.body.push(brCode);
    this.body.push('if' + labelnum + '.then:');
    this.handleBLOCK(node.children[0].children[1]);
    this.body.push('br label %if' + labelnum + '.end');
    if(hasElse) {
        this.body.push('if' + labelnum + '.else:');
        this.handleBLOCK(node.children[1].children[0]);
        this.body.push('br label %if' + labelnum + '.end');
    }
    this.body.push('if' + labelnum + '.end:');
};

LLVMGenerator.prototype.handleFORSTAT = function(node) {
    this.labelcount.forlabel++;
    var labelnum = this.labelcount.forlabel;
    this.handleASSIGN(node.children[0]);
    this.body.push('br label %for' + labelnum + '.cond');
    this.body.push('for' + labelnum + '.cond:');
    var condv = this.handleCONDITION(node.children[1]);
    this.body.push('br i1 %' + condv + ', label %for' + labelnum + '.body, label %for' + labelnum + '.end');
    this.body.push('for' + labelnum + '.body:');
    this.handleBLOCK(node.children[3]);
    this.body.push('br label %for' + labelnum + '.inc');
    this.body.push('for' + labelnum + '.inc:');
    this.handleASSIGN(node.children[2]);
    this.body.push('br label %for' + labelnum + '.cond');
    this.body.push('for' + labelnum + '.end:');
};

LLVMGenerator.prototype.handleWHILESTAT = function(node) {
    this.labelcount.whilelabel++;
    var labelnum = this.labelcount.whilelabel;
    this.body.push('br label %while' + labelnum + '.cond');
    this.body.push('while' + labelnum + '.cond: ');
    var condv = this.handleCONDITION(node.children[0]);
    this.body.push('br i1 %' + condv.llvmname + ', label %while' + labelnum + '.body, label %while' + labelnum + '.end');
    this.body.push('while' + labelnum + '.body: ');
    this.handleBLOCK(node.children[1]);
    this.body.push('br label %while' + labelnum + '.cond');
    this.body.push('while' + labelnum + '.end: ');
};

LLVMGenerator.prototype.generate = function () {
    var result = '';
    result += this.generateTARGET();
    result += '\n';
    result += this.generateSTRUCT();
    result += '\n';
    result += this.generateCSTR();
    result += '\n';
    result += this.body.join('\n');
    return result;

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

LLVMGenerator.prototype.generateTARGET = function() {
    var rtn = '';
    for (var i = 0, len = this.data.target.length; i < len; ++i) {
        rtn += ('target ' + this.data.target[i].name + ' = "' + this.data.target[i].value + '"\n');
    }
    return rtn;
};

LLVMGenerator.prototype.generateSTRUCT = function() {
    var rtn = '';
    for (var struct in this.data.struct) {
        rtn += this.generateSingleStruct(struct, this.data.struct[struct]);
        rtn += '\n';
    }
    return rtn;
};

LLVMGenerator.prototype.generateSingleStruct = function(sname, smember) {
    var rtn = '';
    var sobj = [];
    for (var mb in smember) {
        sobj[smember[mb].memberIndex] = smember[mb];
    }
    rtn = '%struct.' + sname + ' = type {';
    for (var i = 0, len = sobj.length; i < len; ++i) {
        if (i > 0) {
            rtn += ',';
        }
        rtn += (' ' + this.get_full_type_id(sobj[i]));
    }
    rtn += ' }\n';
    return rtn;
};

LLVMGenerator.prototype.generateCSTR = function() {
    var rtn = '';
    for (var i = 0, len = this.data.cstr.length; i < len; ++i) {
        rtn += ('@.str' + i + ' = private unnamed_addr constant [' + (this.data.cstr[i].length + 1) + ' x i8] c"'
            + (this.data.cstr[i].replace(/\n/g, '\\0A'))
            + '\\00"\n'
            );
    }
    return rtn;
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