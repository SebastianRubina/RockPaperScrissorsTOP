function computerPlay() {
  let computerChoice = Math.random() * 3;
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
    winner = "tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    winner = "player";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    winner = "computer";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    winner = "player";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    winner = "player";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    winner = "computer";
  } else if (playerSelection == 'scissors' && computerSelection == "rock") {
    winner = "computer";
  } else if (playerSelection == 'scissors' && computerSelection == "paper") {
    winner = "player";
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




let prock = document.querySelector('.prock');
let ppaper = document.querySelector('.ppaper');
let pscissors = document.querySelector('.pscissors');
let winnerMsg = document.querySelector('.winner');
let playerChoice = document.querySelector('.playerChoice');
let computerChoice = document.querySelector('.computerChoice');
let buttons = document.querySelectorAll('button');


buttons = document.addEventListener('click', testFun);

function testFun(e) {
  let playerSelection = e.target.value;
  let computerSelection = computerPlay();
  console.log(playerSelection);

  playerChoice.innerHTML = `Player picked: ${playerSelection}`;
  computerChoice.innerHTML = `Computer picked: ${computerSelection}`;

  let winner = playRound(playerSelection, computerSelection);
  if (winner != 'tie') {
    winnerMsg.innerHTML = `The winner is ${winner}!`;
  } else {
    winnerMsg.innerHTML = 'Tie! Try again!';
  }
  console.log(winnerMsg);
}
