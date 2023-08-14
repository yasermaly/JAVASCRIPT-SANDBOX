// for of loop:

const items = ['book', 'table', 'chair', 'kite'];

// first let's see it in a for loop:

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
} // this will iterate over each item in the array and log it to the console.

// we can do the same thing with less code using a for of loop:

for (let item of items) {
  console.log(item);
}

// iterating over an array of objects using a for of loop:

const users = [{ name: 'John' }, { name: 'Kate' }, { name: 'Steve' }];

for (let user of users) {
  console.log(user.name);
}

// looping over strings using a for of loop:

const str = 'Hello World';

for (let letter of str) {
  console.log(letter);
}

// loop over maps using a for of loop:

const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('occupation', 'Lawyer');

for (let [key, value] of map) {
  console.log(key, value);
}
