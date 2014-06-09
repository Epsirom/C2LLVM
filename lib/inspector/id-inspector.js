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
        if (!token) {
            console.log(node);
        }
        if (token.text == null) {
            token.text = token.input.substring(token.start, token.stop);
            delete token.start;
            delete token.stop;
        }
        return true;
    });
};

function getNodeChildByToken(node, tk) {
    for (var i = 0, len = node.children.length; i < len; ++i) {
        if (node.children[i].token.type == tk) {
            return node.children[i];
        }
    }
    return null;
}

IDInspector.prototype.inspect = function() {
    em.reset();
    var paramTable = {};
    var lv = 0;
    walk_tree(this.tree, function(node) {
        switch (node.token.type) {
            case lexer.PROG:
            case lexer.FUNC_DEF:
            case lexer.BLOCK:
                ++lv;
                break;

            case lexer.VAR_NAME:
                if (paramTable[node.children[0].token.text] && paramTable[node.children[0].token.text][lv]) {
                    em.append('existed: ' + node.children[0].token.text);
                } else {
                    if (!paramTable[node.children[0].token.text]) {
                        paramTable[node.children[0].token.text] = [];
                    }
                    paramTable[node.children[0].token.text][lv] = true;
                }
                return false;

            case lexer.DECLARATOR:
                if (!paramTable[node.children[0].token.text]) {
                    em.append(node.children[0].token.text + ' not found.');
                }
                return false;

            case lexer.FUNC_PARAM:
                for (var i = 0, len = node.children.length; i < len; ++i) {
                    if (node.children[i].token.type == lexer.ID) {
                        var pa = node.children[i].token.text;
                        if (paramTable[pa] && paramTable[pa][lv]) {
                            em.append('existed: ' + pa);
                        } else {
                            if (!paramTable[pa]) {
                                paramTable[pa] = [];
                            }
                            paramTable[pa][lv] = true;
                        }
                    }
                }
                return false;
        }
        return true;
    }, function(node) {
        switch (node.token.type) {
            case lexer.PROG:
            case lexer.FUNC_DEF:
            case lexer.BLOCK:
                for (var param in paramTable) {
                    if (paramTable[param][lv]) {
                        delete paramTable[param][lv];
                        if (paramTable[param].length == 0) {
                            delete paramTable[param];
                        }
                    }
                }
                --lv;
                break;

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
                        walk_tree(tree.children[i], predo, doit);
                    }
                }
            }
        } else if (tree.children) {
            for (var i = 0, len = tree.children.length; i < len; ++i) {
                walk_tree(tree.children[i], predo, doit);
            }
        }
        if (typeof doit == 'function') {
            doit(tree);
        }
    }
}
