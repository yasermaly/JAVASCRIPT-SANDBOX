// Convert string into a number:

let amount = "100";
console.log(amount, typeof amount); // Type is string

// Using the parseInt method to convert the type into a number.
amount = parseInt(amount);
console.log(amount, typeof amount); // Type is now a number.

// We can also use the unary + operator to do the same thing:
amount = +amount;
console.log(amount, typeof amount); // Type is now a number.

// We can also use the Number() constructor to do the same thing:
amount = Number(amount);
console.log(amount, typeof amount); // Type is now a number.

// What if the string has a decimal?
amount = "100.5";
console.log(amount, typeof amount); // Type is string.

amount = parseFloat(amount); // We use the parseFloat() method here because it doesn't round out to the nearest integer like ParseInt() does.
console.log(amount, typeof amount); // Type is now a number.

//----------------------------------------------------------------//

// Convert a number into a string:

let number = 200;
console.log(number, typeof number); // type is number.

// Using the toString() method to convert the type into a string.
number = number.toString();
console.log(number, typeof number); // Type is now a string.

// We can also use the String() constructor to convert the type into a number.
number = String(number);
console.log(number, typeof number); // Type is now a string.

//----------------------------------------------------------------//

// Convert a number into a boolean:

let integer = 1;
console.log(integer, typeof integer); // Type is number.

// Using the Boolean() method to convert the type into a boolean.
integer = Boolean(integer);
console.log(integer, typeof integer); // Type is now boolean

// Truthy values will convert to True, Falsey values will convert to False.
