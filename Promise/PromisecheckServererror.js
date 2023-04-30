const fetch = require('node-fetch');
const fetchPromise = fetch('https://catfact.ninja/fact');
fetchPromise
.then((res)=>{
    if(!res.ok)
    {
        throw new Error(`HTTP error: ${res.status}`);
    }
    return res.json();
})
.then((data)=>{
    console.log(data.fact);
});
