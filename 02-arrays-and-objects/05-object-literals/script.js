/*
Object Literal:
A common data structure that holds key/value pairs.
*/

let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name; // dot notation to access data
x = person['age']; // bracket notation to access data
x = person.address.state; // chaining dots to access data in an object within an object
x = person.hobbies; // will return the whole hobbies array
x = person.hobbies[1]; // dot then braket notation to access data inside an array that's inside an object.

delete person.age; // deletes the age key along with its value.
person.hasChildren = true; // adds a the key hasChildren and its value (true).

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
}; // adds a function to the object called greet()

person.greet();

console.log(x);
