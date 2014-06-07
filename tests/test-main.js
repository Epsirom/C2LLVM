/**
 * Created by Epsirom on 14-5-30.
 */

console.log("配置成功了耶~");

var C2LLVM  = require('../index');

var compiler = new C2LLVM('SimpleCv3');
console.log(compiler.compile("tests/data/inputC1"));