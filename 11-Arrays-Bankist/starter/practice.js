'use strict';

/*----------------------------------------- 1. Simple Array Methods ---------------------------------------- */

let arr = ['a', 'b', 'c', 'd', 'e'];

//! SLICE METHOD
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
// To get SHALLOW COPY
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

//! SPLICE METHOD
/*
  A splice method works in almost the same way as slice.
  But the fundamental difference is that it does actually change the original array.
  So it mutates that array.
*/
//console.log(arr.splice(2)); // ['c', 'd', 'e']
//console.log(arr); // ['a', 'b']
/*
And so now the extracted elements are actually gone from the original array.
So splice deleted them. And so what we can see is that splice actually does mutate
the original array, so it takes part of the array and returns it and then the original array itself
loses this part that was extracted.
*/
// To DELETE LAST ELEMENT
console.log(arr.splice(-1)); // ['e']
console.log(arr); //['a', 'b', 'c', 'd']
arr.splice(1, 2);
console.log(arr); // ['a', 'd']

//! REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']
// This will mutate the original array.

//! CONCAT
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//! JOIN
console.log(letters.join('-')); // a-b-c-d-e-f-g-h-i-j

/*----------------------------------------- 2. Looping Arrays: forEach ---------------------------------------- */

// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

for (const movement of movements) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
}

console.log('---- FOREACH ----');

movements.forEach(function (movement) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
});
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...

/*
  We use a callback function to tell another higher order function exactly what it should do,
  and so in this case we tell forEach that in each iteration
  it should log one of these two strings here to the console. So we give the forEach method instructions
  by giving it a callback function, which contains these instructions.
*/

console.log('🟢 ACCESSING INDEX');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}

console.log('---- FOREACH ----');

movements.forEach(function (mov, idx, arr) {
  if (mov > 0) console.log(`Movement ${idx + 1}: You deposited ${mov}`);
  else console.log(`Movement ${idx + 1}: You withdrew ${Math.abs(mov)}`);
});
/*
  Now when should you use forEach and when should you use the for of loop.
  Well one fundamental difference between the two of them is that you cannot break out
  of a forEach loop. So the continue and break statements do not work in a forEach loop at all.
  So instead, forEach will always loop over the entire array and there is nothing that you can do about it.
  So if you really need to break out of a loop then you have to keep using the for of loop,
  but other than that it really comes down to your personal preference.
*/

/*------------------------------------- 3. forEach With Maps and Sets ------------------------------------ */

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(currencies);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

/* ----------------- 4. The new at Method ---------------------- */

const ar = [23, 11, 64];
console.log(ar[0]); // 23
console.log(ar.at(0)); // 23

// getting last array element
console.log(ar[ar.length - 1]); // 64
console.log(ar.slice(-1)[0]); // 64
console.log(ar.at(-1)); // 64

console.log('Bharath'.at(0)); // B
console.log('Bharath'.at(-1)); // h

/* ---------------------------- 5. The map Method ------------------------------- */

const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return Number((mov * eurToUsd).toFixed(0));
});
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements)
  movementsUSDfor.push(Number((mov * eurToUsd).toFixed(0)));
console.log(movementsUSDfor);

// using arrow functions
const arrow = movements.map(mov => Number((mov * eurToUsd).toFixed(0)));
console.log(arrow);

const movementsDescriptions = movements.map(
  (mov, idx) =>
    `Movement ${idx + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

/* ----------------- 6. The filter Method ---------------------------- */

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

/* ----------------- 7. The reduce Method ---------------------------- */

console.log(movements);

// accumulator is like a snowball
const balance0 = movements.reduce(function (acc, cur, idx, arr) {
  console.log(`Iteration ${idx}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance0);

// using acc = 100
const balance100 = movements.reduce(function (acc, cur, idx, arr) {
  console.log(`Iteration ${idx}: ${acc}`);
  return acc + cur;
}, 100);
console.log(balance100);

const balanceArr = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArr);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// Maximum value
const maximum = movements.reduce(
  (max, mov) => Math.max(max, mov),
  movements[0]
);
console.log(maximum);
