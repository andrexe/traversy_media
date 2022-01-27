// 9. Events

const btn = document.querySelector('.btn');

// (event, function to run)
// event can be click, mouseover, mouseout etc
btn.addEventListener('click', (e) => {
    // Prevents the default behavior aka submitting the form, to avoid reload of the page
    e.preventDefault();
    // .target returns the element that the event is on
    console.log(e.target.className);
    // Can change the style of an element
    document.querySelector('#my-form').style.background = '#ccc';
    // Can add or remove classes from any element
    document.querySelector('body').classList.add('bg-dark');
    // Can change text
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</hello>';
});