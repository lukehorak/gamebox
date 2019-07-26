import React, { Component } from 'react';
import RoundoverFooter from './RoundOverFooter';

class FakerCaught extends Component {

  render() {
    return (
      <div className="faker-wins-center-wrapper">
        <h1 className="faker-won-h1">{this.props.faker} WAS wingin' it. BUSTED!</h1>
        {this.props.isHost && <RoundoverFooter nextRound={this.props.nextRound} />}
      </div>
    );
  };
};

export default FakerCaught