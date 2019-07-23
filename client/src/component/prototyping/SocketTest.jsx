import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class SocketTest extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:9000",
      roomcode: false,
      phase: 0
    }
  }

  /* TODO - get game.players from server, dynamically generate select-buttons for votes*/

  componentDidMount() {
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);
    // Message Handling
    this.socket.on('send-players', data => console.log(data.players));
    this.socket.on('empty-room', data => {alert(data.error)});

    this.socket.on('give-player', data => {console.log(data)});

    this.socket.on('give-all-players', data => {console.log(data)})

    this.socket.on('room-code', data => {
      this.setState({ roomcode: data });
      this.socket.emit('join', data)
    });

    this.socket.on('phase-change', data => {
      console.log('CHANGING PHASE!')
      this.setState({ phase: data.phase })
    })
  }

  createGame = (e) => {
    e.preventDefault();
    const { username } = e.target.elements 
    this.socket.emit('new-game', {username: username.value});
  }

  submitUser = (e) => {
    e.preventDefault();
    const { username, roomcode } = e.target.elements;
    console.log(username.value, roomcode.value)
    this.socket.emit('new-player', {username: username.value, roomCode: roomcode.value})
  }

  startGame = () => {
    console.log('starting game')
    this.socket.emit('start-game', {code: this.state.roomcode});
  }

  render() {
    // get vars from state to render
    const { roomcode } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {/* toggling component by server message as a demo */}
        {/*getting room code from game */}
        <form onSubmit={this.createGame}>
          <input name="username" placeholder="Enter your username"></input>
          <button style={{ fontSize: "large" }} >Create Game</button>
        </form>
        <p>room code: {roomcode}</p>

        <hr />
        <form onSubmit={this.submitUser}>
          <input name="username" placeholder="Enter your username"></input>
          <input name="roomcode" placeholder="Enter your room code"></input>
          <button style={{ fontSize: "large" }} >Add Player</button>
        </form>

        <hr />

        <button onClick={this.startGame}>Start Game</button>

        <hr/>
        <button onClick={() => this.socket.emit('get-all-players', {roomCode: this.state.roomcode})}>Log all players</button>
        <p>Current Phase: {this.state.phase}</p>
      </div>
    );
  }
}

export default SocketTest;
