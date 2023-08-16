// Get child elements from the parent:

let output;

const parent = document.querySelector('.parent');
console.log(parent);

output = parent.children; // returns an html collection of all children elements
output = parent.children[1]; // returns index [1] child element
output = parent.children[1].innerText; // returns index [1] child inner text
output = parent.children[1].className; // returns index [1] child class name
output = parent.children[1].nodeName; // returns index [1] child node name
console.log(output);

parent.children[1].innerText = 'Child Two'; // changes the inner text of [1] index child from Child 2 to Child Two.
parent.children[1].style.color = 'red'; // changes the color of [1] index child from black to red.
parent.firstElementChild.innerText = 'Child One'; // changes the inner text of the first child from Child 1 to Child One.
parent.lastElementChild.innerText = 'Child Three'; // changes the inner text of the last child from Child 3 to Child Three.

// Get parent element:

let output2;

const child = document.querySelector('.child');
console.log(child);

output2 = child.parentElement; // logs the parent element.
child.parentElement.style.border = '1px solid red'; // changes the border
child.parentElement.style.padding = '5px'; // changes the padding
console.log(output2);

// Get sibling elements:

let output3;

const secondItem = document.querySelector('.child:nth-child(2)');
output3 = secondItem; // logs the second child element
output3 = secondItem.nextElementSibling; // logs the next sibling element(Child Three).

secondItem.nextElementSibling.style.color = 'green'; // changes the color of the next sibling to green
secondItem.previousElementSibling.style.color = 'orange'; // changes the color of the previous sibling to orange

console.log(output3);
