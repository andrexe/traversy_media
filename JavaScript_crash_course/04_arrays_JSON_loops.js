// 4. Arrays of objects, JSON, loops

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

// You can easily convert objects to JSON format for later use using the following method
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For loop
for (let i = 0; i < 10; i++) {
    console.log(`For Loop number: ${i}`);
}

// While loop
let i = 0;
while (i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
}

// Looping through arrays
// for in - returns the indexes
// for of - returns the values
for (let todo of todos) {
    console.log(todo);
}

// High order array methods
// forEach, map, filter
todos.forEach(function (todo) {
    console.log(todo.text);
});

const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

// filtering tasks for completed ones, then only returning the text of each
const todoCompleted = todos
    .filter(function (todo) {
        return todo.isCompleted === true;
    })
    .map(function (todo) {
        return todo.text;
    });

console.log(todoCompleted);