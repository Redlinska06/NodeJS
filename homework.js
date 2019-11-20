// Zadanie 9

// const os = require("os");
// const fs = require("fs");

// const user = os.userInfo();

// setTimeout(function() {
//   if (user) {
//     console.log("hello", user);
//   } else {
//     console.log("hello stranger");
//   }
// }, 5 * 1000);

// Zadanie 10

const os = require("os");
const fs = require("fs");

const user = os.userInfo();

setTimeout(function() {
  let helloMessage;
  if (user) {
    helloMessage = "hello " + user;
  } else {
    helloMessage = "hello stranger";
  }
  console.log(helloMessage);
  fs.writeFileSync("hello.txt", helloMessage);
}, 5 * 1000);

// Zadanie 11

// const request = require('request');
// let url = 'https://api.openweathermap.org/data/2.5/weather?q=Bia%C5%82ystok&APPID=0ed761300a2725ca778c07831ae64d6e'
// request(url, function (error, response, body) {
//     if(error){
//         console.log('error:', error);
//       } else {
//         console.log('body:', body);
//       }
// });

// Zadanie 12

// const request = require('request');
// const argv = require('yargs').argv;
// let city = '';
// let url = 'https://api.openweathermap.org/data/2.5/weather?q=Bia%C5%82ystok&APPID=0ed761300a2725ca778c07831ae64d6e';
// request(url, function (error, response, body) {
//     if(error){
//         console.log('error:', error);
//       } else {
//         console.log(argv);
//       }
// });
