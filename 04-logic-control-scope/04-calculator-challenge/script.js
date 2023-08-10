/*
Calculator Challenge
Now that you know how to write functions and use control structures like if statements and switches, let's try to write a simple calculator.

Instructions:

Create a function called calculator that takes three parameters: num1, num2 and operator. The operator can be +, -, * or /. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

Example:

calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '%') // returns an error message
*/

// SOLUTION:

const calculator = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 'Invalid operator';
  }
  console.log(result);
  return result;
};

calculator(15, 5, '+');
calculator(15, 5, '-');
calculator(15, 5, '/');
calculator(15, 5, '*');
calculator(15, 5, '&');
