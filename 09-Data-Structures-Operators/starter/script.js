'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* ---------------------------------  1. Destructuring Arrays  ----------------------------------- */

// !  Destructuring Arrays
/*
    So destructuring is an ESX feature and it's basically a way of unpacking values
    from an array or an object into separate variables.
    So in other words destructuring is to break a complex data structure down
    into a smaller data structure like a variable.
    So for arrays we use destructuring to retrieve elements from the array
    and store them into variables in a very easy way.
*/

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant['categories'];
console.log(main, secondary); // Italian Vegetarian

// ! Changing main to secondary and vice versa without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian Italian

// ! Changing main to secondary and vice versa with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

console.log(restaurant.order(2, 0)); //  ["Garlic Bread", "Pizza"]

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 [5,6]
// ! Nested Destructuring
const [p, , [q, r]] = nested;
console.log(p, q, r); // 2 5 6

// ! Default values
const [k = 1, l = 1, m = 1] = [8, 9];
console.log(k, l, m); //8 9 1

/* ---------------------------------  2. Destructuring Objects  ----------------------------------- */

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// ! Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// ! Mutating variables
let aa = 111;
let bb = 999;
const obj = { aa: 40, bb: 7, c: 80 };
console.log(typeof obj, obj);

({ aa, bb } = obj);
console.log(aa, bb); // 40 7

// ! Nested Objects
const {
  fri: { open: o, close: cl },
} = openingHours;
console.log(o, cl); // 11 23

restaurant.orderDelivery({
  time: '22:30',
  address: 'India',
  mainIndex: 2,
  starterIndex: 2,
});
// Order received! Garlic Bread and Risotto will be delivered to India at 22:30

restaurant.orderDelivery({
  address: 'India',
  starterIndex: 2,
});
// Order received! Garlic Bread and Pizza will be delivered to India at 20:00

/* ---------------------------------  3. The Spread Operator (...)  ---------------------------------- */

const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr); // [1,2,7,8,9]

const newArr = [1, 2, ...arr1];
console.log(newArr); // [1,2,7,8,9]

console.log(...newArr); // 1,2,7,8,9
// ! Whenever we need the elements of the array individually then we can use the spread operator

const newMenu = [...restaurant.mainMenu, 'Dosa', 'Idli'];
console.log(newMenu);
/* 
  The spread operator is actually a bit similar to destructuring,
  because it also helps us get elements out of arrays. 
  Now, the big difference is that the spread operator takes all the elements from the array
  and it also doesn't create new variables.
  And as a consequence, we can only use it in places where we would otherwise
  write values separated by commas.
*/

// ! Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// ! Join 2 arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

// ! Iterables are arrays, strings, maps, sets. NOT objects
const str = 'Bharath';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ["B", "h", "a", "r", "a", "t", "h", " ", "S."]

// ! we can still only use the spread operator when building an array, or when we pass values into a function.
console.log(...str);
// console.log(`${...str}`); // SyntaxError: Unexpected token '...'

// ! Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// ! Objects
const newRestaurant = { foundedIn: 2000, ...restaurant, founder: 'Simha' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Indian restaurant';
console.log(restaurantCopy.name + '🥗', 'is the new restaurant name');
console.log(restaurant.name + '🥞', 'is the old restaurant name');

/* ---------------------------------  4. Rest Pattern and Parameters  ---------------------------------- */

// !  REST PATTERN VS. SPREAD
/*
  The rest pattern looks exactly like the spread operator.So it has the same syntax with the three dots
  but it actually does the opposite of the spread operator.   
  The rest pattern uses the exact same syntax however, to collect multiple elements 
  and condense them into an array.So that's really the opposite of spread.
  The spread operator is to unpack an array, while rest is to pack elements into an array.
*/

// ! 1) Destructuring --------------

// ! REST pattern in arrays
// SPREAD, because on RIGHT side of =
const arr2 = [1, 2, ...[3, 4, 5, 6, 7]];
console.log(arr2); //[1, 2, 3, 4, 5, 6, 7]

// REST, because on LEFT side of =
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// ! IMP
/*
  The rest pattern always must be the last in the destructuring assignment
  because otherwise how will JavaScript know until when it should collect the rest of the array.
  Hence there can only be one rest element in an array.
*/

// ! REST pattern in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}

// ! 2) Functions ----------------
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x1 = [23, 5, 7];
add(...x1);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
/*
  So, the spread and rests syntax both look exactly the same but they work in opposite ways
  depending on where they are used.So the spread operator is used
  where we would otherwise write values, separated by a comma.
  On the other hand the rest pattern is basically used where we would
  otherwise write variable names separated by commas.
  So, again the rest pattern can be used where
  we would write variable names, separated by commas and not values separated by commas.
*/

/* ---------------------------------  5. Short Circuiting (&& and ||)  ---------------------------------- */

console.log('----------------OR-----------------');
console.log(3 || 'Bharath'); // 3
/* 
  That means that the results of the OR operator doesn't always have to be a Boolean.
  So there are three properties about logical operators.They can
  1. Use ANY data type, 
  2. Return ANY data type,
  3. short-circuting
*/

/*
  And now about short circuiting, in the case of the OR operator,
  short circuiting means that if the first value is a truthy value,
  it will immediately return that first value.
*/

console.log('' || 'Bharath'); // Bharath
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 40 || null); // Hello

