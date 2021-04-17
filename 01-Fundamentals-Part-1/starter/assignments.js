/*  -----------------------  LECTURE: Values and Variables     */

let country = 'India';
let continent = 'Asia';
let population = 1000;

console.log('My country is ', country);
console.log('Continent is ',continent);
console.log('Population is ',population,'million');

/*  -----------------------  LECTURE: Data Types */

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/* -----------------------  LECTURE: let, const and var   */ 

language = 'Telugu';
// const continent = 'Asia';
// const country = 'India';
// continent = 'Europe'; //ERROR
// console.log(continent);

/* -----------------------  LECTURE: Basic Operators  */

let half_country = population / 2;
console.log('Now population is ',half_country);
let p = population + 1;
console.log(p);
let finland = 6;
console.log(population > finland);
let averageCountry = 33;
console.log(population < averageCountry);
const description = country + ' is in '+continent+', and its '+population+' million people speak '+language;
console.log(description);

/* -----------------------  LECTURE: Strings and Template Literals  */

description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

/* -----------------------  LECTURE: Taking Decisions: if / else Statements */

if(population > 33)
{
    console.log(`${country}'s population is above average`);
}
else
{
    console.log(`${country}'s population is ${33 - population} million below average`);
}

population = 13;
if(population > 33)
{
    console.log(`${country}'s population is above average`);
}
else
{
    console.log(`${country}'s population is ${33 - population} million below average`);
}

population = 130;
if(population > 33)
{
    console.log(`${country}'s population is above average`);
}
else
{
    console.log(`${country}'s population is ${33 - population} million below average`);
}
population = 1000;

/* -----------------------  LECTURE: Type Conversion and Coercion */

//4 617 23 false 1143
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

/* -----------------------  LECTURE: Equality Operators: == vs. === */

/*let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if(numNeighbours === 1){
    console.log('Only 1 border!');
} else if(numNeighbours > 1){
    console.log('More than 1 border');
} else{
    console.log('No borders');
}*/

/* -----------------------  LECTURE: The switch Statement */
/*
let language = prompt('Enter your language: ');

switch (language){
    case 'chinese':
    case 'mandarian':
        console.log('MOST number of native speakers!');    
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');    
        break;
    case 'english':
        console.log('3rd place');    
        break;  
    case 'hindi':
        console.log('Number 4');    
        break; 
    case 'arabic':
        console.log('5th most spoken language');    
        break; 
    default:
        console.log('Great language too :D');        
    }
*/
/* ----------------------- LECTURE: The Conditional (Ternary) Operator */

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)  ;