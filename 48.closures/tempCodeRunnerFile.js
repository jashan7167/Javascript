let score = 0;

function increaseScore(points) {
  score += points;
  console.log(`Score increased to ${score}`);
}

function decreaseScore(points) {
  score -= points;
  console.log(`Score decreased to ${score}`);
}

function getScore() {
  return score;
}

increaseScore(10);
increaseScore(11);
increaseScore(12);
decreaseScore(10);
decreaseScore(5);

console.log(getScore());

//problem is this that we can change the score value from outside the function
//to avoid this we use closures

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`Score increased to ${score}`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`Score decreased to ${score}`);
  }

  function getScore() {
    return score;
  }

  console.log(getScore());
}

const game = createGame();

game.increaseScore(10);
game.increaseScore(11);
game.increaseScore(12);
game.decreaseScore(10);
game.decreaseScore(5);
