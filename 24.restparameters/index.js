// rest paramters  = (..rest) allow a function work to an indefinite number of arguments by bundling them into an array

//spread does the opposite of rest

function openFridge(...foods) {
  console.log(foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "pasta";
const food4 = "pasta";
const food5 = "sushi";
const food6 = "ramen";

function sum(...numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}
function avg(...numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result / numbers.length;
}

function combineStrings(...strings) {
  return strings.join(" ");
}
openFridge(food1, food2, food3, food4, food5, food6);

const total = sum(1, 2, 3, 4, 5, 6, 7);

console.log(`Your total is ${total}`);
console.log(`Your average is ${avg(1, 2, 3, 4, 5, 6, 7)}`);

const fullName = combineStrings("Jashanjot", "Singh", "Bhatia");

console.log(`Your full name is ${fullName}`);
