// Zadanie 9 Stworzyć aplikację, która wyświetli na ekranie przywitanie użytkownika aktualnie zalogowanego
// na komputerze po 5 sekundach od uruchomienia aplikacji. Wykorzystaj tutaj wiedzę z poprzednich zajęć
// (podpowiedź: moduł os, funkcja userInfo()) oraz funkcję setTimeout() która pozwala na wrzucenie naszej funkcji do Node API.

const os = require("os");
const fs = require("fs");

const user = os.userInfo();

setTimeout(function() {
  if (user) {
    console.log("hello", user);
  } else {
    console.log("hello stranger");
  }
}, 5 * 1000);
