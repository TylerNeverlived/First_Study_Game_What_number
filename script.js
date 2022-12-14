'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

const displayQuestion = function (qmessage) {
  document.querySelector('.question').textContent = qmessage;
};

const displayScore = function (smessage) {
  document.querySelector('.score').textContent = smessage;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  // No imput
  if (!guessingNumber) {
    //  document.querySelector('.guess-message').textContent = 'Введите число!';
    displayGuessMessage('Введите число!');

    // Player won
  } else if (guessingNumber === secretNumber) {
    //  document.querySelector('.guess-message').textContent = 'Правыльно!';
    displayGuessMessage('Правыльно!');
    //  document.querySelector('.question').textContent = secretNumber;
    displayQuestion(secretNumber);
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.guess-message').textContent =
      //   guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!';
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.guess-message').textContent = 'Game over!';
      displayGuessMessage('Game over!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }

  //Too high
  //   } else if (guessingNumber > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.guess-message').textContent = 'Слишком много!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guess-message').textContent = 'Game over!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //Too low
  //   } else if (guessingNumber < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.guess-message').textContent = 'Слишком мало!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guess-message').textContent = 'Game over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  //   document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  displayGuessMessage('Начни угадывать!');
  //   document.querySelector('.score').textContent = score;
  displayScore(score);
  //   document.querySelector('.question').textContent = '??';
  displayQuestion('??');
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.number-input').value = '';
});
