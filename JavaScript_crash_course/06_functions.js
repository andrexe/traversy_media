// 6. Functions

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
};

console.log(addNums(5, 4));
console.log(addNums());; // uses the default values

// Arrow functions

const arrowAdd = (num1 = 1, num2 = 1) => num1 + num2;

console.log(arrowAdd(5, 5));