// JSON = (JavaScript Object Notation) data-interchange format used for exchanging data between a server and a web client.
//Json files {key:value} pairs are used to store data in a structured way.
//Json.stringify() = converts a JavaScript object or value to a JSON string
//Json.parse() = converts a JSON string to a JavaScript object

const names = ["SpongeBob", "Patrick", "Squidward"];

const jsonString = JSON.stringify(names);

const person = {
  name: "Spongebob",
  age: 20,
  isSponge: true,
  hobbies: ["cooking", "jellyfishing", "karate"],
};

let people = [
  {
    name: "Spongebob",
    age: 20,
    isSponge: true,
  },
  {
    name: "Patrick",
    age: 34,
    isSponge: false,
  },
  {
    name: "Squidward",
    age: 50,
    isSponge: false,
  },
];

console.log(names); //give proper original array
console.log(jsonString); //gives a string
console.log(person);
console.log(JSON.stringify(person));

console.log(people);
console.log(JSON.stringify(people)); 


console.log(JSON.parse(jsonString)); //gives the original array
console.log(JSON.parse(JSON.stringify(person))); //gives the original object
console.log(JSON.parse(JSON.stringify(people))); //gives the original array

