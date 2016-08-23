'use strict';
var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  generateRandom: function() {

  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 10; i++) {
      this.totalCookies += this.cookiesPerHour();
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');

    this.cookiesPerDay();

    h2.textContent = 'Pike';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    var main = document.getElementById('store_info');
    main.appendChild(ul);
  }
};

function Store(name, avg, min, max) {
  this.name = name;
  this.avgCookies = avg;
  this.minCust = min;
  this.maxCust = max;
  this.totalCookies = 0;
  this.generateRandom = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
}

Store.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

var pikePlace = new Store('Pike Place', 6.3, 23, 65);
var seaCenter = new Store('Seattle Center', 3.7, 11, 28);
console.log(pikePlace, seaCenter);

pike.render();
