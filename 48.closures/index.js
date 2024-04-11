//closure = A function inside of other function the inner function has access to the outer function's variables and scope of the outer function
//Allow for private variables and state maintenance
//Used frequenty in Js frameworks : React, Angular, Vue
//function based components

function outer() {
  let message = "Hello";
  function inner() {
    console.log(message);
  }

  inner(); //call the inner function after invoking the outer function
}

outer(); //call the outer function
//--normal way---
let count = 0; //like this anyone can change the count value
//avoid it using the closures

function increment() {
  count++;
  console.log(`Count increased to ${count}`);
}

//--closure example---
function createCounter() {
  let count = 0; //this way no one can change the count value
  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }
  return {
    increment,
  };
}

const counter = createCounter(); //assign the function to a variable

counter.increment(); //as we return an object we can call the increment function
counter.increment();
counter.increment();

console.log(counter.count); //undefined as we are not returning the count value hence we dont know what it is its hidden
