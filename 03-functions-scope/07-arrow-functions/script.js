// ARROW FUNCTIONS:

const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// IF THE FUNCTION HAS A SINGLE LINE EXPRESSION, it can be abbreviated as follows:
// Implicit return. meaning the return word is implied and not actually written.
const subtract = (c, d) => c - d;
console.log(subtract(10, 6));

// NOTE: if there is only one paramater in the function, you don't have to put it in brackets they are optional.
const double = (a) => a * 2; // brackets around the a are optional. it will work without them.
console.log(5);

// RETURNING AN OBJECT:

const createObj = () => ({ name: 'Yaser' }); // place the object curly braces inside brackets.
console.log(createObj()); // returns the object name: 'Yaser'
