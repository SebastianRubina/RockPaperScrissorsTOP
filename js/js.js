function computerPlay() {
  let computerChoice = Math.random() * 3;
  console.log(computerChoice);
  if (computerChoice < 1) {
    return "rock";
  } else if (computerChoice < 2) {
    return "paper";
  } else if (computerChoice < 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let winner;
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
    winner = "tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("Rock beats Scissors, you win!");
    winner = "player";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("Paper beats Rock, you lose!");
    winner = "computer";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Paper beats Rock, you win!");
    winner = "player";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Paper beats Rock, you win!");
    winner = "player"
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("Scissors beat Paper, you lose!");
    winner = "computer"
  }
  return winner;
}

function getWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "Player";
  } else if (computerScore > playerScore) {
    return "Computer";
  }
}

function game() {
  let playerScore = 0, computerScore = 0, matchWinner;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose Rock/Paper/Scissors: ").toLowerCase();
    let computerSelection = computerPlay();
    matchWinner = playRound(playerSelection, computerSelection);
    if (matchWinner == "tie") {

    }
    else if (matchWinner == "player") {
      playerScore++
    } else if (matchWinner = "computer") {
      computerScore++
    }
    console.log(`SCORE:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
  }
  console.log(`${getWinner(playerScore, computerScore)} Wins!`)
}


game()

