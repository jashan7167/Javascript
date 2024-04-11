setTimeout(() => {
  console.log("Hello");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];

// function hello()
// {
//   console.log("Hello");
// }

const squares = numbers.map((element) => {
  return Math.pow(element, 2);
});
