//function - a section of code that performs a specific task and can be reused

//function declaration  function name(args) {code} you want to be sure parameters match up with the arguments
function happyBirthday(username, age) {
  console.log(`Happy Birthday ${username}! You are ${age} years old!`);
}

happyBirthday("Jattonhunt", 22); //things we pass here are parameters

function add(x, y) {
  let result = x + y;
  return result;
}
function subract(x, y) {
  let result = x - y;
  return result;
}
function multiply(x, y) {
  let result = x * y;
  return result;
}
function divide(x, y) {
  let result = x / y;
  return result;
}
function isEven(numvber) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let answer = add(2, 3);
console.log(answer);
