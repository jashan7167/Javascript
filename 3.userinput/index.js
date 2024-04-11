//How to accept user input

// Method 1: Easy way = window prompt
// Method 2: Professional way = Html-textbox


// Method 1: Easy way = window prompt
// let username;

// username = window.prompt("Enter your username");

// console.log(username);


// Method 2: Professional way = Html-textbox

let username;
document.getElementById("mySubmit").onclick = function() {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").innerText =  `Hello ${username}`;
}
