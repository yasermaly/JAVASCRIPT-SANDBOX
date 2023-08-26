// In this function we use a try catch block to handle the error in an async await function

const getUsers = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await response.json();

    const response = await fetch('http://httpstat.us/404');
    const data = await response.text();
    if (!response.ok) {
      throw new Error('Request failed');
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getUsers();

// here we will catch the error outside the function when we call it, without a try catch block

const getPosts = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const data = await response.json();

  const response = await fetch('http://httpstat.us/404');
  const data = await response.text();
  if (!response.ok) {
    throw new Error('Request failed');
  }
  console.log(data);
};
getPosts().catch((error) => console.log(error));
