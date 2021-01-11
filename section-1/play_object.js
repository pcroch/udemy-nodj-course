const person = {
	name: 'Max',
	age: 29,
	great() {
		console.log('Hi, I am ' + this.name);
	}
}

// with const, only the pointer is stored
const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
// 	console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
// console.log(hobbies)

hobbies.push('Programing')
console.log(hobbies);
// with const, only the pointer is stored
// hence adding an item will not create an error
