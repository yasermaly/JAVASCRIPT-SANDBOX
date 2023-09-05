// a Constructor Function constructs objects. It's a blueprint that can be used over and over again.
// the constructor always starts with a capital letter.
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect1 = new Rectangle('Rectangle 1', 10, 20);
console.log(rect1.name, rect1.area());

const rect2 = new Rectangle('Rectangle 2', 30, 60);
console.log(rect2.name, rect2.area());

// a new object is created
// the constructor function is called with the arguments that we pass in
// the 'this' keyword is set to the new empty object
// the new object is returned from the constructor function
