/* ------------------  Coding Challenge #1 ----------------- */

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
markBMI = markWeight / (markHeight ** 2);
johnBMI = johnWeight / (johnHeight ** 2);
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);

/* ------------------  Coding Challenge #2 ----------------- */

if(markHigherBMI)
{
    console.log("Mark's BMI is higher than John's!")
}
else
{
    console.log("John's BMI is higher than Mark's!")
    
}

if(markHigherBMI)
{
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
}
else
{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}

/* ------------------  Coding Challenge #3 ----------------- */
/*
let Dolphins_1 = Number(prompt('Enter Dolphins score 1: '));
let Dolphins_2 = Number(prompt('Enter Dolphins score 2: '));
let Dolphins_3 = Number(prompt('Enter Dolphins score 3: '));
let Koalas_1 = Number(prompt('Enter Koalas score 1: '));
let Koalas_2 = Number(prompt('Enter Koalas score 2: '));
let Koalas_3 = Number(prompt('Enter Koalas score 3: '));

avgDolphins = (Dolphins_1 + Dolphins_2 + Dolphins_3) / 3;
avgKoalas = (Koalas_1 + Koalas_2 + Koalas_3) / 3;
console.log(`Dolphins score is ${avgDolphins} , Koalas score is ${avgKoalas} `)
if(avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log('Dolphins win!!!');
} else if(avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log('Koalas win!!!');
} else if(avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log('Match Drawn!!!');
} else {
    console.log('No Team Wins!!!');
}
*/

/* ------------------  Coding Challenge #4 ----------------- */

let bill  = Number(prompt('Enter Bill Amount: '));
let tip;
// bill >= 50 && bill <=300 ? tip = 15 : tip = 20;
console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <=300 ? tip = bill * 0.15 : tip = bill * 0.20 }, and the total value ${tip + bill}`);
