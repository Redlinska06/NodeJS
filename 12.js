// Zadanie 12 modyfikujmy zadanie 11 tak aby miejscowość była podawana przez parametr wejściowy.
// W tym celu dodajmy zewnętrzny moduł yargs.
// Adres do pobrania danych:
// https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=Bia%C5%82ystok
// https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=NAZWA_MIASTA
// gdzie 'q' to parametr zawierający nazwę miasta do sprawdzenia pogody.
// Przykładowe wywołanie programu:
// > node app --city=bialystok

// const request = require("request");
// const argv = require("yargs").argv;
// const city = argv.city;
// const url =
//   "https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=" +
//   city;

// const Weather = function(city) {
//   request(url, (error, response, body) => {
//     let json = JSON.parse(body);
//     console.log(`City : ${json.name}`);
//     console.log(json.main);
//   });
// };
// Weather(city);
