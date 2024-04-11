const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.gap = "10px";
const button = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

button.addEventListener("click", (event) => {
  const imgVisibility = window.getComputedStyle(myImg).visibility;
  myImg.style.visibility = imgVisibility === "visible" ? "hidden" : "visible";
});
//the thing is that we are using visibility here because visiblility property still reserves the space the element was occupying