//arrays are a special type of object that can store multiple values in javascript

let fruits = ["apple", "orange", "banana", "grape", "mango"]; //make variable name plural hence fruits helps with readability

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//modify the value of an array

fruits[0] = "pear";

console.log(fruits);

//built in methods

fruits.push("kiwi"); //adds to the end of the array

console.log(fruits);

fruits.pop(); //removes the last element of the array

console.log(fruits);

fruits.unshift("kiwi"); //adds to the start of the array

console.log(fruits);

fruits.shift(); //removes the first element of the array

//push,pop (end) and shift,unsfhit (start) are faster than using the splice method

let numOfFruits = fruits.length; //length of the array
let index = fruits.indexOf("bana"); //index of the element in the array -1 if not found

console.log(index);
console.log(numOfFruits);

//looping through an array using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = fruits.length; i > 0; i--) {
  console.log(fruits[i]);
}

//using for each loop
fruits.forEach((element) => {
  console.log(element + " is a fruit");
});

//using for of loop
for (let fruit of fruits) {
  console.log(fruit);
}

//to sort an array

console.log(fruits.sort());
console.log(fruits.reverse());
