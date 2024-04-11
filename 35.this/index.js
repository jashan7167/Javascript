//this = reference to the object that is executing the current function
//person.name = this.name
//this within the arrow function refers to the global object(window object) and not the object that is executing the current function hence doesnot work
const person1 = {
  name: "Spongebob",
  favFood: "hamburgers",
  sayHello: function () {
    console.log("Hello i am " + this.name);
  },
  eat: function () {
    console.log("I am eating " + this.favFood);
  },
};
const person2 = {
  name: "Patrick",
  favFood: "pizza",
  sayHello: function () {
    console.log("Hello i am " + this.name);
  },
  eat: function () {
    console.log("I am eating " + this.favFood);
  },
};
//basically this is replaced with person1 and person2 depending on the object that is executing the current function
person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();