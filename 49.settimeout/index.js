// setTimeout(timeoutId) used to cancel a timeout before it triggers

//clearTimeout(timeout)

// function sayHello() {
//   window.alert("Hello");
// }

// setTimeout(sayHello, 3000); //hello function will be executed after 3000 milli seconds

// setTimeout(() => window.alert("Hello"),3000); //using arrow function

// const timeoutId = setTimeout(() => window.alert("Hello"),1000);
// clearTimeout(timeoutId);
let timeoutId;
function startTimer() {
  console.log("STARTED");
  timeoutId = setTimeout(() => window.alert("Hello"), 3000); //give it the timeout id so that we can clear it afterwords
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}
