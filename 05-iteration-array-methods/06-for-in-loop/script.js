// for in loop:

// on an object:

const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

for (let key in colorObj) {
  console.log(key, colorObj[key]);
}

// on an array:

const colorArr = ['red', 'blue', 'orange', 'green'];

for (color in colorArr) {
  console.log(colorArr[color]);
}
