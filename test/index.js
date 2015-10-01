var tape = require('tape');

var listHelpers = require('..');

tape('css-list-helpers', function(t) {
	t.test('space()', testspace);
	t.test('comma()', testcomma);
	t.end();
});

function testspace(t) {

	t.deepEqual(
		listHelpers.space('a b'),
		['a', 'b'],
		'splits a list by spaces'
	);

	t.deepEqual(
		listHelpers.space(' a b '),
		['a', 'b'],
		'trims values'
	);

	t.deepEqual(
		listHelpers.space('"a b\\"" \'\''),
		['"a b\\""', '\'\''],
		'does not split by spaces within quotes'
	);

	t.deepEqual(
		listHelpers.space('f( )) a( () )'),
		['f( ))', 'a( () )'],
		'does not split by spaces within functions'
	);

	var space = listHelpers.space;
	t.deepEqual(
		space('a b'),
		['a', 'b'],
		'works from a variable'
	);

	t.end();
}

function testcomma(t) {

	t.deepEqual(
		listHelpers.comma('a, b'),
		['a', 'b'],
		'splits a list by commas'
	);

	t.deepEqual(
		listHelpers.comma('a, b,'),
		['a', 'b', ''],
		'ends with an empty string if input has a trailing comma'
	);

	t.deepEqual(
		listHelpers.comma('"a,b\\"", \'\''),
		['"a,b\\""', '\'\''],
		'does not split by commas within quotes'
	);

	t.deepEqual(
		listHelpers.comma('f(,)), a(,(),)'),
		['f(,))', 'a(,(),)'],
		'does not split by commas within functions'
	);

	var comma = listHelpers.comma;
	t.deepEqual(
		comma('a, b'),
		['a', 'b'],
		'works from a variable'
	);

	t.end();
}
