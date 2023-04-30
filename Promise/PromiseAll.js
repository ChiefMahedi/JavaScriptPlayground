const fetch = require('node-fetch');
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://catfact.ninja/fact');

Promise.all([fetchPromise1, fetchPromise2])
.then((responses)=>{
  return Promise.all([responses[0].json(),responses[1].json()])
})
.then(data => {
  console.log('Response 1:', data[0][0].name);
  console.log('Response 2:', data[1].fact);
})
.catch((error)=>{
  console.log(error)
})