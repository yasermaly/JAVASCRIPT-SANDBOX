const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttrbiute = ('title', 'My Element');

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);

console.log(div);
