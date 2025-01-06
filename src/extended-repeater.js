const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let defaultOptions = {
    repeatTimes: options.repeatTimes || 1,
    separator : options.separator || '+',
    addition: typeof options.addition !== "undefined" ? String(options.addition) : '',
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: options.additionSeparator || '|',
  };

  let resultStr = '';

  const additionStr = new Array(defaultOptions.additionRepeatTimes)
      .fill(defaultOptions.addition)
      .join(defaultOptions.additionSeparator);

  resultStr = new Array(defaultOptions.repeatTimes)
      .fill(str + additionStr)
      .join(defaultOptions.separator);
  return resultStr;
}

module.exports = {
  repeater
};
