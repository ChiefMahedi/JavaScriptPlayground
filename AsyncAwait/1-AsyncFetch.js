const fetch = require('node-fetch');
async function fetchFacts() {
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the parsed JSON object or throw an error
      const data = await response.json();
      console.log(data.fact);
      
    }
    catch (error) {
      console.error(`Could not get facts: ${error}`);
    }
  }
  
fetchFacts();
console.log("Starting....");