let timeLeft = 10;
let score = 0;
let highScore = 0;
let timerId;
let num1, num2;

document.getElementById('start').addEventListener('click', startGame);
document.getElementById('answer').addEventListener('input', checkAnswer);

function startGame() {
    score = 0;
    timeLeft = 10;
    document.getElementById('start').disabled = true;
    document.getElementById('answer').disabled = false; // enable the input box
    generateProblem();
    timerId = setInterval(() => {
      timeLeft--;
      document.getElementById('time').textContent = `Time left: ${timeLeft}s`;
      if (timeLeft <= 0) endGame();
    }, 1000);
  }

function generateProblem() {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  document.getElementById('question').textContent = `${num1} + ${num2}?`;
  document.getElementById('answer').value = '';
}

function checkAnswer() {
  let userAnswer = parseInt(document.getElementById('answer').value);
  if (userAnswer === num1 + num2) {
    score++;
    timeLeft++;
    document.getElementById('score').textContent = `Score: ${score}`;
    generateProblem();
  }
}

function endGame() {
    clearInterval(timerId);
    document.getElementById('start').disabled = false;
    document.getElementById('answer').disabled = true; // disable the input box
    if (score > highScore) {
      highScore = score;
      document.getElementById('highscore').textContent = `High score: ${highScore}`;
    }
  }

