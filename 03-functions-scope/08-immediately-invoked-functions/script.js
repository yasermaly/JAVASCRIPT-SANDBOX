// Syntax for and Immediately Invoked Function Expression(IIFE):
// write the function inside brackets.
// then after the closing bracket, write another pair of brackets to invoke the function.

(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IFFE');
  hello();
})();

// The above function has no paramerters. we passed the data into the console.log

// We can pass a parameter into the function and then call it in the brackets at the end:

(function (name) {
  console.log('Hello ' + name);
})('Yaser');

// both of the above functions are anonymous. meaning they don't have a name.
// Here's an example of a named:

(function hello() {
  console.log('Hello');
})();
