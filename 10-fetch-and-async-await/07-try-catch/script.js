// used to handle errors

// this function will cause an error because x is not defined
// try {
//   console.log(x);
// } catch (error) {
//   console.log('Error: ' + error);
// }

//we can also create our own error with throw new Error:
const double = (number) => {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }
  return number * 2;
};

try {
  const y = double('x');
  console.log(y);
} catch (error) {
  console.log(error); // this will log x is not a number
}
