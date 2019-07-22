import React, { Component } from 'react';
import INeedAnAdult from './INeedAnAdult';
import socketIOClient from 'socket.io-client';

class SocketTest extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      image: "https://i.ytimg.com/vi/kscG_gs2BOc/hqdefault.jpg",
      endpoint: "http://localhost:9000",
      roomcode: false,
      hideGohan: true
    }
  }

  /* TODO - get game.players from server, dynamically generate select-buttons for votes*/

  componentDidMount() {
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);
    // Message Handling
    this.socket.on('gohan', data => this.setState({ response: data.msg, image: data.imgSrc }));
    this.socket.on('guru', data => this.setState({ response: data.msg, image: data.imgSrc }));
    this.socket.on('send-players', data => console.log(data.players))
    this.socket.on('toggle-gohan', data => this.setState({ hideGohan: !this.state.hideGohan }))
    this.socket.on('empty-room', data => {alert(data.error)})
    this.socket.on('room-code', data => {
      this.setState({ roomcode: data });
      this.socket.emit('join', data)
    });
  }

  sendMessageToServer = () => {
    this.socket.emit('need-an-adult', {text: 'i need an adult'});
  }

  createGame = () => {
    this.socket.emit('new-game', {username: "Goku"});
  }

  submitUser = (e) => {
    e.preventDefault();
    const { username, roomcode } = e.target.elements;
    console.log("username ==> ", username.value)
    this.socket.emit('new-player', {username: username.value, roomCode: roomcode.value})
  }

  toggleGohan = () => {
    this.socket.emit('toggle-gohan', 'toggling gohan');
  }

  startGame = () => {
    this.socket.emit('start-game')
  }

  render() {
    // get vars from state to render
    const { response, image, roomcode, hideGohan } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {/* toggling component by server message as a demo */}
        <button onClick={this.toggleGohan}>Toggle gohan</button>
        {/* basic two-way messaging test */}
        { !hideGohan && <INeedAnAdult response={response} image={image} askForAdult={this.sendMessageToServer}/>}
        {/*getting room code from game */}

        <hr />
        <button style={{ fontSize: "large" }} onClick={this.createGame}>Create Game</button>
        <p>room code: {roomcode}</p>

        <hr />
        <form onSubmit={this.submitUser}>
          <input name="username" placeholder="Enter your username"></input>
          <input name="roomcode" placeholder="Enter your room code"></input>
          <button style={{ fontSize: "large" }} >Add Player</button>
        </form>

        <hr />

        <button onClick={this.startGame}>Start Game</button>
      </div>
    );
  }
}

export default SocketTest;
