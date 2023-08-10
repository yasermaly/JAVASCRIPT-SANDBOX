// if statement:

if (true) {
  console.log('This is true');
} // returns 'This is true'

if (false) {
  console.log('This is not true');
} // won't log to the console because the condition wasn't met.

const x = 10;
const y = 5;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
} // will print '10 is greater than 5' because the condition was met.

// if else statement:

if (x === y) {
  console.log(`${x} is equal to ${y}`); // won't log because the condition wasn't met.
} else {
  console.log(`${x} is not equal to ${y}`); // will log because the condition was met.
}
