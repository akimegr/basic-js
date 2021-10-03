import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
    var all = [];
    var res = [];


    for (var i = 0; i < str.length; i++) {
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