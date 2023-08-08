// GLOBAL SCOPE:

// alert('Hello Yaser you are the man'); // the window object is a global object already programmed into JavaScript and has methods like alert() that can be applied to it.
// it is not necessary to type window.alert() you can just skipt window.

// console.log(innerWidth); // innerWidth is also one of the many methods that can be applied to the window object.

const x = 100;
console.log(x, 'in global');
// any variable declared outside a function will be accessible globally, as in anywhere in the document up or down.

function run() {
  console.log(innerHeight); // innerHeight is another window method.
  console.log(x, 'in function'); // here, x is accessed from within the function since it was declared in the global scope.
}
run();

// BLOCK SCOPE:

if (true) {
  console.log(x, 'in block'); // x is in the block scope. as in the block of code in this if statement.
}

// Function scope

function add() {
  const y = 50; // y is only available inside this function.
  const x = 150; // Variable shadowing: a locally declared variable with the same name x overwritting the value assigned in the global scope.
  console.log(y + x); // this will return 150
}
add();
