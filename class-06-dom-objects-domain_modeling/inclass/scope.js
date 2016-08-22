'use strict';
//example one
console.log('example one');
var a = 1;
function logA() {
  a += 1;
  console.log(a);
}
logA();
console.log(a);

//example two
console.log('example two');
var b = 1;
function logB() {
  var b;
  b = b + 1;
  console.log(b);
}
logB();
console.log(b);

//example 3
console.log('example 3');
var c = 1;
function logC() {
  var c = 1;
  c++;
  console.log(c);
}
logC();
console.log(c);
