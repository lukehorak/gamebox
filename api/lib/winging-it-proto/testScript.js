const Game = require('./Game');
const Player = require('./User').Player;
const Round = require('./Round');

const testGame = new Game();

for (let i = 0; i < 6; i++) {
  var player = new Player(`Player${i+1}`);
  testGame.addPlayer(player)
}

testGame.setFaker();

///////////////////////////////////////////////////////////////////////////////////
// Round 1
///////////////////////////////////////////////////////////////////////////////////
testGame.roundNumber += 1;
let current_round = new Round("you brushed your teeth today", testGame.players, 'hand');

// Show the questions being sent
console.log(current_round.sendQuestions())
current_round.voteFor('Player1')
current_round.voteFor('Player1')
current_round.voteFor('Player3')
current_round.voteFor('Player1')
current_round.voteFor('Player1')
current_round.voteFor('Player2')
let results = current_round.exposeFaker();

if (!results.checked){
  console.log("Didn't get enough votes to check!")
}
else {
  let is_or_isnt = results.foundFaker ? "is" : "is NOT"
  console.log(`${results.player} ${is_or_isnt} the faker!`)
}
// Sicne this is a prototype, just log whether the game would continue in production
console.log(testGame.gameIsOver() ? "The game would have ended here" : "The game would keep going!");

///////////////////////////////////////////////////////////////////////////////////
// Round 2
///////////////////////////////////////////////////////////////////////////////////
testGame.roundNumber += 1;
current_round = new Round("you would eat first if you were all trapped on a desert island", testGame.players, 'point');

// Show the questions being sent
console.log(current_round.sendQuestions())
current_round.voteFor('Player2')
current_round.voteFor('Player2')
current_round.voteFor('Player2')
current_round.voteFor('Player2')
current_round.voteFor('Player2')
current_round.voteFor('Player3')
results = current_round.exposeFaker();

if (!results.checked){
  console.log("Didn't get enough votes to check!")
}
else {
  let is_or_isnt = results.foundFaker ? "is" : "is NOT"
  console.log(`${results.player} ${is_or_isnt} the faker!`)
}
// Sicne this is a prototype
console.log(testGame.gameIsOver() ? "The game would have ended here" : "The game would keep going!")

///////////////////////////////////////////////////////////////////////////////////
// Round 3
///////////////////////////////////////////////////////////////////////////////////
testGame.roundNumber += 1;
current_round = new Round("Disney movies you have watched this year", testGame.players, 'count');

// Show the questions being sent
console.log(current_round.sendQuestions())
current_round.voteFor('Player3')
current_round.voteFor('Player3')
current_round.voteFor('Player3')
current_round.voteFor('Player3')
current_round.voteFor('Player3')
current_round.voteFor('Player4')
results = current_round.exposeFaker();

if (!results.checked){
  console.log("Didn't get enough votes to check!")
}
else {
  let is_or_isnt = results.foundFaker ? "is" : "is NOT"
  console.log(`${results.player} ${is_or_isnt} the faker!`)
}
// Sicne this is a prototype
console.log(testGame.gameIsOver() ? "The game would have ended here" : "The game would keep going!")