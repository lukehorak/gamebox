const socket_io = require('socket.io');
const io = socket_io();
const socketApi = {};

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
    console.log(`Creating game room with room code ${ socket.game.roomCode} and joining room as ${socket.username}`);
    socket.isHost = true;
    console.log(`${socket.username} is now the host of game ${ socket.game.roomCode}`)

    console.log(JSON.stringify(socket.game.players));
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
      socket.emit('give-all-players', socketApi.getPlayerList(data.roomCode))
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

  socket.on('get-player', () => {
    socket.emit('give-player', socket.id)
  })
  //////

  socket.on('get-all-players', (data) => {
    console.log(socketApi.getPlayerList(data.roomCode))
    socket.emit('give-all-players', socketApi.getPlayerList(data.roomCode))
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
  const players = {};
  ids.forEach( id => {
    const name = socketApi.getPlayerInfo(id);
    players[name] = { id: id, name: name }
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