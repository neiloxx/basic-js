const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let approximation = 0.693;
  let result;


  if (sampleActivity !== String || sampleActivity.length === 0) {
    return false;
  }
  const sampleActivityNum = parseFloat(sampleActivity);
  if (isNaN(sampleActivityNum) ||
      sampleActivity < 1 ||
      sampleActivity === 0 ||
      sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) / (approximation / HALF_LIFE_PERIOD));
  return result;
};
