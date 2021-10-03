import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    let num = [];
    let str = String(n);

    for (let i = 0; i < str.length; i++) {
        let nowS = str.slice(0, i) + str.slice(i + 1);
        num.push(Number(nowS));
    }

    num.sort((a, b) => {
        return b - a;
    });
    return num[0];
}