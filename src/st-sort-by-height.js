import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
    var as = arr.slice().sort((a, b) => {
        return a - b;
    });
    var last = as.lastIndexOf(-1);
    if (last == -1) return as;

    var ans = [];

    as.splice(0, last + 1);
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == -1) ans.push(arr[i]);
        else {
            ans.push(as.shift());
        }

    return ans;
}