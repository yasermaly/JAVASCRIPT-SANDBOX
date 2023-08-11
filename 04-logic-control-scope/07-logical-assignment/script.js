//  ||= assigns the right side value only if the left value is flasy
let a = false;
if (!a) {
  a = 10;
} // conditional statement if a is falsy then a = 10

a = a || 10; //shorthand conditional statement meaning:
// if a is a falsy value(which it is), then a = 10

a ||= 10; // even shorter conditional using the ||= logical assignment.

console.log(a); // will print 10. if a is set to anything truthy, the truthy value will print.

// &&= assign the right side value only if the left value is truthy
let b = 10;
if (b) {
  b = 20;
} // conditional statement if b is truthy then b = 20

b = b && 20; // shorthand conditional meaning:
//if be is truthy (which it is), then b = 20;

b &&= 20; // even shorter conditional using the &&= logical assignment.

console.log(b); // will print 20

// ??= assigns the right side value only if the left value is null or undefined ONLY.
let c = null;
if (c === null || c === undefined) {
  c = 30;
} // conditional statement if c is null or undefined then c = 20

c = c ?? 30; // shorthand conditional statement meaning:
//if c is null or undefined, then c = 20

c ??= 30; // even shorter conditional using the ??= logical assignment.

console.log(c); // will print 30
