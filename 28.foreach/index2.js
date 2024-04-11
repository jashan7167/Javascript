let fruits = ["apple", "orange", "cherry"];

//functions are stand alone functions but methods are functions that are part of an object



// fruits.forEach(upperCase);
fruits.forEach(capatalize);
fruits.forEach(display);

function upperCase(element,index,array)
{
  array[index] = element.toUpperCase();
}

function capatalize(element,index,array)
{
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);//creates a substring from the first character to the end of the string;
}

function display(element) {
  console.log(element);
}