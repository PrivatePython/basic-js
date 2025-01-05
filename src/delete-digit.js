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
  const strNumber = n.toString();

  for (let i = 0; i < strNumber; i++) {
    if (strNumber[i] < strNumber[i + 1]) {
      return Number(strNumber.slice(0, i) + strNumber.slice(i + 1));
    }
  }
  return Number(strNumber.slice(0, strNumber.length - 1));
}

module.exports = {
  deleteDigit
};
