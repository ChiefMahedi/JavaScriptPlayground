const fetch = require('node-fetch');
async function fetchFacts() {
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
const promise = fetchFacts();
promise
.then((data)=>{
    console.log(data[0].fact);
    console.log(data[1][0].name);
})
.catch((error)=>{
    console.error(`Error: ${error}`);
})
console.log("Starting fetching facts....");