import React, { Component } from 'react';

  class VoteButton extends Component{

    vote = () => {
      this.props.sendVote(this.props.name);
    }

    render(){

      return(
        <div className="voting-card-container">
          <div className="voting-column">
            <button key={this.props.keyProp} className="player-vote-button" onClick={this.vote}>
              <h2>{this.props.name}</h2><h3>{`${this.props.votes}`}</h3>
            </button> 
          </div>
        </div>
      );
        
    };
  };

export default VoteButton