// while loop:
// it's like a for loop, but the variable and the increment are set outside of it.

let i = 0;

while (i <= 20) {
  console.log('Number ' + i);
  i++;
}

// while loop over arrays:

let y = 0;
const arr = [10, 20, 30, 40];

while (y < arr.length) {
  console.log(arr[y]);
  y++;
}

// Nesting while loops:

let x = 1;

while (x <= 5) {
  console.log('Number ' + x);

  let j = 1;
  while (j <= 5) {
    console.log(`${x} * ${j} = ${x * j}`);
    j++;
  }
  x++;
}

// do while loop:
// do while loops will always run at least once even if the condition is false.
let z = 30;
do {
  console.log('Number ' + z);
  z++;
} while (z <= 20);
// this while loop will print 30 even though 30 is bigger than 20.

// we can use the break; and continue; keywords with while and do while loops just like with for loops.
