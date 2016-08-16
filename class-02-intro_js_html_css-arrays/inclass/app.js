'use strict';

var musicQuestionAnswer = prompt('Do I play guitar');

if (musicQuestionAnswer.toLowerCase() === 'yes' || musicQuestionAnswer.toLowerCase() === 'y') {
  alert('You\'re right, I have played since I was a kid.');
} else {
  alert('Actually, I do.');
}
