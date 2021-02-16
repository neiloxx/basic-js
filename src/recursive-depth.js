const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            return arr.some(el => Array.isArray(el)) ?
                1 + this.calculateDepth(arr.flat()) : 1;
        }
        return 0;
    }
}
