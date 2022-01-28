let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let select = document.querySelector('#addForm select');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems)

// Add item
function addItem(e) {
    // Prevent the normal behavior of the form aka submission
    e.preventDefault();
    console.log(select.value);
    // You can only append created elements once, have to loop everything
    for (let i = 0; i < select.value; i++) {
        // Get input value
        let newItem = document.getElementById('item').value;
        // Create new li element
        let li = document.createElement('li');
        // Add class name to it
        li.className = 'list-group-item';
        // Add text node with input value to li element
        li.appendChild(document.createTextNode(newItem));

        // Create delete button element
        let deleteButton = document.createElement('button');
        // Add classes to delete button
        deleteButton.className = 'btn btn-danger btn-sm float-right delete';
        // Append text node
        deleteButton.appendChild(document.createTextNode('X'));
        // Append button to li
        li.appendChild(deleteButton);
        
        // Append li element child to itemList
        itemList.append(li);
    }
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e) {
    // Convert search text to lowercase
    let text = e.target.value.toLowerCase();
    // Get list items as HTMLCollection
    let items = itemList.getElementsByTagName('li');
    // Convert items to array
    Array.from(items).forEach(item => {
        // Grab the text of label of each item to compare with filter
        let itemName = item.firstChild.textContent;
        // If the label CONTAINS (indexof is NOT -1) the filter text, display it
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            // Otherwise, do not display it
            item.style.display = 'none';
        }
    });

}