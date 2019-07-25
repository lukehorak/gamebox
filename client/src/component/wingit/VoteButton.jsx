import React, { Component } from 'react';

  class VoteButton extends Component{

    render(){

      return(
        <div className="voting-card-container">
          <div className="voting-column">
            <button key={this.props.keyProp} className="player-vote-button" onClick={this.props.sendVote}>
              <h2>{this.props.name}</h2>
            </button> 
          </div>
        </div>
      );
        
    };
  };

export default VoteButton