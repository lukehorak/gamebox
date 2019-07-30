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

        <div className="close-enough-main-container row" >


          <div className="split left">
            <div className="centered">
          {
            this.props.roomCode &&
            <div className="ce-generated-room-code">
              Room Code:
              <div className="ce-room-code-container">
                <span id="ce-room-code">
                  {this.props.roomCode}
                  <hr className="ce-room-code-hr" />
                </span>
              </div>
            </div>
          }
          {!this.props.roomCode &&
            <div className="ce-create-game-container">
              <span className="ce-create-game-header">Create a Game:</span>
              <CreateGameForm createGame={this.props.createGame} />
              {/* <hr className="ce-create-game-hr" /> */}
            </div>}
          </div>
          </div>


          <div className="split right">
            <div className="centered">
          {!this.props.roomCode &&
            <div className="ce-join-game-container">
              <span className="ce-join-game-header">Join a Game:</span>
              <form className="ce-lobby-join-game-form" onSubmit={this.props.joinGame}>
                <input className="ce-name-field" name="username" placeholder="Enter your username" />
                <input className="ce-name-field" name="roomCode" placeholder="Enter your game's room code" />
                <button className="ce-join-game-button">Join Game</button>
              </form>
            </div>}
          </div>
          </div>

        </div>

          {this.props.roomCode &&
            <div className="ce-player-list-container">
              {this.listPlayers(this.props.players)}
            </div>}

          {this.props.isHost && <button className="ce-start-game-button" onClick={this.props.startGame}>Start Game</button>}

        

      </div>
    )
  }
}

export default CELobby;