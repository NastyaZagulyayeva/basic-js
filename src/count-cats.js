const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  arr.map((el) => {
    Array.isArray(el) 
    ? el.map((l) => {
      l === "^^" ? count++ : count;
    }) 
    : (el === "^^" ? count++ : count)});
  return count;
};
