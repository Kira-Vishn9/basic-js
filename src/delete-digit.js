const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newNumber = n.toString().split('');
  let max = 0;
  for(let i = 0; i< newNumber.length; i++){
    let numberNow = +[...newNumber.slice(0, i), ...newNumber.slice(i +1)].join(''); 
    max = max >= numberNow ? max : numberNow;
  }
return max;

}

module.exports = {
  deleteDigit
};
