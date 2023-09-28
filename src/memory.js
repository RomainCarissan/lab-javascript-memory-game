class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;
    let nums = this.cards.slice();
    let ranNums = [];
    let i = nums.length;

    while (i--) {
      let j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }

    this.cards = ranNums;
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
    }

    return card1 === card2;
  }

  samePair(card1, card2) {
    card1.classList.add("blocked");
    card2.classList.add("blocked");
    this.updatedPairsGuessed();
  }

  differentPair(card1, card2) {
    setTimeout(() => {
      card1.classList.remove("turned");
      card2.classList.remove("turned");
    }, 1000);
  }

  updatedPairsClicked() {
    pairsClickedCounter.textContent = this.pairsClicked;
  }
  updatedPairsGuessed() {
    pairsGuessedCounter.textContent = this.pairsGuessed;
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }

  // add winning message and score
}
