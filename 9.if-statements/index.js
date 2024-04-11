// let age = 15;

// if (age > 18) {
//   console.log("You are an adult enter the site");
// } else {
//   console.log("You are a child muthi mt marr bsdk");
// }

// //next
// let time = 9;
// if (time < 12) {
//   console.log("Good Morning");
// } else {
//   console.log("Good Evening or Good Morning");
// }
// console.log("\n");
// let isStudent = false;

// if (isStudent) {
//   console.log("You are a student");
// } else {
//   console.log("You are not a student");
// }

// let age1 = 25;
// let hasLicense = true;

// if (age1 >= 18) {
//   console.log("You are old enough to drive");

//   if (hasLicense) {
//     console.log("You have a license");
//   } else {
//     console.log("You do not have a license");
//   }
// } else {
//   console.log(
//     `You must be ${age1}+ years old and also have a license to drive`
//   );
// }
const input = document.getElementById("age");
const myLabel = document.getElementById("myLabel");
const myButton = document.getElementById("myButton");


myButton.onclick = age;
function age() {
  let age = input.value;
  age = Number(age);
  if(age>=100)
  {
    myLabel.textContent = "You are too old";
  }
  else if (age > 18) {
    myLabel.textContent = "You are an adult enter the site";
  } else if(age==0){
    myLabel.textContent = "You were just born";
  }
  else if(age<18)
  {
    myLabel.textContent = "You are a child";
  }
  else
  {
    myLabel.textContent = "Enter a valid age";
  }
}
