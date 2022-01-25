// 2. Data types
// Primitive data types:
// Strings, Numbers, Boolean, null, undefined, Symbol
const name = 'John';
const age = 28;
const rating = 4.5;
const isCool = true;
const x = null; // basically means empty
const y = undefined;
let z; // will become undefined

console.log(name, age, isCool);
console.log('name:', typeof name);
console.log('age:', typeof age);
console.log('rating:', typeof rating);
console.log('isCool:', typeof isCool);
console.log('x:', typeof x);
console.log('y:', typeof y);

// Concatenation
// old way of doing it
console.log('My name is ' + name + ' and I am ' + age);

// Template literals - new way of doing it since ES6 - using backticks `` and ${} for variables
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// String properties & methods
// Properties return a parameter of the object
// A method is a function that is associated with an object
// You can chain properties and methods onto each other
const s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(''));
const stringList = 'business strategy, inbound marketing, company & culture, design, development';
console.log(stringList.split(', '));