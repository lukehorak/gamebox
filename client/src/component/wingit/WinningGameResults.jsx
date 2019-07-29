import React, { Component } from 'react';

class WinningGameResults extends Component {
  render() {

    console.log(this.props)
    return(
      <div className="winning-stuff-container">
        <div className="word-wrapper">
          <h1>  GAME OVER  </h1>
          <h2 className="faker-caught">{this.props.faker} got caught wingin' it!</h2>
          <form  action="/" method="get">
            <button  id="home-button">
              Play more games
            </button>
          </form>
        </div>
      </div>
    );
  };
}



export default WinningGameResults; 
