const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

// THE OBJECT ABOVE IS THE SAME AS BELOW:

const person2 = {
  firstName,
  lastName,
  age,
};

// If the both the key and the value are the same, you can write the object this way.

console.log(person.age);
console.log(person2.age);

// DESTRUCTURING OBJECTS: (basically means extracting in this context)

const todo = {
  id: 1,
  title: 'Take out trash',
  time: 'at night',
  user: {
    name: 'John',
  },
};

// instead of: const id = todo.id to extract the id key's value of 1 into a variable named id, we destructure with the following syntax:
// place the key that we want to store its value in a variable with the same name as the key in curly braces, and the object we want to destructure the key from after the = sign.

const { id } = todo;

console.log(id);

// we can create multiple variables and store their key values in them by placing more than one key between the curly braces.

const { time, title } = todo;
console.log(title, time);

// we can also go to deeper nesting levels in the object to get John's name:

const {
  user: { name },
} = todo;

console.log(name);

// we can rename a key using destructuring:

const { id: todoId } = todo;
console.log(todoId); // returns its key value of 1

// DESTRUCTURING ARRAYS:

const numbers = [23, 67, 33, 49];

// we use brackets for arrays instead of the curly braces used to destructure objects.
// the ... is call the rest operator and is used to store remaining values in the array.
// any word can be be used after the ... it doesn't have to be rest, that's just what the operator is called.

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
