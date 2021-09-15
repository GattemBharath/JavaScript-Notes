'use strict';

/*------------------------------- 1. Default Parameters --------------------------------- */

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
/*
 Setting the parameter to undefined is the same thing as not even setting it,
 remember, so when we don't set a parameter, so when we don't pass an argument into that parameter,
 then it will take the value of undefined. And so specifying undefined here, is exactly the same.
 And so this is how we basically skip a default parameter that we want to leave at its default.
*/

/*------------------------ 2. How Passing Arguments Works: Value vs. Reference ----------------------- */

const flight = 'LH234';
const bharath = {
  name: 'Gattem Bharath',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  //if (passenger.passport === 24739479284) alert('Check in');
  //else alert('Wrong passport!');
};
/*
So when we pass a reference type to a function, what is copied is really just a reference
to the object in the memory heap.
*/
// checkIn(flight, bharath);
// console.log(flight);
// console.log(bharath);

// Is the same as doing...
// const flightNum = flight;
/*
when we try to copy an object like this, we are really only copying the reference
to that object in the memory heap, but they both point to the same object in memory.
So here, as we are manipulating the passenger object,
it is exactly the same as manipulating the Jonas object.
because they both are the same object in the memory heap
*/
// const passenger = bharath;
/*
Alright, so in summary, passing a primitive type to a function is really just the same
as creating a copy like this, outside of the function. So the value is simply copied.
On the other hand, when we pass an object to a function, it is really just like copying an object like this.
And so whatever we change in a copy will also happen in the original.
*/

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(bharath);
checkIn(flight, bharath);
/*
 ! But once again, JavaScript does not have pass by reference.
So if you already know some programming, but are new to JavaScript, be sure to understand this.
And I know it's confusing, because as we just learned, for objects, we do in fact pass in a reference.
So the memory address of the object. However, that reference itself is still a value.
It's simply a value that contains a memory address.
So basically we pass a reference to the function, but we do not pass by reference,
and this is an important distinction.
*/

let a = 30;
let b = a;
a = 31;
const obj = { first: 1, second: 2 };
const obj2 = obj;
obj2.first = 3;
console.log(obj.first);
console.log(a, b, obj, obj2);

/*
Explanation
When we pass a primitive type as an argument on a function, the function makes a copy of the original value, and works with it.
When we pass an object as an argument on a function, the function makes a copy of the reference that points to the place of the memory where the object is stored. This copy is a value itself, is not a reference. Through this value, the original object can be modified from inside of a function.
Summary
- In programming languages, Arguments can be passed by value, or passed by reference.
- JavaScript works only passing by value.
- When we pass primitive values, the function works with a value, which is a copy of the original value.
- When we pass an object, the function works with a value, which is a copy of the reference that address to the spot in the memory where the original object is in the memory (still is not a reference).
*/
