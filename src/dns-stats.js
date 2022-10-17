const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let result = {};
 for(let i = 0; i< domains.length; i++){
  let res = '';
  let arrSplit = domains[i].split('.').reverse();
  for(let j = 0; j<arrSplit.length; j++){
    res += '.' +arrSplit[j];
      result[res] = result[res] ? result[res] + 1 : 1;
  }
  
 }
//  let result = {}
//  for(let j = 0; j< newarr.length; j++){
//   let strDomain = '';
//   if(!newarr[j]){
//     for(let i = 0; i<newarr.length;i++){
//     strDomain += newarr[i]}
//     result[j] = result[j] ? result[j] + 1 : 1;
//   }
//  }
//  return result;
return result;
}

module.exports = {
  getDNSStats
};
