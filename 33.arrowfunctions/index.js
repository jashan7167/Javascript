//arrow-function = a concise way to write function expressions good for simple functions that you use only once (paramters)=>some code
//the arrows acts like paranthesis

const hello = function () {
  console.log("Hello");
};

const hello1 = () => console.log("Hello1");

hello1();

const hello2 = (name) => console.log(`${name}`);

hello2("Jashanjot Singh");

const hello3 = (name,age) => {console.log(`${name}`)
console.log(`Your age ${age}`)};


hello3("hash",20)