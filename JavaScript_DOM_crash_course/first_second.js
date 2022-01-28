// 1.
// DOM aka Document Object Model
// The DOM is a structured representation of your HTML document
// Tree of nodes / elements created by the browser
// JS can be used to read / write / manipulate the DOM, making jQuery only necessary for things like complex animations
// Object Oriented Representation

// Examine the document object
/*
// console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// You can also reassign these properties, they are not read-only
// document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all); // Deprecated
console.log(document.querySelector('header'));
console.log(document.forms); // Get all forms
console.log(document.links); // Get all links
console.log(document.images); // Get all images
*/

// getElementById
console.log(document.getElementById('header-title'));
// Store the element with #header-title in headerTitle variable
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);

// Rewrite the text content of the element
headerTitle.textContent = 'Hello';
// innerText returns the VISIBLE text, textContent returns ALL text inside an element
headerTitle.innerText = 'Goodbye';
// innerHTML inserts the HTML in the element
headerTitle.innerHTML = '<h3>Item Lister</h3>';

// Style changes
/*
let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
*/

// getElementsByClassName
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);

items[1].textContent = 'New item 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
// items.style.backgroundColor = '#f4f4f4'; does not work because it's an HTMLCollection <=> array
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
};

// getElementsByTagName
// Same as above, but you don't have to rely on the class, you target the tag directly
let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = '#b4b4b4';
}

// querySelector - you can use any tag, class, id, css selector in here
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 6px #2d4';

let input = document.querySelector('input'); // grabs first one by default
input.value = 'Hello world';

// CSS selectors with querySelector
let submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

let item = document.querySelector('.list-group-item');
item.style.color = 'red';

let firstItem = document.querySelector('.list-group-item:first-child');
firstItem.style.color = 'blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2');
secondItem.style.color = 'coral';

// querySelectorAll
let titles = document.querySelectorAll('.title');
console.log(titles); // NodeList - similar to HTMLCollection, but you can run array functions
titles[0].textContent = 'Changed title'

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
odd.forEach(each => {
    each.style.backgroundColor = '#eee';
});
even.forEach(each => {
    each.style.backgroundColor = '#ccc';
});


// 2.
// Traversing the DOM
let itemList = document.querySelector('#items');
// parentNode <=> parentElement mostly
// html's parent is document, which is a node, but not an element
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'azure';
console.log(itemList.parentNode.parentNode);

// childNodes - it also captures text elements aka spaces or line breaks in the code
console.log(itemList.childNodes);

// children - ignores line breaks
console.log(itemList.children);
itemList.children[1].style.backgroundColor = "yellow";

// firstChild - it also captures line breaks
console.log(itemList.firstChild);

// firstElementChild - ignores line breaks
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

// lastChild - it also captures line breaks
console.log(itemList.lastChild);

// lastElementChild - ignores line breaks
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

// nextSibling - captures line breaks
console.log(itemList.nextSibling);

// nextElementSibling - ignores line breaks
console.log(itemList.nextElementSibling); //doesn't have a sibling following it

// previousSibling - captures line breaks
console.log(itemList.previousSibling);

// previousElementSibling - ignores line breaks
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';


// 3.
// createElement
let newDiv = document.createElement('div');

// Add class
newDiv.className = 'example-class';

// Add id
newDiv.id = 'example-id';

// Add attribute
newDiv.setAttribute('title', 'example-title');

// createTextNode
let newDivText = document.createTextNode('example text');

// Add text to div
newDiv.appendChild(newDivText);

let col = document.querySelector('header .col-md-6');
let h1 = document.querySelector('header h1');

// containerName.insertBefore(itemToInsert, beforeWhat);
col.insertBefore(newDiv, h1);

newDiv.style.fontSize = '20px';

console.log(newDiv);