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