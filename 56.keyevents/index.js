//events : keydown , keyup

// document.addEventListener("keydown", (event) => {
//   // document.body.textContent="Oh yeahhh";
//   // console.log(`Key-down = ${event.key}`);
//   document.getElementById("myBox").innerHTML = "&#128514;";
//   myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", (event) => {
//   // console.log(`Key up : ${event.key}`);
//   document.getElementById("myBox").innerHTML = "&#128513;";
//   myBox.style.backgroundColor = "lightcoral";
// });

//lets move the element using arrow keys

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  // document.body.textContent="Oh yeahhh";
  // console.log(`Key-down = ${event.key}`);
  document.getElementById("myBox").innerHTML = "&#128514;";
  myBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", (event) => {
  // console.log(`Key up : ${event.key}`);
  document.getElementById("myBox").innerHTML = "&#128513;";
  myBox.style.backgroundColor = "lightcoral";
});
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault(); //this will prevent the appearance of the scroll-bar just the emoji disappears from the screen
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
  }
  myBox.style.top = `${y}px`;
  myBox.style.left = `${x}px`;
});
