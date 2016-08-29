'use strict';

var storez;
var store = {
  logTotal: function() {
    console.log('the total is a lot');
  }
};

// console.log('store object:', store);
//
// clearSlothStorez();
//
// console.log('store object:', store);

//store.logTotal();


function logStores() {
  var stores = 'spelled with an s';
  console.log(stores);
}

function alsoLogStores() {
  console.log(stores);
}

function slothChat() {
  console.log('sup sloth');
  slothReply();
}

function slothReply() {
  console.log('just hangin... from a branch lol');
  slothBack();
}

function slothBack() {
  var slothError = new Error('SLOTH OUT');
  console.log('lol I\'m out');
  console.log('sloth chat end  ' + 'initiating sloth exit sequence' + '\n whatever that is');
  throw slothError;
}


function clearSlothStorez() {
  store = null;
  return store;
}

//slothChat();


try {
  logStores();
  slothChat();
} catch(e) {
  console.log('In catch block!', e);
}
  console.log('prgrams still running');
