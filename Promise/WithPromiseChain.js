const fetch = require('node-fetch');
const fetchPromise = fetch('https://catfact.ninja/fact');

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data.fact);
});