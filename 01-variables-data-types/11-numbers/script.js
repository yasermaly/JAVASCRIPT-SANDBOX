let x;

const num = new Number(500);

x = num.toString();

x = num.toString().length; // there's not .length property for numbers so we have to convert it to a string first.

x = num.toFixed(2); // toFixed method adds decimals, and its argument is how many decimal points. It also turns the number into a string.

x = num.toPrecision(2); // toPrecision method approximates to the nearest number of decimals provided in the argument.

x = num.toExponential(); //

x = num.toLocaleString("ar-EG"); // converts the string to the local language provided in the argument. (in this case Egyptian Arabic).
x = num.toLocaleString("en-US"); // converts the string to the local language provided in the argument. (in this case American English).

console.log(x);
