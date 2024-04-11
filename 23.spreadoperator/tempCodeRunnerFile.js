//spread operator = ... allows an iterable such as an array or string to vbe expanded into seperate elements(unpacks the element)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maximum = Math.max(...numbers);

console.log(maximum);

let str = "JashanjotSingh";

let arr = [...str];
console.log(arr);
