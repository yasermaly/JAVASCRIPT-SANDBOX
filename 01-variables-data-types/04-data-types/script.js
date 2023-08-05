/* Primitive Data Types:

- String: Sequence of characters. Must be in quotes or backticks.
- Number: Integers as well as floating-point numbers
- Boolean: Logical entity. True or false.
- Null: Intentional absence of any object value.
- Undefined: A variable that has not yet been defined/assigned.
- symbol: Built-in object whose constructor returns a unique symbol.
- BigInt: Numbers that are greater than the "Number" type can handle.

*/

/* Reference Types (OBJECTS)

- Reference types or "Objects" are a non-primitive value and when assigned to a variable, the variable is given a refernce to that value.
- Object literals, arrays, and functions are all references types.

*/

/* Static Typing vs. Dynamic Types

- JavaScript is a dynamically-typed language. This means, we do not explicitly define the types for our variables. 
- Many other languages are statically typed such as C, C++, and Java.

- TypeScript is a superset of JavaScript, which allows static-typing.  This can make your code more verbose and less prone to errors.
- TypeScript may be something to look into and learn later on.

*/

// Primitive Data types demonstration:

// String:
const firstName = "Sarah";
console.log(firstName, typeof firstName);

// Number:
const age = 30;
console.log(age, typeof age);

// Boolean:
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Null:
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// undefined:
let score;
console.log(score, typeof score);

// symbol:
const id = Symbol("id");
console.log(id, typeof id);

// BigInt:
const n = 9007199254740991n;
console.log(n, typeof n);

// Reference Data Types demonstration:

// Array:
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers, typeof numbers);

// Object:
const person = {
  name: "Yaser",
  age: 40,
};
console.log(person, typeof person);

// Function:
function sayHello() {
  console.log("Hello");
}
console.log(sayHello, typeof sayHello);
