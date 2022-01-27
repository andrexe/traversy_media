const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // nameInput gives you the input element - you need to use .value for inputs
    // console.log(nameInput.value);

    // If either field is empty show an error
    if (nameInput.value === '' || emailInput.value === '') {
        // Add the error style to the msg element
        msg.classList.add('error');
        // Insert the error message
        msg.innerHTML = 'Please enter all fields';
        // Make the error disappear (function, time in ms)
        setTimeout(() => msg.remove(), 3000)
    } else {
        // If fields are filled in, add it as a list item in the ul selected at the top
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        
        // Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

// This functionality is just in the UI - if you reload the data is gone. 

// For saving the data, you will need some backend - nodeJs, php or python that connects to a database. You send requests from the front end using the fetch API or AJAX.

// Alternatively, there is localStorage = storing data in the user's browser. For data only relevant to that user.