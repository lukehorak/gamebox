import React, { Component } from 'react';

  class VoteButton extends Component{

    render(){

      return(
        <button key={this.props.keyProp} className="my-player-list-item" onClick={this.props.sendVote}>
          <h2>{this.props.name}</h2>
        </button>
      );
        
    };
  };

export default VoteButton