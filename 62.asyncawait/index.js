// async / await is a new way to write asynchronous code. It's built on top of promises, and allows you to write asynchronous code that looks synchronous.
//async = makes a function return a promise
//await = makes an async function wait for a promise

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
async function doChores() {
  try {
    const walkDogValue = await walkDog();
    console.log(walkDogValue);

    const cleanKitchenValue = await cleanKitchen();
    console.log(cleanKitchenValue);

    const takeoutTrashValue = await takeoutTrash();
    console.log(takeoutTrashValue);

    console.log("All tasks are completed");
  } catch (error) {
    console.log(error);
  }
}

doChores();
//await makes the async function to wait for the promise to be returned and then goes to the next line
