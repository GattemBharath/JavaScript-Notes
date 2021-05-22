/*--------------------------- Coding Challenge#1 ------------------------------- */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//const { team1, x: draw, team2 } = { ...game.odds };
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

function printGoals(...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    console.log(`${playerNames.length} golas were scored `);
  }
}
console.log('---------------- Team 1 SCORE⛹️‍♀ ------------------');
printGoals(...['Davies', 'Muller', 'Lewandowski', 'Kimmich']);
console.log('---------------- Team 2 SCORE⛹️‍ ------------------');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');

/*--------------------------- Coding Challenge#2 ------------------------------- */
// 1.
for (let goal = 0; goal < game.scored.length; goal++) {
  console.log(`Goal ${goal + 1}: ${game.scored[goal]}`);
}

// ! OR

for (let [i, goal] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${game.scored[goal]}`);
}

// 2.
console.log({ ...game.odds });
let avg = 0;
for (let i = 0; i < Object.values(game.odds).length; i++) {
  avg += Math.trunc(Object.values(game.odds)[i] / 3);
}
console.log(avg);

// ! OR

let average = 0;
const odds = Object.values(game.odds);
for (let odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (let i = 0; i < Object.values(game.odds).length; i++) {
  if (Object.keys(game.odds)[i] === 'x') {
    console.log(`Odd of draw: ${Object.values(game.odds)[i]}`);
  } else {
    console.log(
      `Odd of victory ${game[Object.keys(game.odds)[i]]}: ${
        Object.values(game.odds)[i]
      }`
    );
  }
}

// ! OR

for (let [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4.
const scorers = {};

for (let i of game.scored) {
  //scorers[i]++ || (scorers[i] = 1);
  scorers[i] >= 1 ? scorers[i]++ : (scorers[i] = 1);
}

console.log(scorers);
