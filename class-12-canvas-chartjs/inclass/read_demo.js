'use strict';
const fs = require('fs');
//what the hell is this arrow thing
fs.readdir('./imgs', (err, directories) => {
  //why does this if not have brackets or an else
  if (err) return console.err(err);
  console.log(directories);
});
