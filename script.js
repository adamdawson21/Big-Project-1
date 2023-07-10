let playerScore = 0;
let computerScore = 0;
let round = 1;

const roundElement = document.querySelector('.round');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const gameContainer = document.querySelector('.game--container');
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', startGame);

function startGame() {
  startScreen.style.display = 'none';
  gameContainer.style.display = 'block';
}

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = compareChoices(playerChoice, computerChoice);

  updateScore(result);
  updateRoundAndScore();
  displayResult(playerChoice, computerChoice, result);

  if (playerScore === 3 || computerScore === 3) {
    endGame();
  } else {
    round++;
  }
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return `You win round ${round}!`;
  } else {
    return `Computer wins round ${round}!`;
  }
}

function updateScore(result) {
  if (result === `You win round ${round}!`) {
    playerScore++;
  } else if (result === `Computer wins round ${round}!`) {
    computerScore++;
  }
}

function displayResult(playerChoice, computerChoice, result) {
  const resultElement = document.querySelector('.result');
  resultElement.innerHTML = `
    <p>You chose <strong>${playerChoice}</strong>.</p>
    <p>Computer chose <strong>${computerChoice}</strong>.</p>
    <p>${result}</p>
  `;
}

function updateRoundAndScore() {
  roundElement.textContent = round;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}


function endGame() {
  const resultElement = document.querySelector('.result');
  const optionsElement = document.querySelector('.options');
  const restartButton = document.createElement('button');
  restartButton.innerText = 'Restart';
  restartButton.addEventListener('click', restartGame);

  if (playerScore === 3) {
    resultElement.innerHTML += '<p>Congratulations! You won the game!</p>';
  } else {
    resultElement.innerHTML += '<p>Computer won the game! Better luck next time!</p>';
  }

  optionsElement.innerHTML = '';
  optionsElement.appendChild(restartButton);
}

const infoButton = document.getElementById('info-button');
const infoModal = document.getElementById('info-modal');
const closeButton = document.getElementById('close-button');

infoButton.addEventListener('click', openInfoModal);
closeButton.addEventListener('click', closeInfoModal);

function openInfoModal() {
  infoModal.style.display = 'flex';
}

function closeInfoModal() {
  infoModal.style.display = 'none';
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  const resultElement = document.querySelector('.result');
  const optionsElement = document.querySelector('.options');
  resultElement.innerHTML = '';
  optionsElement.innerHTML = `
    <button onclick="playGame('rock')">Rock</button>
    <button onclick="playGame('paper')">Paper</button>
    <button onclick="playGame('scissors')">Scissors</button>
  `;

  updateRoundAndScore();

  // gameContainer.style.display = 'none';
  // startScreen.style.display = 'block'
}



updateRoundAndScore();
