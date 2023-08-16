// querySelectorAll();

const listItems = document.querySelectorAll('.item');
console.log(listItems); // this will give us a node list which is like an array structure.
console.log(listItems[1].innerText);

// nodelists cannot be altered collectively:
// listItems.style.color = 'red'; // this will throw an error
// but we can edit them individually:
// listItems[1].style.color = 'red'; // this will change the second list item color to red.

// if we want to change all the list items to red, we would need to use a loop:

// listItems.forEach((item) => (item.style.color = 'blue')); // this will change all item colors to blue.

// listItems.forEach((item, index) => {
//   item.style.color = 'blue'; // this will change all item colors to blue.
//   if (index === 1) {
//     item.remove(); // this will remove the index [1] which is orange from the list.
//   }
//   if (index === 0) {
//     item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`; // this will change the markup of the [0] index from Apples to Oranges
//   }
// });

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText); // logs Oreos

const listItemsArray = Array.from(listItems2); // we need to convert listItems2 to an array to be able to loop over it since getElementsbyClassName returns an html collection.

listItemsArray.forEach((item) => {
  console.log(item.innerText);
}); // this will loop over all items and log each on to the console.

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3); // returns an html collection.
console.log(listItems3[0].innerText); // logs Apples.
