//spread operator = ... allows an iterable such as an array or string to vbe expanded into seperate elements(unpacks the element)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maximum = Math.max(...numbers);

console.log(maximum);

let str = "JashanjotSingh";

let arr = [...str]; //seperated the elements into individual characters
console.log(arr);

//shallowcopy of an array
let fruits = ["apple", "banana", "mango"];
let vegetables = ["potato", "onion", "tomato"];

let mix = [...fruits, ...vegetables]; //contains elements of both arrays hence so can append two arrays

let shallowcopy = [...fruits];
console.log(shallowcopy);
