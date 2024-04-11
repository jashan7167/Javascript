class person {
  //rest params to send multiple values
  //spread operator to split the address values and send it into the Address class constructor
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(city, state, country) {
    this.city = city;
    this.state = state;
    this.country = country;
  }
}

const person1 = new person(
  "Spongebob Squarepants",
  30,
  "Bikini Bottom",
  "Pacific Ocean",
  "USA"
);

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
