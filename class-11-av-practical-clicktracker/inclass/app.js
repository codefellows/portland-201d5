'use strict';

var imagePaths = ['bag.jpg', 'banana.jpg', 'scissors.jpg', 'pen.jpg'];
var images = [];

for (var i = 0; i < imagePaths.length; i++) {
  var name = imagePaths[i];
  new Image(null, name);
}
console.log(imagePaths, images);
//create elements
var imageList = document.getElementById('images');

imageList.addEventListener('click', clickHandler);

drawImage();
drawImage();

function clickHandler(e) {
  //clear list
  console.log(e.target);
  //use event target to determine which image was clicked
  //add to the views of all images displayed
  //add to the clicks of just the clicked image
  imageList.textContent = '';
  drawImage();
  drawImage();
}

function drawImage() {
  //use the image path for the source
  //(image.path)
  var img = document.createElement('img');
  var li = document.createElement('li');
  var imageList = document.getElementById('images');
  var randomIndex = Math.floor(Math.random() * imagePaths.length);
  var randomPath = imagePaths[randomIndex];

  //set src
  img.setAttribute('src', 'imgs/' + randomPath);

  //add to dom
  li.appendChild(img);
  imageList.appendChild(li);
}

function Image(name, path) {
  this.views = 0;
  this.clicks = 0;
  this.name = name;
  this.path = path;

  images.push(this);
}
