'use strict';

/* ------------------------------- LECTURE: Functions ------------------------------- */

function describeCountry(country, population, capitalCity) {
     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const country1 = describeCountry('India', 1000, 'New Delhi');
const country2 = describeCountry('Sri Lanka', 10, 'Colombo');
const country3 = describeCountry('England', 50, 'London');
console.log(country1);
console.log(country2);
console.log(country3);

/* ------------------------------- LECTURE: Function Declarations vs. Expressions ------------------------------- */
//FUNCTION DECLARATION
function percentageOfWorld1(country, population) {
    return `${country} has ${population} million people, so it's about ${Number(population / 7900 * 100)} of the world population.`
}
const country_1 = percentageOfWorld1('India', 1000);
const country_2 = percentageOfWorld1('Sri Lanka', 10);
const country_3 = percentageOfWorld1('England', 50);
console.log(country_1);
console.log(country_2);
console.log(country_3);
//FUNCTION EXPRESSION
const percentageOfWorld2 = function(country, population) {
    return `${country} has ${population} million people, so it's about ${Number(population / 7900 * 100)} of the world population.`
}
const c1 = percentageOfWorld2('India', 1000);
const c2 = percentageOfWorld2('Sri Lanka', 10);
const c3 = percentageOfWorld2('England', 50);
console.log(c1);
console.log(c2);
console.log(c3);

/* ------------------------------- LECTURE: Arrow Functions ------------------------------- */

const percentageOfWorld3 = (country, population) => {
    return `${country} has ${population} million people, so it's about ${Number(population / 7900 * 100)} of the world population.`
}
console.log(percentageOfWorld2('India', 1000),percentageOfWorld2('Sri Lanka', 10)
, percentageOfWorld2('England', 50));

/* ------------------------------- LECTURE: Functions Calling Other Function ------------------------------- */

function describePopulation(country, population) {
    return percentageOfWorld1(country, population);
}
console.log(describePopulation('India', 1000));
console.log(describePopulation('Sri Lanka', 10));
console.log(describePopulation('England', 50));

/* ------------------------------- LECTURE: Introduction to Arrays ------------------------------- */

const populations = [20,88,56,94];
console.log(populations.length===4);
const percentages = populations;
console.log(percentageOfWorld1('India', percentages[0]));

/* ------------------------------- LECTURE: Basic Array Operations (Methods) ------------------------------- */

const neighbours = ['Sri Lanka', 'Bangladesh', 'Nepal'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
const removed_neighbur = neighbours.pop();
console.log(removed_neighbur);
console.log(neighbours);
if(!neighbours.includes('Germany')) {
   console.log( 'Probably not a central European country :D');
}
neighbours[neighbours.indexOf('Nepal')] = 'Republic of Nepal';
console.log(neighbours);

/* ------------------------------- LECTURE:  Introduction to Objects ------------------------------- */

const myCountry = {
    country : 'India', 
    capital : 'New Delhi',
    language : 'Telugu',
    population : 1000,
    neighbours : ['Sri Lanka', 'Bangladesh', 'Nepal']
};

console.log(myCountry);

/* ------------------------------- LECTURE:  Dot vs. Bracket Notation ------------------------------- */

console.log(`${myCountry['country']} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

/* ------------------------------- LECTURE:  Object Methods ------------------------------- */

const my_Country = {
    country : 'India', 
    capital : 'New Delhi',
    language : 'Telugu',
    population : 1000,
    neighbours : ['Sri Lanka', 'Bangladesh', 'Nepal'],
    describe : function() {
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    checkIsland : function() {
        // return this.isIsland = this.neighbours.length === 0 ? true : false;
        return !Boolean(this.neighbours.length);

    }
};

console.log(my_Country.describe());
console.log(my_Country.checkIsland());

/* ------------------------------- LECTURE:  Iteration: The for Loop ------------------------------- */

for(let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

/* ------------------------------- LECTURE:  Looping Arrays, Breaking and Continuing ------------------------------- */

const populations1 = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations1.length; i++) {
    const perc = percentageOfWorld1('India',populations1[i]);
    percentages2.push(perc);
}
console.log(percentages2);

/* ------------------------------- LECTURE:  Looping Backwards and Loops in Loops ------------------------------- */

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i <= listOfNeighbours.length - 1; i++)
{
    for(let neighbour = 0; neighbour <= listOfNeighbours[i].length - 1; neighbour++)
    {
        console.log(`Neighbour:${listOfNeighbours[i][neighbour]}`);
    }
}

/* ------------------------------- LECTURE:   The while Loop ------------------------------- */

// const populations1 = [10, 1441, 332, 83];
const percentages3 = [];
let i = 0;
while(i < populations1.length) {
    percentages3.push(percentageOfWorld1('India',populations1[i]));
    i++;
}
console.log(percentages3);


