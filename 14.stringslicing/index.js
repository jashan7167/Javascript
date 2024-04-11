const fullName = "Jashanseph Singh";
let firstName = fullName.slice(0, 6); //ending index is not included
let lastName = fullName.slice(11, fullName.length); //ending index is not included
console.log(firstName);
console.log(lastName);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

let firstName1 = fullName.slice(0, fullName.indexOf("s"));
let lastName1 = fullName.slice(fullName.lastIndexOf("h") + 1, fullName.length);
console.log(firstChar);
console.log(lastChar);

console.log(firstName1);
console.log(lastName1);



