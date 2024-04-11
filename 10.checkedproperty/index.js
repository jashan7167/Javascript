const myCheckBox = document.getElementById("myCheckBox");
const visa = document.getElementById("visaBtn");
const mastercard = document.getElementById("masterCardBtn");
const paypal = document.getElementById("paypalBtn");
const submit = document.getElementById("mySubmit");
const subres = document.getElementById("subResult");
const payres = document.getElementById("paymentResult");

submit.onclick = function () {
  if (myCheckBox.checked) {
    subres.textContent = "you are subscribed";
  } else {
    subres.textContent = "you are not subscribed";
  }

  if (visa.checked) {
    payres.textContent = "you have selected visa";
  } else if (mastercard.checked) {
    payres.textContent = "you have selected mastercard";
  } else if (paypal.checked) {
    payres.textContent = "you have selected paypal";
  } else {
    payres.textContent = "you have not selected any payment method";
  }
};
