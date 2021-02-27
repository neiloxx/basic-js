const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    type = true
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    constructor(type) {
        this.type = undefined === type ? true : type;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) throw Error;
        let result = message.toUpperCase();
        let counter = -1;

        key = key.toUpperCase();

        result = result.split('').map(el => {
            if (this.alphabet.includes(el)) {
                counter++;
                return this.alphabet[(this.alphabet.indexOf(el) + this.alphabet.indexOf(key[counter % key.length]))
                % this.alphabet.length];
            } else {
                return el;
            }
        }).join('')

        return !this.type ? result.split('').reverse().join('') : result;
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) throw Error;

        let result = encryptedMessage;
        let counter = -1;

        key = key.toUpperCase();

        result = result.split('').map(el => {
            if (this.alphabet.includes(el)) {
                counter++;
                return this.alphabet[(this.alphabet.indexOf(el) - this.alphabet.indexOf(key[counter % key.length]) + this.alphabet.length) % this.alphabet.length];
            } else {
                return el;
            }
        }).join('');
        return !this.type ? result.split('').reverse().join('') : result;
    }
}

module.exports = VigenereCipheringMachine;
