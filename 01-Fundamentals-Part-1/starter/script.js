
/*   ------------------------------------ 1. Value and Variable -------------------------------------   */

let js = 'amazing';
// if(js == 'amazing')
//     alert('JavaScript is FUN!');

// 40+8+23-10;  
console.log(40+8+23-10);

console.log('Bharath');
console.log(23)

let firstName = 'Gattem';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let $sodd = "gfh";
console.log($sodd);
let _asdf = 40;
console.log(_asdf);

// let new = 'asd';

let name = 'bharath gattem';
console.log(name);// DEPRICATED

let PI = 3.1415;
console.log("PI value is ",PI);

// Easy to understand
let myFirstJob = 'Programmer';
let myCurrentJob = 'Student';

// Not Good Approach
let job1 = 'Programmer';
let job2 = 'Student';

console.log(myFirstJob);

/*   ------------------------------------ 2. Data Types -------------------------------------   */ 

console.log(true);

let javascriptIsFun = true;
console.log('Javascript is fun is ',javascriptIsFun);

console.log(typeof javascriptIsFun); //boolean
console.log(typeof 23); //number
console.log(typeof 'Bharath'); //string

// Dynamic Typing
javascriptIsFun = 'YES!';
console.log('Javascript is fun is ',javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year); //undefined
console.log(typeof year);

year = 2021;
console.log(year);
console.log(typeof year);

// BE CAREFUL !!!!!
console.log(typeof null);

/*   ------------------------------------ 3. let, const and var -------------------------------------   */

// let is used to mutate(change) the variables and is used
// when we want to declare empty variables.
let age = 20;
age = 21;

// const is used to declare variables that are
// not supposed to change at any point in future.
const birthYear = 2000;
// birthYear = 2001; TypeError: Assignment to constant variable.
// IMMUTABLE AND CAN'T HAVE EMPTY VALUES
// const job; SyntaxError: Missing initializer in const declaration

// var is old way of declaring variables before ES6
var job = 'programmer';
job = 'coder';
console.log(job);

//DONT WRITE LIKE THIS EVEN IT EXECUTES
lastName = 'Bharath';
console.log(lastName);

/*   ------------------------------------ 4. Basic Operators -------------------------------------   */

// 1. ARITHMETIC 
const now = 2021;
const ageBharath = now - 2000;
const ageSimha   = now - 2012;
console.log(ageBharath, ageSimha);
console.log(ageBharath * 2, ageSimha / 2);
console.log(ageBharath % 2, ageSimha ** 3);
const first_Name = 'Gattem';
const last_Name = 'Bharath';
console.log(first_Name +' '+ last_Name);

// 2. typeof
console.log(typeof true);

// 3. ASSIGNMENT
let x = 10 + 5;
x += 25;
x *= 4;
x++;
x--;
console.log('x value is ',x);

// 4.COMPARISON
console.log(ageBharath > ageSimha); // > >= < <=
const isFullAge = ageSimha >= 10;
console.log(isFullAge);

/*   ------------------------------------ 4. Operator Precedence -------------------------------------   */
// mdn operator precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log(now - 2000 > now - 2012);
let a, b;
a = b = 25 -10 - 5; //right to left
console.log(a, b);
const averageAge = (ageBharath + ageSimha) / 2;
console.log(averageAge);

/*   ------------------------------------ 5. Strings and Template Literals ------------------------------ */

const first_name = 'Bharath'
const my_job = 'Student';
const birth_Year = 2000;
//const year = 2021;
const bharath = "I'm "+first_name+', a '+(year - birth_Year)+' years old '+my_job+'.';
console.log(bharath);

/* Template literals
   --> Assemble multiple pieces into one string.
   --> Used to create multi line strings.   */
   
console.log('Using Template Literals!!!');
const bharathNew = `I'm ${first_name}, a ${year - birth_Year} years old ${my_job}.`;
console.log(bharathNew);
console.log(`Just a regular string using backticks...`);
//Multiple Lines
console.log(' String with \n multiple \n lines');
console.log(`String with
multiple 
lines using 
template literals`);

/*   ------------------------------------ 6. Taking Decisions: if / else Statements ------------------------------ */
// 1.
const age1 = 19;
if(age1 >= 18)
 {
    console.log(`${first_name} can  start a driving license 👽`);
 }
else
{
   const yearsLeft = 18 - age1;
   console.log(`${first_name} can start a driving license after ${yearsLeft} years :)`);
}
// 2.
const birth_year = 2000;
let century; 
if(birth_year <= 2000)
{
   century = 20;
} else {
   century = 21;
}
console.log(century+' century');

/*   ------------------------------------ 7. Type Conversion and Coercion ------------------------------ */

//type conversion =  explicitly done(manually)
const inputYear  ='2000';
console.log(inputYear+18); // 200018
console.log(Number(inputYear)+18); // 2018

