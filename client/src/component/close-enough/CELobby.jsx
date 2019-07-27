import React, { Component } from 'react';
import CreateGameForm from './CreateGameForm';

//This is an optional component, can try to use Wingit's Lobby 
class CELobby extends Component {

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

  render() {
    return (
      <div>
        <div className="close-enough-main-container" >
          {
            this.props.roomCode &&
            <div className="generated-room-code">
              Room Code:
              <div className="room-code-container">
                <span id="room-code">
                  {this.props.roomCode}
                  <hr className="room-code-hr" />
                </span>
              </div>
            </div>
          }
          {!this.props.roomCode &&
            <div className="create-game-container">
              <span className="create-game-header">Create a Game:</span>
              <CreateGameForm createGame={this.props.createGame} />
              <hr className="create-game-hr" />
            </div>}
          {!this.props.roomCode &&
            <div className="join-game-container">
              <span className="join-game-header">Join a Game:</span>
              <form className="lobby-join-game-form" onSubmit={this.props.joinGame}>
                <input className="name-field" name="username" placeholder="Enter your username" />
                <input className="name-field" name="roomCode" placeholder="Enter your game's room code" />
                <button className="join-game-button">Join Game</button>
              </form>
            </div>}

          {this.props.roomCode &&
            <div className="player-list-container">
              {this.listPlayers(this.props.players)}
            </div>}

          {this.props.isHost && <button className="start-game-button" onClick={this.props.startGame}>Start Game</button>}

        </div>

      </div>
    )
  }
}

export default CELobby;