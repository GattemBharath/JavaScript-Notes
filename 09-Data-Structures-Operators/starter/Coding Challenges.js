/*--------------------------- Coding Challenge #1 ------------------------------- */

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

/*--------------------------- Coding Challenge #2 ------------------------------- */
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

/*--------------------------- Coding Challenge #3 ------------------------------- */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.)
gameEvents.delete(64);
console.log(gameEvents);

// 3.)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time1 = [...gameEvents.keys()].pop();
console.log(time1);
console.log(
  `An event happened, on average, every ${time1 / gameEvents.size} minutes`
);

// 4.)
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF]  ${min}: ${event}`);
}

/*--------------------------- Coding Challenge #4 ------------------------------- */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  let count = 1;
  for (let [i, row] of rows.entries()) {
    /*txt =
      txt.slice(0, txt.indexOf('_')).toLowerCase() +
      txt.slice(txt.indexOf('_') + 1, txt.indexOf('_') + 2).toUpperCase() +
      txt.slice(txt.indexOf('_') + 2).toLowerCase();
    console.log(txt.trim());*/
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    /*let sym = '';
    for (let i = 0; i < count; i++) {
      sym += '✅';
    }
    console.log(output.padEnd(20, ' ').padEnd(20 + count, sym));
    count += 1;*/
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
