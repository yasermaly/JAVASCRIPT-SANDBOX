// HOW TO REPLACE ELEMENTS:

// First way:

function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');
  const li = document.createElement('li');
  li.textContent = 'Replaced First Item';

  firstItem.replaceWith(li);
}
replaceFirstItem();

// Second way:

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');
  secondItem.outerHTML = '<li>Replaced Second Item</li>';
}
replaceSecondItem();

// How to replace all items using a loop:

function replaceAllItems() {
  const lis = document.querySelectorAll('li');
  //   lis.forEach((item) => {
  // item.outerHTML = '<li>Replaced Items</li>'; // OR:
  // item.innerHTML = 'Replaced Items';
  //   });
  // OR: a shorter version of the loop:
  lis.forEach((item) => (item.innerHTML = 'Replaced Items'));
}
replaceAllItems();

// How to replace the h1 Shopping List header with an h2:

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List';
  header.replaceChild(h2, h1);
}
replaceChildHeading();
