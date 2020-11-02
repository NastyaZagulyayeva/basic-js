const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let res = '';
  if (Array.isArray(arr)) {
    arr.sort().map((el) => {
      typeof el === 'string' 
      ? res += el.trim()[0].toUpperCase()
      : res;
    });
  } else {
    return false;
  }

  return res.split('').sort().join('');
};
