let output;
const parent = document.querySelector('.parent');
output = parent.childNodes; // logs a node list.
output = parent.childNodes[0]; // logs the first node.
output = parent.childNodes[3].nodeName; // logs the name of first node.
output = parent.childNodes[3].textContent; // logs the text content of first node.
output = parent.childNodes[3].outerHTML; // logs the outer html of first node.

output = parent.childNodes[3].innerText = 'Child One'; // changes inner text of the first node to Child One.
output = parent.childNodes[5].style.color = 'red'; // changes color of the second element node to red.
output = parent.firstChild;
output = parent.lastChild;
console.log(output);
