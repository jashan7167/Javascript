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

class Rabbit extends Animal
{
  name = "Rabbit";

} 

class Fish extends Animal {
  name = "Fish";
}

const rabbit = new Rabbit();
rabbit.eat();
rabbit.sleep();

cont fish = new Fish();
fish.eat();
fish.sleep();