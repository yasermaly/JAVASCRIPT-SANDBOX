/*

Create a variable called x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50.

Create a variable for the sum, difference, product, quotient and remainder of x and y. Log the output in a string that shows the two numbers of x and y along with the operator and result.

You can log the output string directly or put them in separate variables and log them like below.
You can use string concatenation or template literals for the output.

*/

// SOLUTION:

let x;
let y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;

const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;

const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;

const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;

const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
