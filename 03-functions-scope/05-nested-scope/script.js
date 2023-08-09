// NESTED SCOPE:

//in a function:

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}

first(); // this will return 300 because a function can access a variable from its parent funtion.
// HOWEVER, a parent function cannot access a variable from its child function!

// in a block: (works the same way as in a function)

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y); // this will return 300 because the child block can access a variable created in the parent block.
  }
}
// so if we try to console.log(y) outside of the second block, it will throw an error.
