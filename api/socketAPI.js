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
        // Create/Join Room, send roomCode to client
        socket.join(io.game.roomCode);
        socket.emit('room-code', io.game.roomCode);
        // Create host player, add them to game, and set this socket as the host
        socket.username = data.username;
        io.game.addPlayerByName(socket.username);
        console.log(`Creating game room with room code ${io.game.roomCode} and joining room as ${socket.username}`);
        socket.isHost = true;
        console.log(`${socket.username} is now the host of game ${io.game.roomCode}`)

        console.log(JSON.stringify(io.game.players));
    })

    socket.on('new-player', function(data) {
        const room = io.sockets.adapter.rooms[data.roomCode];

        if (room){
            try{
                
                io.game.addPlayerByName(data.username);
                console.log(`Adding ${data.username} to game ${data.roomCode}`);
    
                socketApi.sendPlayerList(data.roomCode)
            }
            catch(e){
                console.warn(e);
            }
        }
        else{
            console.warn(`Unable to add user to room, as room with code '${data.roomCode}' room does not exist!`)
            socket.emit('empty-room', {error: `Room with code '${data.roomCode}' room does not exist!`})
        }
    })

    // GURU test
    socket.on('need-an-adult', () => {
        socket.emit('guru', {msg: 'I AM AN ADULT', imgSrc: "https://camo.derpicdn.net/12f6f866643214d0ad51265bd10bfbdebc5765b9?url=http%3A%2F%2Fi4.ytimg.com%2Fvi%2FW9krnrEF0nI%2Fmqdefault.jpg"});
    })

    socket.on('toggle-gohan', () => {
        socket.emit('toggle-gohan');
    })

    socket.on('start-game', () => {
        console.log('starting game');
    })
});

socketApi.sendNotification = function() {
    io.sockets.emit('gohan', {msg: 'I need an adult', imgSrc: "https://i.ytimg.com/vi/kscG_gs2BOc/hqdefault.jpg"});
}

socketApi.sendPlayerList = function(roomCode) {
    const players = io.of('/').in(roomCode).clients;
    console.log(roomCode);
    io.to(roomCode).emit('send-players', { players: players });
}

socketApi.toggleGohan = () => {
    io.sockets.emit('toggle-gohan', 'toggling gohan');
}

socketApi.findGame = (roomCode) => {
    //io.sockets.
}

socketApi.newPlayer = function(roomCode) {
    // add player to game with roomCode
}

module.exports = socketApi;