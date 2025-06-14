// Import Axios, a promise-based HTTP client that allows us to make requests to external servers or APIs
// ⬇️ Code here
const axios = require('axios');

// Create a data object representing the title and content of the new post
// This object will be sent to the server in the POST request body
// ⬇️ Code here
const data = {
  title: "New Post Title",
  content: "New Post Content"
};

// Make a POST request to the server at 'http://localhost:3000/posts'
// This sends the 'data' object as the body of the request to create a new post
// ⬇️ Code here
axios
  .post('http://localhost:3000/posts', data)
  .then((response) => {
    // If the request is successful, this block will run
    // We log the response from the server, which usually includes the created post
    // ⬇️ Code here
    console.log('Post created successfully:', response.data);
  })
  .catch((error) => {
    // If there's an error during the request (e.g., server is down or input is invalid), this block will run
    // We log the error to help with debugging
    // ⬇️ Code here
    console.error('Error creating post:', error);
  });
