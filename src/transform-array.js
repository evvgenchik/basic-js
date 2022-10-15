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
function transform(arr, indx) {
	if (!(arr instanceof Array)) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}
	let newArr = arr.concat();
	let index1
	let index2
	let indexRemem = indx
	arr.map((item, index) => {

		if (item === '--discard-next') {
			index1 = index;
			index2 = index + 1;
			if (index1 == arr.length - 1) {
				newArr.splice(index, 1)
				return
			}
			newArr.splice(index1, 2);
			indexRemem = index2;
		}

		if (item === '--discard-prev') {
			index1 = index;
			index2 = index - 1;
			if (index1 == 0) {
				newArr.splice(index, 1)
				return
			}
			if (index2 === indexRemem && arr[indexRemem - 1] != '--double-next') {
				let indexDelete = newArr.findIndex(item => item === arr[index]);
				newArr.splice(indexDelete, 1)
				return
			}
			newArr.splice(index2, 2)

		}
		if (item === '--double-next') {
			index1 = index;
			index2 = index + 1;
			if (index1 == arr.length - 1) {
				newArr.splice(index, 1)
				return
			}
			newArr.splice(index1, 1)
			newArr = [].concat(newArr.slice(0, index2), newArr.slice(index1, newArr.length))
			indexRemem = index2;
		}
		if (item === '--double-prev') {
			index1 = index;
			index2 = index - 1;
			console.log(index2);
			console.log(indexRemem);
			if (index1 == 0) {
				newArr.splice(index, 1)
				return
			}
			if (index2 === indexRemem && arr[indexRemem - 1] != '--double-next') {
				let indexDelete = newArr.findIndex(item => item === arr[index]);
				newArr.splice(indexDelete, 1)
				return
			}
			newArr.splice(index1, 1)
			newArr = [].concat(newArr.slice(0, index1), newArr.slice(index1 - 1, newArr.length))
		}
	})
	return newArr
}


module.exports = {
	transform
};
