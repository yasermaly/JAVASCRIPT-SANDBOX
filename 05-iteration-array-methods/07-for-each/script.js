// for each loop:
// for each is higher order function. Meaning it takes one or  function as its argument, or returns a function as a result.

const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'];

console.log(socials.__proto__); // prints all the methods that can be uesd on arrays.

socials.forEach(function (social) {
  console.log(social);
}); // using the for each loop to iterate over socials and log each element to the console.

// we can use shorter syntax using an arrow function:

socials.forEach((social) => console.log(social));

// for each can also take the index as the second argument, and the whole array as the third argument.

const fruits = ['orange', 'apple', 'pear', 'mango', 'banana'];

fruits.forEach((fruit, index, arr) => console.log(fruit, index, arr));
// this will iterate over the array and print each element, its index, then the whole array.

// so far we've passed in anonymous functions as arguments, but for each can also take a named function:

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'black'];

const logColors = (color) => {
  console.log(color);
};

colors.forEach(logColors);

// for each on an array of objects:

const socialObjs = [
  { name: 'Twitter', url: 'http://twitter.com' },
  { name: 'Facebook', url: 'http://facebook.com' },
  { name: 'Twitter', url: 'http://twitter.com' },
  { name: 'Linkedin', url: 'http://linkedin.com' },
];

socialObjs.forEach((social) => console.log(social.url));
