fetch('http://httpstat.us/200')
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log('success');
  });

// test with response.ok
fetch('http://httpstat.us/404')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });

fetch('http://httpstat.us/500')
  .then((response) => {
    if (response.status === 400) {
      throw new Error('Not Found');
    } else if (response.status === 500) {
      throw new Error('Server error');
    }
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });

//the catch runs on a network error
fetch('http://hello123.net')
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });
