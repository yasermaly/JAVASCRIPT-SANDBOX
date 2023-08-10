// When you run any JavaScript, a special environment is created to handle the transformatin and execution of code.
// This is called EXECUTION CONTEXT.
// It contains the currently running code and everything that aids in its execution.
// There is a global execution context as well as a function execution context for every function invoked.

// Execution Context Phases:

// Memory Creation Phase:
/*
1- Create the global object (browser = window, Node.js = global)
2- Create the 'this' object and bind it to the global object
3- Setup memory heap for storing variables and function references
4 - Store functions and variables in the global execution context and set to "undefined"
*/

// Execution Context Phase:
/*
1- Execute code line by line
2- Create a new execution context for each function call
*/

// variable x is allocated in memory and stored as "undefined" - Memory Phase
let x = 100;
// the value of 100 is placed into the x variable. - Execution Phase

// variable y is allocated in memory and stored as "undefined" - Memory Phase
let y = 50;
// the value of 50 is placed into the y variable. - Execution Phase

// getSum() function is allocated in memory and all the code inside it is stored. - Memory Phase
function getSum(n1, n2) {
  // n1 and n2 are assigned the values 100 and 50. - Execution Phase

  // n1 and n2 variables are allocated in memory and stroed as "undefined" - Memory Phase
  let sum = n1 + n2;
  // Caluclation is done and 150 is put into the sum variable. - Execution Phase

  // sum variable is allocated in memory and stored as "undefined" - Memory Phase
  return sum;
  // return tells the function Execution Context to return to the global Execution Context and value of sum (150). - Execution Phase
}
// skips the function because it wasn't called so there's nothing to execute - Execution phase (tied to line 32)

// sum1 variable is allocated in memory and stored as "undefined" - Memory Phase
let sum1 = getSum(x, y);
// returns the value from the getSum function and puts it into the sum1 variable. - Execution Phase

// sum2 variable is allocated in memory and stored as "undefined" - Memory Phase
let sum2 = getSum(10, 5);
// Opens another function execution context and does the same thing again with different arguments - Execution Phase
