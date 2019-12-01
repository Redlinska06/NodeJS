const request = require("request");
const yargs = require("yargs").argv;
const data = require("./user8");
const weather = require("./weather8");

console.log(user8.data.name);
console.log(user8.lat);
console.log(user8.lng);
console.log(weather8.weather.main.temp);
