const fetch = require('node-fetch');
async function fetchFacts() {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;     
    }
    catch (error) {
      console.error(`Could not get facts: ${error}`);
    }
  }
const promise = fetchFacts();
promise
.then((data)=>{
    console.log(data.fact);
})
console.log("Starting fetching facts....");