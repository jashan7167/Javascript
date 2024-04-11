// Promise = An object that manages asynchronous operations
// Wrap a promise object around an asynchronous operation
// "i promise to return a value in the future"
//pending -> resolved / fulfilled or rejected
//new Promise(resolve,reject)=>{async operation}

//do these chores in order

//1. walk the dog
//2. clean the kitchen
//3. take out the trash

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve("walked the dog");
      } else {
        reject("you didnt walked the dog");
      }
    }, 1500);
  });
}
function takeoutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashtaken = false;
      if (trashtaken) {
        resolve("taken out the trash");
      } else {
        reject("didnt take out the trash");
      }
    }, 500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("clean the kitchen");
    }, 2500);
  });
}

//use of promises to make the code more readable and maintainable and execute the tasks in order
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeoutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("All tasks are completed");
  });
