import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    var add = "";
    var For = "";
    var res = "";
    var sep = "+";
    var addition;
    var strN;

    if (options.repeatTimes == 0) return res;

    if (options.addition !== undefined && options.additionRepeatTimes != 0) {
        if (options.addition === null) addition = "null";
        else addition = options.addition;
        if (
            options.additionRepeatTimes === undefined ||
            options.additionRepeatTimes == 1
        )
            add = addition;
        else {
            var additionSep = "|";
            var arr = [];
            if (options.additionSep != undefined)
                additionSep = options.additionSep;
            for (var i = 0; i < options.additionRepeatTimes; i++) arr.push(addition);
            add = arr.join(additionSep;
            }
        }

        if (options.sep !== undefined) sep = options.sep;
        For = add + sep;

        var resArr = [];
        if (str === null) strN = "null";
        else strN = str;
        if (options.repeatTimes === undefined) resArr.push(strN);
        else {
            for (var i = 0; i < options.repeatTimes; i++) resArr.push(strN);
        }
        return resArr.join(For) + add;
    }