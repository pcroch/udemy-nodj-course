// 'this' refers to thesurround object, here 'person'

// const person = {
// 	name: 'Max',
// 	age: 29,
// 	great: () => {
// 		console.log('Hi, I am ' + this.name);
// 	}
// }
// person.great()
// will output



const person = {
	name: 'Max',
	age: 29,
	great() {
		console.log('Hi, I am ' + this.name);
	}
}

person.great()