/*  ------------------------------- 1. Activating Strict Mode -------------------------------- */

'use strict'; 
/*
  Should be the first statement in the code.
  To write secure code, it helps in avoiding accidental errors or bugs in code.
  First, strict mode forbids us to do certain things. 
  Second, it will actually create visible errors for us in certain
  situations in which without strict mode JavaScript will simply fail silently
  without letting us know that we did a mistake. 
*/

let hasDriversLicense = false;
const passTest = true;

if(passTest) {
    //hasDriverLicense = true; //making error on purpose
    hasDriversLicense = true;
}
// Uncaught ReferenceError: hasDriverLicense is not defined at script.js:17 
// This happens when strict mode is turned on, otherwise no error!!!
if(hasDriversLicense){
    console.log('I can drive :D');
}
// Some words can't be used as variables because JavaScript kept them aside to use them as reserved words in future.
/* const interface = 'Audio';
   const private = 400;
   Uncaught SyntaxError: Unexpected strict mode reserved word  */
/* const if = 234;    
Uncaught SyntaxError: Unexpected token 'if' */

/*  ------------------------------- 2. Functions -------------------------------- */

function logger() {
    console.log('My name is Bharath');
}
// calling / running / invoking function
logger();
logger();
logger(444);

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
// console.log(fruitProcessor(3,2));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('40'); //Function
console.log(num);

/*  ------------------------------- 3. Function Declarations vs. Expressions -------------------------------- */

// Function Declaration
function calAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calAge1(2000);
console.log('age1 =',age1); // 21

// Function Expression
const calAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calAge2(2000);
console.log('age2 =',age2); // 21

// Can access function before initialization in function declaration
const age3 = calAge1(2000);
function calAge1(birthYear) {
    return 2021 - birthYear;
}
console.log('age3 =',age3); // 21

/* Can't access function before initialization in function expression
const age4 = calAge4(2000);
const calAge4 = function (birthYear) {
    return 2021 - birthYear;
}
console.log(age4); // Uncaught ReferenceError: Cannot access 'calAge4' before initialization 
*/

/*  ------------------------------- 4. Arrow Functions -------------------------------- */

// Arrow Function
/* we don't need parenthesis and
   return happens implicitly. */
const calAge5 = birthYear => 2021 - birthYear;
const age5 = calAge5(2000);
console.log('age5 =', age5);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(2000, 'Bharath'));
console.log(yearsUntilRetirement(2012, 'Simha'));

/*  ------------------------------- 5. Functions Calling Other Functions  -------------------------------- */

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces!!!`;
    return juice;
}
console.log(fruitProcessor(2,3));

/*  ------------------------------- 6. Reviewing Functions  -------------------------------- */

const calcAge = function(birthYear) {
    return 2021 - birthYear; 
}

const years_UntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement  > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1; 
    }        
          
}
console.log(years_UntilRetirement(2000,'Bharath'));
console.log(years_UntilRetirement(1950,'Simha'));

/*  ------------------------------- 7. Introduction to Arrays  -------------------------------- */

const friend1 = 'Simha';
const friend2 = 'Akhila';
const friend3 = 'Bharath';

const friends = ['Simha', 'Akhila', 'Bharath'];
console.log(friends);
console.log(friends[0]);

const years = new Array(2000, 2008, 2012, 2016, 2020);
console.log(years);
console.log(years[0]);

console.log('The length of array is',years.length);
console.log(friends[friends.length-1]);

friends[2] = 'Hattori';
console.log('After updation',friends);

//friends = ['Bob', 'Alice'];// Uncaught TypeError: Assignment to constant variable.
const firstName = 'Bharath';
const bharath = [firstName, 'Gattem', 2021 - 2000, 'Student', friends];
console.log(bharath);

const calcAge4 = function(birthYear) {
    return 2021 - birthYear; 
}
const year = [2000, 2008, 2012, 2016, 2020];
console.log(calcAge4(year)); // NaN
console.log(calcAge4(year[0])); // 21
console.log(calcAge4(year[4])); // 1

const ages = [calcAge4(year[0]), calcAge4(year[4])];
console.log(ages);

/*  ------------------------------- 8. Basic Array Operations (Methods)  -------------------------------- */

//ADD ELEMENTS TO THE END OF THE ARRAY
const newLength = friends.push('Bharath');
console.log(friends);
console.log(newLength); // returns length

//ADD ELEMENTS TO THE BEGINNING OF THE ARRAY
friends.unshift('Shinchan');
console.log(friends); // returns length

//REMOVE LAST ELEMENT
const popped = friends.pop();
console.log(popped); //returns removed element
console.log(friends);

//REMOVE FIRST ELEMENT
friends.shift();
console.log(friends);

//ELEMENT POSITION
console.log(friends.indexOf('Hattori'));
console.log(friends.indexOf('Shinchan')); // -1

//returns true or false 
console.log(friends.includes('Hattori')); // true

if (friends.includes('Hattori')) {
    console.log('You have a friend called Hattori');
}

/*  ------------------------------- 9. Introduction to Objects  -------------------------------- */

const Bharath = {
    firstName:'Gattem',
    lastName:'Bharath',
    age:2021 - 2000,
    job:'Student',
    friends: ['Simha', 'Akhila', 'Hattori']
};
console.log(Bharath);

/*  ------------------------------- 10. Dot vs. Bracket Notation  -------------------------------- */

console.log(Bharath.age); // DOT NOTATION
console.log(Bharath['age']); // BRACKET NOTATION

const nameKey = 'Name';
console.log(Bharath['first'+nameKey]);
console.log(Bharath['last'+nameKey]);

//console.log(Bharath.'last'+nameKey); // Uncaught SyntaxError: Unexpected string

/* When we need to first compute the property name,
 like we did here with the first and last name,
 then of course we have to use the bracket notation 
 in any other case just use the dot notation which looks a lot cleaner and it's easier to use...*/

/* const interestedIn = prompt('What do you want to know about Bharath? Choose \n\
between firstName, lastName, age, job and friends'); 
console.log(Bharath.interestedIn); // undefined
console.log(Bharath[interestedIn]);

if(Bharath[interestedIn]) {
    console.log(Bharath[interestedIn]);
} else {
    console.log('wrong request! Choose between firstName, lastName, age, job and friends');
}

Bharath.location = 'Mangalagiri';
Bharath['youtube'] = '@gb';
console.log(Bharath);

console.log(`${Bharath.lastName} has ${Bharath.friends.length} friends, and his best friend is called ${Bharath.friends[0]}`);
*/

/*  ------------------------------- 11. Object Methods  -------------------------------- */

// Using functions as values in objects
const Bharath1 = {
    firstName : 'Gattem',
    lastName : 'Bharath',
    birthYear : 2000,
    job : 'Student',
    friends : ['Simha', 'Akhila', 'Hattori'],
    hasDriversLicense : true,
    // calcAge : function(birthYear) {
        // return 2021 - birthYear;
    // }

    //calcAge : function() {
    //   // console.log(this);
    //    return 2021 - this.birthYear; 
    //}
    calcAge : function() {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary : function() {
        return `${this.lastName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense?'a':'no'} driver's license!!!`;
    }
};

