const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

console.log(post);

// Converting an object to a JSON object:
// use the JSON.stringify() method on the object to convert:

const str = JSON.stringify(post);

// This works for arrays as well:

const posts = [
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
  {
    id: 3,
    title: 'Post Three',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

// Now both post and posts are in JSON format stored in str and str2 respectively.

//----------------------------------------------------------------//

// converting a JSON object back into a regular object:
// use the parse() method on the JSON object. Parse just means to analyse. ie: to conform something into the rules of a language.

const obj = JSON.parse(str);
const obj2 = JSON.parse(str2);

console.log(obj);
console.log(obj2);
