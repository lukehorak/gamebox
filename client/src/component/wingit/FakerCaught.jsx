import React, { Component } from 'react';
import RoundoverFooter from './RoundOverFooter';

class FakerCaught extends Component {

  render() {
    return (
      <div className="faker-wins-center-wrapper">
        <h1 className="faker-won-h1">{this.props.faker}<span className="faker-was"> WAS </span> wingin' it.</h1>
        <div className="busted-faker">BUSTED!</div>
        {this.props.isHost && <RoundoverFooter setStyle={this.props.setStyle} category={this.props.category} nextRound={this.props.nextRound} />}
      </div>
    );
  };
};

export default FakerCaught