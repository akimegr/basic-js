import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    var all = [];
    var res = [];
    var len = names.length;

    for (var i = 0; i < len; i++) {
        var now = names.shift();
        if (
            all.indexOf(now) == -1 &&
            res.indexOf(now) == -1
        ) {
            all.push(now);
            res.push(now);
        } else if (all.indexOf(now) != -1) {
            all.push(now);
            var count = 0;
            all.forEach((item) => {
                if (item == now) count++;
            });
            res.push(now + "(" + (count - 1) + ")");
        } else {
            all.push(now);
            res.push(now + "(1)");
        }
    }

    return res;
}