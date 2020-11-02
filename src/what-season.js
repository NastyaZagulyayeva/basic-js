const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let month;
  let season;

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (new Date().getMonth !== date.getMonth) {
    throw new Error('THROWN');
  }

  if (typeof date.getMonth === 'function') {
    month = date.getMonth() + 1;
    switch(month) {
      case 12: 
      case 1: 
      case 2: 
        season = 'winter';
        break;
      case 3: 
      case 4: 
      case 5:
        season = 'spring'; 
        break;
      case 6: 
      case 7: 
      case 8: 
        season = 'summer';
        break;
      case 9: 
      case 10: 
      case 11: 
        season = 'autumn';
        break;
    }

  } else {
    throw new Error('FAIL');
  }
  return season;
};
