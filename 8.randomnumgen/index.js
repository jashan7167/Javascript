//random number

let randomNumber = Math.random() * 6; //generates a random number between 0 and 6
let randomNumber2 = Math.floor(Math.random() * 6); //generates a random number between 0 and 6 and rounds it down
let randomNumber3 = Math.floor(Math.random() * 6) + 1; //generates a random number between 0 and 6 and rounds it down and sets the minimum to 1
//create a equation to generate a random number
const min = 1;
const max = 6;
const myButton = document.getElementById("mybutton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = getRandomNumber;
function getRandomNumber() {
  randomNum1 = Math.floor(Math.random() *max) + min;
  randomNum2 = Math.floor(Math.random() *max) + min;
  randomNum3 = Math.floor(Math.random() *max) + min;
  myLabel1.textContent = randomNum1;
  myLabel2.textContent = randomNum2;
  myLabel3.textContent = randomNum3;
}



