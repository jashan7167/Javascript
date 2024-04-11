//create a nodelist

let buttons = document.querySelectorAll("#myButton");

buttons.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    element.classList.add("hover");
  });
  element.addEventListener("mouseout", (event) => {
    element.classList.remove("hover");
  });
});
buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    element.classList.add("enabled");
    element.addEventListener("click", (event) => {
      element.classList.replace("enabled", "disabled");
    });
  });
});
// buttons.forEach((element) => {
// });

//you can also use the .toggle method also
