'use strict';

/* ------------------------- Coding Challenge #1 ----------------------- */
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
checkDogs(dogsJulia, dogsKate);

function checkDogs(dogsJulia, dogsKate) {
  dogsJulia = dogsJulia.splice(1, 2);
  const allDogs = dogsJulia.concat(dogsKate);
  allDogs.forEach(function (dogAge, idx) {
    if (dogAge >= 3)
      console.log(
        `Dog number ${idx + 1} is an adult, and is ${dogAge} years old`
      );
    else console.log(`Dog number ${idx + 1} is still a puppy🐶`);
  });
}
console.log('---------- TEST #2 ----------');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
