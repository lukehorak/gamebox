import React, { Component } from 'react';
import GameNav from './GameNav';
import FakerCaught from './FakerCaught';
import WrongPerson from './WrongPerson';
import NotEnoughVotes from './NotEnoughVotes';

class RoundResult extends Component {

  render() {
    console.log('roundResult --> ', this.props.roundResult)

    return (
      <div className="round-results-page-wrapper">

        <GameNav category={this.props.category} player={this.props.player.username} />

        <div className="round-results-main-container">
          {this.props.roundResult === "not-enough-votes" && <NotEnoughVotes setStyle={this.props.setStyle} nextRound={this.props.nextRound} isHost={this.props.isHost} category={this.props.category} />}
          {this.props.roundResult === "not-the-faker" && <WrongPerson nextRound={this.props.nextRound} isHost={this.props.isHost} setStyle={this.props.setStyle} nextRound={this.props.nextRound} isHost={this.props.isHost} category={this.props.category} faker={this.props.faker} />}
          {this.props.roundResult === "faker-caught" && <FakerCaught setStyle={this.props.setStyle} nextRound={this.props.nextRound} isHost={this.props.isHost} nextRound={this.props.nextRound} isHost={this.props.isHost} category={this.props.category} faker={this.props.faker} />}
        </div>
        <section style={{backgroundColor: this.props.setStyle(this.props.category)}} category={this.props.category} className="rounds-footer"> </section> </div>
    );
  };
}

export default RoundResult;