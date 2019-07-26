import React, { Component } from 'react';
import RoundoverFooter from './RoundOverFooter';

class NotEnoughVotes extends Component {
  render() {
    return (
      <div className="not-enough-votes-container">
        <h1 className="not-enough-votes">
          Uh oh! Nobody got enough votes, so whoever was Wingin' It is still at large!
          </h1>
        {this.props.isHost && <RoundoverFooter nextRound={this.props.nextRound}/>}
      </div>
    )
  }
}


export default NotEnoughVotes;