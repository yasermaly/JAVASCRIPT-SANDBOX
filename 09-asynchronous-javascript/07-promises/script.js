// a promise is an object that represents the eventual completion or failure of an asynchronous operation.

// to create a promise:
const promise = new Promise((resolve, reject) => {
  // do some async task
  setTimeout(() => {
    console.log('Async task 1 completed');
    resolve();
  }, 1000);
});

// .then handles the information coming in from the promise inside the resolve function argument.
promise.then(() => {
  console.log('promise consumed..');
});

// we can chain the .then to the promise:

new Promise((resolve, reject) => {
  // do some async task
  setTimeout(() => {
    console.log('Async task 2 completed');
    resolve({ name: 'Yaser', age: 40 });
  }, 1000);
}).then((user) => console.log(user)); // so here, user is referencing the data in the resolve argument and logs it.

// how to handle errors:

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: 'Yusef', age: 14 });
    } else {
      reject('Error: something went wrong');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user)) // this will log the data received from relove
  .catch((error) => console.log(error)) // this will catch the error and log it
  .finally(() => console.log('The promise has been resolved or rejected'));

console.log('Hello from global scope');
