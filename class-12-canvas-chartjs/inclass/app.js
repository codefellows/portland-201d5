'use strict';

var imagePaths = ['bag.jpg', 'banana.jpg', 'scissors.jpg', 'pen.jpg'];
var images = [];

for (var i = 0; i < imagePaths.length; i++) {
  var name = imagePaths[i];
  new Image(null, name);
}

//create elements
var imageList = document.getElementById('images');

imageList.addEventListener('click', clickHandler);

drawImage();
drawImage();

function clickHandler(event) {
  //clear list
  console.log(event.target);
  var matchPath = event.target.getAttribute('src');
  console.log(matchPath);
  //use event target to determine which image was clicked
  //add to the views of all images displayed
  //add to the clicks of just the clicked image
  for (var i = 0; i < images.length; i++) {
    var currentImageObject = images[i];
    // console.log('Images', i, images[i]);
    if (currentImageObject.path === matchPath) {
      console.log('found it!1', currentImageObject);
    };
  }

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
  var randomPath = images[randomIndex].path;

  //set src
  img.setAttribute('src', randomPath);

  //add to dom
  li.appendChild(img);
  imageList.appendChild(li);
}

function Image(name, path) {
  this.views = 0;
  this.clicks = 0;
  this.name = name;
  this.path = 'imgs/' + path;

  images.push(this);
}
