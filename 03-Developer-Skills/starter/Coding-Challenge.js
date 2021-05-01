"use strict";

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 1; i <= arr.length; i++) {
    console.log(`${arr[i - 1]}°C in ${i} days...`);
  }
};

printForecast(temps1);
printForecast(temps2);
