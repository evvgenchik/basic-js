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
	let newArr = String(n).split('');
	let number = 0;

	for (let i = 0; i < newArr.length; i++) {
		let arr = [].concat(newArr);
		console.log(arr);
		arr.splice(i, 1);
		number = Math.max(arr.join(''), number)
	}
	return number
}

console.log(deleteDigit(152))// 52);
// deleteDigit(1001), //101);
// 	deleteDigit(10), //1);
// 	deleteDigit(222219),// 22229);
// 	deleteDigit(109), //19);
// 	deleteDigit(342), //42);

module.exports = {
	deleteDigit
};
