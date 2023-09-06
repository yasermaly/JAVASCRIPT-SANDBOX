// Parent class
class Shape {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log('Shape Name: ' + this.name);
  }
}

// Sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect);
rect.logName();

const cir = new Circle('cir 1', 30);
cir.logName();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);
