// MAP
// a high order method that creates a NEW array with the results of calling a provided function on every element in the array.

const numbers = [1, 4, 9, 16];
const timesTwo = numbers.map((number) => number * 2);
console.log(timesTwo); // will log a new array [2,8,18,32] to the console.

// let's try it with forEach loop:

const double = [];
numbers.forEach((number) => double.push(number * 2));
console.log(double); // here we had to create the array first because a forEach loop doesn't return an array by default like map does.

// REMEMBER: map() ALWAYS RETURNS A NEW ARRAY.

// mapping through an array of objects:

const companies = [
  { name: 'Company 1', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company 2', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company 3', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company 4', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company 5', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company 6', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company 7', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company 8', category: 'Technology', start: 2011, end: 2011 },
  { name: 'Company 9', category: 'Retail', start: 1981, end: 1989 },
];

// create an array of company names:
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// create an array with just company and category:
const companyAndCategory = companies.map((company) => {
  return { name: company.name, category: company.category };
});
console.log(companyAndCategory);

// create an array of the name and length of each company in years:
const companyYears = companies.map((company) => {
  return { name: company.name, length: company.end - company.start };
});
console.log(companyYears);

// We can chain map() methods:
// create an array that calculates the square root of each value in the numbers array and then multiplies it by 2:
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);
console.log(squareAndDouble);

// chaining different high order methods:
// filtering the even numbers then mulitplying by 2:

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenDouble);
