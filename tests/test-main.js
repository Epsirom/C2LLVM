/**
 * Created by Epsirom on 14-5-30.
 */

var t, ts;

ts = new Date().getTime();
console.log('开始载入C2LLVM包。');
t = new Date().getTime();
var C2LLVM  = require('../index');
console.log('已载入C2LLVM包。用时：' + (new Date().getTime() - t) + 'ms');

console.log('----------------------');

console.log('开始载入SimpleCv4。');
t = new Date().getTime();
var compiler = new C2LLVM('SimpleCv4');
console.log('已载入SimpleCv4。用时：' + (new Date().getTime() - t) + 'ms');

console.log('----------------------');

console.log('开始编译tests/data/arraylist.c。');
t = new Date().getTime();
var result = compiler.compile("tests/data/arraylist.c");
console.log('编译完成。用时：' + (new Date().getTime() - t) + 'ms');

console.log('----------------------');

console.log('开始将结果写入tests/data/result.ll');
t = new Date().getTime();
var fs = require('fs');
fs.writeFileSync('tests/data/result.ll', result);
console.log('已将结果写入tests/data/result.ll。用时：' + (new Date().getTime() - t) + 'ms');

console.log('----------------------');

console.log('结束。合计用时：' + (new Date().getTime() - ts) + 'ms');