# lcov-filter

Removing records for some files from lcov file

[![NPM][lcov-filter-icon]][lcov-filter-url]

[![Build status][lcov-filter-ci-image]][lcov-filter-ci-url]
[![dependencies][lcov-filter-dependencies-image]][lcov-filter-dependencies-url]
[![devdependencies][lcov-filter-devdependencies-image]][lcov-filter-devdependencies-url]

## Use

    npm install lcov-filter --save-dev
    node node_modules/lcov-filter/index.js <lcov.info> <filenames to exclude>

    -- filename to exclude is used as RegExp

Filtered result is printed to STDOUT and can be piped to other tools, for example
to send to coveralls.io

## Example

Pipe file *cover/lcov.info* and remove info for files that contain word *test* in the path,
the output is then piped through [coveralls](https://github.com/cainus/node-coveralls) module

    node node_modules/lcov-filter/index.js cover/lcov.info test | ./node_modules/coveralls/bin/coveralls.js

It is better to use from a script command inside `package.json`, for example to send filtered data
the the `coveralls.io` service

```json
"scripts": {
  "coveralls": "lcov-filter cover/lcov.info test | ./node_modules/coveralls/bin/coveralls.js",
}
```

## Why?

I love testing and code coverage, and send coverage results
to [coveralls.io](http://glebbahmutov.com/blog/code-coverage-via-gt-and-coveralls/),
which gives me nice badges. The problem is that sending combined code coverage for
the soure code AND unit test code skews the average number upwards:

For example:

* actual code is covered at 80%
* unit test is covered at 100%
* coveralls badge shows respectable, but misleading 90% code coverage

I am using *lcov-filter* to filter out test files from the code coverage
before sending to coveralls.io generating more meaningful numbers.
[qunit-promises](https://github.com/bahmutov/qunit-promises) is one example
that now reports only code coverage without adding tests.

## Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet / open issue on Github

[lcov-filter-icon]: https://nodei.co/npm/lcov-filter.png?downloads=true
[lcov-filter-url]: https://npmjs.org/package/lcov-filter
[lcov-filter-ci-image]: https://travis-ci.org/bahmutov/lcov-filter.png?branch=master
[lcov-filter-ci-url]: https://travis-ci.org/bahmutov/lcov-filter
[lcov-filter-dependencies-image]: https://david-dm.org/bahmutov/lcov-filter.png
[lcov-filter-dependencies-url]: https://david-dm.org/bahmutov/lcov-filter
[lcov-filter-devdependencies-image]: https://david-dm.org/bahmutov/lcov-filter/dev-status.png
[lcov-filter-devdependencies-url]: https://david-dm.org/bahmutov/lcov-filter#info=devDependencies
