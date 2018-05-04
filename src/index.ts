export function split(
	value: string,
	separators: string[],
	options: {
		last?: boolean;
	} = {},
) {
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

	if (options.last || current !== '') {
		array.push(current.trim());
	}
	return array;
}

export function splitBySpaces(value: string) {
	const spaces = [' ', '\n', '\t'];
	return split(value, spaces);
}

export function splitByCommas(value: string) {
	const comma = ',';
	return split(value, [comma], { last: true });
}
