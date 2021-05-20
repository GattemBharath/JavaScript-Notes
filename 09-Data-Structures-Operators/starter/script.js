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
