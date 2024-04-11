//destructuring = extract values from arrays or objects and set them to variables in a single line
// [] is used to destructure arrays
// {} is used to destructure objects

//swap the values of two variables

let a = 1;
let b = 2;
//left is called destructuring assignment
//right is creating an array
//array created was b,a and we destructured it to a,b
[a, b] = [b, a];

console.log(a);
console.log(b);

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//ex-3 assign array elements to variables

//we can also combine destructuring with the rest operator such that we can assign the remaining elements to a new array
//rest operator is used to assign the remaining elements to a new array
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//ex-4 extract values from objects

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  city: "Bikini Bottom",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 32,
  city: "Bikini Bottom",
};

//destructuring objects
//the name of the variable should be the same as the key in the object to destructure
//we can also assign a default value to a variable if the key is not present in the object
// //if the key is not present in the object, the variable will be assigned the default value
// const { firstName, lastName, age, city } = person1;
// console.log(firstName);
// console.log(age);
// console.log(city);
// console.log(lastName);

const { firstName, lastName, age, city,job='unemployed'} = person2;
console.log(firstName);
console.log(age);
console.log(city);
console.log(lastName);
console.log(job); //we set a default value for the job key

//ex-5 destructure in function params

function displayPerson({firstName,lastName,age,city})
{
 console.log(`Hi i am ${firstName} ${lastName}. I am ${age} years old and i live in ${city}`)
}

displayPerson(person1);

