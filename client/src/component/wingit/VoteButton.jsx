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
              <h2>{this.props.name}</h2>
              <div className="vote-count-container">
                <span className="vote-count">
                  {`${this.props.votes}`}
                </span>
              </div>
            </button> 
          </div>
        </div>
      );
        
    };
  };

export default VoteButton