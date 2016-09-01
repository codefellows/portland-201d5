'use strict';
//The file names for all of our images
var imagePaths = ['bag.jpg', 'banana.jpg', 'scissors.jpg', 'pen.jpg'];

//get whatever is on the images property of localStorage and set it to
//imageJSON
var imageJSON = localStorage.getItem('images');

//Parse whatever's there. If it's a JSON string this will turn it into an
//array, if it's null it will still be null
var images = JSON.parse(imageJSON);

//set the starting images to display
var currentImageIndices = [0, 1, 2];

//initialize a picture click counter at zero
var totalClicks = 0;

//check if there's anything on the images variable. If it's null this conditional
//will be hit.
if (!images) {
  //if there's nothing there set images to an empty array
  images = [];

  //populate the image array with new image objects
  for (var i = 0; i < imagePaths.length; i++) {
    //the path for the image is one of the strings in the array
    var path = imagePaths[i];
    //we can use split to remove the extension
    var imageName = path.split('.')[0];

    //calling the image constructor also adds it to the array
    new Image(imageName, path);
  }
}

//get the ul where we're going to put the images
var imageList = document.getElementById('images');

//add a click handler to the ul
imageList.addEventListener('click', clickHandler);

//render the images passing in the appropriate index
drawImage(0);
drawImage(1);
drawImage(2);

function clickHandler(event) {

  //check to see if we've hit our click index
  if (totalClicks >= 5) {
    //get the button that shows the chart which is hidden with a class
    var chartButton = document.getElementById('show_chart');
    //remove the hidden class which shows the button
    chartButton.classList.remove('hidden');
    //by returning here we exit out of the function. This effectively
    //disables our click handler
    return;
  }

  //get the path from the source attribute of the event target (one of the imgs)
  var matchPath = event.target.getAttribute('src');
  //generate a new array of indices
  var arrayOfRandomIndices = randomIndices();

  //loop through all of the currently displayed images. Increment the views of
  //each
  for(var i = 0; i < currentImageIndices.length; i++) {
    var currentIndex = currentImageIndices[i];
    var displayedObject = images[currentIndex];
    displayedObject.views += 1;
  }

  //add one to the total clicks
  totalClicks += 1;

  //loop through all of the images, using the image path to find out which
  //one matches the path that was clicked
  for (var i = 0; i < images.length; i++) {
    var currentImageObject = images[i];

    //if the path that we got from the clicked img's src attribute matches
    //the path property on the current object in the array that's the one
    //we're looking for so we add one to it's clicks property
    if (currentImageObject.path === matchPath) {
      currentImageObject.clicks += 1;
    };
  }

  //set the currently displayed images to the newly generated array
  currentImageIndices = arrayOfRandomIndices;

  //clear out the ul of images
  imageList.textContent = '';

  //draw an image for each in our newly generated array
  drawImage(arrayOfRandomIndices[0]);
  drawImage(arrayOfRandomIndices[1]);
  drawImage(arrayOfRandomIndices[2]);
}

//function to generate an array of indices to display
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

var chartButton = document.getElementById('show_chart');
chartButton.addEventListener('click', chartClickHandler);

function chartClickHandler() {
  var imageJSON = JSON.stringify(images);
  localStorage.setItem('images', imageJSON);

  drawChart();
  chartButton.disabled = true;
}

function drawChart() {
  var imageNames = [];
  var imageClicks = [];

  for (var i = 0; i < images.length; i++) {
    imageNames.push(images[i].name);
    imageClicks.push(images[i].clicks);
  }

  var ctx = document.getElementById('chart_canvas');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: imageNames,
      datasets: [{
        data: imageClicks
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
