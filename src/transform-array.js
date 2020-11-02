const CustomError = require("../extensions/custom-error");

module.exports = transform;

class ForDell {

}

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('THROWN');
  }

  let newArr = arr.slice();
  for (let i = 0; i <= arr.length; i++) {

    if (arr[i] === '--discard-next') {
      if (i === arr.length - 1) {
        newArr[i] = new ForDell();
      } else {
        newArr[i] = new ForDell();
        newArr[i + 1] = new ForDell();
      }
    } else if (arr[i] === '--discard-prev') {
      if (i === 0) {
        newArr[i] = new ForDell();
      } else {
        newArr[i - 1] = new ForDell();
        newArr[i] = new ForDell();
      }
    } else if (arr[i] === '--double-next') {
      if (i === arr.length - 1) {
        newArr[i] = new ForDell();
      } else {
        newArr[i] = newArr[i + 1];
      }
    } else if (arr[i] === '--double-prev') {
      if (i === 0) {
        newArr[i] = new ForDell();
      } else {
        newArr[i] = newArr[i - 1];
      }
    }
  }

  let a = newArr.filter((el) => !(el instanceof ForDell));
  return a;

};


