import React, { Component } from 'react';

  class JoinButton extends Component{
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
        <div className="join-game">
          <button onClick={this.toggleHidden.bind(this)} id="join-game" className="button button is-primary">
            Join Game
          </button>
          {!this.state.isHidden && <LandingForms/>}
        </div>
      );
    }
  }

  const LandingForms = () => (
    <div className="columns is-mobile is-centered">
      <form className="is-horizontal">
        <p className="control">
          <input className="input" type="text" placeholder="Enter your name"/>
          <input className="input" type="text" placeholder="Enter 4-digit room code"/>
        </p>
      </form>
    </div>
  )

export default JoinButton