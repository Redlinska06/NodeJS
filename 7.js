// Zadanie 7 Wykorzystując zadanie 6 dodajmy opcję pobrania pogody dla wczytanego użytkownika.
// Pamiętajmy o odpowiednim zabezpieczeniu naszej aplikacji w przypadku błędu API(podobnie jak w z zadaniu 5).
// Adres do pobrania danych:
// https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}
// gdzie `{LAT}` i `{LNG}` to współrzędne geograficzne pobrane od naszego użytkownika

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
  }
});
