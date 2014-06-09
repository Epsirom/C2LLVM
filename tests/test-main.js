/**
 * Created by Epsirom on 14-5-30.
 */

console.log("配置成功了耶~");

var C2LLVM  = require('../index');

var compiler = new C2LLVM('SimpleCv4');
var result = compiler.compile("tests/data/arraylist.c");

var fs = require('fs');

fs.writeFileSync('tests/data/result.ll', result);