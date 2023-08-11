console.log(10 > 20 && 30 > 15); // false
console.log(10 > 20 || 30 > 15); // true

// && will return the first falsy value or the last value if values are truthy
let a;

a = 10 && 20; // returns 20
a = 10 && 20 && 30; // returns 30
a = 10 && '' && 0 && 30; // returns an empty string.

console.log(a);

const posts = [];
console.log(posts[0]); // this returns undefined which we don't want.
posts.length > 0 && console.log(post[0]);
// && here is used as shorthand for a conditional satetement.
// meaning: if the length of the posts array is greater than zero, console.log the zero index of the array.

// || will return the first truthy value or the last value
let b;

b = 10 || 20; // returns 10
b = 0 || 20; // returns 0
b = 0 || null || '' || undefined; // returns undefined.

// The Nullish Coelising operator which is: ??
// returns its right-hand side operand when its left-hand side operand is null or undefined ONLY.
//and otherwise returns its left-handed side operand.
let c;

c = 10 ?? 20; // returns 10
c = null ?? 20; // returns null
c = undefined ?? 20; // returns undefined
c = 0 ?? 20; // returns 20
c = '' ?? 20; // returns 20
