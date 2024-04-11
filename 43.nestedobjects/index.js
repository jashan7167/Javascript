//nestedobjects = Objects inside of other objects
//allows you to represent more complex data structures
//child object is enclosed by a parent object

const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["jellyfishing", "karate", "cooking"],
  address: {
    address: "124 Conch Street",
    city: "Bikini Bottom",
    country: "Pacific Ocean",
  },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);

//accessing the nested object
console.log(person.address.address);
console.log(person.address.city);
console.log(person.address.country);

for (let key in person) {
  console.log(key);
}
//printing the values of the object
//we can also access object with [key] like an index of array
for (let key in person) {
  console.log(person[key]);
}

console.log("\nPrinting the keys of the address object");
for (const property in person.address) {
  console.log(person.address[property]);
}
