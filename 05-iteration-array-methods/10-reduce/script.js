// REDUCE:
/*
The reduce() method executes a user-supplied "reducer callback function
on each element of the array, in order, passing in the return value from the
previous calculation on the preceding element. The final result of running
the reducer across all elements of the array is a single value.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (acc, curr) {
  return acc + curr;
}, 100); // long form
console.log(sum); // logs 155

const sum2 = numbers.reduce((acc, cur) => acc + cur, 100); // short form
console.log(sum2); // logs 155

// SO, here, the 100 is the accumulator(or starting position of the calculation)
// the first iteration adds the 100 accumulator to the current value of 1. Making the new accumulator 101
// then the 101 accumulator is added to the current value of 2. making the new accumulator 103
// this continues one index after the next until the last element is added to the accumulator and the array is completed.
// the final single value produced is 155.

// using a for of loop to get the sum:
const sum3 = () => {
  let acc = 100;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};
console.log(sum3()); // logs 155

// Reducing an array of objects:
// we want to calculate the total price of all three objects:
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 175 },
];

const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(totalPrice);
