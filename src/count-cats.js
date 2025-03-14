import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {

    let number = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let z = 0; z < matrix[i].length; z++) {
            if (matrix[i][z] === "^^") {
                number++;
            }
        }
    }

    return number;

}