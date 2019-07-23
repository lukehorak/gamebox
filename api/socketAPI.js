const socket_io = require('socket.io');
const io = socket_io();
const socketApi = {};

const Game = require('./lib/winging-it-proto/Game');

const demoQuestions = {
  hand: [
  "you brushed your teeth today",
  "you hate puppies",
  "you like this game"
  ],
  count: [
    "Disney movies you've seen this year",
    "meals you've eaten today",
    "feet you are tall"
  ],
  point: [
    "you would eat first if you were all trapped on a desert island",
    "is the tallest person playing",
    "is your favourite developer"
  ]
}

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
    try {
      const hostID = socketApi.newPlayer(data.roomCode, data.username);
      // Send roomcode to new player
      socket.emit('room-code', io.sockets.connected[hostID].game.roomCode);
      socket.join(io.sockets.connected[hostID].game.roomCode)

      // set socket username
      socket.username = data.username;
      // Send all players to all connected sockets
      io.in(data.roomCode).emit('respond-all-players', socketApi.getPlayerList(data.roomCode))
    }
    catch (e) {
      console.warn(`Unable to add user to room, as room with code '${data.roomCode}' room does not exist!`, e)
      socket.emit('empty-room', {
        error: `Room with code '${data.roomCode}' does not exist!`
      })
    }

  });

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
    console.log(`game category ==> ${socket.game.category}`)
  })

  socket.on('start-round', (data) => {
    const { category } = data;
    socket.game.setFaker();
    socket.game.newRound(demoQuestions[category][0], category);
    // test by logging host's question to console
    console.log(socket.game.currentRound.getQuestion(socket.username))
    socket.emit('phase-change', { phase: 2 });
  })

});

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
    players.push({ id: id, name: name })
  });
  return players
}

socketApi.getRoom = (roomCode) => {
  return io.sockets.adapter.rooms[roomCode];
}

// Adds player to game with roomCode, returning the room's host's ID
socketApi.newPlayer = function (roomCode, username) {
  const hostID = socketApi.getHost(roomCode);
  console.log(`Adding player ${username} to game room ${roomCode}`)
  io.sockets.connected[hostID].game.addPlayerByName(username);
  return hostID;
}

module.exports = socketApi;