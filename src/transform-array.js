const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const resultArray = [];
  let excludedIndex = -1;
  arr.map((element, index , array) => {
    if(index === excludedIndex) {
      return element;
    }
    switch (element) {
      case '--discard-next':
        excludedIndex = index + 1;
        return element;
      case '--discard-prev':
        if (resultArray.at(-1) && resultArray.at(-1) === array[index - 1]) {
          resultArray.pop();
        }
        return element;
      case '--double-next':
        if (!isNaN(array[index + 1])) {
          resultArray.push(array[index + 1]);
        }
        return element;
      case '--double-prev':
        if (resultArray.at(-1) && resultArray.at(-1) === array[index - 1]) {
          resultArray.push(resultArray.at(-1));
        }
        return element;

      default:
        resultArray.push(element);
        return element;
    }
  })

  return resultArray;
}

module.exports = {
  transform
};
