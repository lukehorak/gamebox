import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Lobby from './Lobby';
import PickCategory from './PickCategory';
import DisplayQuestion from './DisplayQuestion';
import VotingPage from './Voting_Page';
import FakerLost from './Faker_Loss';
import FakerWon from './Faker_win';
import '../../stylesheets/Home.css';
import '../../stylesheets/wingit.css';
import '../../stylesheets/host-pick-category.css';
import '../../stylesheets/wingit-lobby.css'
class WingIt extends Component {

  constructor(props) {
    super(props)
    this.state = {
      endpoint: "http://localhost:9000",
      phase: 0,
      roomCode: false,
      isHidden: false,
      players: [],
      thisPlayer: false,
      category: false,
      question: "test question"
    }
  }

  componentDidMount() {
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);

    // Message Handling
    this.socket.on('respond-all-players', data => {
      this.setState({ players: data });
    })

    this.socket.on('respond-player', data => {
      this.setState({ thisPlayer: data.player });
      console.log(this.state.thisPlayer)
    })

    this.socket.on('phase-change', data => {
      this.setState({ phase: data.phase })
    })

    this.socket.on('room-code', data => {
      this.setState({ roomCode: data });
      this.socket.emit('join', data);
      this.socket.emit('request-player');
      this.socket.emit('request-all-players', { roomCode: this.state.roomCode })
    })

    this.socket.on('send-question', data => {
      this.setState({ question: data.questionText });
      console.log(JSON.stringify(data))
    })
  }

  // Class Methods

  createGame = (e) => {
    e.preventDefault();
    const { username } = e.target.elements
    this.socket.emit('new-game', { username: username.value });
  }

  joinGame = (e) => {
    e.preventDefault();
    const { username, roomCode } = e.target.elements;
    this.socket.emit('new-player', { username: username.value, roomCode: roomCode.value })
  }

  startGame = () => {
    console.log('starting game')
    this.socket.emit('start-game', { code: this.state.roomCode });
  }

  sendCategory = (category) => {
    this.setState({ category: category })
    this.socket.emit('send-category', { category: category });
    this.socket.emit('start-round', { category: category });
  }

  startClock = () => {
    this.socket.emit('reading-question', { roomCode: this.state.roomCode })
  }

  listPlayers = (players) => {
    const playerList = players.map(function (player) {
      return (
        <div className="player-card-container">
            <div className="column">
              <span key={player.playerId} className="player-menu-card">
                <h2>{player.name}</h2>
              </span>
            </div>
          </div>

      );
    });
    return playerList;
  };

  handleCase = (phase) => {
    switch (phase) {
      case 0:
        return (
              <Lobby
                roomCode={this.state.roomCode}
                createGame={this.createGame}
                joinGame={this.joinGame}
                startGame={this.startGame}
                listPlayers={this.listPlayers}
                players={this.state.players}
                isHost={this.state.thisPlayer.isHost} />
              );
      case 1:
        return (
              <PickCategory
                player={this.state.thisPlayer}
                sendCategory={this.sendCategory} />
              );
      case 2:
        return <DisplayQuestion
                isHost={this.state.thisPlayer.isHost}
                question={this.state.question}
                startClock={this.startClock} />
      case 4:
        return (
              <VotingPage
                players={this.state.players} />
              );
      case 5:
        return <FakerLost />
      case 6:
        return <FakerWon />
      default:
        return <h1>HELLO DEFAULT</h1>
    }
  }

  render() {
    return (
      <div>
        {this.handleCase(this.state.phase)}
      </div>
    );
  }
}

export default WingIt;