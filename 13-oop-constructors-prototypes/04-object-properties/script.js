function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 30);
const rect2 = new Rectangle('Rectangle 2', 20, 30);

console.log(rect1.name, rect2.width);
console.log(rect1['width']);

rect1.color = 'red'; // adds a new key/property of color to the rect1 object with a value of 'red'.

rect2.perimeter = () => 2 * (rect2.width + rect2.height); // adds a new key of perimeter to rect 2 with the function as the value.

console.log(rect2.perimeter());
console.log(rect2);

delete rect2.perimeter; // deletes the property perimeter
console.log(rect2);

//check for property
console.log(rect2.hasOwnProperty('color')); // boolean result true if the argument is a property of rect 2
console.log(rect1.hasOwnProperty('color'));

// get keys
console.log(Object.keys(rect1));
console.log(Object.keys(rect2));

// get values
console.log(Object.values(rect1));
console.log(Object.values(rect2));

// get entries (both keys & value pairs)
console.log(Object.entries(rect1)); // prints an array of arrays each containing each key/value pair
