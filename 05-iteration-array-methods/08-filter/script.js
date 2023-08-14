// FILTER
// filter is another higher order function. It's used to filter out just the needed data from an array and puts it in a new array.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];
const filteredWords = words.filter((word) => word.length > 6);
console.log(filteredWords); // returns [exuberant, destruction]

// another example:
// we want to filter out all the odd numbers, and return all the even numbers in a new array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // returns [2,4,6,8,10]

// filter an array of objects:

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

// Get only retail companies:
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005:

const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
console.log(earlyCompanies);

// Get companies that lasted 10yrs or more:

const decadeOrMore = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(decadeOrMore);
