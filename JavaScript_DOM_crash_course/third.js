// Events

/*
// Function to be used on click
function buttonClick() {
    console.log('clicked button');
    document.getElementById('header-title').textContent = 'Clicked';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
}

// Function to be used on mouse out
function buttonMouseOut() {
    console.log('left area');
    document.getElementById('header-title').textContent = 'Not hovering';
}

// Function to be used on mouseover
function buttonMouseIn() {
    console.log('hovering');
    document.getElementById('header-title').textContent = 'Hovering';
}

// Event listener method - ideal way of doing it
let button = document.getElementById('button').addEventListener('click', buttonClick);
document.getElementById('button').addEventListener('mouseout', buttonMouseOut);
document.getElementById('button').addEventListener('mouseover', buttonMouseIn);

*/

// Assign target to a variable
let button = document.getElementById('button');

// Add event listener to target
button.addEventListener('click', buttonClick);

function buttonClick(e) {
    console.log(e);
    // e.target returns whatever element the even is fired from, in this case the button
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    // Find the div with output id and insert text with the target id
    let output = document.getElementById('output');
    output.innerHTML = '<h3>' + e.target.id + '</h3>';

    // Event type
    console.log(e.type);

    // Mouse position relative to browser window
    console.log(e.clientX, e.clientY);

    // Mouse position relative to element
    console.log(e.offsetX, e.offsetY);

    // Check for alt key modifier
    console.log(e.altKey);

    // Check for ctrl key modifier
    console.log(e.ctrlKey);

    // Check for shift key modifier
    console.log(e.shiftKey);

}


// Add new event listener to target
// Click
button.addEventListener('click', runEvent);
// Double click
button.addEventListener('dblclick', runEvent);
// Mouse down
button.addEventListener('mousedown', runEvent);
// Mouse up
button.addEventListener('mouseup', runEvent);


function runEvent(e) {
    console.log('event type: ' + e.type);
    console.log(e.target.value);

    // Track the position of the mouse and display it in the output div
    output.innerHTML = `<h3>MouseX: ${e.offsetX} </h3><h3>MouseY: ${e.offsetY} </h3>`;

    // Coloring the box according to the mouse position
    box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;

    // Output characters from field into the output element
    output.innerHTML = `<h3>${e.target.value}</h3>`;

    // Preventing the default behavior of the form
    e.preventDefault();

}


// Mouse events testing on a box
let box = document.getElementById('box');

// Mouse enter - only for the target element
box.addEventListener('mouseenter', runEvent);
// Mouse leave - only for the target element
box.addEventListener('mouseleave', runEvent);

// Mouse over - for the target element AND any of its children
box.addEventListener('mouseover', runEvent);
// Mouse out - for the target element AND any of its children
box.addEventListener('mouseout', runEvent);

// Mouse move - whenever you move the mouse in the element
box.addEventListener('mousemove', runEvent);


// Keyboard event listeners tested on input
let itemInput = document.querySelector('form input[type="text"]');

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

// Focus event listeners
itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

// Cut and paste event listeners
itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);

// Anything related to input
itemInput.addEventListener('input', runEvent);


// Change event listener tested on the select input
let select = document.querySelector('select');
select.addEventListener('change', runEvent);


let form = document.querySelector('form');
form.addEventListener('submit', runEvent);