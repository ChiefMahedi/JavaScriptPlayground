# `async await` in JavaScript

- The `async` keyword gives you a simpler way to work with asynchronous promise-based code
- Adding `async` at the start of a function makes it an async function:
- Inside an async function, you can use the `await` keyword before a call to a function that returns a promise.
- This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.
- This enables you to write code that uses asynchronous functions but looks like synchronous code. For example, we could use it to rewrite our fetch example:

### Example 1: Using async-await
- Here, we are calling `await fetch()`, and instead of getting a `Promise`, our caller gets back a fully complete `Response` object, just as if `fetch()` were a synchronous function!
- We can even use a `try...catch` block for error handling, exactly as we would if the code were synchronous.
```javascript
import fetch from 'node-fetch';
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
```
### Example 2: Not allowed!
- Note though that async functions always return a promise, so you can't do something like:
```javascript
import fetch from 'node-fetch';
async function fetchProducts() {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name);   // "promise" is a Promise object, so this will not work
```
Instead we have to do this:
```javascript
import fetch from 'node-fetch';
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
```
### Example 3: Fetching from multiple sources

```javascript
import fetch from 'node-fetch';
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
```