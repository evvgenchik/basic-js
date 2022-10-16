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

	console.log(arr1);
	console.log(arr2);
	console.log(arr3);

	if (arr1.length) {
		return `{"${arr3[0]}" : ${arr3.length}, "${arr2[0]}" : ${arr2.length}, "${arr1[0]}" : ${arr1.length}}`
	} else if (arr2.length) {
		return `{"${arr3[0]}" : ${arr3.length}, "${arr2[0]}" : ${arr2.length}}`
	} else if (arr3.length) {
		return `{"${arr3[0]}" : ${arr3.length}}`
	} else {
		return {}
	}

}

console.log(getDNSStats(['epam.com'])),// { '.com': 1, '.com.epam': 1 });
	// console.log(getDNSStats(['epam.com', 'info.epam.com'])),//  { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 })
	// console.log(getDNSStats([])),//  {}

	module.exports = {
		getDNSStats
	};
