'use strict';

/*---------------------------------------------   1. Sets   ----------------------------------------- */
//! A set is a collection of unique values.The order of elements in the set is irrelevant.

const ordersSet = new Set(['Dosa', 'Idli', 'Puri', 'Chapati', 'Dosa', 'Idli']);
console.log(ordersSet);
// ! Just like arrays, sets are also iterables.
console.log(new Set('Bharath'));

console.log(ordersSet.size); // 4
console.log(ordersSet.has('Puri')); // true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Paneer Dum Biryani');
ordersSet.add('Paneer Dum Biryani');
ordersSet.delete('Chapati');
console.log(ordersSet);
// ordersSet.clear();
// console.log(ordersSet);

/*
  1. In sets there are actually no indexes.And in fact, there is no way
     of getting values out of a set.And if we think about this, then it makes sense.
  2. So there's really no need for getting data out of a set. 
     That's because if all values are unique, and if their order does not matter,
     then there is no point of retrieving values out of a set.
  3. All we need to know is whether a certain value is in the set or not.
     And that's why we have the has method.
  4. If your goal is to actually store values in order and then retrieve it,
     then the best use case, is to just use an array.
*/

for (const order of ordersSet) console.log(order);

// ! Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('GattemBharath').size);

/*----------------------------------------   2. Maps: Fundamentals   ------------------------------------ */

/*
  1. A map is a data structure that we can use to map values to keys.
  2. So, just like an object, data is stored in key value pairs in maps.
  3. Now, the big difference between objects and maps is that 
     in maps, the keys can have any type and this can be huge.
  4. So, in objects, the keys are basically always strings.
  5. But in maps, we can have any type of key.
     It could even be objects, or arrays, or other maps.
*/

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Norway');
console.log(rest.set(2, 'Switzerland'));
// ! And, calling the set method like this does not only update the map that it's called on,
// ! but it also returns the map.
console.log(rest);

// ! Chaining using set method
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 3;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

// ! Using arrays as keys in maps
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.get([1, 2])); // undefined

/*
  And the reason for that, is that these two arrays are actually not the same object.
  So, this array, and this one, even though we wrote them in the same way
  and so, they have the same elements, they are not the same object in the heap, okay?
  And, the key here is exactly this object.
  This object in memory, and not this one.And so, this cannot work.
  In order to make it work, we Create an array.And then, we use that array.
  And then, we also use the same array to read the value out of the map.
  Because, now of course these two refer to the same place in memory.
  Great, and so with this we proved that we can indeed use objects as map keys.
*/

const arrTest = [1, 2];
rest.set(arrTest, 'Test');
console.log(rest.get(arrTest)); // Test

/*
  And, this can be very useful with DOM elements
  which, in fact are also nothing more than just a special type of object.
*/
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(document.querySelector('h1')));

/*----------------------------------------   2. Maps: Iteration   ------------------------------------ */

// ! Populating a map without using set method

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again! 😛'],
]);

console.log(question);
// Both are array of arrays
// And so what this means is that there is an easy way to convert from objects to maps.

// ! Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// ! Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

/*--------------------------------   3. Working With Strings - Part 1 ------------------------------- */

const airline = 'TAP Air Mangalagiri';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Mangalagiri'));

console.log(airline.slice(4)); // Air Mangalagiri
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Mangalagiri

console.log(airline.slice(-2)); // ri
console.log(airline.slice(-5, -2)); //  agi
console.log(airline.slice(1, -1)); //  AP Air Mangalagir

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  console.log(
    s === 'B' || s === 'E' ? 'You got the middle seat😆' : 'You got lucky😎'
  );
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Bharath')); //String {"Bharath"}
console.log(typeof new String('Bharath')); // object

console.log(typeof new String('Bharath').slice(1)); // string
/*
  Whenever we call a method on a string, JavaScript will automatically behind the scenes
  convert that string primitive to a string object with the same content.
  And then it's on that object where the methods are called.
  All right and this process is called boxing because it basically takes our string
  and puts it into a box which is the object.  
*/

/*--------------------------------   4. Working With Strings - Part 2 ------------------------------- */

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('Bharath'.toUpperCase());

// Fix capitalization in name
const passenger = 'bHaRath';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Bharath

// Comparing user email
const email = 'hello@bharath.io';
const loginEmail = '  Hello@Bharath.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // hello@bharath.io

const normalizedEmail = loginEmail.toLowerCase().trim(); // hello@bharath.io
console.log(normalizedEmail); // hello@bharath.io
console.log(email == normalizedEmail); // true

// Replacing
const priceGB = '288,97$';
const priceIN = priceGB.replace('$', '₹').replace(',', '.');
console.log(priceIN); // 288.97₹

const announcement =
  'All passengers come to boarding door 40. Boarding door 40!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// or
console.log(announcement.replace(/door/g, 'gate'));

// Methods returning Booleans
const plane1 = 'Airbus 320neo';
console.log(plane1.includes('320')); // true
console.log(plane1.includes('Boeing')); // false
console.log(plane1.startsWith('Airb')); // true
console.log(plane1.startsWith('A2')); // false

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of thr NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Snacks and camera');
checkBaggage('Got some snacks and a gun for protection');

/*--------------------------------   5. Working With Strings - Part 3 ------------------------------- */

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Gattem Bharath'.split(' '));

const [firstName, lastName] = 'Gattem Bharath'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  let afterCapitalize = [];

  for (let word of names) {
    // afterCapitalize.push(word[0].toUpperCase() + word.slice(1));
    afterCapitalize.push(word.replace(word[0], word[0].toUpperCase()));
  }

  console.log(afterCapitalize.join(' '));
};
capitalizeName('vijaya simha akhila');
capitalizeName('gattem bharath');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Bharath'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; //String(number);
  let last4 = str.slice(-4);
  return last4.padStart(str.length, '*');
  console.log(last4);
};

console.log(maskCreditCard(493949593923457)); // ***********3457
console.log(maskCreditCard('286594957585959'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

/*--------------------------------   6. String Methods Practice ------------------------------- */

const flight =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const f1 = flight.split('+_');
console.log(f1);
for (let time of f1) {
  const arr_dep = time.split(';');
  let output = '';
  for (let [i, op] of arr_dep.entries()) {
    if (i == 0) {
      if (op.includes('Delayed'))
        output += '🔴 ' + op.replaceAll('_', ' ') + ' from ';
      else output += op.replaceAll('_', ' ') + ' from ';
    } else if (i == 1) {
      output += op.slice(0, 3).toUpperCase() + ' to ';
    } else if (i == 2) {
      output += op.slice(0, 3).toUpperCase() + ' ';
    } else if (i == 3) {
      output += '(' + op.replace(':', 'h') + ')';
    }
  }
  console.log(output.trim().padStart(50));
}

// OR //

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${' from ' + getCode(from)} ${' to ' + getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}
