const fetch = require('node-fetch');
const fetchPromise = fetch('https://catfact.ninja/fact');

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");