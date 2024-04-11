const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

//inefficient way to shuffle an array
// cards.sort(() => Math.random() - 0.5);

// console.log(cards);

//efficient way to shuffle an array

//Fisher-Yates shuffle algorithm

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * i);
    [cards[i], cards[random]] = [cards[random], cards[i]];
  }
}
shuffle(cards);
console.log(cards);
