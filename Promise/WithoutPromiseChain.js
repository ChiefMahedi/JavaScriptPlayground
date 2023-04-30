const fetch = require('node-fetch');
const fetchPromise = fetch('https://catfact.ninja/fact');
fetchPromise.then((response) => {
    console.log(response)
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data.fact);
    });
});