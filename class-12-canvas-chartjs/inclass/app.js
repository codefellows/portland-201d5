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

drawImage(0);
drawImage(1);
drawImage(2);

function clickHandler(event) {
  //clear list
  console.log(event.target);
  var matchPath = event.target.getAttribute('src');
  var arrayOfRandomIndices = randomIndices();
  console.log(matchPath);
  //use event target to determine which image was clicked
  //add to the views of all images displayed
  //add to the clicks of just the clicked image
  for (var i = 0; i < images.length; i++) {
    var currentImageObject = images[i];
    // console.log('Images', i, images[i]);
    if (currentImageObject.path === matchPath) {
      console.log('found it!1', currentImageObject);
      currentImageObject.clicks += 1;
    };
  }

  imageList.textContent = '';
  drawImage(arrayOfRandomIndices[0]);
  drawImage(arrayOfRandomIndices[1]);
  drawImage(arrayOfRandomIndices[2]);
}

function randomIndices() {
  var firstRandomIndex = Math.floor(Math.random() * images.length);
  var secondRandomIndex = Math.floor(Math.random() * images.length);
  while(firstRandomIndex === secondRandomIndex) {
    secondRandomIndex = Math.floor(Math.random() * images.length);
  }
  var thirdRandomIndex = Math.floor(Math.random() * images.length);
  while(thirdRandomIndex === firstRandomIndex
      || thirdRandomIndex === secondRandomIndex) {
    thirdRandomIndex = Math.floor(Math.random() * images.length);
  }
  return [firstRandomIndex, secondRandomIndex, thirdRandomIndex];
}


function drawImage(index) {
  //use the image path for the source
  //(image.path)
  var img = document.createElement('img');
  var li = document.createElement('li');
  var imageList = document.getElementById('images');
  var randomPath = images[index].path;

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
