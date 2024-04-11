let radius;
const PI = 3.1419;
let circumference;


document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius); //converts to number

  circumference = 2 * PI * radius;
  console.log(circumference,typeof(circumference));
  //outside the function circumfrence is not defined cause the value is calcluated inside the function of the radius as javascript is asynchronous
  document.getElementById("circumference").textContent = `The circumference of the circle is ${circumference}`;
};



