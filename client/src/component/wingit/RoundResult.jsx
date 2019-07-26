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

        <GameNav player={this.props.player.username} />

        <div className="round-results-main-container">

          {this.props.roundResult == "not-enough-votes" && <NotEnoughVotes nextRound={this.props.nextRound} isHost={this.props.isHost} category={this.props.category} />}
          {this.props.roundResult == "not-the-faker" && <WrongPerson nextRound={this.props.nextRound} isHost={this.props.isHost} category={this.props.category} faker={this.props.faker} />}
          {this.props.roundResult == "faker-caught" && <FakerCaught nextRound={this.props.nextRound} isHost={this.props.isHost} category={this.props.category} faker={this.props.faker} />}

        </div>
      
        <section className="rounds-footer">

        </section>

      </div>
    );
  };
}

export default RoundResult;