// l1
console.log(" Synchronous 1");

// L2
setTimeout(() => console.log(`Timeout 2`), 0);

// l3
Promise.resolve().then(() => console.log("Promise"));

// l4
console.log("Synchronous 4");

const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

promise
  .then((res) => res.json())
  .then((user) => console.log("happy", user.title));

console.log(" Sandwich Synchronouns");
