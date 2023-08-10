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

// TRUTHY VALUES:

// everything else that isn't falsy
// true
// '0' or anything in a string
// ' ' a space in a string
// 'false' in a string
// [] an empty array
// {} an empty object
// function(){} an empty function

// TRUTHY/FALSY CAVEATS: (empty values that are truthy)

// empty value in an if block:

const children = 0;
if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
} // this will print 'Please enter number of children' instead of what we want which is 'You have 0 children'
// one way around this is to pass in if(children !== undefined) - now it will work
// another way is to pass in if(!NaN(children)) - now it will work.

// empty arrays:

const posts = [];

if (posts) {
  console.log('List Posts');
} else {
  console.log('No Posts');
} // this will print 'List Posts' instead of what we want which is 'No Posts'
// the way around that is to pass in if(posts.length > 0) - now it will work

// empty objects:

const user = {};

if (user) {
  console.log('List User');
} else {
  console.log('No User');
} // this will print 'List User' instead of what we want which is 'No User'
// the way around this is to pass if(Object.keys(user).length > 0) - now it will work.

// Loose equality: (==)

console.log(false == 0); // prints true
console.log('' == 0); // prints true
console.log(null == undefined); // prints true
// We don't want that. So always use the triple equal === which also checks the type. printing false.
