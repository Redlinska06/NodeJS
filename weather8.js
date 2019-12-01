const request = require("request");
const data = require("./user8");
const lat = require("./user8");
const lng = require("./user8");

let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
request(weatherUrl, (error, response, body) => {
  if (error) {
    console.log("Error!!!");
  } else if (response.statusCode !== 200) {
    console.log("User not found");
  } else {
    const weather = JSON.parse(body);
    console.log(weather.main.temp);
  }
});

module.exports = {
  weather: weather
};
