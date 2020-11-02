const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(finalActivity) {
  let res = 0;
  let ln2 = 0.693;
  if (finalActivity <= 15 && finalActivity > 0 && typeof finalActivity === 'string') {
    +finalActivity;
    let log = MODERN_ACTIVITY / finalActivity;
    let constant = ln2 / HALF_LIFE_PERIOD;
    res = Math.log(log) / constant;
  } else {
    return false;
  }

  return Math.round(res);
};
