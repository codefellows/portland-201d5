'use strict';

//create an array to keep all the stores
var stores = [];

function Store(name) {
  this.name = name;
  this.data = [];

  //have the new store push itself to our array
  //of stores.
  stores.push(this);
}

//method to create some fake data
Store.prototype.generateData = function() {
  for (var i = 0; i < 5; i++) {
    this.data.push(i);
  }
};

//render function returns a DOM node a row for each store
Store.prototype.render = function() {
  //generate fake data
  this.generateData();

  //create elements
  var row = document.createElement('tr');
  var header = document.createElement('th');

  //change content of the th at the start of the row
  header.textContent = this.name;
  //append it to the row we created
  row.appendChild(header);

  //iterate over our data array and create a td for each
  for (var i = 0; i < this.data.length; i++) {
    //create a new td
    var td = document.createElement('td');
    //change the content of our td to the current item
    //in the data array
    td.textContent = this.data[i];
    //add that td to the row we created
    row.appendChild(td);
  }

  return row;
};

//create our stores which adds them to the stores array
var testStore = new Store('test');
var secondStore = new Store('test two');
var thirdStore = new Store('test three');

//the function to render our table
function createTable() {
  //we now only need our hours and header row for the table
  //that we're creating
  var hours = ['', '12pm', '1pm', '2pm', '3pm', '4pm'];

  //make the elements for the table and the first (hours)
  //row
  var table = document.createElement('table');
  var tableHeader = document.createElement('tr');

  //iterate through the hours array to create a th for each
  //they're ths because this is the top row
  for(var i = 0; i < hours.length; i++) {
    //create a th
    var th = document.createElement('th');
    //change the content of the th to the current hour string
    th.textContent = hours[i];
    //add it to the row we're creating
    tableHeader.appendChild(th);
  }

  //add the row to the table. It's important that we do this
  //in the right order.
  table.appendChild(tableHeader);

  //iterate over our array of store objects to create rows
  for(i = 0; i < stores.length; i++) {
    //the render method of each object returns a row node
    //so we call that render method and assign it to a
    //variable
    var row = stores[i].render();
    //add that row to our table
    table.appendChild(row);
  }

  //if you have a totals row add it here

  //get the element in the DOM that we're adding the table
  //to and add the table
  var main = document.getElementById('main_view');
  main.appendChild(table);
}

createTable();
