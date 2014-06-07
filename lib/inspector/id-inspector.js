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
            case lexer.FUNC_DEF:
            case lexer.BLOCK:
                ++lv;
                break;

            case lexer.VAR_NAME:
                paramTable[node.children[0].text] = lv;
                return false;

            case lexer.DECLARATOR:
                if (!paramTable[node.children[0].text]) {
                    em.append(node.children[0].text + ' no found.');
                }
                return false;

            default :
                return false;
        }
        return true;
    }, function(node) {
        switch (node.token.type) {
            case lexer.FUNC_DEF:
            case lexer.BLOCK:
                for (var param in paramTable) {
                    if (paramTable[param] >= lv) {
                        delete paramTable[param];
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
