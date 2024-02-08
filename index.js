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
    document.getElementById('answer').disabled = false;
    document.getElementById('answer').focus();
    generateProblem();
    timerId = setInterval(() => {
      timeLeft--;
      document.getElementById('time').textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) endGame();
    }, 1000);
  }

  function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    let operation = document.querySelector('input[name="operation"]:checked').value;
  
    switch (operation) {
      case 'add':
        document.getElementById('question').textContent = `${num1} + ${num2}?`;
        break;
      case 'sub':
        if (num2 > num1) [num1, num2] = [num2, num1];
        document.getElementById('question').textContent = `${num1} - ${num2}?`;
        break;
      case 'mul':
        document.getElementById('question').textContent = `${num1} * ${num2}?`;
        break;
      case 'div':
        num1 = num1 * num2;
        document.getElementById('question').textContent = `${num1} / ${num2}?`;
        break;
    }
  
    document.getElementById('answer').value = '';
  }

  function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    let operation = document.querySelector('input[name="operation"]:checked').value;
    let correctAnswer;
  
    switch (operation) {
      case 'add':
        correctAnswer = num1 + num2;
        break;
      case 'sub':
        correctAnswer = num1 - num2;
        break;
      case 'mul':
        correctAnswer = num1 * num2;
        break;
      case 'div':
        correctAnswer = num1 / num2;
        break;
    }
  
    if (userAnswer === correctAnswer) {
      score++;
      timeLeft += 1;
      document.getElementById('score').textContent = `Score: ${score}`;
      generateProblem();
    }
  }

function endGame() {
    clearInterval(timerId);
    document.getElementById('start').disabled = false;
    document.getElementById('answer').disabled = true;
    if (score > highScore) {
      highScore = score;
      document.getElementById('highscore').textContent = `High score: ${highScore}`;
    }
  }

