const name = 'Max';
let age = 29;
const hasHobbies = true;

// name ='Maximilien'
// Will output an error
age = 30;

// function summarizeUser(userName, userAge, userHasHobby){
// 	return (
// 		'Name is ' +
// 		userName +
// 		', age is ' +
// 		userAge +
// 		' and the user has hobbies: ' +
// 		userHasHobby
// 	);
// }


// const summarizeUser =function (userName, userAge, userHasHobby){
// 	return (
// 		'Name is ' +
// 		userName +
// 		', age is ' +
// 		userAge +
// 		' and the user has hobbies: ' +
// 		userHasHobby
// 	);
// }


const summarizeUser = (userName, userAge, userHasHobby) => {
	// allow to use the 'this' statement
	return (
		'Name is ' +
		userName +
		', age is ' +
		userAge +
		' and the user has hobbies: ' +
		userHasHobby
	);
}


// const add = (a,b) => {
// 	return a + b 
// }

// shorten
const add = (a,b) =>  a + b;


// one argument
const addOne = a =>  a + 1;

const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));
console.log(add(1,2))
console.log(addOne(1))
console.log(addRandom());