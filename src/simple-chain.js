const CustomError = require("../extensions/custom-error");

const chainMaker = {
    result: [],
    getLength() {
        return this.result.length;
    },
    addLink(value) {
        this.result.push(`( ${value} )`)
        return this;
    },
    removeLink(position) {
        if (typeof position === 'number' && position >= 0 && position < this.result.length) {
            this.result.splice(position - 1, 1);
        } else {
            this.result = [];
            throw new Error();
        }
        return this;
    },
    reverseChain() {
        this.result.reverse();
        return this;
    },
    finishChain() {
        let tempRes = this.result.join('~~');
        this.result = [];
        return tempRes;
    },
};

module.exports = chainMaker;
