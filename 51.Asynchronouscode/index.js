//synchronous = Executes line by line consecutively in a sequential manner code that waits for an operation to complete

//asynchronous = Allows multiple operations to be performed concurrently without waiting Doesnt block the execution flow and allows the program to continue (IO operations , network requests , fetching data )
//Handled with : Callbacks,Promises,Async/Await

// setTimeout(() => console.log("Task1"), 3000); //setTimeout is one if the async function thats why it happens at the end when all the console.log are completed
//synchronous code
// console.log("Task1");
// console.log("Task2");
// console.log("Task3");
// console.log("Task4");

console.log(".......");
function func1(callback) {
  setTimeout(() => {
    console.log("Task1");
    callback();
  }, 3000);
}

function fun2() {
  console.log("Task2");
  console.log("Task3");
  console.log("Task4");
}

func1(fun2);

// so here with the callbacks we handeled the execution flow such that the fun2 executes afterwords so when we want something to execute afterwords we create a function use callbacks
