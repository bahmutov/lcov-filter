#!/usr/bin/env node

require('simple-bin-help')({
  minArguments: 4,
  packagePath: __dirname +' /../package.json',
  help: 'lcov-filter <input filename> <filter string>'
});

var inputFilename = process.argv[2];
console.assert(inputFilename, 'missing input filename');
var filterString = process.argv[3];
console.assert(filterString, 'missing filter string');

var lcovFilter = require('..');
lcovFilter(inputFilename, filterString);
