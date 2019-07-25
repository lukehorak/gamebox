import React, { Component } from 'react';
import GameNav from './GameNav';
import VoteButton from './VoteButton';

  class VotingPage extends Component{

    vote = (e) => {
      this.props.sendVote(e.target.innerText)
    }

    render(){
      const players = this.props.players.map( player => {
        if (this.props.player.username !== player.name){
          return <VoteButton keyProp={player.id} name={player.name} sendVote={this.vote}/>
        }
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
            <div className="voting-column">
              <span className="player-voting-card">
                {players}
              </span>
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