// we wanna create a function to add a new list item to this the list

// quick & dirty way:

function createListItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
  document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');

// clean & performant way:

function createNewItem(item) {
  const li = document.createElement('li');
  const text = document.createTextNode(item);
  li.appendChild(text);

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  button.appendChild(icon);

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

createNewItem('Cheese');
