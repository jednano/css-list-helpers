'use strict'

var helpers = {
	split: function(value, separators, options) {
		return split(value, separators, options);
	},

	splitBySpaces: function(value) {
		var spaces = [' ', '\n', '\t'];
		return helpers.split(value, spaces);
	},

	splitByCommas: function(value) {
		var comma = ',';
		return helpers.split(value, [comma], { last: true });
	}
};


var split = function split (value, separators, options) {
	if (typeof value !== 'string') throw Error('First argument must be a string')

	if (typeof separators === 'string') separators = [separators];
	else if (!Array.isArray(separators)) throw Error('Separators must be a string or a list')

	if (!options) options = {}

	var array   = [];
	var current = '';
	var split   = false;

	var func    = 0;
	var quote   = false;
	var escape  = false;

	for (var i = 0; i < value.length; i++) {
		var char = value[i];

		if (quote) {
			if (escape) {
				escape = false;
			} else if (char === '\\') {
				escape = true;
			} else if (char === quote) {
				quote = false;
			}
		} else if (char === '"' || char === '\'') {
			quote = char;
		} else if (char === '(') {
			func += 1;
		} else if (char === ')') {
			if (func > 0) {
				func -= 1;
			}
		} else if (func === 0) {
			if (separators.indexOf(char) !== -1) {
				split = true;
			}
		}

		if (split) {
			if (current !== '') {
				array.push(current.trim());
			}
			current = '';
			split = false;
		} else {
			current += char;
		}
	}

	if (options.last || current !== '') {
		array.push(current.trim());
	}
	return array;
}

module.exports = helpers;
