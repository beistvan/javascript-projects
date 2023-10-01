let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(user, computer, target) {
  return Math.abs(user - target) <= Math.abs(computer - target);
}

function updateScore(winner) {
  if (winner == "human") {
    humanScore++;
  }
  if (winner == "computer") {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
