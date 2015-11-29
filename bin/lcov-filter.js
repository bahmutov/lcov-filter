#!/usr/bin/env node

// TODO use simple-bin-help

var inputFilename = process.argv[2];
console.assert(inputFilename, 'missing input filename');
var filterString = process.argv[3];
console.assert(filterString, 'missing filter string');

var lcovFilter = require('..');
lcovFilter(inputFilename, filterString);
