//variable scope = where a variable is recognized by the code (global scope, local - function scope, block scope)

//function1 and function2 cannot see each other's variables this is know as local scope or precisily function scope

// function function1() {
//   let x = 10;
//   console.log(y);
// }

// function1();

// function function2() {
//   let y = 10;
//   console.log(x);
// }


//variable is defined outside of the function and can be accessed by any function this is known as global scope
let x = 10;

function function1() {
  console.log(x);
}

function1();

function function2() {
  console.log(x);
}


//first the function will look at the local scope if it doesn't find the variable it will look at the global scope
function function3() {
  let x =1;
  console.log(x);
}


function3();

