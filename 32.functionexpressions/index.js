//function expressions = a way to define a function as a  value or variables

function hello()
{
  console.log(hello);

}
const hello1 = function()
{
  console.log("hello")
}

let fun1 = hello;

//gives function:hello as output
fun1();
//with javascript we have the capability to pass the function as arguments
setTimeout(hello1,3000)

//can also be done like this
setTimeout(function()
{
  console.log("Jashanjot singh")
},3000)

//notice this too that the timeouts are running simulataneously too and after three seconds we can see both finishes