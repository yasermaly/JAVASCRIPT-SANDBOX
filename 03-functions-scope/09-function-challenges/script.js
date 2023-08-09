/*
Challenge 1

Create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

For bonus points, write it as a one line arrow function

Expected Result:

console.log(getCelsius(32)); // 0
You can make the output look prettier by putting it into a string. You can even add \xB0 (degrees) and a C in front of the celsius temperature.

console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// The temperature is 0 °C
Hints:

The formula for Fahrenheit to Celsius is (F - 32) * 5 / 9
*/

// SOLUTION:

const getCelsius = (f) => (f - 32) * (5 / 9);

console.log(`The temperature of 80\xB0F in Celsius is ${getCelsius(80)}\xB0C`); //

/*
Challenge 2

Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

Expected Result:

console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }
Hints:

You can use Math.min() and Math.max() to get the min and max of a list of numbers.
You can use the Spread ... operator to spread the values of an array into separate arguments.

*/

// SOLUTION:

const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const obj = {
    minimum: min,
    maximum: max,
  };
  console.log(obj);
};

minMax([56, 2, 100, 42, 17, 31, 79, 86]);

/*
Challenge 3

Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle then outputs it to the console in a message as soon as the page loads.

Expected Result:

// On page load
The area of a rectangle with a length of 10 and a width of 5 is 50.
Hints:

The area of a rectangle is length * width. These should get passed into the IIFE as arguments.
You do not have to return anything from this function, just log to the console.
*/

// SOLUTION:

((l, w) => {
  console.log(
    `The area of a rectangle with a length of ${l} and a width of ${w} is ${
      l * w
    }`
  );
})(10, 5);
