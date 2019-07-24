import React, { Component } from 'react';

  class GameNav extends Component{
    constructor(props){
      super()
    }
    render(){
      return(
        <div className="game-nav-container">
          <nav id="game-navbar" role="navigation" aria-label="main navigation">
            <div className="nav-player-name">
              {this.props.player} 
            </div>
          </nav>
        </div>
      )
    }
  }


export default GameNav

