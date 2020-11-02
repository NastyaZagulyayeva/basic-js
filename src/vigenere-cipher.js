"use strict";
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor() {
    this.a = "abcdefghijklmnopqrstuvwxyz";
  }

  encrypt(message, key) {
    if (!arguments.length || message === undefined || key === undefined) {
      throw new Error("OOps");
    }

    let res = '';
    for(let i=0; i <= message.length; i++) {
      let alf = this.a.slice(0,i);
      if(alf = )
      let start = this.a.
      console.log(alf);

      res += 
    }
    console.log(r)
    return r;
  }


  decrypt(encryptedMessage, key) {
    if (!arguments.length || encryptedMessage === undefined || key === undefined) {
      throw new Error("OOps");
    }

  }
}


new VigenereCipheringMachine().encrypt('attack at dawn!', 'alphonse');
module.exports = VigenereCipheringMachine;
