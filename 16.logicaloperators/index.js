//logical operators = used to determine the logic between variables or values

// && = and
// || = or
// ! = not

const temp = 200;

// if(temp>0 && temp<30)
// {
//   console.log("The weather is good")
// }
// else if(temp<0)
// {
//   console.log("Sun disappeared")
// }
// else
// {
//   console.log("It's too hot maybe hit by a asterioid or something")
// }

//or

// if (temp <= 0 || temp > 30) {
//   console.log("The weather is bad");
// } else {
//   console.log("weather is good");
// }

// not

const isSunny = false;

if (!isSunny) {
  console.log("It's not sunny");
} else {
  console.log("It's Sunny");
}
