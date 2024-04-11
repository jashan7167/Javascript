//.map() = accepts a callback and applies that function to each element of the array and returns a new array

//map() method creates a new array with the results of calling a provided function on every element in the calling array.

//only the keydifference between the map and for each is that for each works on the original array and map creates a new array

//always helpful when we want to preseve the original array and create a new array with the modified elements


const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
console.log(squares);
function square(element) {
  return Math.pow(element, 2);
}
function cube(element) {
  return Math.pow(element, 3);
}
