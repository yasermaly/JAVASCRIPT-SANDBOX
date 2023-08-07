let x;
let y;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = true;

y = Object.keys(todo); // takes the keys from the object in the argument and retuns them in an array.
y = Object.values(todo); // takes the values from the object in the argument and returns them in an array.
y = Object.entries(todo); // takes BOTH keys & values from the object in the argument and returns them in an array of arrays.
y = todo.hasOwnProperty('name'); // returns boolean if the object has the argument as a key.
console.log(y);

const person = {
  address: {
    coords: {
      lat: 46.04395,
      lng: -71.2893457,
    },
  },
};

x = person.address.coords.lat; // returns the latitude

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

obj3 = { ...obj1, ...obj2 }; // spread operator on the obj1 and obj2 to combine their values into obje3
obj4 = Object.assign({}, obj1, obj2); // old syntax using the Object.assign to produce the same result as the spread operator.
x = obj3;

const todos = [
  { id: 1, name: 'buy milk' },
  { id: 2, name: 'pickup kids' },
  { id: 3, name: 'takout trash' },
];

x = todos.length;

console.log(x);
