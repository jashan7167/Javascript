//static = keyword that defines properties or methids that belong to the class itself, rather than to instances of the class

class MathUtil {
  static PI = 3.14;

  static getDiameter(radius) {
    return 2 * radius;
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI); //belongs to the class itself hence executed without any instance of the class
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCircumference(5).toFixed(2));
console.log(MathUtil.getArea(5).toFixed(2));

class User {
  static count = 0; //static property thats keeping track of the number of instances of the class

  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.count++;
  }
  //static method that returns the count of the number of instances of the class
  static getCount() {
    return User.count;
  }
}
const user1 = new User("John", 25);
const user2 = new User("Jane", 22);
//userCount variable belongs to the class itself and hence can be accessed without any instance of the class
console.log(User.getCount()); //2

//a copy of the static property or method is not created for each instance of the class, but is shared among all instances of the class
