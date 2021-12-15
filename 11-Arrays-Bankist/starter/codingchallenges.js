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

/* ------------------------- Coding Challenge #2 ----------------------- */

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return avg;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
