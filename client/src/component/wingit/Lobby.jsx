import React, { Component } from 'react';
import CreateGameForm from './CreateGameForm';
import JoinGameForm from './JoinGameForm';

class Lobby extends Component {
  listPlayers = (players) => {
    const playerList = players.map(function (player) {
      return (
        <div key={player.id} className="player-card-container">
            <div className="column">
              <span className="player-menu-card">
                <h2 className="player-name-lobby">{player.name}</h2>
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
        <nav className="lobby-nav">
          <span className="title">
            Just Wing it!
          </span>
        </nav>
        <div className="wingit-main-container" >
          {this.props.roomCode &&
            <div className="generated-room-code">
              Room Code:
              <div className="room-code-container">
                <span id="room-code">
                  {this.props.roomCode}
                  <hr  className="room-code-hr"/>
                </span>
              </div>
            </div>
          }
          {!this.props.roomCode &&
            <div className="create-game-container">
              <span className="create-game-header">Create a Game:</span>
              <CreateGameForm errorType={this.props.errorType} error={this.props.error} createGame={this.props.createGame} />
              <hr className="create-game-hr"/>
            </div>}
            {!this.props.roomCode &&
            <div className="join-game-container">
              <span className="join-game-header">Join a Game:</span> 
              <JoinGameForm error={this.props.error} joinGame={this.props.joinGame} clearError={this.props.clearError}/>
            </div>}

          {this.props.roomCode &&
            <div className="player-list-container">
              {this.listPlayers(this.props.players)}
            </div>}

          {this.props.isHost && <button className="start-game-button" onClick={this.props.prepGame}>Start Game</button>}

        </div>

      </div>
    )
  }
}

export default Lobby;