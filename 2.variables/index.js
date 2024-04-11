//1 declaration let x;
//2 assignment x = 1;

let x;
x = 100;

console.log(x);

//datatypes in javascript

//number

let age = 22;
let price = 10.99;
let gpa = 2.1;

console.log(typeof gpa);
console.log(typeof price);
console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`This is ${price}`);
console.log(`You gpa is ${gpa}`);
//strings
let name = "John";
let favfood = "Pizza";
let email = "yayayay123@gmail.com"; //strings can have numbers and special characters
console.log(typeof name);
console.log(`Hello ${name}`);
console.log(`You email is ${email}`);

//boolean
let online = true;
let forSale = true;
console.log(typeof online);
let isStudent = true;

console.log(`Bro is online ${online}`);
console.log(`Is the car for sale? ${forSale}`);
console.log(`Enrolled in school? ${isStudent}`);

//display something in webpage

let fullName = "Jashanjot Singh";
let age2 = 22;
let Student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = age2;
document.getElementById("p3").textContent = Student;
