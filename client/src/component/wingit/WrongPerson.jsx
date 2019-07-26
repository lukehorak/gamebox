import React, { Component } from 'react';
import RoundOverFooter from './RoundOverFooter'

class WrongPerson extends Component {
  render() {
    return (
      <div className="wrong-person-container">
        <h1 className="wrong-person">
          Good news! You all voted for the same person! Bad news is, {this.props.faker} <span className="was-not-faker">WAS NOT </span> the faker...
          </h1>
        {this.props.isHost && <RoundOverFooter setStyle={this.props.setStyle} category={this.props.category} nextRound={this.props.nextRound} />}
      </div>
    );
  };
};


export default WrongPerson;