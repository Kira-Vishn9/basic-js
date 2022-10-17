const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return '';
 let buff = str[0];
 let howMutch = 1;
 let result = '';
 for(let i = 1; i<str.length; i++){
  if(str[i] == buff){howMutch++
  }else{
    result += howMutch > 1 ? howMutch+ buff : buff;
    buff = str[i];
    howMutch = 1;
  }
 }
 result += howMutch > 1 ? howMutch + buff : buff;
 return result;
}

module.exports = {
  encodeLine
};
