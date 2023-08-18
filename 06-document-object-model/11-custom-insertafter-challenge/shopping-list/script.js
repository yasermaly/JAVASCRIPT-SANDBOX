/*
Custom insertAfter() Challenge
Instructions

You may think that since there is an insertBefore() method, there is also an insertAfter(), but there isn't. 
In this challenge, I want you to create a custom insertAfter() function.

The first param will be newEl which will be a new element that you create with document.createElement()
The second param will be existingEl which is an element in the DOM that you want to insert your new element after
The function will be called like this:
*/

function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}
// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);
