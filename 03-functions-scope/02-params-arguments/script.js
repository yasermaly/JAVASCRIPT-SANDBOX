// Default Parameter:

// The default parameter in the function below is user = 'Bot'
// So if we don't provide an argument in registerUser(); 'Bot' will be used as the default parameter.
// But if we provide an argument, it will be used instead of Bot.

function registerUser(user = 'Bot') {
  return user + ' is registered';
}
console.log(registerUser()); // Retruns Bot is registered
console.log(registerUser('Dave')); // Returns Dave is registered

// Rest Parameter:

// The rest parameter syntax ... allows a function to accept an indefinite number of arguments as an array.
// meaning that it turns any values you put in the argument into an array.

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7)); // returns 28

// Objects as parameters:

const user = {
  id: 1,
  name: 'John',
};

function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}
console.log(loginUser(user)); // returns 'The user John with the id of 1 is logged in.
// OR
console.log(loginUser({ id: 2, name: 'Sarah' })); // returns 'The user Sarah with the id of 2 is logged in.

// Arrays as parameters:
// We're creating a function that gets a random number from an array that we pass in as an argument.

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length); // generates a random number between 1 to 10(which is the length of the array)
  const item = arr[randomIndex]; // takes the random number and applies to the array as its index stored in a variable called item
  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // getRandom will return a random index value every time it runs.
