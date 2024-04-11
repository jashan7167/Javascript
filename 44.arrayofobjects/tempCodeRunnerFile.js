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
