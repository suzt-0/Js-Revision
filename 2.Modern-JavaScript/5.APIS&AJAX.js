// API or Application programming Interface is a common method of exchanging data 
// between any two points of a systems, modules, or whatever it may be.



//How Apis are used in JS 

//In JavaScript, the term API (Application Programming Interface) refers to a set of functions 
// and objects that allow JavaScript code to interact with and control various resources, 
// both within the browser and in the broader runtime environment (like Node.js).

// Essentially, APIs are the tools that let your JavaScript code do things beyond simple logic and calculations.






//Fetching Data
//Fetching data from a public API (JSONPlaceholder)

// Step 1: Create an async function to handle the API call
// Using async allows us to use "await" for cleaner asynchronous code
async function fetchUsers() {

  try {
    // Step 2: Use the fetch() method to send a GET request to the API
    // fetch() returns a Promise that resolves to the Response object
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Step 3: Check if the response was successful (status code 200–299)
    if (!response.ok) {
      // If not successful, throw an error to be caught in the catch block
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Step 4: Convert the response body to JSON
    // The .json() method also returns a Promise
    const users = await response.json();

    // Step 5: Work with the fetched data (print to console for now)
    console.log("Fetched Users:", users);

  } catch (error) {
    // Step 6: Handle any errors that occur during the fetch
    // This includes network errors, bad URLs, or JSON parsing issues
    console.error("Error fetching users:", error.message);
  }
}

// Step 7: Call the function
fetchUsers();


//Sending data to an API using POST

async function createUser() {
  try {
    // Step 1: Prepare the data you want to send to the server
    const newUser = {
      name: "Lal lallu",
      email: "lalu@example.com"
    };

    // Step 2: Use fetch() with method "POST" and include body & headers
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: "POST", // Specifies HTTP method
      headers: {
        "Content-Type": "application/json" // Tell server we are sending JSON data
      },
      body: JSON.stringify(newUser) // Convert JS object to JSON string
    });

    // Step 3: Convert response to JSON
    const result = await response.json();

    // Step 4: Log the result to see what the API returns
    console.log("User created:", result);

  } catch (error) {
    // Step 5: Handle possible errors
    console.error("Error creating user:", error.message);
  }
}

// Step 6: Call the function
createUser();



//*************************************************************************************************** */

//AJAX
// old but still important way to create http requests to api end points 
//will not work with node
//GET request using AJAX (XMLHttpRequest)
 


// all of the below will work in browser but isnot recognized by the node.js or other servers

// Step 1: Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Step 2: Define the API URL you want to call
let url = "https://jsonplaceholder.typicode.com/users";

// Step 3: Initialize the request
// open(method, url, async)
// - method: HTTP method ("GET", "POST", etc.)
// - url: API endpoint
// - async: true means the request is asynchronous
xhr.open("GET", url, true);

// Step 4: Define what to do when the response is ready
xhr.onload = function () {
  // Check if the HTTP status code is OK (200 means success)
  if (xhr.status === 200) {
    // Parse JSON text into JavaScript object
    let users = JSON.parse(xhr.responseText);
    console.log("Fetched Users:", users);
  } else {
    console.error("Error fetching data. Status:", xhr.status);
  }
};

// Step 5: Define what to do if there is a network error
xhr.onerror = function () {
  console.error("Network Error");
};

// Step 6: Send the request to the server
xhr.send();
