// object - a collection of related properties and/or methods can represent real world objects(people,products,car)
// object = {key:value,function(){}}; key:value = properties, function = methods

const person = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: () => {
    console.log("Hello i am Spongebob Squarepants");
  },
  eat: () => {
    console.log("I am eating");
  },
};

console.log(person.firstName + " " + person.lastName);
console.log(person.age);
console.log(person.isEmployed);

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 32,
  isEmployed: false,
  sayHello: () => {
    console.log("Hello i am Patrick Star");
  },
  eat: () => {
    console.log("I am eating roastbeef,chicken and pizza");
  },
};

person.sayHello();
person2.sayHello();
