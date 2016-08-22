'use strict';
var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
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
    var main = document.getElementById('store_info');

    h2.textContent = 'Pike';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    main.appendChild(ul);
  }
};

pike.cookiesPerDay();
pike.render();
