// a string with anything in it is a truthy value.
const email = 'a@example.com';

if (email) {
  console.log('You passed in an email address');
}
// the if statement here performed a type coercion on the strung and turned it into a boolean.
// if statements always coerce the value in its argument to a boolean.
console.log(Boolean(email)); // returns true.

// FLASY VALUES:

// false
// 0
// '' or "" (empty string)
// null
// undefined
// NaN

const x = 0;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}
// this will print 'This is falsy' because x has a falsy value.
console.log(Boolean(x)); // returns false.
