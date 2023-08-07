let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries); // pushes an array into another array.
// x = fruits[3][1]; // access a value in an array that inside another array.

const allFruits = [fruits, berries]; // an array of two arrays.

x = fruits.concat(berries); // concatenates the values in berries into the fruits array.

x = [...fruits, ...berries]; // spread operator.

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat(); // flatten Arrays

// Static Methods:

x = Array.isArray(fruits); // returns boolean if the argument is an array.

x = Array.from('12345'); // returns an array containing values in the argument.

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);
console.log(x);
