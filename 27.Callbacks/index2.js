const h1 = document.getElementById("myH1");

function sum(callback, x, y) {
  console.log("Sum running");
  let result = x + y;
  callback(x + y);
}

function displayConsole(result) {
  console.log(result);
}
function displayPage(result) {
  h1.innerText = result;
}

sum(displayPage, 1, 2);
