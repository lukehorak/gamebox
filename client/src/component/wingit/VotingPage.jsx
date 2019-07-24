import React, { Component } from 'react';
import GameNav from './GameNav';

  class VotingPage extends Component{

    render(){
      const players = this.props.players.map(function (player) {
        return (
          <button key={player.playerId} className="my-player-list-item">
            <h2>{player.name}</h2>
          </button>
        );
      });
      return(
        <div className="voting-page-wrapper">
          <GameNav/>
          <h2>The question was:</h2>
          <h3>{this.props.realQuestion}</h3>
          <div className="player-container">
            {players}
          </div>
          <span className="voting-instrucrtions"> Vote for the faker! </span>
        </div>
      );
    };
  };

export default VotingPage