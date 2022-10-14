const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	const arr = []
	if (Array.isArray(members)) {
		members.map(name => {
			if (Array.isArray(name)) {
				return
			}
			if (typeof (name) === 'object') {
				return
			}
			if (name && typeof name[0] === 'string') {
				arr.push(name.split(' ').join('')[0].toUpperCase())
			}
		}
		)
		return arr.sort().join('')
	}
	return false
}


//console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));
console.log(createDreamTeam([
	['David Abram'],
	['Robin Attfield'],
	'Thomas Berry',
	['Paul R.Ehrlich'],
	'donna Haraway',
	' BrIaN_gOodWiN  ',
	{
		0: 'Serenella Iovino'
	},
	'Erazim Kohak',
	'  val_plumwood',
]));
//console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))

module.exports = {
	createDreamTeam
};
