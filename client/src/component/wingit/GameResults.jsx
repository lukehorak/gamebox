import React, { Component } from 'react';
import GameNav from './GameNav';
//import RoundOverFooter from './RoundOverFooter';

class GameResults extends Component {
  render() {
    // todo -expand into separate component

    let stuff;

    if (!this.props.foundFaker) {
      stuff = (
        <div>
          <h1>You've been duped! {this.props.faker} was Wingin' It the whole time!</h1>
          <h2>Way to go, {this.props.faker}!</h2>
          <p>As for the rest of you, well... don't quit your day jobs.</p>
        </div>
      )
    }
    else {
      stuff = (
        <div>
          <h1>{this.props.faker} was caught Wingin' It! Great job everyone*!</h1>
          <p>*(Everyone except {this.props.faker}. Next time, try being better.)</p>
        </div>
      )
    }
    return (
      <div className="game-results-center-wrapper">
        <GameNav player={this.props.player.username} />
        {stuff}
      </div>
    );
  };
};



export default GameResults; 
