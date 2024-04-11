//Callback Hell = Situation in JavaScript where code is nested so deeply (due to multiple callbacks) that it becomes difficult to manage.
// It was a old pattern in JavaScript, but now we have Promises and async/await to avoid this situation.

function task1(callback) {
  setTimeout(() => {
    console.log("Task1 complete");
  }, 2000);
  callback();
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task2 complete");
  }, 1000);
  callback();
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task3 complete");
  }, 3000);
  callback();
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task4 complete");
  }, 1500);
  callback();
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All tasks are completed");
      });
    });
  });
});

//so thats the problem with the asysbchronous code they can complete at anytime and rest of your program will not wait for them
//so it already says all tasks are completed but the tasks are still running
//by this the order of the tasks is not maintained and it is difficult to manage the code
//and it depends upon the time taken by each task to complete
//this is called callback hell
