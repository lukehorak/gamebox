const socket_io = require('socket.io');
const io = socket_io();
const socketApi = {};

const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);


const Game = require('./lib/winging-it-proto/Game');
socketApi.io = io;


io.on('connection', function (socket) {
  console.log('A user connected');
  socket.isHost = false;

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Message Response behavior
  /////////////////////////////////////////////////////////////////////////////////////////////////


  // New game creation (including host player creation)
  socket.on('new-game', function (data) {
    socket.game = new Game();
    // Create/Join Room, send roomCode to client
    socket.join(socket.game.roomCode);
    socket.emit('room-code', socket.game.roomCode);
    // Create host player, add them to game, and set this socket as the host
    socket.username = data.username;
    socket.game.addPlayerByName(socket.username);
    console.log(`Creating game room with room code ${socket.game.roomCode} and joining room as ${socket.username}`);
    socket.isHost = true;
    console.log(`${socket.username} is now the host of game ${ socket.game.roomCode}`)
  })


  // Creating/Adding a new player to an existing game
  socket.on('new-player', function (data) {
    const playerCount = (io.sockets.adapter.rooms[data.roomCode] ? io.sockets.adapter.rooms[data.roomCode].length : -1);
    if (data.username == ''){
      socket.emit('send-error', { error: 'Oops! looks like you forgot a name'})
    }
    else{
      if(playerCount < 6){
        try {
          // Create new player, add them to their game, and get back ID of their game's host
          const hostID = socketApi.getHost(data.roomCode);
          const playerAdded = socketApi.newPlayer(hostID, data.username);
          if (playerAdded){
            socket.emit('room-code', io.sockets.connected[hostID].game.roomCode);
            
            socket.join(io.sockets.connected[hostID].game.roomCode)
            // set socket username.
            socket.username = data.username;
            // Send all players to all connected sockets
            io.in(data.roomCode).emit('respond-all-players', socketApi.getPlayerList(data.roomCode))
          }
          else {
            socket.emit('send-error', { error: "A player with that name already exists!" })
          }
          // Send roomcode to new player (getting the actual game's code isntead of what they fed it)
        }
        catch (e) {
          console.warn(`Unable to add user to room, as room with code '${data.roomCode}' room does not exist!`, e)
          socket.emit('send-error', {
            error: `Failed to join room with code ${data.roomCode}. Are you sure it exists?`
          })
        }
      }
      else{
        socket.emit('send-error', { error: 'Sorry, this game has reached its max (6 people)!' })
      }
    }

  });

  socket.on('prep-game', (data) => {
    io.in(data.code).emit('phase-change', {phase: 'R'});
    console.log('sending game rules!')
  })

  socket.on('start-game', (data) => {
    io.to(data.code).emit('phase-change', {phase: 1})
    console.log(`starting game ${data.code}`);
  })

  ///////

  socket.on('request-player', () => {
    socket.emit('respond-player', { player: { username: socket.username, id: socket.id, isHost: socket.isHost } })
  })
  //////

  socket.on('request-all-players', (data) => {
    console.log(socketApi.getPlayerList(data.roomCode))
    socket.emit('respond-all-players', socketApi.getPlayerList(data.roomCode))
  })

  socket.on('send-category', (data) => {
    socket.game.category = data.category;
    io.in(data.roomCode).emit('set-category', { category: data.category })
    console.log(`game category ==> ${socket.game.category}`)
  })

  socket.on('start-round', (data) => {
    const { category } = data;
    if(!data.faker){
      console.log('setting faker')
      socket.game.setFaker();
    }
    knex.select('question')
      .from('wingit')
      .where('category', '=', category)
      .orderByRaw('random()')
      .limit(1)
      .then(rows => {
        // get questionText from db
        const qText = rows[0].question;
        // Start round on server
        socket.game.newRound(qText, category); 
        console.log(`Round ${socket.game.roundNumber}`)  
        // Signal round start on Clients 
        io.in(socket.game.roomCode).emit('phase-change', { phase: 2 });
        const questionData = socketApi.getQuestionData(socket.game.roomCode, socket.game);
        console.log(questionData);
        questionData.forEach( player => {
          const questionText = socket.game.currentRound.getQuestion(player.name);
          console.log(`sending question to ${player.id}`)
          io.to(`${player.id}`).emit('send-question', {questionText: questionText})
        })
      }
      )
      .catch((e) => {
        console.log('ERROR => ', e)
      })
      .finally( () => {
        knex.destroy;
      })
  })

  socket.on('reading-question', (data) => {
    console.log('starting clock!');
    // Send the real question for later
    const realQuestion = socketApi.getRealQuestion(data.roomCode);
    io.in(data.roomCode).emit('respond-real-question', { realQuestion: realQuestion})
    setTimeout(function(){
      io.in(data.roomCode).emit('phase-change', { phase: 4 });
      setTimeout(function(){
        const results = socket.game.currentRound.exposeFaker();
        const resultCode = socketApi.getRoundResults(results);
        io.in(data.roomCode).emit('respond-results', { resultCode: resultCode, faker: results.player })
        io.in(data.roomCode).emit('phase-change', { phase: 5 });
      }, 20000)
      }, 10000)
  });

  socket.on('send-vote', (data) => {
    const hostId = socketApi.getHost(data.roomCode);
    const round = io.sockets.connected[hostId].game.currentRound;
    round.voteFor(data.voteFor, socket.username);
    const votes = round.getAllVotes();
    io.in(data.roomCode).emit('update-vote-count', { votes: votes });
  });

  socket.on('request-round-results', (data) => {
    console.log('results requested')
    const results = socket.game.currentRound.exposeFaker();
    const resultCode = socketApi.getRoundResults(results);
    io.in(data.roomCode).emit('respond-results', { resultCode: resultCode, faker: results.player })
  });

  socket.on('next-round', (data) => {
    console.log('next round!')
    const { player, foundFaker } = socket.game.currentRound.exposeFaker();
    // SET FAKER IS FOUND IN GAME
    socket.game.fakerIsFound = foundFaker;
    console.log('sending faker: ', player, foundFaker)
    io.in(data.roomCode).emit('set-faker', { faker: player, foundFaker: foundFaker })
    if(socket.game.isOver()){
      //
      io.in(data.roomCode).emit('set-faker', { faker: socket.game.fakerPlayer.name, foundFaker: foundFaker })
      //
      console.log(`${player} was the faker: ${foundFaker}`)
      io.in(data.roomCode).emit('phase-change', { phase: 6 });
    }
    else {
      // Clear player votes in state
      io.in(data.roomCode).emit('respond-all-players', socketApi.getPlayerList(data.roomCode));
      // clear roundResults
      io.in(data.roomCode).emit('clear-round-results');
      io.in(data.roomCode).emit('phase-change', { phase: 1 });
    }
  })
  
});

