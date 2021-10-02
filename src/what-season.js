import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {

    if (date == undefined) return "Unable to determine the time of year!";
    let month = date.getMonth();
    try {
        if (!date ||
            !(Object.prototype.toString.call(date) === "[object Date]") ||
            isNaN(date)
        )
            throw new Error("Invalid date!");
    } catch {
        throw new Error("Invalid date!");
    }

    if (month == 1 - 1 || month == 2 - 1 || month == 12 - 1)
        return "winter";
    else if (month == 3 - 1 || month == 4 - 1 || month == 5 - 1)
        return "spring";
    else if (month == 9 - 1 || month == 10 - 1 || month == 11 - 1)
        return "summer";
    else
        return "autumn"

}