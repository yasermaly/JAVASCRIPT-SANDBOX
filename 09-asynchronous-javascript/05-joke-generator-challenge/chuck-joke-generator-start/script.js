const jokeBtn = document.getElementById('joke-btn');
const div = document.getElementById('joke');

function generateJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // console.log(JSON.parse(this.responseText));
      div.innerHTML = JSON.parse(this.responseText).value;
    } else {
      div.innerHTML = 'Something went wrong (Not Funny)';
    }
  };
  xhr.send();
}

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
