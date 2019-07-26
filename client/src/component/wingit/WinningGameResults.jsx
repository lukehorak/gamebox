import React, { Component } from 'react';

class WinningGameResults extends Component {
  render() {
    return(
      <div className="winning-stuff-container">
        <div className="word-wrapper">
          <h1>  GAME OVER  </h1>
          <h2 className="faker-caught">{this.props.faker} got caught wingin' it!</h2>
          <button  action="/" method="GET" id="home-button">
            Play more games
          </button>
        </div>
      </div>
    );
  };
}



export default WinningGameResults; 
