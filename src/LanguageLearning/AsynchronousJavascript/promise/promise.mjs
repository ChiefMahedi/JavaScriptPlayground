//Author: Mahedi Hassan Shawon
//Notes can be found on promise.md file
import fetch from "node-fetch";

//Example 1: Using the fetch() API
const fetchPromise = fetch("https://catfact.ninja/fact");
console.log(fetchPromise);
fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});
console.log("Started request…");

//Example 2: Using Promise.all()
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch("https://catfact.ninja/fact");
Promise.all([fetchPromise1, fetchPromise2])
  .then((responses) => {
    return Promise.all([responses[0].json(), responses[1].json()]);
  })
  .then((data) => {
    console.log("Response 1:", data[0][0].name);
    console.log("Response 2:", data[1].fact);
  })
  .catch((error) => {
    console.log(error);
  });

//Example 3:  Using Promise.all()
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

//Example 4: Using Promise.any()
Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    console.log(`${responses.url}: ${responses.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

//Example 5: Catching error
fetchPromise
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data.fact);
  })
  .catch((error) => {
    console.error(`Could not get facts: ${error}`);
  });
//Example 6: Chaining promises
fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data.fact);
});

//Without promise chaining:
fetchPromise.then((response) => {
  console.log(response)
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data.fact);
  });
});