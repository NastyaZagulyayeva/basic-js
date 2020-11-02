const CustomError = require("../extensions/custom-error");

class DepthCalculator {

  calculateDepth(array, rec = 1) {
    
    var res = rec;
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        var subDepth = this.calculateDepth(array[i], rec + 1);
        if (subDepth > res) {
          res = subDepth;
        }
      }
    }
    return res;
  }
}

module.exports = DepthCalculator;