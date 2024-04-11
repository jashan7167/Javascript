//super = keyword is used in classes to call the constructor of the parent class. It is used
//this = this object
//super the parent of that object

class Animal {
  constructor(age, name) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`${this.name} moves at a speed of ${speed} km/hr`);
  }
}

class Rabbit extends Animal {
  //this class will also contain name and age as it inherits from the Animal class which creates class variables name and age when we call the super() method
  constructor(name, age, runSpeed) {
    super(age, name);
    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`${this.name} is running`);
    move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(age, name);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`${this.name} is swimming`);
    this.move(this.swimSpeed); //extends the move method from the parent class
  }
}

class hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(age, name);

    this.flySpeed = flySpeed;
  }
  fly() {
    console.log(`${this.name} is flying`);
    this.move(this.flySpeed);
  }
}

//we have to pass the parameters to the constructor of the parent class
//before using this keyword in the child class we have to call the super() method
//super() calls the constructor of the parent class
//hence the common class variables like age and name are passed to the parent class constructor
const rabbit = new Rabbit("Rabbit", 2, 10);
const fish = new Fish("Fish", 1, 5);
// const hawk = new hawk("Hawk", 3, 20);
fish.swim();

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
fish.swim();
