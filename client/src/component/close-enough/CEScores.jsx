import React, { Component } from 'react';
import GameNav from './GameNav';
//import RoundOverFooter from './RoundOverFooter';

class CEScores extends Component {
  render() {

    let stuff;

    return (
      <div className="game-results-center-wrapper">
        <GameNav player={this.props.player.username} />
        {this.props.player.score}
      </div>
      <div className="game-results-center-wrapper">
        <GameNav player={this.props.player.username} />
        {this.props.player.score}
      </div>
      <div className="game-results-center-wrapper">
        <GameNav player={this.props.player.username} />
        {this.props.player.score}
      </div>
      <div className="game-results-center-wrapper">
        <GameNav player={this.props.player.username} />
        {this.props.player.score}
      </div>


// Or a loop to show the players names and their scores


    );
  };
};



export default CEScores; 