let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => Math.floor(Math.random() * 10);

let getAbsoluteDistance1 = (currentHumanGuess, target) => {
  return Math.abs(currentHumanGuess - secretTargetNumber)
};

let getAbsoluteDistance2 = (computerGuess, target) => {
  return Math.abs(computerGuess - secretTargetNumber)
};

let compareGuesses = (currentHumanGuess, computerGuess, target) => {
  if (currentHumanGuess === computerGuess) {
        return true;
    } else if (getAbsoluteDistance1 > target) {
        return false;
    } else {
        return true;
    }
};

let updateScore = (winner) => {
  if (winner === 'human') {
    return humanScore += 1;
  } else {
    return computerScore += 1;
  }
};

let advanceRound = () => currentRoundNumber += 1; 

