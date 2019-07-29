import React, { Component } from 'react';

class LosingGameResults extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="losing-stuff-container">
        <div className="word-wrapper">
          <h1 className="losing-stuff">You've been duped! {this.props.faker} was Wingin' It the whole time!</h1>
          <h2 className="losing-stuff">Way to go, {this.props.faker}!</h2>
          <p className="losing-stuff">As for the rest of you, well... don't quit your day jobs.</p>
          <form  action="/" method="get">
            <button id="home-button">
              Play more games
            </button>
          </form>
        </div>
        
      </div>
      );
    };
  };

export default LosingGameResults;