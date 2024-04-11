let userName = "BroCode  ";

console.log(userName.indexOf("O")); // first occurence of the O
console.log(userName.lastIndexOf("o")); // first occurence of the O
console.log(userName.indexOf("O")); // first occurence of the O
console.log(userName.length);
userName = userName.trim(); //trims the white space
console.log(userName);

userName = userName.toUpperCase();
console.log(userName);
userName = userName.toLowerCase();
console.log(userName);

userName = userName.repeat(3); //repeats the string
console.log(userName);

let result = userName.startsWith("B"); //checks if the string starts with B
console.log(result);

if (result) {
  console.log('Your username cannot begin with " ');
}

let result2 = userName.includes("Bro");
console.log(result2);

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replace("-", ""); //replaces the - with nothing
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(15, "0"); //adds 0 to the end of the string
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "0"); //adds 0 to the end of the string until this is 15 characters long

console.log(phoneNumber);
