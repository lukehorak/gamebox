import React, { Component } from 'react';

  class StartButton extends Component{
    render(){
      return(
        <div className="start-game columns is-mobile is-centered ">
          <button className="button button is-primary">
            Start Game
          </button>
        </div>
      );
    }
    
  }



export default StartButton