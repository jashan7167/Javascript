// Example-2 Creating a list element using javascript

const newListItem = document.createElement("li");

newListItem.textContent = "cocunut";
newListItem.id = "cocunut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// document.getElementById("fruitlist").append(newListItem); //now the list item will be appended to the unordered list

// document.getElementById("fruitlist").prepend(newListItem); //now the list item will be prepended to the unordered list

//so what it does is that it appends the coconut before the banana list item in the fruit list basically you select a parent and then insert before a child of that parent sort of thing
const bananalistitem = document.getElementById("banana");
// document.getElementById("fruitlist").insertBefore(newListItem, bananalistitem);

//if there were no id of list items
//create a nodelist and then you can access the list items using the index
const fruitli = document.querySelectorAll("#fruitlist li");
console.log(fruitli);
document.getElementById("fruitlist").insertBefore(newListItem, fruitli[2]);

