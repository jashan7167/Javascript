const numbers = [1, 2, 3, 4, 5, 6, 7];
const squares = numbers.map(function (element) {
  return element * 2;
});

console.log(squares);

const odd = numbers.filter(function (element) {
  return element % 2 == 0;
});

console.log(odd);
