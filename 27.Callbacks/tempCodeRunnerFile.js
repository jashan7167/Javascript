//callback = a function is passed as an argument to another function

// used to handle asynchronous operation:
// Reading a file
// Network Requests
// Interacting with databases

//Hey,when you are done call this next

// hello();
// goodbye();

// function hello() {
//   setTimeout(function () {
//     console.log("Hello");
//   }, 3000);
// }

// function goodbye() {
//   console.log("Goodbye!");
// }

//what we are doing here is we are pretending that our hello function takes some time to complete

//using callback
//passs goodbye function into the hello function

function hello1(callback) {
  console.log("Hello");
  callback();
}

function wait() {
  console.log("Wait");
}

function leave() {
  console.log("leave!");
}

function goodbye1() {
  console.log("Goodbye!");
}

hello1(goodbye1);
