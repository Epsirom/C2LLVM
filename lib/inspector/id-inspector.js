/**
 * Created by Epsirom on 14-6-7.
 * 标识符检查器。
 * analyze：预处理
 * inspect：进行检查，同时进行变量、函数、类型等的名称和作用域检查。
 */

module.exports = IDInspector;

function IDInspector(ast) {
    if(!(this instanceof IDInspector)){
        return new IDInspector(ast);
    }else{
        this.tree = ast;
    }
}

IDInspector.prototype.analyze = function() {

};

IDInspector.prototype.inspect = function() {

};