console.log(Number('Bharath')); // NaN
console.log(typeof NaN); // number

console.log(String(23)); // 23

//type coercion = happens whenever an operator is dealing with two values of different types
console.log('I am '+ 23 + ' years old.'); // number is converted to a string by coercion
console.log('23' - '10' - 3) ;// 10  string is converted to a number by coercion
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5
console.log('23' > '18'); // true
////// EXCEPT '+' OPERATOR i.e.,
console.log('23' + '2'); // 232 number is converted to a string by coercion

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); // 10

console.log(2+3+4+'5'); // '95'
console.log('10'- '4' - '3' - 2 + '5'); // '15'

/*   ------------------------------------ 8. Truthy and Falsy Values ------------------------------ */

// 5 falsy values: 0, '', undefined, null, NaN
console.log('Five falsy Values are...')
console.log('1.',0, Boolean(0));
console.log('2.',"''",Boolean(''));
console.log('3.','undefined',Boolean(undefined));
console.log('4.','null',Boolean(null));
console.log('5.','NaN',Boolean(NaN));

console.log(Boolean({})); // empty object

const money = 0;
if(money){
   console.log("Don't spend it all ;)");
} else {
   console.log('You should get a job!');
}

let height;
if (height) {
   console.log('YAY! Height is defined');
} else {
   console.log('Height is UNDEFINED');
}

/*   ------------------------------------ 9. Equality Operators: == vs. === ------------------------------ */

/* === means strictly equal because it doesn't perform type coercion
   and it only returns true when both values are exactly the same.  */
console.log(18 === '18'); // false
const age2 = 18;
if(age2 === 18) console.log('You just became an adult :D (strict)');

/* == means loosely equal because it performs type coercion */
console.log(18 == '18'); //true
if(age2 == '18') console.log('You just became an adult :D (loose)');
//user input
/*
const fav = prompt("What's your favourite number?");
console.log(typeof fav, fav);

if(fav == 40) // '40' == 40 true
{ 
   console.log('Cool! 40 is an amazing number!');
}
if(fav === 40) // '40' === 40 false
{ 
   console.log('Cool! 40 is an amazing number!');
}
else
{
   console.log('AWW! === here');
}

const fav1 = Number(prompt("What's your favourite number?"));
if(fav1 === 40) // 40 === 40 true
{ 
   console.log('Cool! 40 is an amazing number! even for ===');
}
else
{
   console.log('Not 40');
}
//else if block
if(fav1 === 40) { 
   console.log('Cool! 40 is an amazing number! even for ===');
} else if(fav1 == 7) {
   console.log('7 is also a cool number!');
} else {
   console.log('Number is neither 40 nor 7');
}
  
if(fav !== 40)  console.log('Why not 40?'); */

/*   ------------------------------------ 10. Logical Operators ------------------------------ */

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive){
   console.log(`${first_name} is able to drive`);
} else {
   console.log(`${first_name} is not able to drive`);
}

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
   console.log(`${first_name} is able to drive`);
} else {
   console.log(`${first_name} is not able to drive`);
}

/*   ------------------------------------ 11. The switch Statement ------------------------------ */

//const day = prompt('Enter a day: ');
const day = 'sunday';
switch(day){
   case 'monday': // day === 'monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
   case 'tuesday':
      console.log('Prepare theory videos');
      break;
   case 'wednesday':
   case 'thursday':
      console.log('Write code examples');
      break;
   case 'friday':
      console.log('Record videos');
      break;
   case 'saturday':
   case 'sunday':
      console.log('Enjoy the weekend 😎');
      break;
   default:
      console.log('Not a valid day!');
}

// elseif of above example
if(day === 'monday'){
   console.log('Prepare theory videos');
   console.log('Go to coding meetup');
} else if(day === 'tuesday'){
   console.log('Prepare theory videos');
} else if(day === 'wednesday' || day === 'thursday'){
   console.log('Write code examples');
} else if(day === 'friday'){
   console.log('Record video');
} else if(day === 'saturday' || day === 'sunday'){
   console.log('Enjoy the weekend 😎');
} else {
   console.log('Not a valid day!');
}

/*   ------------------------------------ 11. The Conditional (Ternary) Operator ------------------------------ */

const age3 = 16;
age3 >= 18 ? console.log('18 years  and above') : console.log('below 18!!!');

const vote = age3 >= 18 ? 'vote 👆' : 'play 🏃‍♂️';
console.log(vote);

let vote2;
if(age3 >= 18){
   vote2 = 'vote 👆';
} else {
   vote2 = 'play 🏃‍♂️';
}
console.log(vote2);
//IMPORTANT 
console.log(`I like to ${age3 >= 18 ? 'vote 👆' : 'play 🏃‍♂️'}`);
