import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
    let s = 0;
    let position = [];
    for (let n of matrix) {
        for (let i = 0; i < n.length; i++) {
            if (n[i] === 0) {
                position.push(i);
            }
            if (!position.includes(i)) {
                s += n[i];
            }
        }
    }
    return s;
}