const request = require("request");
const yargs = require("yargs").argv;

const id = yargs.id;
let url = `https://jsonplaceholder.typicode.com/users/${id}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("Error!!!");
  } else if (response.statusCode !== 200) {
    console.log("User not found");
  } else {
    const data = JSON.parse(body);
    const lat = data.address.geo.lat;
    const lng = data.address.geo.lng;
    console.log(data.name);
    console.log(lat);
    console.log(lng);
  }
});

module.exports = {
  data: data,
  lat: lat,
  lng: lng
};
