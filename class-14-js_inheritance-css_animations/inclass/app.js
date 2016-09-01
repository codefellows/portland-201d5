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
  //create the first random index
  var firstRandomIndex = Math.floor(Math.random() * images.length);

  //create the second random index
  var secondRandomIndex = Math.floor(Math.random() * images.length);

  //while the first index and the second index are the same regenerate
  //the second index
  while(firstRandomIndex === secondRandomIndex) {
    secondRandomIndex = Math.floor(Math.random() * images.length);
  }

  //generate the third index
  var thirdRandomIndex = Math.floor(Math.random() * images.length);

  //while the third index is the same as the first index or the
  //second index regenerate the third index
  while(thirdRandomIndex === firstRandomIndex
      || thirdRandomIndex === secondRandomIndex) {
    thirdRandomIndex = Math.floor(Math.random() * images.length);
  }

  //return an array of all three
  return [firstRandomIndex, secondRandomIndex, thirdRandomIndex];
}


function drawImage(index) {
  //create an image element and an li element for our new image
  var img = document.createElement('img');
  var li = document.createElement('li');

  //get the list where the images are being stored
  var imageList = document.getElementById('images');

  //use the index passed into the draw image function to get an
  //image object from the images array and set the path property
  //of that object to the imagePath variable.
  var imagePath = images[index].path;

  //set the src attribute of the img node we created on line 133
  //to the path that we got from the image object
  img.setAttribute('src', imagePath);

  //add the img node to the li node and the li node to the list
  //which adds the node to the dom
  li.appendChild(img);
  imageList.appendChild(li);
}

//constructor function for the Image which takes a name and a path
//as an argument
function Image(name, path) {
  //start the views and clicks for the new image object at 0
  this.views = 0;
  this.clicks = 0;
  //set the name to the name that's passed into the function
  this.name = name;
  //set the path to the directory name plus the filename. This gives
  //us the full path to the file that we can use for the img src
  this.path = 'imgs/' + path;

  //push the new image to the images array
  images.push(this);
}

//get the button to show the chart from the dom and store it on chartButton
var chartButton = document.getElementById('show_chart');

//add a click event to the the button so we can show the chart
chartButton.addEventListener('click', chartClickHandler);

//create a click handler for our click event
function chartClickHandler() {
  //the next few lines represent us saving the image objects to localStorage
  //first turn the image array into a JSON string so that we can store it
  var imageJSON = JSON.stringify(images);

  //next use the setItem method on localstorage to set the images property
  //to our JSON string
  localStorage.setItem('images', imageJSON);

  //draw the chart
  drawChart();

  //set the disabled property on the chart button to true which turns off the button
  chartButton.disabled = true;
}

//function to render the chart
function drawChart() {
  //create arrays for the names of the images and for the click totals of the images.
  //we'll pass these to the chart options object for the bars.
  var imageNames = [];
  var imageClicks = [];

  for (var i = 0; i < images.length; i++) {
    //loop through the images array and add each name to the imageNames array and each
    //amount of clicks to the imageClicks array
    imageNames.push(images[i].name);
    imageClicks.push(images[i].clicks);
  }

  //get the context for the chart
  var ctx = document.getElementById('chart_canvas');

  //call the Chart constructor passing in the context and an options object
  new Chart(ctx, {
    //set the chart type
    type: 'bar',
    //pass in the image names as the labels and the data in the datasets
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
