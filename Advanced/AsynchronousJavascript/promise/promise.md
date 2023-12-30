# `Promise `in JavaScript

- A promise is an object returned by an asynchronous function, which represents the current state of the operation.
- At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.
- With a promise-based API, the asynchronous function starts the operation and returns a `Promise ` object. You can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed.

### Example 1: Using the `fetch() `API
```javascript
const fetchPromise = fetch('https://catfact.ninja/fact');
console.log(fetchPromise);
fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});
console.log("Started request…");
```
Outputs:
```shell
Promise { <pending> }
Started request…
Received response: 200
```
Here we are:
- calling the `fetch()` API, and assigning the return value to the `fetchPromise` variable
- immediately after, logging the `fetchPromise` variable. This should output something like: `Promise { <state>: "pending" }`, telling us that we have a `Promise` object, and it has a `state` whose value is `"pending"`. The `"pending"` state means that the fetch operation is still going on.
- passing a handler function into the Promise's `then()` method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a `Response` object, which contains the server's response.
- logging a message that we have started the request.
- Note that `Started request…` is logged before we receive the response. Unlike a synchronous function, `fetch()` returns while the request is still going on, enabling our program to stay responsive.
- The response shows the `200` (OK) status code, meaning that our request succeeded.

### Example 2: Using the `Promise.all()`
The promise returned by `Promise.all()` 
- is fulfilled when and if all the promises in the array are fulfilled. In this case, the `then()` handler is called with an array of all the responses, in the same order that the promises were passed into `all()`.
- is rejected when and if any of the promises in the array are rejected. In this case, the `catch()` handler is called with the error thrown by the promise that rejected.

```javascript
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
```
Outputs:
```shell
Response 1: baked beans
Response 2: The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to 218 kittens.
```

- If you don't use `return` in the first `.then()` function to return the Promise from the inner `Promise.all()` call, the outer Promise chain won't wait for the inner Promise chain to resolve before continuing to the next `.then()` function.

- So, using `return` is necessary here to ensure that the outer Promise chain waits for the inner Promise chain to resolve before continuing to the next `.then()` function.

### Example 3: Using the `Promise.any()`

- Sometimes, you might need any one of a set of promises to be fulfilled, and don't care which one. In that case, you want `Promise.any()`.
- This is like `Promise.all()`, except that it is fulfilled as soon as any of the array of promises is fulfilled, or rejected if all of them are rejected:
```javascript
Promise.any([fetchPromise1, fetchPromise2,fetchPromise3])
.then((responses)=>{
    console.log(`${responses.url}: ${responses.status}`);
})
.catch((error)=>{
  console.error(`Failed to fetch: ${error}`)
})
```
### Example 4: Catching Error
- To support error handling, `Promise `objects provide a `catch()` method. This is a lot like `then()`: you call it and pass in a handler function. 
- However, while the handler passed to `then()` is called when the asynchronous operation succeeds, the handler passed to `catch()` is called when the asynchronous operation fails.
```javascript
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
})
.catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
```
### Example 5: Chaining promises
- With the `fetch()` API, once you get a `Response` object, you need to call another function to get the response data.
- In this case, we want to get the response data as JSON, so we would call the `json()` method of the `Response` object.
- It turns out that `json()` is also asynchronous. So this is a case where we have to call two successive asynchronous functions.

Without promise chaining:
```javascript
fetchPromise.then((response) => {
  console.log(response)
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data.fact);
  });
});
```
With promise chanining
```javascript
fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data.fact);
});
```
- The elegant feature of promises is that `then()` itself returns a promise, which will be completed with the result of the function passed to it.
- Instead of calling the second `then()` inside the handler for the first `then()`, we can return the promise returned by `json()`, and call the second `then()` on that return value.
- This is called promise chaining and means we can avoid ever-increasing levels of indentation when we need to make consecutive asynchronous function calls.