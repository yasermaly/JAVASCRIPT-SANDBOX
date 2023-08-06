let x;

x = Math.sqrt(9); // Square rood of 9

x = Math.abs(-500); // Absolute value of -500

x = Math.round(4.6); // Rounds or approximates to the nearest integer.

x = Math.ceil(6.2); // Ceiling. rounds UP to the next digit.

x = Math.floor(5.7); // Rounds DOWN to the last digit.

x = Math.pow(2, 3); // Power. calculates the first argument to the power of the second argument.

x = Math.min(1, 2, 3, 4, 5); // Minimum. returns the lowest number out of all the arguments.

x = Math.max(1, 2, 3, 4, 5); // Maximum. returns the highest number out of all the arguments.

x = Math.random(); // returns a random number with decimals between 0 to 1
x = Math.random() * 10 + 1; // random number between 1 and 10:
x = Math.random() * 100 + 1; // random number between 1 and 100:

// We can then use Math.floor to round out the decimal:

x = Math.floor(Math.random() * 100 + 1);

console.log(x);
