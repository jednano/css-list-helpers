var tape = require('tape');

var listHelpers = require('..');

tape('main cases', function(t) {
	t.test('splitBySpaces()', testSpace);
	t.test('splitByCommas()', testComma);
	t.test('split()', testSplit);
	t.end();
});

tape('bad arguments', function(t) {
	t.throws(function() {listHelpers.split(123)},
		/First argument must be a string/,
		'throws when attempting to parse non-string'
	);
	t.throws(function() {listHelpers.split('xxx', 123)},
		/Separators must be a string or a list/,
		'throws when attempting to parse bad separators'
	);

	t.end()
})

function testSpace(t) {
	t.deepEqual(
		listHelpers.splitBySpaces('a b'),
		['a', 'b'],
		'splits a list by spaces'
	);

	t.deepEqual(
		listHelpers.splitBySpaces(' a b '),
		['a', 'b'],
		'trims values'
	);

	t.deepEqual(
		listHelpers.splitBySpaces('"a b\\"" \'\''),
		['"a b\\""', '\'\''],
		'does not split by spaces within quotes'
	);

	t.deepEqual(
		listHelpers.splitBySpaces('f( )) a( () )'),
		['f( ))', 'a( () )'],
		'does not split by spaces within functions'
	);

	var splitBySpaces = listHelpers.splitBySpaces;
	t.deepEqual(
		splitBySpaces('a b'),
		['a', 'b'],
		'works from a variable'
	);

	t.end();
}

function testComma(t) {

	t.deepEqual(
		listHelpers.splitByCommas('a, b'),
		['a', 'b'],
		'splits a list by commas'
	);

	t.deepEqual(
		listHelpers.splitByCommas('a, b,'),
		['a', 'b', ''],
		'ends with an empty string if input has a trailing comma'
	);

	t.deepEqual(
		listHelpers.splitByCommas('"a,b\\"", \'\''),
		['"a,b\\""', '\'\''],
		'does not split by commas within quotes'
	);

	t.deepEqual(
		listHelpers.splitByCommas('f(,)), a(,(),)'),
		['f(,))', 'a(,(),)'],
		'does not split by commas within functions'
	);

	var splitByCommas = listHelpers.splitByCommas;
	t.deepEqual(
		splitByCommas('a, b'),
		['a', 'b'],
		'works from a variable'
	);

	t.end();
}

function testSplit(t) {

	t.deepEqual(
		listHelpers.split('a/fn(b / c)', ['/']),
		['a', 'fn(b / c)'],
		'splits a list by a custom character (e.g., forward slash)'
	);

	t.deepEqual(
		listHelpers.split('a/fn(b / c)', '/'),
		['a', 'fn(b / c)'],
		'splits a list by a custom character (e.g., forward slash) - direct string'
	);

	t.end();
}
