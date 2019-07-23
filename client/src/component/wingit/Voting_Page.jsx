import React, { Component } from 'react';
import GameNav from './GameNav';
import GameOverFooter from './Game_Over_Footer';

  class VotingPage extends Component{
    constructor(props){
      super()
    }
    players = ["Jeb", "Jedediah", "Jodeci", "Jebediah", "Jeremiah"]
    
    renderPlayers = (players) => {
      return players.map(function(player){
        <article className="player-card">
          <span className="player-name-voting-button">
          {player}
          </span>
        </article>
      });
    };

    render(){
      return(
        <div className="voting-page-wrapper">
          <GameNav/>
            <div className="player-container">
              {renderPlayers(players)} {/* use this.props.players(array to render articles)*/}
            </div>
          <GameOverFooter/>
        </div>
      );
    };
  };

export default VotingPage