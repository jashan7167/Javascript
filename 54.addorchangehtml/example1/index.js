// Example-1 <h1>

//Step-1 create the element
const newH1 = document.createElement("h1");
//Step-2 add attributes/properties
newH1.textContent = "I LIKE SUBS";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
//Step-3 append element to the dom
// document.body.append(newH1);

// document.body.prepend(newH1);
//we can also select by id after changing the attributes of the element

// document.getElementById("box1").append(newH1); //So now our element will be in the box1
// we can prepend it so that this h1 element is the firstchild
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1,box2); //inserting an element before the element newH1

const boxes = document.querySelectorAll(".box");
// boxes.forEach(let box of boxes)
// {
//   document.body.insertBefore(newH1,box);
// }
// document.body.insertBefore(newH1, boxes[0]);

//remove html element
// document.body.removeChild(newH1); //now if the newH1 element is in the box1 element we have to remove it from there not from the body
//because then box-1 would be the direct parent
//lets try that
document.getElementById("box1").append(newH1);
document.getElementById("box1").removeChild(newH1);