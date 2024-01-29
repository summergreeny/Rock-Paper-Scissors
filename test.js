function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function rockPaperScissors(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection) {
    return "It's a draw";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
  ) {
    return `You win! "${playerSelection.toLowerCase()}" beats "${computerSelection}"`;
  } else {
    return `You lose! "${computerSelection}" beats "${playerSelection.toLowerCase()}"`;
  }
}

function playGame() {
  let playerScore = 0;
  let ComputerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("input your answer");
    const computerSelection = getComputerChoice();
    let res = rockPaperScissors(playerSelection, computerSelection);
    console.log(res);

    if (res[1] == "win") {
      playerScore += 1;
    } else if (res[1] == "lose") {
      ComputerScore += 1;
    }
  }

  console.log(playerScore > ComputerScore ? "you win" : "you lose");
}

playGame();
