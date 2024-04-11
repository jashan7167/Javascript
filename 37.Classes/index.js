//classes = {ES6 feature} provides a way to create objects with some initial values and methods to operate on them.structured and cleaner way to create objects compared to traditional constructor functions

//class = blueprint for creating objects with some initial values and methods to operate on them

salesTax = 0.7;
class products {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product name: ${this.name} Price: ${this.price.toFixed(0)}`);
  }

  calculateTax() {
    return this.price + this.price * salesTax;
  }
}

const product1 = new products("Laptop", 1000);

product1.displayProduct();

//total price of the product including tax
console.log(product1.calculateTax());
