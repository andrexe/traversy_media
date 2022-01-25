// Arrays - variables that hold multiple values

// using constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

// you can have different data types in the same array
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);

// arrays are zero based 
console.log(fruits[1]); // expected: oranges

fruits[5] = 'grapes';

fruits.push('mangoes'); // add in the end

fruits.unshift('strawberries'); // add in the beginning

fruits.pop(); // renove the last one

console.log(Array.isArray('hello')); // check if it's an array

console.log(fruits.indexOf('oranges'));

console.log(fruits);