let x;

const name = "John";
const age = 30;

x = "Hello, my name is " + name + " and I am " + age + " years old.";

// Template Literals

x = `Hello, my name is ${name} and I am ${age} years old.`;

// String Properties and Methods

const s = new String("Hello World");

x = typeof s;

x = s.length;

x = [0]; // Access value by key

x = s.__proto__;

x = s.toUpperCase();

x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("H");

x = s.substring(1, 5); // first argument is were it starts and second is where it ends.
x = s.slice(1, 5); // same as substring.

x = "        Hello World";
x = s.trim(); // trims the whitespace

x = s.replace("World", "John"); // first argument is what you want to replace, second is with what.

x = s.includes("Hell"); // returns boolean true if the string includes the argument. false if it doesn't.

x = s.valueOf(); // returns the value of the string

x = s.split(); // splits a string into an array.
x = s.split(" "); // splits a string into an array of separate words.
x = s.split(""); // splits a string into an array of separate letters.

console.log(x);
