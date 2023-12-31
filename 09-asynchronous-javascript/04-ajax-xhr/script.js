const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json'); // this will get the data from the json file in the folder
xhr.open('GET', 'http://api.github.com/users/bradtraversy/repos'); // this will get the data from this link

/*
readyState has 5 possible values:
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready 
*/

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

xhr.send();
