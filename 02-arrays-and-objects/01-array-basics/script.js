/* 
Arrays are a special type of 'object' and a data structure 
in JavaScript can store multiple values.
*/

// Ways to create an array object:

// Array Literal:
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'hello', true, null];
console.log(numbers);

// Array Constructor:
const fruits = new Array('apple', 'orange', 'grape', 'peach', 'mango');
console.log(fruits);

let x;

x = numbers[0];
console.log(x); // retuns 12, the first value in the array (index based).

x = `My favorite fruit is ${fruits[4]}`;
console.log(x); // returns: My favorite fruit is mango.

x = numbers.length; // returns the length of the array

fruits[2] = 'pear';
console.log(fruits); // the [2] index value is now changed to 'pear'.
