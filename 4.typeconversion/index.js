//type conversion and coercion = changing the type of a value to another type (string,numbers,boolean,etc)
//type coercion = JS will automatically convert types when dealing with different types

// let age = window.prompt("How old are you?");

let age = "25";

age += 1; //this will concatenate if not converted to number
console.log(age, typeof age);

age = Number(age); //converts to number
age += 1;
//now it will add 1 as a number hence thats why we need to do type conversion as diff datatypes behave differently
console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); //gives NaN not a number
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


let a = "0";
let b = "0";
let c = "";
a = Number(a); 
b = String(b);
c = Boolean(c);
//we can convert string to boolean to check if the user has entered anything or not
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);