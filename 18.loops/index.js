//repeat some code while some condition is true

// let username = " "

// while(username === " "){
//     username = prompt("Enter your username")
// }

// console.log("Hello" + username);

// do
// {
//     username = prompt("Enter your username")
// }while(username === " " || username === null);

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Enter your username");
  password = window.prompt("Enter your password");

  if (username === "jashan" && password === "mypassword") {
    loggedIn = true;
    console.log("You are logged in");
  } else {
    console.log("Incorrect username or password");
  }
}
//only one variation now we will execute this atleast once

do
 {
  username = window.prompt("Enter your username");
  password = window.prompt("Enter your password");

  if (username === "jashan" && password === "mypassword") {
    loggedIn = true;
    console.log("You are logged in");
  } else {
    console.log("Incorrect username or password");
  }
}while (!loggedIn);



