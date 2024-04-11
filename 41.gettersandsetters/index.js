class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  //getters
  getdimensions() {
    return this.width + " " + this.height;
  }
  getarea() {
    return this.width * this.height;
  }
  //setters like a constructor but not a constructor this is invoked using dot operator constructors are invoked when an  object is created
  setdimensions(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.getdimensions());
console.log("Area: " + rectangle.getarea());
console.log(rectangle.setdimensions(20, 30));
console.log(rectangle.getdimensions());
