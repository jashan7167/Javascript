//number guessing game

const minNum = 1;
const maxNum = 10;
let answer = Math.random() * (maxNum - minNum) + minNum;
answer = Math.trunc(answer);
console.log(answer);
let attempts = 0;
let guess;
let running = true;


while (running) {
  guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
  if(isNaN(guess))
  {
    window.alert("Please enter a number");
  }
  else if(guess < minNum || guess > maxNum)
  {
    window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
  }
  else
  {
    attempts++;
    if (guess == answer) {
      window.alert(`You got it in ${attempts} attempts!`);
      running = false;
    } else if (guess < answer) {
      window.alert("Too low");
    } else {
      window.alert("Too high");
    }
  }
}
