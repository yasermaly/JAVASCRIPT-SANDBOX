// BLOCK SCOPE:

const x = 100;

if (true) {
  const y = 200;
  console.log(x + y); // this will return 300 because both x and y are accessible.
}

// console.log(x + y); // this will throw an error because y is not defined outside of its block scope.

for (let i = 0; i <= 10; i++) {
  console.log(i); // this will return iterations from 0 to 10 because i is defined in the block scope.
}

console.log(i); // this will throw an error because i is not defined outside of its block scope.

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(a); // error
console.log(b); // error
console.log(c); // will return because var is function scoped only so it can be accessed from outside a block but not from outside a function.
