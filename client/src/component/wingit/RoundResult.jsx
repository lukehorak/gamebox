import React, { Component } from 'react';
import GameNav from './GameNav';


class RoundResult extends Component {

  // result;

  render() {

    return (
      <div className="round-results-page-wrapper">

        <GameNav player={this.props.player.username} />

        <div className="round-results-main-container">

          {this.props.result == "not-enough-votes" && <h1>Not Enough Votes</h1>}
          {this.props.result == "not-the-faker" && <h1>Not the Faker</h1>}
          {this.props.result == "faker-caught" && <h1>Faker Caught</h1>}

        </div>
      
        <section className="rounds-footer">

        </section>

      </div>
    );
  };
}

export default RoundResult;