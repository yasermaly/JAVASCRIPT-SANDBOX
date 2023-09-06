// function Rectangle(height, width) {
//   this.height = height;
//   this.width = width;
// }

// Rectangle.prototype.area = function () {
//   return this.height * this.width;
// };

// Rectangle.prototype.perimeter = function () {
//   return 2 * (this.height + this.width);
// };

// Rectangle.prototype.isSquare = function () {
//   return this.height === this.width;
// };

// Rectangle.prototype.logArea = function () {
//   console.log('Rectangle Area: ' + this.area());
// };

class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    console.log('Ran');
  }
  area() {
    return this.height * this.width;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
  isSquare() {
    return this.width === this.height;
  }
  logArea() {
    console.log('Rectangle Area: ' + this.area());
  }
}

const square = new Rectangle('Square', 20, 20);
const square2 = new Rectangle('Square2', 20, 20);
console.log(square);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.logArea();
