/**
 * Splits a CSS declaration value (shorthand) using provided separators
 * as the delimiters.
 */
export function split(
	/**
	 * A CSS declaration value (shorthand).
	 */
	value: string,
	/**
	 * Any number of separator characters used for splitting.
	 */
	separators: string[],
	{
		last = false,
	} = {},
) {
	if (typeof value !== 'string') {
		throw new TypeError('expected a string');
	}
	if (!Array.isArray(separators)) {
		throw new TypeError('expected a string array of separators');
	}
	if (typeof last !== 'boolean') {
		throw new TypeError('expected a Boolean value for options.last');
	}
	const array = [];
	let current = '';
	let splitMe = false;

	let func = 0;
	let quote: '"' | '\'' | false = false;
	let escape  = false;

	for (const char of value) {

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
				splitMe = true;
			}
		}

		if (splitMe) {
			if (current !== '') {
				array.push(current.trim());
			}
			current = '';
			splitMe = false;
		} else {
			current += char;
		}
	}

	if (last || current !== '') {
		array.push(current.trim());
	}
	return array;
}

/**
 * Splits a CSS declaration value (shorthand) using whitespace characters
 * as the delimiters.
 */
export function splitBySpaces(
	/**
	 * A CSS declaration value (shorthand).
	 */
	value: string,
) {
	const spaces = [' ', '\n', '\t'];
	return split(value, spaces);
}

/**
 * Splits a CSS declaration value (shorthand) using commas as the delimiters.
 */
export function splitByCommas(
	/**
	 * A CSS declaration value (shorthand).
	 */
	value: string,
) {
	const comma = ',';
	return split(value, [comma], { last: true });
}
