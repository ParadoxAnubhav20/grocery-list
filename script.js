// Select the form, input, and list elements from the DOM
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// Function to handle the addition of a new item
function addItem(e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get the value of the input field
  const newItem = itemInput.value;

  // Validate the input to ensure it's not empty
  if(newItem === '') {
    alert('Please Enter An Item');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem)); // Add the new item text

  // Create and append a remove button to the list item
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  // Append the list item to the item list
  itemList.appendChild(li);

  // Clear the input field for the next item
  itemInput.value = '';
}

// Function to create a button with specified classes
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  // Create and append an icon to the button
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

// Function to create an icon with specified classes
function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

// Event listener to handle form submission
itemForm.addEventListener('submit', addItem);
