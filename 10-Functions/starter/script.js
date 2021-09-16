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

/*------------------------ 3. Functions Accepting Callback Functions ----------------------- */

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Bharath', 'Simha', 'Akhila'].forEach(high5);
/*
Why our callback functions so much used in JavaScript and why are they so helpful?
1. Well, the first big advantage of this is that it makes it easy to split up our code
   into more reusable and interconnected parts.
2. But there is a second and way more important advantage,
   which is the fact that callback functions allow us to create abstraction.   
*/

//! IMP
/*
This transform a function does not care at all,how the string is transformed.
It doesn't care about this level of detail. Okay, all that wants to do is to transform a string,
but it doesn't care how it should do it.So what I mean is that we could have taken,
this code here(oneWord) and written it directly into transformer,
or even this code here(upperFirstWord),right.

That would have worked just the same, but instead we abstracted this
code away into other functions.

So again, we created a new level of abstruction and by doing this our main transformer function,
here is really only concerned with transforming the input string itself.
But no matter how that transforming itself actually works.
So it's basically delegating the string transformation to the other lower level of functions,
which are these two functions i.e.,(upperFirstWord,oneWord).
*/

/*------------------------ 4. Functions Returning Functions ----------------------- */

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
// greeterHey is actually a function in line 168
greeterHey('Bharath'); // Hey Bharath
greeterHey('Simha'); // Hey Simha

greet('Hello')('Bharath'); // Hello Bharath

// Using ARROW function
const greetArr = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHeyArr = greetArr('Hi');
greeterHeyArr('Bharath'); // Hi Bharath
greeterHeyArr('Simha'); // Hi Simha

greetArr('Hello')('Bharath'); // Hello Bharath

// OR
const greetArr1 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHeyArr1 = greetArr1('Hi👋');
greeterHeyArr1('Bharath'); // Hi👋 Bharath
greeterHeyArr1('Simha'); // Hi👋 Simha

greetArr1('Hello 👋')('Bharath'); // Hello 👋 Bharath

/*------------------------ 5. The call and apply Methods ----------------------- */

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Gattem Bharath');
lufthansa.book(635, 'Vijaya Simha');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Akhila');
// ! Uncaught TypeError: Cannot read properties of undefined (reading 'airline')
/* // ! IMP
Well, it's because this function here, the book function is now just a regular function call
and so as we learned in one of the previous sections,
in a regular function call, the this keyword points to undefined, at least in strict mode.
All right? So once more, this book function is no longer this method.
Okay?It's just not.
It is now this separate function here.
It's a copy of this one, but it's not a method anymore,
it's now a function. And so here it's a regular function call.
And so therefore, the this keyword inside of it will now point to undefined.
And that's why I kept telling you earlier
that the this keyword depends on how the function
is actually called.
Okay, so make sure to understand these dynamics here.
But now how do we actually fix this problem?
So in other words, how do we tell JavaScript that we want to create a booking
on the new Eurowings airline?
Or even how do we tell it that we want to book on Lufthansa here?
Well, basically, we need to tell JavaScript explicitly
what the this keyword here should be like.
So if we want to book a Lufthansa flight, the this keyword should point to Lufthansa
but if we want to book a Eurowings flight, then the this keyword should point to Eurowings.
So how do we do that? How do we tell JavaScript explicitly
or manually what this this keyword should look like?
Well, there are three function methods to do that
and they are call, apply and bind.
So when we first talked about the this keyword,
I think I mentioned these methods back then and so now we're gonna use them,
at least the call and apply methods.
*/
// ! CALL METHOD
book.call(eurowings, 23, 'Akhila');
console.log(eurowings);
/* 
And remember that a function is really just an object and objects have methods
and therefore, functions can have methods too and the call method is one of them.
And in the call method, the first argument is exactly
what we want the this keyword to point to. So let's say we want a Eurowings flight
and then as usual, the rest of the arguments.
*/

/*
So this time, we did actually not call the book function ourselves.
Instead, we called the call method and it's then this call method,
which will call the book function with the this keyword set to eurowings.
So whatever we pass has the first argument of the call method.
And so this allows us to manually and explicitly set the this keyword
of any function that we want to call.
Then all the arguments after the first one are simply the arguments of the original function.
*/
book.call(lufthansa, 239, 'Ms Dhoni');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, 583, 'Virat Kohli');
console.log(swiss);

// ! Apply Method
const flightData = [583, 'Gattem Bharath'];
book.apply(swiss, flightData);
console.log(swiss);
// This apply method is not that used anymore in modern JavaScript because now,

book.call(swiss, ...flightData);
console.log(swiss);

// ! Bind Method
