const itemInput = document.getElementById('item-input');

function onKeyPress(e) {
  console.log('keypress');
}
function onKeyUp(e) {
  console.log('keyup');
}
function onKeyDown(e) {
  console.log('keydown');
  // key
  console.log(e.key);
  // keyCode
  console.log(e.keyCode);
  // code
  console.log(e.code);

  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }
  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);
}

itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
