//for Each() = method used to iterate over the elements of an array and apply a specified function(callback) for  each element.
// .foreach(callback)
// or it takes 3 parameters: element, index, array
//it modifies the original array

let numbers = [1,2,3,4];


numbers.forEach(square);  //double is a callback function which is passed as an argument to forEach() method
numbers.forEach(display);  //display is a callback function which is passed as an argument to forEach() method

function double(element,index,array)
{
  array[index] = element * 2;
}
function triple(element,index,array)
{
  array[index] = element * 2;
}
function square(element,index,array)
{
  array[index] = element**2;
}

function display(element){  //element here is implicit parameter which is pased by forEach() method
  console.log(element);
}

