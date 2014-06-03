/**
 * Created by Epsirom on 14-5-30.
 */

console.log("配置成功了耶~");

var C2LLVM  = require('../index');

var ccompiler = new C2LLVM('SimpleC');
ccompiler.convert("tests/data/inputC");