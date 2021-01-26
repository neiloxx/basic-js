const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach(function (el) {
    counter += el.filter(el => el === '^^').length;
  })
  return counter;
};
