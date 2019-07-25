import React, { Component } from 'react';
import GameNav from './GameNav';


class RoundResult extends Component {

  // result;

  render() {

    return (
      <div className="round-results-page-wrapper">

        <GameNav player={this.props.player.username} />

        <div className="round-results-main-container">

          {this.props.result == "not-enough-votes" && <insert not enough votes component here>}
          {this.props.result == "not-the-faker" && <insert faker still at large component>}
          {this.props.result == "faker-caught" && <insert faker caught component>}

        </div>
      
        <section className="rounds-footer">

        </section>

      </div>
    );
  };

export default RoundResult;