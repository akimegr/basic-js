import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    var arr = [];
    var darr = [];
    var res = {};

    for (var i = 0; i < domains.length; i++)
        arr.push(domains[i].split(".").reverse());

    for (var i = 0; i < arr.length; i++) {
        var str = "";
        for (var j = 0; j < arr[i].length; j++) {
            str += "." + arr[i][j];
            darr.push(str);
        }
    }

    darr.forEach((item) => {
        res[item] = (res[item] || 0) + 1;
    });

    return res;
}