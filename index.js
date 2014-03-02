var verify = require('check-types').verify;
var inputFilename = process.argv[2];
verify.unemptyString(inputFilename, 'missing input filename');
var filterString = process.argv[3];
verify.unemptyString(filterString, 'missing filter string');
var filterRegExp = new RegExp(filterString, 'gi');

var read = require('fs').readFileSync;
var input = read(inputFilename, 'utf-8');
verify.unemptyString(input, 'missing input from file ' + inputFilename);

var FILE_RECORD = 'TN:';

var records = input.split(FILE_RECORD).filter(function (text) {
  return text;
}).map(function (text) {
  return FILE_RECORD + '\n' + text.trim();
});
//console.log('found', records.length, 'in', inputFilename);

var remaining = records.filter(function (text) {
  return !filterRegExp.test(text);
});
// console.log('remaining', remaining.length, 'records');
// console.log(remaining);
console.log(remaining.join(''));

