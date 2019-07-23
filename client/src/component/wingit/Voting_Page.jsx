import React, { Component } from 'react';
import GameNav from './GameNav';
import GameOverFooter from './Game_Over_Footer';

  class VotingPage extends Component{
    constructor(props){
      super()
    }

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
            <div className="player-container">
              {players}
            </div>
        </div>
      );
    };
  };

export default VotingPage