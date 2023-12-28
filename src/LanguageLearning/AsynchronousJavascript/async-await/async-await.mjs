//Author: Mahedi Hassan Shawon
//Notes on this topic can be found on async-await.md
import fetch from 'node-fetch';
//Example 1:
async function fetchFacts() {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.fact);
    }
    catch (error) {
      console.error(`Could not get facts: ${error}`);
    }
  }
fetchFacts();
console.log("Starting....");

//Example 2:
async function fetchFacts2() {
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
const promise = fetchFacts2();
promise
.then((data)=>{
    console.log(data.fact);
})
console.log("Starting fetching facts....");

//Example 3:
async function fetchFacts3() {
    try {
      const fetchPromise1 = await fetch('https://catfact.ninja/fact');
      const fetchPromise2 = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      const data1 = await fetchPromise1.json();
      const data2 = await fetchPromise2.json();
      return [data1, data2];     
    }
    catch (error) {
      console.error(`Could not get response : ${error}`);
    }
  }
const promise2 = fetchFacts3();
promise2
.then((data)=>{
    console.log(data[0].fact);
    console.log(data[1][0].name);
})
.catch((error)=>{
    console.error(`Error: ${error}`);
})
console.log("Starting fetching facts....");