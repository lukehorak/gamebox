import React, { Component } from 'react';

  class GameNav extends Component{
    constructor(props){
      super()
    }

    setStyle = (category) => {
      switch(category){
        case 'hand':
          return "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)"
        case 'count':
          return "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)"
        case 'point':
          return "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)"
        default: 
          return "linear-gradient(-41deg, rgb(127, 139, 255), rgb(0, 239, 216))"
      }
    };

    

    render(){
      return(
        <div className="game-nav-container">
          <nav style={{backgroundImage: this.setStyle(this.props.category)}} id="game-navbar" role="navigation" aria-label="main navigation">
            <div className="nav-player-name">
              {this.props.player} 
            </div>
          </nav>
        </div>
      )
    }
  }


export default GameNav

