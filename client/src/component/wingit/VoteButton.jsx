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
              <div className="voting-card">
                <span className="vote-button-name">
                  {this.props.name}
                </span>
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