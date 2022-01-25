// 3. Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
};

console.log(person, person.firstName, person.lastName);
console.log(person.hobbies[1]); // log movies

// Destructuring: assigning properties to other variables

const { firstName, lastName, address: { city } } = person;
console.log(firstName);
console.log(city);

// Adding properties 

person.email = 'john@gmail.com';
console.log(person);