const socket_io = require('socket.io');
const io = socket_io();
const socketApi = {};

const Game = require('./lib/winging-it-proto/Game');

socketApi.io = io;


io.on('connection', function(socket){
    console.log('A user connected');
    socketApi.sendNotification();
    socket.isHost = false;

    socket.on('new-game', function(data){
        io.game = new Game();
        socket.emit('room-code', io.game.roomCode);
        socket.username = data.username;
        io.game.addPlayerByName(socket.username);
        console.log(`Creating game room with room code ${io.game.roomCode} and joining room as ${socket.username}`);
        socket.isHost = true;
        console.log(`${socket.username} is now the host of game ${io.game.roomCode}`)
        console.log(JSON.stringify(io.game.players));
        socket.join(io.game.roomCode);
    })

    socket.on('new-player', function(data) {
        io.game.addPlayerByName(data.username);
        console.log(`Adding ${data.username} to game ${io.game.roomCode}`);
        console.log(JSON.stringify(io.game.players));
    })

    // GURU test
    socket.on('test-event', function(data){
        socket.emit('guru', {msg: 'I AM AN ADULT', imgSrc: "https://camo.derpicdn.net/12f6f866643214d0ad51265bd10bfbdebc5765b9?url=http%3A%2F%2Fi4.ytimg.com%2Fvi%2FW9krnrEF0nI%2Fmqdefault.jpg"});
    })
});

socketApi.sendNotification = function() {
    io.sockets.emit('gohan', {msg: 'I need an adult', imgSrc: "https://i.ytimg.com/vi/kscG_gs2BOc/hqdefault.jpg"});
}

socketApi.newPlayer = function(roomCode) {
    // add player to game with roomCode
}

module.exports = socketApi;