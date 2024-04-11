//sort() = method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//sorts elements as strings in lexicorgraphic order , not alphabetical order
//lexicographic order is the order in which words are listed in the dictionary = (alphabet + numbers + symbols) as strings

//see the prefix ap of apale and apple matches and then the next letter is a of apale and then p of apple so apale comes first
let fruits = ["apple", "orange", "coconut", "apale", "pineapple", "banana"];

fruits.sort();
console.log(fruits);

//numbers are sorted as strings we are not sorting the array numerically we are sorting it lexicographically
let numbers = [1, 10, 2, 20, 3, 30, 4, 40, 5, 50];
//we have to pass a callback in sort to sort the numbers
numbers.sort((a, b) => a - b);
console.log(numbers);

//explanation
/* The line of code you're looking at is using the `sort()` method in JavaScript to sort an array of numbers in ascending order.

```javascript
numbers.sort((a, b) => a - b);
```

Here's a breakdown of what's happening:

- [`numbers`](command:_github.copilot.openSymbolInFile?%5B%2245.sort%2Findex.js%22%2C%22numbers%22%5D "45.sort/index.js") is an array that you want to sort. It could be something like `[5, 2, 1, 10, 6]`.
- `sort()` is a built-in JavaScript method that sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.
- `(a, b) => a - b` is a comparison function that defines the sort order. When `sort()` is passed a comparison function, it uses that function to determine the order of elements.

The comparison function takes two arguments, often referred to as `a` and `b`. Here's how it works:

- If the function returns less than 0, `a` is sorted to an index lower than `b` (i.e., `a` comes first).
- If the function returns 0, `a` and `b` remain unchanged with respect to each other, but sorted with respect to all different elements.
- If the function returns greater than 0, `a` is sorted to an index higher than `b` (i.e., `b` comes first).

In the case of `(a, b) => a - b`, if `a` is less than `b`, a negative value is returned and `a` is sorted to an index lower than `b`. If `a` is greater than `b`, a positive value is returned and `a` is sorted to an index higher than `b`. If `a` and `b` are equal, 0 is returned and their positions remain unchanged.

So, the provided line of code sorts the [`numbers`](command:_github.copilot.openSymbolInFile?%5B%2245.sort%2Findex.js%22%2C%22numbers%22%5D "45.sort/index.js") array in ascending order. For example, if [`numbers`](command:_github.copilot.openSymbolInFile?%5B%2245.sort%2Findex.js%22%2C%22numbers%22%5D "45.sort/index.js") was `[5, 2, 1, 10, 6]`, after sorting, it would be `[1, 2, 5, 6, 10]`.*/

const people = [
  { name: "John", age: 30, gpa: 3.5 },
  { name: "Jane", age: 25, gpa: 3.0 },
  { name: "Jack", age: 35, gpa: 3.2 },
];

people.sort((a, b) => a.age - b.age); //sort by age

console.log(people);

people.sort((a, b) => a.gpa - b.gpa); //sort by gpa

console.log(people);

people.sort((a, b) => {
  a.name.localeCompare(b.name);
}); //sort by name

console.log(people);
