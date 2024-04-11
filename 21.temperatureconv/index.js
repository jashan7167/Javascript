const textbox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenhiet");
const toCelsius = document.getElementById("toCelsius");
let result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    result.textContent = ((textbox.value * 9) / 5 + 32).toFixed(1) + "F";
  } else if (toCelsius.checked) {
    result.textContent = ((textbox.value - 32) * (5 / 9)).toFixed(1) + "C";
  } else {
    result.textContent = "Select a conversion type";
  }
}
