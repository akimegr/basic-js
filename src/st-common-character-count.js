import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
    var un = [];
    var sum = 0;

    for (var i = 0; i < s1.length; i++)
        if (un.indexOf(s1[i]) == -1) un.push(s1[i]);

    for (var j = 0; j < un.length; j++) {
        var r = new RegExp(un[j], "g");
        var ns1 = s1.match(r);
        var ns2 = s2.match(r);

        if (!ns1 || !ns2) continue;
        else {
            ns1 = ns1.length;
            ns2 = ns2.length;
            sum += ns1 >= ns2 ? ns2 : ns1;
        }
    }

    return sum;
}