console.log(Bharath1.calcAge());
console.log(Bharath1['calcAge'](2000));
console.log(Bharath1.age);
console.log(Bharath1.age);
console.log(Bharath1.age);
console.log(Bharath1.getSummary());

console.log(`${Bharath1.lastName} is a ${Bharath1.age}-year old ${Bharath1.job}, and he has ${Bharath1.hasDriversLicense?'a':'no'} driver's license!!!`);

/*  ------------------------------- 12. Iteration: The for Loop  -------------------------------- */
/*
console.log('Lifting weights repitition 1 🐱‍👤');
console.log('Lifting weights repitition 2 🐱‍👤');
console.log('Lifting weights repitition 3 🐱‍👤');
console.log('Lifting weights repitition 4 🐱‍👤');
console.log('Lifting weights repitition 5 🐱‍👤');
console.log('Lifting weights repitition 6 🐱‍👤');
console.log('Lifting weights repitition 7 🐱‍👤');
console.log('Lifting weights repitition 8 🐱‍👤');
console.log('Lifting weights repitition 9 🐱‍👤');
console.log('Lifting weights repitition 10 🐱‍👤');
*/

for(let rep = 1; rep <= 10; rep++) {
console.log(`Lifting weights repitition ${rep} 🐱‍👤`);
}

/*  ------------------------------- 13. Looping Arrays, Breaking and Continuing  -------------------------------- */

const Bharath2 = [
    'Gattem',
    'Bharath',
    2021 - 2000,
    'Student',
    ['Simha', 'Akhila', 'Hattori']
];

const types = [];

for(let i=0; i<Bharath2.length; i++){
    console.log(Bharath2[i], typeof Bharath2[i]);
    //types[i] = typeof Bharath2[i];
    types.push(typeof Bharath2[i]);

}
console.log(types);

const years1 = [2000, 2008, 2012, 2019];
const ages1 = [];

for(let i = 0; i < years1.length; i++) {
    ages1.push(2021 - years1[i]);
}
console.log(ages1);

// continue and break

console.log('--- ONLY STRINGS ---')
for(let i=0; i<Bharath2.length; i++){
    if(typeof Bharath2[i] !== 'string') 
        continue;
    console.log(Bharath2[i], typeof Bharath2[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for(let i=0; i<Bharath2.length; i++){
    if(typeof Bharath2[i] === 'number') 
        break;
    console.log(Bharath2[i], typeof Bharath2[i]);
}

/*  ------------------------------- 14. Looping Backwards and Loops in Loops  -------------------------------- */

const Bharath12 = [
    'Gattem',
    'Bharath',
    2021 - 2000,
    'Student',
    ['Simha', 'Akhila', 'Hattori']
];

for(let i = Bharath12.length - 1; i >= 0; i--) {
    console.log(Bharath12[i]);
}

for(let exercise = 1; exercise <= 3; exercise++) 
{
    console.log(`----- Starting excecise ${exercise} 🧘‍♀️ ------`);
    for(let rep = 1; rep <= 5; rep++)
     {
        console.log(`Exercise ${exercise}: Lifting weights repitition ${rep} 🏋️‍♀️`);
     }
}

/*  ------------------------------- 15. The while Loop  -------------------------------- */

let rep = 1;
while(rep <= 10) 
{
   console.log(`WHILE: Lifting weights repitition ${rep} 🐱‍👤`);
   rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6)
      console.log('Loop is about to end...');
}
