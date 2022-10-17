const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let chainMaker = {
  link:[],
  getLength() {
   return this.link.length;
  },
  addLink(value ) {
    this.link.push(`${value}`);
    return this;
  },
  removeLink(position ) {
    if(!Number.isInteger(position) || !(position>0 && position< this.link.length)){
      this.link = [];
      throw new Error('You can\'t remove incorrect link!');

    }
    this.link.splice(position -1, 1);
    return this;
  },
  reverseChain() {
this.link.reverse();
return this;
  },
  finishChain() {
    result = this.link.map(val => `( ${val} )`).join('~~');
    this.link= [];
    return result
  }
};

module.exports = {
  chainMaker
};
