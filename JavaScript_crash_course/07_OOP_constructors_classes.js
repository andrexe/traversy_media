// 7. Object Oriented Programming OOP

// Constructor functions start with capital
/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    
    // this.getBirthYear = function () {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = () => `${this.firstName} ${this.lastName}`;
    
}
*/

// Adding methods to the prototype to avoid unnecessary repetitions of the functions inside objects
/*
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}; 
*/

// Classes - syntactic sugar - does the same thing as above, but better organised, easier to read

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());