// FOR LOOP:

// for ([initial expression]; [condition expression]; [increment expression]) {statement};

// Initial expression: Initializes a variable/counter
// condition expression: Condition that the loop will continue to run as long as it is met or until the condition is false.
// increment expression: Expression that will be executed after each iteration of the loop. Usually increments the variable.
// statement: code that will be executed each time the loop is run.
// to execute a block of code, use the {} syntax.

for (let i = 0; i <= 10; i++) {
  console.log('Number ' + i);
} // the for loop function will start with the giving i the value of 0 and console logging it.
// then it will look a the condition expression, since 0 is less than 10, it will move on to the increment expression.
// it will i++ to 1, then start the loop again because the condition of i being 10 or less has not yet been met.
// it will do this over and over, adding 1 and console logging from 0 until the value of i is 10. Then it will stop.

// we can add conditional statements into the statement block:

for (let i = 11; i <= 20; i++) {
  if (i === 13) {
    console.log('13 is my lucky number');
  } else {
    console.log('Number ' + i);
  }
}

// We can nest loops:

for (let i = 21; i <= 30; i++) {
  console.log('Number ' + i);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// looping through an array:

const names = ['brad', 'sam', 'sara', 'john', 'tim'];
for (let i = 0; i < names.length; i++) {
  if (names[i] === 'sara') {
    console.log('Sara is the best');
  } else {
    console.log(names[i]);
  }
}
