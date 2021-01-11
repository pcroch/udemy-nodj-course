// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// object destructuring

const person = {
	name: 'Max',
	age: 29,
	greet() {
		console.log('Hi, I am ' + this.name);
	}
}

// const copiedperson = {...person};
// console.log(copiedperson);




const printName = (personData) => {
	console.log(personData.name)
	personData.greet()

}


printName(person);

console.log('second example')
// could be replaced by below

const printNameGreet = ({name, greet}) => {
	console.log(name)
	greet()

}


printNameGreet(person);


console.log('third example')


const {name, age} = person;
console.log(name, age);

console.log('fourth example')

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;

console.log(hobby, hobby2);
// the output doesn't have any bracket thks to the line 49

// allow to access element in objects  or arrays quickly by name of position
