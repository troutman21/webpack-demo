const http = require('http');
const path = require('path');
const fs = require('fs');
const os = require('os');

console.log(`http: `, http);
console.log(`path: `, path);
console.log(`fs: `, fs);
console.log(`os: `, os);


// const userInfo = os.userInfo()
// for(const property in userInfo){
//   console.log(`${property}: ${userInfo[property]}`);
// }