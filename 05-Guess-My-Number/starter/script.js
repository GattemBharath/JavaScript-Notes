'use strict';
/* ---------------------------- Selecting and Manipulating Elements ---------------------------- */

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);
*/

/* ---------------------------- Handling Click Events ---------------------------- */
// 🎉 ✍✍✍✍

/* 1. By using EventListener we can wait for a certain event to happen and we can react to it.
   2. Here 1st argument is the name of the event we are listening for i.e., click.
      Second argument contains functon value and this function simply contains the code that we want to execute whenever the event happens.
   3. We do not call this function here, we only define the function and pass it into the event handler,
      but it is the JavaScript Engine who will call this function as soon as this event happens.
*/
/*

document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  // document.querySelector('.message').textContent = '🎉 Correct Number!';

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});

*/
/* ---------------------------- Implementing the Game Logic ---------------------------- */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // State Variable(Data relevent to the application)
let highscore = 0;
//document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // WHEN THERE IS NO INPUT NUMBER
    //document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess == secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '🎃 You lost the game!';
      displayMessage('🎃 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   // When guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🎃 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🎃 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
