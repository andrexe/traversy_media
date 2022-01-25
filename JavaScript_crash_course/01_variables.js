// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// 1. Variables
// var, let, const

// let is preferred over var because it's block-scoped -> less prone to errors
let age = 30;
age = 31;
console.log(age);

// const is for variables that are assigned values that shouldn't change. when you use const you have to add a value when you initialize. when you deal with arrays and objects, you can change the values within the const array and objects, just not reassing the whole thing
const birthday = new Date(1993, 02, 02);
console.log(birthday);