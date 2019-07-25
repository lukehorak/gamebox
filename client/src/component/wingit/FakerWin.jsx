import React, { Component } from 'react';
import GameOverFooter from './Game_Over_Footer';
import GameNav from './GameNav';

  class FakerWon extends Component {
    render(){
      return (
          <div className="faker-wins-center-wrapper">
            <GameNav/> 
              <h1 className="faker-won-h1">You've been duped! {this.props.faker} was Wingin' It the whole time!</h1>
              <h2>Way to go, {this.props.faker}!</h2>
              <p>As for the rest of you, well... don't quit your day jobs.</p>
            <GameOverFooter/>
          </div>
      );
    };
  };



export default FakerWon 
