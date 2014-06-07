/**
 * Created by Epsirom on 14-6-7.
 * 标识符检查器。
 * analyze：预处理
 * inspect：进行检查，同时进行变量、函数、类型等的名称和作用域检查。
 */

module.exports = IDInspector;

var EM = require('../errmgr');
var em = new EM();

var lexer = require('../parser/SimpleCv4Lexer');

function IDInspector(ast) {
    if(!(this instanceof IDInspector)){
        return new IDInspector(ast);
    }else{
        this.tree = ast;
    }
}

IDInspector.prototype.analyze = function() {
    walk_tree(this.tree, function(node) {
        var token = node.token;
        if (token.text == null) {
            token.text = token.input.substring(token.start, token.stop);
            delete token.start;
            delete token.stop;
        }
    });
};

var params = {
    declared: [{}],
    depended: [{}]
};
var funcs = {
    declared: [{}],
    depended: [{}]
};
var types = {
    declared: [{}],
    depended: [{}]
};
function last(arr) {
    return arr[arr.length - 1];
}

IDInspector.prototype.inspect = function() {
    em.reset();
    params = {
        declared: [{}],
        depended: [{}]
    };
    funcs = {
        declared: [{}],
        depended: [{}]
    };
    types = {
        declared: [{}],
        depended: [{}]
    };
    var current;
    var parent_token;

    walk_tree(this.tree, function(node) {
        switch(node.token.type) {
            case lexer.PROG:
                params = {
                    declared: [{}],
                    depended: [{}]
                };
                funcs = {
                    declared: [{}],
                    depended: [{}]
                };
                types = {
                    declared: [{}],
                    depended: [{}]
                };
                return true;
            case lexer.INCLUDE_SYSTEM:
                tokenHandlers[lexer.INCLUDE_SYSTEM](node.children[0].token.text);
                return false;
            case lexer.TYPE_DEF:
                tokenHandlers[lexer.TYPE_DEF](node.children);
                return false;
            case lexer.STRUCT_DEF:
                tokenHandlers[lexer.STRUCT_DEF](node.children[0]);
                return false;
        }
    }, function(node) {
        switch (node.token.type) {

        }
    });
    return em.errors;
};

function walk_tree(tree, predo, doit) {
    if (tree) {
        if (typeof predo == 'function') {
            if (predo(tree)) {
                if (tree.children) {
                    for (var i = 0, len = tree.children.length; i < len; ++i) {
                        walk_tree(tree.children[i], doit, predo);
                    }
                }
            }
        } else if (tree.children) {
            for (var i = 0, len = tree.children.length; i < len; ++i) {
                walk_tree(tree.children[i], doit, predo);
            }
        }
        if (typeof doit == 'function') {
            doit(tree);
        }
    }
}

var tokenHandlers = {};
(function(obj) {
    for (var i = 1, len = arguments.length; i < len; i += 2) {
        obj[arguments[i]] = obj[arguments[i + 1]];
    }
})(tokenHandlers,
    lexer.INCLUDE_SYSTEM, function(libname) {
        switch (libname.toLowerCase()) {
            case 'stdio':
                last(funcs.declared)['printf'] = ['void', 'string', 'more'];
                break;

            case 'stdlib':
                last(funcs.declared)['malloc'] = ['pointer', 'int'];
                last(funcs.declared)['free'] = ['void', 'pointer'];
                last(funcs.declared)['memcpy'] = ['pointer', 'pointer', 'pointer', 'int'];
                break;
        }
    },
    lexer.TYPE_DEF, function(children) {
        var oldType, newType;
        for (var i = 0, len = children.length; i < len; ++i) {
            if (children[i].token.type == lexer.TYPE_OLD) {
                oldType = children[i];
            } else if (children[i].token.type == lexer.TYPE_NEW) {
                newType = children[i];
            }
        }
        last(types.declared)[newType.token.text] = oldType.token.type;
    },
    lexer.STRUCT_DEF, function(struct) {
        var structName = '', vars = {}, cnames = [];
        structName = struct.token.text;
        for (var i = 0, len = struct.children.length; i < len; ++i) {
            if (struct.children[i].token.type == lexer.STRUCT_CNAME) {
                cnames.push(struct.children[i].children[0].token.text);
            } else if (struct.children[i].token.type == lexer.VAR_DEF) {
                var vdef = var_def_seg(struct.children[i].children);
                if (vars[vdef.var_name]) {
                    em.append('existed var ' + vdef.var_name + ' in struct ' + structName);
                } else {
                    vars[vdef.var_name] = tokenHandlers[lexer.C_TYPE];
                }
            }
        }
        var cur = last(types.declared);
        for (var i = 0, len = cnames.length; i < len; ++i) {
            if (cur[cnames[i]]) {
                em.append('existed type ' + cnames[i]);
            } else {
                cur[cnames[i]] = {
                    struct: structName,
                    vars: vars
                }
            }
        }
    },
    lexer.C_TYPE, function(children) {
        var isPointer = (children.length > 1);
        if (children[0].token.type == lexer.TYPE_CUSTOM) {
            return {
                type: children[0].children[0].token.text,
                pointer: isPointer
            }
        } else {
            return {
                type: children[0].token.type,
                pointer: isPointer
            }
        }
    },
    lexer.VAR_DEF, function(children) {

    }
);

function var_def_seg(children) {
    var c_type, var_name, default_value;
    for (var i = 0, len = children.length; i < len; ++i) {
        if (children[i].token.type == lexer.C_TYPE) {
            c_type = children[i];
        } else if (children[i].token.type == lexer.VAR_NAME) {
            var_name = children[i];
        } else if (children[i].token.type == lexer.DEFAULT_VALUE) {
            default_value = children[i];
        }
    }
    return {
        c_type: c_type,
        var_name: var_name,
        default_value: default_value
    }
}