import React, { Component } from 'react';
import GameNav from './GameNav';
import VoteButton from './VoteButton';

  class VotingPage extends Component{

    vote = (e) => {
      alert(e.target.innerText);
    }

    render(){
      const players = this.props.players.map( player => {
        return (
          <VoteButton keyProp={player.id} name={player.name} sendVote={this.vote}/>
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