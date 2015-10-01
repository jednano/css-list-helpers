# css-list-helpers

[![NPM version](http://img.shields.io/npm/v/css-list-helpers.svg?style=flat)](https://www.npmjs.org/package/css-list-helpers)
[![npm license](http://img.shields.io/npm/l/css-list-helpers.svg?style=flat-square)](https://www.npmjs.org/package/css-list-helpers)
[![Travis Build Status](https://img.shields.io/travis/jedmao/css-list-helpers.svg?label=unix)](https://travis-ci.org/jedmao/css-list-helpers)

[![npm](https://nodei.co/npm/css-list-helpers.svg?downloads=true)](https://nodei.co/npm/css-list-helpers/)

Helper methods for splitting CSS lists (i.e., by spaces or commas).

## Introduction

TODO

## Installation

```
$ npm install css-list-helpers [--save[-dev]]
```

## Usage

```js
var listHelpers = require('css-list-helpers');
listHelpers.splitBySpaces(' 0 a(b / c) "d e" ');   // ['0', 'a(b / c)', '"d e"']
listHelpers.splitByCommas(' 0, a(b / c), "d e" '); // ['0', 'a(b / c)', '"d e"']
listHelpers
	.splitByCommas(' a b, c d ')
	.map(listHelpers.splitBySpaces); // [['a', 'b'], ['c', 'd']]
```

## Testing

```
$ npm test
```

This will run tests and generate a code coverage report. Anything less than 100% coverage will throw an error.
