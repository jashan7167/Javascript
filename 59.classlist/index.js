const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");

myButton.addEventListener("mouseover", (event) => {
  myButton.classList.add("hover");
});
myButton.addEventListener("mouseout", (event) => {
  myButton.classList.remove("hover");
});

let clickcount = 0;

myButton.addEventListener("click", (event) => {
  // if(clickcount%2==0)
  // {
  //   event.target.classList.replace("enabled","disabled")
  //   clickcount++;
  // }
  // else
  // {
  //   event.target.classList.add("enabled");
  //   clickcount++;
  // }
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += " mushroom";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
