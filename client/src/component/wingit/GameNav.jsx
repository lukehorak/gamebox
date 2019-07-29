import React, { Component } from 'react';

  class GameNav extends Component{
    constructor(props){
      super()
    }

    setStyle = (category) => {
      switch(category){
        case 'hand':
          return "#72cbff"
        case 'count':
          return "#DCF798"
        case 'point':
          return "#DD72E3"
        default: 
          return "rgba(65, 250, 248, 0.74)"
      }
    };

    

    render(){
      return(
        <div className="game-nav-container">
          <nav style={{backgroundColor: this.setStyle(this.props.category)}} id="game-navbar" role="navigation" aria-label="main navigation">
            <div className="nav-player-name">
              {this.props.player} 
            </div>
          </nav>
        </div>
      )
    }
  }


export default GameNav

