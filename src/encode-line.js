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
  let counter = 0;
  let encodeString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      if (counter) {
        counter ++;
        encodeString += counter + str[i];
        counter = 0;
      } else {
        encodeString += str[i];
      }

    }
  }

  return encodeString;
}

module.exports = {
  encodeLine
};
