import React, { Component } from 'react';
import GameOverFooter from './Game_Over_Footer';
import GameNav from './GameNav';

  class FakerLost extends Component {
    constructor(props){
      super()
    }
    render(){
      return (
          <div className="faker-wins-center-wrapper">
            <GameNav/> 
              <h1 className="faker-won-h1">You caught the faker!</h1>
            <GameOverFooter/>
          </div>
      );
    };
  };

  export default FakerLost