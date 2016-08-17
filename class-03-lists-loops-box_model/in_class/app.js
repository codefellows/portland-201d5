'use strict';

alert('Welcome to my guessing game!');

var randomNum = Math.floor(Math.random() * 10) + 1;
console.log('the number is:', randomNum);

for (var i = 0; i < 4; i++) {
  var userGuess = prompt('Guess a number from 1-10');
  userGuess = Number(userGuess);

  console.log('user guess is:', userGuess, typeof userGuess, typeof randomNum);

  if (randomNum === userGuess) {
    alert('You got it!');
  } else {
    alert('nope!');
  }
}
