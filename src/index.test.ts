import test from 'ava';
import * as listHelpers from '.';

test('`splitBySpaces` splits a list by spaces', (t) => {
	t.deepEqual(
		listHelpers.splitBySpaces('a b'),
		['a', 'b'],
	);
});

test('`splitBySpaces` trims values', (t) => {
	t.deepEqual(
		listHelpers.splitBySpaces(' a b '),
		['a', 'b'],
	);
});

test('`splitBySpaces` does not split by spaces within quotes', (t) => {
	t.deepEqual(
		listHelpers.splitBySpaces('"a b\\"" \'\''),
		['"a b\\""', '\'\''],
	);
});

test('`splitBySpaces` does not split by spaces within functions', (t) => {
	t.deepEqual(
		listHelpers.splitBySpaces('f( )) a( () )'),
		['f( ))', 'a( () )'],
	);
});

test('`splitBySpaces` works from a variable', (t) => {
	const splitBySpaces = listHelpers.splitBySpaces;
	t.deepEqual(
		splitBySpaces('a b'),
		['a', 'b'],
	);
});

test('`splitByCommas` splits a list by commas', (t) => {
	t.deepEqual(
		listHelpers.splitByCommas('a, b'),
		['a', 'b'],
	);
});

test('`splitByCommas` ends with an empty string if input has a trailing comma', (t) => {
	t.deepEqual(
		listHelpers.splitByCommas('a, b,'),
		['a', 'b', ''],
	);
});

test('`splitByCommas` does not split by commas within quotes', (t) => {
	t.deepEqual(
		listHelpers.splitByCommas('"a,b\\"", \'\''),
		['"a,b\\""', '\'\''],
	);
});

test('`splitByCommas` does not split by commas within functions', (t) => {
	t.deepEqual(
		listHelpers.splitByCommas('f(,)), a(,(),)'),
		['f(,))', 'a(,(),)'],
	);
});

test('`splitByCommas` works from a variable', (t) => {
	const splitByCommas = listHelpers.splitByCommas;
	t.deepEqual(
		splitByCommas('a, b'),
		['a', 'b'],
	);
});

test('`split` throws if arg1 is a number', (t) => {
	const error = t.throws(() => {
		listHelpers.split(42 as any as string, []);
	}, TypeError);

	t.is(error.message, 'expected a string');
});

test('`split` throws if arg2 is a string', (t) => {
	const error = t.throws(() => {
		listHelpers.split('foo', 'bar' as any as string[]);
	}, TypeError);

	t.is(error.message, 'expected a string array of separators');
});

test('`split` throws if arg3.last is a number', (t) => {
	const error = t.throws(() => {
		listHelpers.split('foo', [], { last: 42 as any as boolean });
	}, TypeError);

	t.is(error.message, 'expected a Boolean value for options.last');
});

test('`split` splits a list by a custom character (e.g., forward slash)', (t) => {
	t.deepEqual(
		listHelpers.split('a/fn(b / c)', ['/']),
		['a', 'fn(b / c)'],
	);
});
