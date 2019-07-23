import React, { Component } from 'react';
import CreateGameForm from './CreateGameForm';


class Lobby extends Component {

  render() {
    return (
      <div>
        <div className="wingit-main-container" >
          <div className="generated-room-code">
            Room Code: {this.props.roomCode}
          </div>

          {!this.props.roomCode &&
            <div>
              <h2>Create a Game:</h2>
              <CreateGameForm createGame={this.props.createGame} />
            </div>}

          {!this.props.roomCode &&
            <div>
              <h2>Join a Game:</h2>
              <form onSubmit={this.props.joinGame}>
                <input className="name-field" name="username" placeholder="Enter your username" />
                <input className="name-field" name="roomCode" placeholder="Enter your game's room code" />
                <button>Join Game</button>
              </form>
            </div>}

          {this.props.roomCode &&
            <ul>
              {this.props.listPlayers(this.props.players)}
            </ul>}

          { this.props.isHost && <button onClick={this.props.startGame}>Start Game</button>}

        </div>

      </div>
    )
  }
}

export default Lobby;