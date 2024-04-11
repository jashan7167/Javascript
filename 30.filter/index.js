// .filter() = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];

const chu = numbers.filter((element) => {
  return element % 2 == 0;
});

let evenNums = numbers.filter(isEven);

function isEven(element) {
  return element % 2 == 0;
}

console.log(chu); // [2,4]
console.log(evenNums);

//what happens here ia that the filter method works on the boolean array that was created by the callback function and returns the elements that are true
//in this case the elements that are true are the even numbers
