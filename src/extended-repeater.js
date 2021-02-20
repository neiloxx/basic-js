const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let repetition = options.hasOwnProperty('repeatTimes') && Number.isInteger(options.repeatTimes) ? options.repeatTimes : 0;
    let separator = options.hasOwnProperty('separator') ? options.separator : '+';
    let addition = options.hasOwnProperty('addition') ? options.addition : '';
    let additionRep = options.hasOwnProperty('additionRepeatTimes') && Number.isInteger(options.repeatTimes) ? options.additionRepeatTimes : 0;
    let additionSep = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';

    let strAddition = addition;

    for (let i = 1; i < additionRep; i++) {
        strAddition += additionSep + addition;
    }

    str += strAddition;

    let result = str;
    for (let i = 1; i < repetition; i++) {
        result += separator + str;
    }

    return result;
};
  