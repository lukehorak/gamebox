import React, { Component } from 'react';

  class GameNav extends Component{
    constructor(props){
      super()
    }

    setStyle = (category) => {
      switch(category){
        case 'hand':
          return '#76B3FC'
        case 'count':
          return '#F7CBA9'
        case 'point':
          return '#FC6A9D'
        default: 
          return '#956DD4'
      }
    }

    render(){
      console.log({backgroundColor: this.setStyle(this.props.category)})
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