io.on('disconnect', function(socket) {
  console.log('client disconnected')
})

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // SocketAPI methods
  /////////////////////////////////////////////////////////////////////////////////////////////////

socketApi.getRoundResults = (results) => {
  const{ checked, foundFaker } = results;
  if (!checked){
    return 'not-enough-votes';
  }
  if (foundFaker) {
    return 'faker-caught';
  }
  return 'not-the-faker';
  
}

socketApi.getHost = (roomCode) => {
  const sockets = socketApi.getRoom(roomCode).sockets;
  const ids = Object.keys(sockets);
  return ids[0];
}

socketApi.getPlayerInfo = (playerID) => {
  return io.sockets.connected[playerID].username;
}

socketApi.getPlayerList = (roomCode) => {
  const sockets = socketApi.getRoom(roomCode).sockets;
  const ids = Object.keys(sockets);
  const players = [];
  ids.forEach( id => {
    const name = socketApi.getPlayerInfo(id);
    players.push({ id: id, name: name, votes:0 })
  });
  return players
}

socketApi.getRoom = (roomCode) => {
  return io.sockets.adapter.rooms[roomCode];
}

// Adds player to game with roomCode, returning the room's host's ID
socketApi.newPlayer = function (hostID, username) {
  //const hostID = socketApi.getHost(roomCode);
  //console.log(`Adding player ${username} to game room ${roomCode}`)
  const success = io.sockets.connected[hostID].game.addPlayerByName(username);
  return (success ? hostID : false);
}

socketApi.getRealQuestion = (roomCode) => {
  const hostID = socketApi.getHost(roomCode);
  const round = io.sockets.connected[hostID].game.currentRound;
  console.log(`Getting real question for game room ${roomCode}`)
  return (round.prefix + round.question);
}

socketApi.getQuestionData = (roomCode, game) => {
  const playerList = socketApi.getPlayerList(roomCode);
  return playerList.map( player => {
    return { name: player.name, id: player.id, isFaker: game.players[player.name].isFaker}
  });
}

module.exports = socketApi;