import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class SocketTest extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      image: "https://i.ytimg.com/vi/kscG_gs2BOc/hqdefault.jpg",
      endpoint: "http://localhost:9000",
      roomcode: false
    }
  }

  /* TODO - get game.players from server, dynamically generate select-buttons for votes*/

  componentDidMount() {
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);
    this.socket.on('gohan', data => this.setState({ response: data.msg, image: data.imgSrc }));
    this.socket.on('guru', data => this.setState({ response: data.msg, image: data.imgSrc }));
    this.socket.on('room-code', data => {
      this.setState({ roomcode: data });
      this.socket.emit('join', data)
    });
  }

  sendMessageToServer = () => {
    this.socket.emit('test-event', {text: 'i need an adult'});
  }

  createGame = () => {
    this.socket.emit('new-game', {username: "Goku"});
  }

  submitUser = (e) => {
    e.preventDefault();
    const { username } = e.target.elements;
    console.log("username ==> ", username.value)
    this.socket.emit('new-player', {username: username.value})
  }

  render() {
    {/* get vars from state to render */}
    const { response, image, roomcode } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {/* basic two-way messaging test */}
        <div>
          <div>
            <img style={{height:"300px", width:"300px"}} src={ image } alt={response}/>
          </div>
          <button style={{ fontSize: "large" }} onClick={this.sendMessageToServer}>{response}</button>
        </div>
        {/*getting room code from game */}
        <button style={{ fontSize: "large" }} onClick={this.createGame}>Create Game</button>
        <p>room code: {roomcode}</p>

        <form onSubmit={this.submitUser}>
          <input name="username" placeholder="Enter your username"></input>
          <input name="roomcode" placeholder="Enter your room code"></input>
          <button style={{ fontSize: "large" }} >Add Player</button>
        </form>
      </div>
    );
  }
}

export default SocketTest;