'use strict';

/*---------------------------- Coding Challenge #1 ----------------------------- */
/*
const dolphins_1 = Number(prompt('Enter dolphins score 1:'));
const dolphins_2 =  Number(prompt('Enter dolphins score 2:'));
const dolphins_3 = Number(prompt('Enter dolphins score 3:'));
const koalas_1 = Number(prompt('Enter koalas score 1:'));
const koalas_2 = Number(prompt('Enter koalas score 2:'));
const koalas_3 = Number(prompt('Enter koalas score 3:'));

const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);
const avgDolphins = calcAverage(dolphins_1, dolphins_2, dolphins_3);
const avgKoalas = calcAverage(koalas_1, koalas_2, koalas_3);

function checkWinner(avgDolphins, avgKoalas) {
      console.log(`${avgDolphins>=avgKoalas*2?'Dolphins':'Koalas'} win (${avgDolphins>avgKoalas?avgDolphins + ' vs. '+avgKoalas:avgKoalas + ' vs. ' + avgDolphins})`)
}
checkWinner(avgDolphins, avgKoalas);
*/

/*---------------------------- Coding Challenge #2 ----------------------------- */

function calcTip(bill) {
      if(bill>=50 && bill<=300){
            return bill*0.15;
      } 
      return bill*0.20;
}
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(`Bills are ${bills}`);
console.log(`Tips are ${tips}`);
console.log(`Total amounts are ${total}`);

/*---------------------------- Coding Challenge #3 ----------------------------- */

const Simha = {
    name : 'Simha',
    mass : 78,
    height : 1.69,
    calcBMI : function() {
          this.BMI = this.mass / this.height ** 2;
          return this.BMI;
   }
};

const Akhila = {
      name : 'Akhila',
      mass : 92,
      height : 1.25,
      calcBMI : function() {
          this.BMI = this.mass / this.height ** 2;
          return this.BMI;
     }
};

console.log(Simha.calcBMI() > Akhila.calcBMI() ? `${Simha.name}'s BMI(${Simha.calcBMI()}) is higher than ${Akhila.name}'s(${Akhila.calcBMI()})!`: `${Akhila.name}'s BMI(${Akhila.calcBMI()}) is higher than ${Simha.name}'s(${Simha.calcBMI()})!`);  

/*---------------------------- Coding Challenge #4 ----------------------------- */

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals = [];
for(let i = 0; i <= bills1.length - 1; i++) {
      tips1.push(calcTip(bills1[i]));
      totals.push(tips1[i] + bills1[i]);
}
console.log('Bills are ',bills1);
console.log('Tips are ',tips1);
console.log('Totals are ',totals);

function calcAverage(arr) {
      let sum = 0;
      for(let i = 0; i< arr.length; i++) {
            sum += arr[i];
      }
      let avg = sum / arr.length;
      return avg;
}

console.log(calcAverage(totals));
