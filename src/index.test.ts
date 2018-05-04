import test from 'ava';
import * as listHelpers from '.';

// type T = TestContext & Context<any>;

// test('css-list-helpers', (t) => {
// 	testSpace(t);
// 	testComma(t);
// 	testSplit(t);
// });
// t.test('splitBySpaces()', testSpace);
// t.test('splitByCommas()', testComma);
// t.test('split()', testSplit);

test.beforeEach('splitBySpaces()', (t) => {
	t.context.data = 'splitBySpaces()';
});

test('splits a list by spaces', (t) => {
	t.deepEqual(
		listHelpers.splitBySpaces('a b'),
		['a', 'b'],
	);
});

// 	t.deepEqual(
// 		listHelpers.splitBySpaces(' a b '),
// 		['a', 'b'],
// 		'trims values',
// 	);

// 	t.deepEqual(
// 		listHelpers.splitBySpaces('"a b\\"" \'\''),
// 		['"a b\\""', '\'\''],
// 		'does not split by spaces within quotes',
// 	);

// 	t.deepEqual(
// 		listHelpers.splitBySpaces('f( )) a( () )'),
// 		['f( ))', 'a( () )'],
// 		'does not split by spaces within functions',
// 	);

// 	const splitBySpaces = listHelpers.splitBySpaces;
// 	t.deepEqual(
// 		splitBySpaces('a b'),
// 		['a', 'b'],
// 		'works from a variable',
// 	);
// }

// function testComma(t: T) {

// 	t.deepEqual(
// 		listHelpers.splitByCommas('a, b'),
// 		['a', 'b'],
// 		'splits a list by commas',
// 	);

// 	t.deepEqual(
// 		listHelpers.splitByCommas('a, b,'),
// 		['a', 'b', ''],
// 		'ends with an empty string if input has a trailing comma',
// 	);

// 	t.deepEqual(
// 		listHelpers.splitByCommas('"a,b\\"", \'\''),
// 		['"a,b\\""', '\'\''],
// 		'does not split by commas within quotes',
// 	);

// 	t.deepEqual(
// 		listHelpers.splitByCommas('f(,)), a(,(),)'),
// 		['f(,))', 'a(,(),)'],
// 		'does not split by commas within functions',
// 	);

// 	const splitByCommas = listHelpers.splitByCommas;
// 	t.deepEqual(
// 		splitByCommas('a, b'),
// 		['a', 'b'],
// 		'works from a variable',
// 	);
// }

// function testSplit(t: T) {

// 	t.deepEqual(
// 		listHelpers.split('a/fn(b / c)', ['/']),
// 		['a', 'fn(b / c)'],
// 		'splits a list by a custom character (e.g., forward slash)',
// 	);
// }
