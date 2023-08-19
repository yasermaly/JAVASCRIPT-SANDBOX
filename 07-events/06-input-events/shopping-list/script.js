const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);

function onFocus() {
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';
}
itemInput.addEventListener('focus', onFocus);

function onBlur() {
  itemInput.style.outlineStyle = 'none';
}
itemInput.addEventListener('blur', onBlur);

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'checked' : 'unchecked';
}
checkbox.addEventListener('input', onChecked);
