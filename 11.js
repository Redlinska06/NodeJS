// Zadanie 11  Stwórz aplikację która pobierze dane dotyczące pogody i wyświetl ją na konsoli.
// W tym zadaniu wykorzystamy zewnętrzny moduł request. Pakiet ten udostępnia nam funkcje pozwalające
// na wysłanie żądania do zewnętrznego serwera i pobranie danych.
// Adres do pobrania danych:
// https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=Bia%C5%82ystok
// https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=NAZWA_MIASTA
// gdzie 'q' to parametr zawierający nazwę miasta do sprawdzenia pogody.

// const request = require("request");

// request(
//   "https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=Bia%C5%82ystok",
//   function(error, response, body) {
//     const data = JSON.parse(body);
//     console.log(data);
//   }
// );