// restaurant.numGuests = 40;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

console.log('----------------AND-----------------');
console.log(0 && 'Bharath'); // 0
/*
  The AND operator short circuits, when the first value is falsy.
  And then immediately returns that falsy value without even evaluating the second operand.
*/
console.log(7 && 'Bharath'); // Bharath
// So when it is truthy, it means that the evaluation continues and then simply the last value is returned.

console.log('Hello' && 40 && null && 'Bharath'); //  null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// alternate code for above if statement
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
/*
  And as for practical applications, we can use the OR operator to set default values,
  and we can use the AND operator to execute code in the second operand if the first one is true. 
*/

/* ---------------------------------  6. The Nullish Coalescing Operator (??)  ---------------------------------- */

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0
/*
  1. Well, it is because the nullish coalescing operator works with the idea or with the concept
     of nullish values instead of falsy values.And nullish values are null and undefined.
  2. It does not include a zero or the empty string.
  3. So basically, for the nullish coalescing operator, it is as if the zero and the empty string
     were not falsy values and were instead truthy values as well.
  4. But again, this operator does work with the principle of nullish values.
     And so all the nullish values will short circuit the evaluation here.
  5. Okay, so only if this was null or undefined,only then the second operand here
     would be executed and returned.
*/

/* ---------------------------------  6. Looping Arrays: The for-of Loop  ---------------------------------- */

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu2) {
  console.log(item);
}

for (const item of menu2.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// Using Destructuring
for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu2.entries()]);

/* ---------------------------------  7.  Enhanced Object Literals  ---------------------------------- */

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hotelHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const hotel = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ! 1st ES6 enhanced object literals
  hotelHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
// ! 2nd ES6 enhanced object literals
/*
  So the second enhancement to object literals is about writing methods.
  So in ES6 we no longer have to create a property, and then set it to a function expression,
  like we have always been doing, right?So essentially, we create a property just like we do all
  the other properties and then we set that to a function expression.
*/
// ! 3rd ES6 enhanced object literals
/*
  And finally, the third enhancement is that we can now actually compute property names 
  instead of having to write them out manually and literally.
*/

/* ---------------------------------  8.  Optional Chaining (?.)  ---------------------------------- */

// console.log(restaurant.openingHours.mon); // undefined

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

/*
  When we have deeply nested objects with lots of optional properties.
  And sometimes that happens in the real world.
  And so therefore ES2020 introduced a great solution for this,
  which is a feature called optional chaining.And with optional chaining,
  if a certain property does not exist, then undefined is returned immediately.
  And so that will then avoid that kind of error that we saw earlier.
*/

// console.log(restaurant.openingHours.mon.open); // error

// !  WITH optional chaining on OBJECTS
console.log(restaurant.openingHours.mon?.open); // undefined
/*
  So only if the property that is before this question mark here.
  So only if Monday exists, then this open property will be read from there.
  But if not, then immediately undefined will be returned.
*/
console.log(restaurant.openingHours?.mon?.open);
/*
  And now if restaurant.openingHours does not even exist,well,
  then the Monday property will not even be read and so therefore we don't get that error.
  And so this makes it really easy to prevent all kinds of bugs that sometimes we might not even expect.
*/

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// ! optional chaining on METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// ! optional chaining on ARRAYS
// So basically we can use it to check if an array is empty.
const users = [{ name: 'Bharath', email: 'hello@bharath.io' }];

console.log(users[0]?.name ?? 'User array empty');
console.log(users[0]?.mobile ?? 'User array empty');
// IF written using if statement
if (users.length >= 0) {
  console.log(users[0]?.name);
} else {
  console.log('User array empty');
}

/* --------------------------  9. Looping Objects: Object Keys, Values, and Entries ------------------------- */

// ! Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// ! Property VALUES
const values = Object.values(openingHours);
console.log(values);

// ! Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open}AM and close at ${close}PM`);
}
