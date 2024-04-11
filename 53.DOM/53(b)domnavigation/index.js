//dom navigation

//fruits , vegetables and desserts have three children each

//apple would be the first born orange would be the middle child and banana would be the last child

//firstElementChild
//lastElementChild
//nextElementChild
//previousElementChild
//parentElementChild
//.children

//-----------.firstElementChild------------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
//select first child of each ul and change their color
ulElements.forEach((ulElement) => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "crimson";
});

// -------------- lastElementChild -----------------

const element2 = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "orange";

//as ul elements is a node list hence we use forEach method
ulElements.forEach((ulELement) => {
  const lastChild = ulELement.lastElementChild;
  lastChild.style.backgroundColor = "aqua";
});

//------------------------.nextElementSibling----------

const element3 = document.getElementById("apple");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "brown";
const element4 = document.getElementById("fruits");
//next sibling to the fruit list is the vegetables list
const nextSibling2 = element4.nextElementSibling;
nextSibling2.style.backgroundColor = "brown";

//as every unordered list is a sibling to the body we can change the background color of each of them by doing this

//----------.children--------------------------

const element5 = document.getElementById("body");

const childrens = element5.children;

for (let child of childrens) {
  child.style.fontSize = "1.2rem";
  child.style.fontFamily = "SF Pro Display";
}

//----------------------.previousElementSibling------------

const element6 = document.getElementById("vegetables");
const prevSibling = element6.previousElementSibling;
prevSibling.style.backgroundColor = "purple";

//----------------.parentElement-------------

const element7 = document.getElementById("apple");
const parent = element7.parentElement;
parent.style.backgroundColor = "aqua";
