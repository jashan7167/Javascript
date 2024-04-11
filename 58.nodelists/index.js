let buttons = document.querySelectorAll("#myButton");
console.log(buttons);

//use foreach with the nodelist

// buttons.forEach((element) => {
//   element.style.backgroundColor = "green";
//   element.textContent += " haha";
// });

//adding an event listener to each of the button
// buttons.forEach((element) => {
//   element.addEventListener("click",event=>
// {
//   event.target.style.backgroundColor = "tomato"
// })
// });

//using mouseover : means hovering over the button
// buttons.forEach((element) => {
//   element.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "salmon";
//   });
// });

// buttons.forEach((element) => {
//   element.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "aqua";
//   });
// });

const newButton = document.createElement("button"); //step1 create the button
newButton.textContent = "Button 5";
newButton.id = "myButton"; //add the id as the existing to have the existing styles of the buttons
document.body.appendChild(newButton); //step 3

buttons = document.querySelectorAll("#myButton");

console.log(buttons); //to check if the new element is added or not

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll("#myButton"); //manually updating the nodelist

    console.log(buttons); //even uf we remove the buttons they are still within the nodelist they we have to update that manually
  });
});

