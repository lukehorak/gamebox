import React, { Component } from 'react';
import GameOverFooter from './GameOverFooter';
import GameNav from './GameNav';

  class FakerLost extends Component {

    render(){
      return (
          <div className="faker-wins-center-wrapper">
            <GameNav/> 
              <h1 className="faker-won-h1">{this.props.faker} WAS wingin' it. BUSTED!</h1>
            <GameOverFooter nextPhase={this.props.nextPhase}/>
          </div>
      );
    };
  };

  export default FakerLost