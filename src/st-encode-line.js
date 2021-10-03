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
    var ans = "";
    var on = "";
    var onCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (on == str[i]) onCount++;
        else if (on == "") {
            on = str[i];
            onCount++;
        } else {
            if (onCount > 1) ans += onCount + on;
            else ans += on;
            on = str[i];
            onCount = 1;
        }
    }
    if (onCount > 1) ans += onCount + on;
    else ans += on;

    return ans;
}