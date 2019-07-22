import React, { Component } from 'react';
import CreateGame from './CreateGame'

  class CreateButton extends Component{
    constructor(props){
      super()
      this.state = {
        isHidden: true
      }
    }
      toggleHidden (e){
        e.preventDefault()
        this.setState({
          isHidden: !this.state.isHidden
        })
      } 
    render(){
      return(
        <div id="create-game" className="create-game">
          <button onClick={this.toggleHidden.bind(this)} className="create-game-button">
            Create Game
          </button>
          {!this.state.isHidden && <CreateGame/>}
        </div>
      );
    }
  }

export default CreateButton