// remove the clear all button:

function removeClearButton() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}
removeClearButton();

// remove first list item:

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}
// removeFirstItem();

// removing item by index:

function removeItem(index) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${index})`);
  ul.removeChild(li);
}
removeItem(4);
