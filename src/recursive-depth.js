import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let n = 1;
export default class DepthCalculator {
    calculateDepth(arr) {

        for (let i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) == "object") {
                n++;
                this.calculateDepth(arr[i])
            }
        }
        return n;
    }
}