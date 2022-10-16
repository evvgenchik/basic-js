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
	let arr1 = [];
	let arr2 = [];
	let arr3 = [];
	let finalObj = {}
	for (let item of domains) {
		let newArr = item.split('.');

		if (newArr.length === 3) {
			arr3.push(newArr[2])
			arr2.push(newArr[1])
			arr1.push(newArr[0])
		}
		if (newArr.length === 2) {
			arr3.push(newArr[1])
			arr2.push(newArr[0])
		}
		if (newArr.length === 1) {
			arr3.push(newArr[0])
		}
	}



	if (arr1.length) {
		finalObj["." + arr3[0]] = arr3.length;
		finalObj["." + arr3[0] + "." + [arr2[0]]] = arr2.length;
		finalObj["." + arr3[0] + "." + [arr2[0] + "." + [arr1[0]]]] = arr1.length;
		return finalObj
	} else if (arr2.length) {
		finalObj["." + arr3[0]] = arr3.length;
		finalObj["." + arr3[0] + "." + [arr2[0]]] = arr2.length;
		return finalObj

	} else if (arr3.length) {
		finalObj["." + arr3[0]] = arr3.length;
		return finalObj

	} else {
		return {}
	}


}


module.exports = {
	getDNSStats
};
