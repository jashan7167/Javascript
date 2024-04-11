//element selectors = Methods used to target and manipulate html elements they allow you to select one or multiple html elements they allow you to select one or multiple html elements from the DOM(Document object model)

//1.document.getElementbyID() //element or null
//2.document.getElementClassName() html collection
//3 document.getElementbyTagName() //html collection
//4 document.querySelector() //element or null
//5.document.querySelectorAll() //nodelist

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits"); //returns a html collection sort of like an array but not like that

console.log(fruits); //html collectionw with three elements inside it

// use enhanced for loop
// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "yellow";
// }

//html collection dont have for each method what we can do is that we can typecast it as array

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});

//using tagName

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
console.log(h4Elements);

h4Elements[0].style.backgroundColor = "yellow";

for (let h4s of h4Elements) {
  h4s.style.backgroundColor = "red";
}

for (let li of liElements) {
  li.style.backgroundColor = "orange";
}

// Arrays.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.color = "white";
// });
// Arrays.from(liElements).forEach((liElement) => {
//   liElement.style.color = "white";
// });

//using query selector

const element = document.querySelector(".fruits"); //select the first match

element.style.color = "red"; //selects the first tag element with class of fruits

const fruits2 = document.querySelectorAll("fruits"); //selects all li elements

//HTML collections are live and they will update in the dom

fruits[1].style.color = "white";

const foods = document.querySelectorAll("li");
for (let li of foods) {
  li.style.color = "beige";
}

//node lists do have for each method
foods.forEach((food) => {
  food.style.backgroundColor = "crimson";
});
