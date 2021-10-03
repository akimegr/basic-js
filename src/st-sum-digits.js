import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
    if (n >= 0 && n <= 9) return n;

    var s = 0;
    var N = String(n);
    for (var i = 0; i < N.length; i++) s += Number(N[i]);
    return getSumOfDigits(s);
}