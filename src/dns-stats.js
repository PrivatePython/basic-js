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
function getDNSStats(domains) {
  const domainsObject = {};

  let domainsArr = domains.map(domain => {
    let accumulator = '';
    return domain.split('.')
        .reverse()
        .map((elem) => {
          accumulator += '.' + elem ;
          return accumulator;
        });
  }).flat()

  domainsArr.map(elem => {
    if (domainsObject[elem]) {
      domainsObject[elem] += 1
    } else {
      domainsObject[elem] = 1;
    }
    return elem;
  })

  return domainsObject;
}

module.exports = {
  getDNSStats
};
