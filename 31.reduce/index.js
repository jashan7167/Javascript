//,reduce() method reduces the array elements to a single value.
//it starts with 0 and adds the first element of the array to it and then adds the second element to the sum of the first element and so on


const prices = [5, 30, 10, 25, 10, 20, 15, 40];
const total = prices.reduce(sum);
console.log(total);


function sum(accu, curr) {
  return accu + curr;
}

const grades = [75,90,85, 70, 80];

const max1 = grades.reduce(max);
const min1 = grades.reduce(min);

function max(acc,el)
{
  console.log(acc,el);
  return Math.max(acc,el);
}
function min(acc,el)
{
  console.log(acc,el);
  return Math.min(acc,el);
}

console.log(max1);
console.log(min1);
//anything thats fucking returned form the callback becomes the accumulator  