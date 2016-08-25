'use strict';
//comment array
var comments = [];
//comment constructor
function Comment(name, text) {
  this.name = name;
  this.text = text;
  //new comment pushes itself to comment array
  comments.push(this);
};

//render method
Comment.prototype.render = function() {
  //create new li
  var li = document.createElement('li');
  //message text
  var message = '<span>' + this.name + '</span>: ' + this.text;
  //updated li text
  li.innerHTML = message;
  return li;
};

//get button
var button = document.getElementById('click_event_test');

//add listener
//no parentheses on the function because we're not calling it
//two arguments: the name of the event and the function to call
button.addEventListener('click', handleClick);

//event handler
//handler gets passed event
function handleClick() {
  clearChat();
};

var chatForm = document.getElementById('chat_form');

chatForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //event.target is the node
  //event.target.<name> is the field
  //event.target.<name>.value is the field text

  //set values to variables so it's not so long in the function call
  var name = event.target.name.value;
  var text = event.target.text.value;

  //create new comment with field values
  new Comment(name, text);
  clearChat();
  //render the chat list
  renderChat();

  //reset the fields
  event.target.name.value = null;
  event.target.text.value = null;
};

//adds all of our comments to the DOM
function renderChat() {
  var ul = document.getElementById('comments');

  //iterate over comments, create li, add to list
  for (var i = 0; i < comments.length; i++) {
    //each item in the array is a Comment object with
    //a render method which returns an li
    var li = comments[i].render();
    //add the li to the list
    ul.appendChild(li);
  }
}

//clears chat list
function clearChat() {
  var ul = document.getElementById('comments');
  //setting textContent to empty string clears element
  ul.textContent = '';
}

new Comment('slothOne', 'swimming lol');
new Comment('sloth5000', 'hanging off branches rulez');
renderChat();
