const age = 19;

if (age <= 18) {
  console.log('You can vote');
} else {
  console.log('You can not vote');
} // regular if statement

// Using a ternary operator to shorthand the if statement:

age >= 18 ? console.log('You can vote') : console.log('You can not vote');

// it's 3 parts:
// part one is the condition. age >= 18
// part two is the ? ask the question: is this condition true? if yes do the following.
// part three is the : which means: IF NOT, do the following. (like what the else does in an if statement).

// assigning a conditional value to a variable using the ternary operator:

const canVote = age >= 18 ? true : false;
// if the age is greater than or equal to 18, assign the value true to canVote, if not assign false.

// if we wanna do multiple things using the ternary operator:
// we place the commands in ()

// let's see multiple commands in an if statement first:

const auth = true;
// let redirect;
// if (auth) {
//     alert('Welcome to the dashboard')
//     redirect = '/dashboard'
// } else {
//     alert('Access Denied')
//     redirect = '/login'
// }
// here we want two things: the alert, and assigning a value to the redirect variable.

// Here's how it's done using the ternary operator:

const redirect = auth
  ? (alert('Welcome to the dashboard'), '/dashboard')
  : (alert('Access Denied'), '/login');
