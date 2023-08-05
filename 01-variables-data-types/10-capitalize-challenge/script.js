// CHALLENGE: take this string 'developer' and capitalize just the d. then log to console.
const myString = "developer";
console.log(myString);

// Solution:
const myNewString = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString);
