import React, { Component } from 'react';

  class GameNav extends Component{
    constructor(props){
      super()
    }
    render(){
      return(
        <nav id="game-navbar" role="navigation" aria-label="main navigation">
          <span className="nav-player-name">
            <h1>Goku</h1>
          </span>
        </nav>
      )
    }
  }


export default GameNav

