//inheritance = allows a new class to inherit the properties and methods of an existing class
//helps with code reusability and reduces redundancy
//we dont have to keep repeating the same properties and methods in each class

class Animal {
  alive = true;

  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";
}

class Fish extends Animal {
  name = "Fish";
}

const rabbit = new Rabbit();
rabbit.eat();
rabbit.sleep();

const fish = new Fish();
fish.eat();
fish.sleep();

class Hawk extends Animal {
  name = "Hawk";
  fly() {
    console.log(`${this.name} is flying`);
  }
}

//hence all the class inherits the properties of the animal class and we dont have to repeat the properties and methods in each class


const hawk = new Hawk();
//as rabbit and fish class dont have the fly method, it will throw an error and hawk class has the fly method hence we can add the unique(thier own) methods to the class

hawk.fly();
