import React, { Component } from 'react';
import GameNav from './GameNav';
import VoteButton from './VoteButton';

  class VotingPage extends Component{

    render(){
      const players = this.props.players.map( player => {
        if (this.props.player.username !== player.name){
          const voteNum = this.props.getVotesForPlayer(player.name);
          return <VoteButton key={player.id} keyProp={player.id} name={player.name} sendVote={this.props.sendVote} votes={voteNum}/>
        }
      });
      return(
        <div className="main-voting-page-wrapper">
          <GameNav category={this.props.category} player={this.props.player.username}/>
          <div className="voting-main-container">
          <span className="voting-instructions"> Vote for the faker! </span>
            <h2 className="the-question-was">The question was:</h2>
            <h3 className="the-question">{this.props.realQuestion}</h3>
          <hr className="voting-hr"/>
          </div>
          <div className="player-container">
            <div  className="voting-list-container">
              {players} 
            </div>
          </div>
        </div>
      );
    };
  };

export default VotingPage