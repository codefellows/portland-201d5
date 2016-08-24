'use strict';

console.log('hi');

//get button
var button = document.getElementById('click_event_test');

//add listener
//no parentheses on the function because we're not calling it
//two arguments: the name of the event and the function to call
button.addEventListener('click', handleClick);

//event handler
//handler gets passed event
function handleClick(event) {
  alert('HEY');
  console.log(event.target);
};

var chatForm = document.getElementById('chat_form');

chatForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //event.target is the node
  //event.target.<name> is the field
  //event.target.<name>.value is the field text

  console.log(event.target.who.value);
  console.log(event.target.comment.value);
};
