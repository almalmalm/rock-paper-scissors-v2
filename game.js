const variants = ['Rock', 'Paper', 'Scissors'];
const getComputerChoice = () => {
  return variants[[Math.floor(Math.random() * variants.length)]];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'It is a tie! Rock and Rock!!!';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats Rock!!!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You Win! Rock beats Scissors!!!';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats Rock!!!';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You Lose! Scissors beats Paper!!!';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'It is a tie! Paper and Paper!!!';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You Lose! Rock beats Scissors!!!';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You Win! Scissors beats Paper!!!';
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    return 'It is a tie! Scissors and Scissors!!!';
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose your weapon: ').toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    const round = playRound(playerSelection, computerSelection);
    console.log(round);
    if (round.includes('Win')) {
      playerScore++;
    } else if (round.includes('Lose')) {
      computerScore++;
    } else {
      i--;
    }
    console.log(`Player: ${playerScore} \n Computer: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log('Player Win!');
  } else {
    console.log('Computer Win!');
  }
};

game();
