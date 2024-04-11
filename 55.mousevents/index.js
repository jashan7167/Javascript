//event listener = listen for specific events to create interactive webpages
// events : click , mouseover , mouseout
// .addEventListener(click,callback)

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
// function changeColor(event) {
//   // console.log(event); gives the information about the event that occured
//   event.target.style.backgroundColor = "tomato"
//   event.target.textContent = "Ouch!!!"
// }
// myBox.addEventListener("click", changeColor);

//we can also do this using anonymus function or arrow function
myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Ouch!!!";
});

//when you hover
myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Dont do it!";
});
//when you focus out
myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightblue";
  event.target.textContent = "Click me!";
});

//for myButton
myButton.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Ouch!!!";
});

//when you hover
myButton.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Dont do it!";
});
//when you focus out
myButton.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightblue";
  event.target.textContent = "Click me!";
});
