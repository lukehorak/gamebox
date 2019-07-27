import React, { Component } from 'react';
import CreateGameForm from './CreateGameForm';


class Lobby extends Component {
  constructor(props){
    super()
    this.state = ({ error: false })
  }

  checkForTakenUser = (e, players) => {
    players.ForEach(function (player) {
      if(player.name === e.target.value){
        this.setState({error: true});
      }
    }) 
  }; 

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
              <CreateGameForm createGame={this.props.createGame} />
              <hr className="create-game-hr"/>
            </div>}
          {!this.props.roomCode &&
            <div className="join-game-container">
              <span className="join-game-header">Join a Game:</span>
              <form onBlur={this.checkForTakenUser} className="lobby-join-game-form" onSubmit={this.state.error === false && this.props.joinGame}>
                <input className="name-field" name="username" placeholder="Enter your username" />
                <input className="name-field" name="roomCode" placeholder="Enter your game's room code" />
                <button className="join-game-button">Join Game</button>
                {this.state.error === true && <span className="player-name-taken-error">
                  That username is already in use!
                </span>}
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

export default Lobby;