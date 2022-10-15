const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */



// const chainMaker = {

// 	chain: [],

// 	changeChainForRemove() {
// 		let linkForRemove = this.chain[0]

// 		let value = parseInt(linkForRemove.match(/\d+/))

// 		this.chain.splice(0, 1);

// 		this.chain.unshift(`( ${value} )`)
// 	},

// 	changeChainForReverse() {
// 		let newArr = [];

// 		for (let item of this.chain) {
// 			newArr.push(item.match(/\d+/))
// 		};

// 		this.chain = [];

// 		for (let item of newArr) {
// 			this.addLink(item)
// 		}
// 	},

// 	getLength() {
// 		return this.chain.length
// 	},

// 	addLink(value) {
// 		if (!value) {
// 			value = ''
// 		}

// 		if (this.chain.length === 0) {
// 			this.chain.push(`( ${value} )`)
// 			return this
// 		} else {
// 			this.chain.push(`~~( ${value} )`)
// 		}
// 		return this
// 	},

// 	removeLink(position) {
// 		let index = (this.chain.findIndex(item => item == `~~( ${position} )`) != -1) ? this.chain.findIndex(item => item == `~~( ${position} )`) : (this.chain.findIndex(item => item == `( ${position} )`));

// 		if (!Number.isInteger(position) || index == -1) {
// 			throw Error("You can't remove incorrect link!")
// 		}

// 		this.chain.splice(index, 1);

// 		if (index === 0) {
// 			this.changeChainForRemove()
// 		}
// 	},

// 	reverseChain() {
// 		this.chain.reverse()
// 		this.changeChainForReverse()
// 	},

// 	finishChain() {
// 		return this.chain.join('')
// 		this.chain = [];
// 	}
// };
const chainMaker = {

	chain: [],

	getLength() {
		return this.chain.length
	},

	addLink(value) {

		if (value === "") {
			value = ''
		}

		this.chain.push(value)

		return this
	},

	removeLink(position) {
		let index = position - 1;

		if (!Number.isInteger(position) || position <= 0 || position > this.chain.length) {
			this.chain = [];
			throw Error("You can't remove incorrect link!")
		}

		this.chain.splice(index, 1);

		return this
	},

	reverseChain() {
		this.chain.reverse()

		return this
	},

	finishChain() {
		let newArr = [].concat(this.chain)

		this.chain = [];

		for (let value of newArr) {
			// if (newArr[0] == value) {
			// 	this.chain.push(`( ${value} )`)
			// 	console.log('ye');
			// } else {
			this.chain.push(`~~( ${value} )`)
			this.chain.splice(0, 1);
			this.chain.unshift(`( ${newArr[0]} )`)
			// }
		}


		newArr = this.chain.join('')
		this.chain = []
		return newArr
	}
};

// console.log(cha);
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2))
console.log((chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain()))
// ( 8.963 )~~( 0 )~~( false )

module.exports = {
	chainMaker
};
