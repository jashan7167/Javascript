const email = "Bro1@gmail.com"
//when you create substring you wont alter the original string as we assigned it as const
let username = email.slice(0,email.indexOf("@"));
let domain = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(domain);