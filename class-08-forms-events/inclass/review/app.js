'use strict';
var stores = [];

function Store(name) {
  this.name = name;
  this.data = [];

  stores.push(this);
}

Store.prototype.generateData = function() {
  for (var i = 0; i < 5; i++) {
    this.data.push(i);
  }
};

//render function returns a DOM node a row for each store
Store.prototype.render = function() {
  this.generateData();
  var row = document.createElement('tr');
  var header = document.createElement('th');

  header.textContent = this.name;
  row.appendChild(header);

  for (var i = 0; i < this.data.length; i++) {
    var td = document.createElement('td');
    td.textContent = this.data[i];
    row.appendChild(td);
  }

  return row;
};


var testStore = new Store('test');
var secondStore = new Store('test two');
var thirdStore = new Store('test three');


function createTable() {
  var hours = ['', '12pm', '1pm', '2pm', '3pm', '4pm'];

  var table = document.createElement('table');
  var tableHeader = document.createElement('tr');

  for(var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    th.textContent = hours[i];
    tableHeader.appendChild(th);
  }

  table.appendChild(tableHeader);

  for(i = 0; i < stores.length; i++) {
    console.log(stores[i], i);
    var row = stores[i].render();
    table.appendChild(row);
  }

  var main = document.getElementById('main_view');
  main.appendChild(table);
}

createTable();
