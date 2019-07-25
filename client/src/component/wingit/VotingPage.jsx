import React, { Component } from 'react';
import GameNav from './GameNav';

  class VotingPage extends Component{

    render(){
      console.log(this.props)
      const players = this.props.players.map(function (player) {
        return (
          <button className="player-vote-button" key={player.playerId}>
            {player.name}
          </button>
        );
      });
      return(
        <div className="main-voting-page-wrapper">
          <GameNav player={this.props.player.username}/>
          <div className="voting-main-container">
            <h2 className="the-question-was">The question was:</h2>
            <h3 className="the-question">{this.props.realQuestion}</h3>
          <hr className="voting-hr"/>
          </div>
          <div className="player-container">
            <div className="column">
              {players}
            </div>
          </div>
          <section 
          className="voting-footer">
            <span className="voting-instructions"> Vote for the faker! </span>
          </section>
        </div>
      );
    };
  };

export default VotingPage