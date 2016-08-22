'use strict';

function sum(a, b) {
  var total = a + b;
  return [total, a, b];
};

var firstSum = sum(5, 5)[0];
var secondSum = sum(10, 10)[0];


var thirdSum = sum(sum(6, 4)[0], 10)[0];


console.log(firstSum, secondSum);
