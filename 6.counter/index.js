let counter = document.getElementById("counter");

let decrease = document.getElementById("dec");

let increase = document.getElementById("increase");

let reset = document.getElementById("reset");
let count = 0;

increase.onclick = function () {
  count++;
  counter.textContent = count;
  console.log(count);
};

decrease.onclick = function () {
  count--;
  counter.textContent = count;
  console.log(count);
};

reset.onclick = function () {
  count = 0;
  counter.textContent = count;
  console.log(count);
};
