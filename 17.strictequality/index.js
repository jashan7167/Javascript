// = assignment operator is used to assign value to a variable
// == comparison operator is used to compare two values (if value is equal)
// === strict equality operator is used to compare two values and check if they are equal form value and of the same data type
// != not equal
// !== strict not equal

const PI = 3.14;

//this gives this is pie cause we dont care about the data type here we just care about the value
if (PI == "3.14") {
  console.log("that is pie");
} else {
  console.log("that is not pie");
}
//using strict equality operator
//compares the value and the data type

if (PI === "3.14") {
  console.log("that is pie");
} else {
  console.log("that is not pie");
}

//in equality

if (PI != "3.14") {
  console.log("that is pie");
} else {
  console.log("that is not pie");
}
