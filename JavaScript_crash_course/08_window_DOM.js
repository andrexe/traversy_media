// 8. Window Object & DOM (Document Object Model)
// The DOM is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic.
// The DOM views an HTML document as a tree of nodes. A node represents an HTML element.

// The window object is the parent object of the browser and it contains the document
// console.log(window);

// Selectors

// Single element

// const form = document.getElementById('my-form');
// console.log(form);

// can use querySelector to select any element
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

// Multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

// Generally should use querySelector or querySelectorAll, sometimes getElementById

// Loop through items

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// Manipulating the DOM

const ul = document.querySelector('.items');

// Remove the entire element
// ul.remove();

// Remove the last child of the element
// ul.lastElementChild.remove();

// Edit content
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// Changing the style
const btn = document.querySelector('.btn');
btn.style.background = 'red';