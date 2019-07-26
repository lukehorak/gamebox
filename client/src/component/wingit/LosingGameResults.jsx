import React, { Component } from 'react';

class LosingGameResults extends Component {
  render() {
    return (
      <div className="losing-stuff-container">
        <div className="word-wrapper">
          <h1>You've been duped! {this.props.faker} was Wingin' It the whole time!</h1>
          <h2>Way to go, {this.props.faker}!</h2>
          <p>As for the rest of you, well... don't quit your day jobs.</p>
        </div>
      </div>
      );
    };
  };

export default LosingGameResults;