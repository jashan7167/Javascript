//constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color) {
   this.make = make,
   this.model = model,
   this.year = year,
   this.color = color
   this.getInfo = function() {
     return this.make + " " + this.model + " " + this.year + " " + this.color;
   }
   this.drive = function()
   {
    console.log(`You are driving a ${this.model} ${this.make}`)
   }
}

const car1 = new Car("Toyota", "Corolla", 2020, "Red");

console.log(car1.getInfo());
car1.drive();