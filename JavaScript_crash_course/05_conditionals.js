// 5. Conditionals
const x = '10';
if (x == 10) {
    console.log(`x is ${x}`);
};

// strict equality matches the data type as well
if (x === 10) {
    console.log(`x is also ${x}`);
} else {
    console.log(`x is NOT a number`);
}

const y = 20;
if (y === 20) {
    console.log(`y is 20`);
} else if (x > 10) {
    console.log(`y is greater than 10`);
} else {
    console.log(`y is less than 10`);
}

const z = 11;
if (y > 20 || z > 10) {
    console.log(`y is more than 20 OR z is more than 10`);
}
if (y > 20 && z > 10) {
    console.log(`y is more than 20 AND z is more than 10`);
}

// Ternary operator

const a = 11;

const color = a > 10 ? 'red' : 'blue';
console.log(color);

// Switches

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}
