const person = {
	name: 'Max',
	age: 29,
	great() {
		console.log('Hi, I am ' + this.name);
	}
}

const copiedperson = {...person};
console.log(copiedperson);

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
// 	console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
// console.log(hobbies)

// first technic
// const copiedArray = hobbies.slice();
// console.log(copiedArray);


// 1
// nested array==> not good
// const copiedArray = [hobbies];

// 2
// spread operator ...
// no nested array anymore
const copiedArray = [...hobbies];
console.log(copiedArray);


// static way: no possible to add dynamically a 4th arg
// const toArray = (arg1, arg2, arg3) => {
// return [arg1, arg2, arg3]

// }

// rest operator make an function dynamic
const toArray = (...args) => {
	// args is an array
return args

}

// usefull to pull out elements or properties !
console.log(toArray(1,2,3,4))