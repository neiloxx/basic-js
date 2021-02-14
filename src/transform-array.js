const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error;
    let result = [];
    let length = arr.length;
    let copyArr = [...arr];

    for (let i = 0; i < length; i++) {
        if (copyArr[i] !== undefined
            && copyArr[i] !== '--discard-prev'
            && copyArr[i] !== '--double-next'
            && copyArr[i] !== '--double-prev'
            && copyArr[i] !== '--discard-next') {
            result.push(copyArr[i]);
        } else if (copyArr[i] === '--discard-next' && copyArr[i + 1] !== undefined) {
            copyArr[i + 1] = undefined;
            i++;
        } else if (copyArr[i] === '--discard-prev' && copyArr[i - 1] !== undefined) {
            result.pop();
        } else if (copyArr[i] === '--double-next' && copyArr[i + 1] !== undefined) {
            result.push(copyArr[i + 1]);
        } else if (copyArr[i] === '--double-prev' && copyArr[i - 1] !== undefined) {
            result.push(copyArr[i - 1]);
        }
    }
    return result;
}

