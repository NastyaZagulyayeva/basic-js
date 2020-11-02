const CustomError = require("../extensions/custom-error");

function addSeparator(rep, item, sep = '+', addit = '', adRepTime, additSep='') {
    let res;
    item === null ? res = 'null' : res = item.toString();
    let arrRes = [];
    addit === null ? arrRes = new Array(adRepTime).fill('null') : arrRes = new Array(adRepTime).fill(addit);
    res += arrRes.join(additSep);
    arrRes = new Array(rep).fill(res);

    return arrRes.join(sep);
}

module.exports = repeater;

function repeater(str, options) {
    let res;
    let item = str;
    let additionItem = '';
    if (options.repeatTimes && !options.additionRepeatTimes) {
      return additionItem = addSeparator(options.repeatTimes, item, options.separator);
    }
    if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
        additionItem = addSeparator(1, item, sep = '+' ,options.addition);
    } else {
        additionItem = addSeparator(options.repeatTimes, item, options.separator, options.addition, options.additionRepeatTimes, options.additionSeparator);
    } 
    return additionItem;
};

