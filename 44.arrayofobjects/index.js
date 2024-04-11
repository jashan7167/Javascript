const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 95 },
  { name: "banana", color: "yellow", calories: 105 },
];

//fruit[0] is an object which is destructured in the function
function displayFruits({ name, color, calories }) {
  console.log(`The ${name} is ${color} in color and has ${calories} calories`);
}

for (let obj in fruits) {
  displayFruits(fruits[obj]); // fruits[0], fruits[1], fruits[2], fruits[3], fruits[4]
}

fruits.push({ name: "grapes", color: "purple", calories: 62 });

console.log(fruits[5]);

//--------------------forEach--------------------
//for each will work on each and every element of the array and log it
fruits.forEach((fruit) => console.log(fruit));

fruits.forEach((fruit) => console.log(fruit.name));

fruits.forEach((fruit) => console.log(fruit.color));

fruits.forEach((fruit) => console.log(fruit.calories));
//--------------------map--------------------
//will return a new array with the values of the object
const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);

console.log(fruitNames);
console.log(fruitColors);
//--------------------filter--------------------
//will return a new array with the values of the object that satisfy the condition
const fruitNames1 = fruits.filter((fruit) => fruit.name === "apple");
const fruitColors1 = fruits.filter((fruit) => fruit.color === "yellow");

console.log(fruitNames1);
console.log(fruitColors1);

//---reduce---

//accumlator is basically what is returned from the previous iteration
const maxFruitCalories = fruits.reduce((acc, fruit) => {
  if (acc.calories > fruit.calories) {
    return acc;
  } else {
    return fruit;
  }
});

console.log("Max fruit calories:" + maxFruitCalories.calories);
