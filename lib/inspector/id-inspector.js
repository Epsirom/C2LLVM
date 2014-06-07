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

IDInspector.prototype.inspect = function() {
    em.reset();

    return em.errors;
};

function walk_tree(tree, doit) {
    if (tree) {
        if (tree.children) {
            for (var i = 0, len = tree.children.length; i < len; ++i) {
                walk_tree(tree.children[i], doit);
            }
        }
        doit(tree);
    }
}