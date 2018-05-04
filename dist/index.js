"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function split(value, separators, options) {
    if (options === void 0) { options = {}; }
    var array = [];
    var current = '';
    var splitMe = false;
    var func = 0;
    var quote = false;
    var escape = false;
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var char = value_1[_i];
        if (quote) {
            if (escape) {
                escape = false;
            }
            else if (char === '\\') {
                escape = true;
            }
            else if (char === quote) {
                quote = false;
            }
        }
        else if (char === '"' || char === '\'') {
            quote = char;
        }
        else if (char === '(') {
            func += 1;
        }
        else if (char === ')') {
            if (func > 0) {
                func -= 1;
            }
        }
        else if (func === 0) {
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
        }
        else {
            current += char;
        }
    }
    if (options.last || current !== '') {
        array.push(current.trim());
    }
    return array;
}
exports.split = split;
function splitBySpaces(value) {
    var spaces = [' ', '\n', '\t'];
    return split(value, spaces);
}
exports.splitBySpaces = splitBySpaces;
function splitByCommas(value) {
    var comma = ',';
    return split(value, [comma], { last: true });
}
exports.splitByCommas = splitByCommas;
//# sourceMappingURL=index.js.map