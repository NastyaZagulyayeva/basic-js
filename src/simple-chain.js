const CustomError = require("../extensions/custom-error");

class NewChainMaker {
  constructor() {
    this.arr = [];
  }

  getLength() {
    return this.arr.length;
  }

  addLink(value) {
    let valueToString = value;
    if (value !== null) {
      this.arr.push(valueToString.toString());
    } else {
      this.arr.push('null');
    }
    return this;
  }

  removeLink(position) {
    if(typeof position === 'number' && Number.isInteger(position) ) {
      if (position <= this.getLength() && position >= 1) {
        this.arr.splice(position-1, 1);
      } else {
        throw new Error('THROWN');
      }
    } else {
      throw new Error('THROWN');
    }
    return this;
  }

  reverseChain() {
    this.arr.reverse();
    return this;
  }

  finishChain() {
    let res = '';
    for(let i = 0; i <= this.arr.length-1; i++) {
      if (i === this.arr.length-1) {
        res += `( ${this.arr[i]} )`;
      } else {
        res += `( ${this.arr[i]} )~~`;
      }
    }
    this.arr = [];
    return res;
  }
}

const chainMaker = {

  getLength() {
    return 0;
  },

  addLink(value) {
    let a = new NewChainMaker();
    return a.addLink(value);
  },

  removeLink(position) {
    let a = new NewChainMaker();
    return a.removeLink(position);
  },

  reverseChain() {
    let a = new NewChainMaker();
    return a.reverseChain();
  },

  finishChain() {
    let a = new NewChainMaker();
    return a.finishChain();
  }
};

module.exports = chainMaker;
