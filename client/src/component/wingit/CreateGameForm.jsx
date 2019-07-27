import React, { Component } from 'react';

class CreateGameForm extends Component {
  constructor(props){
    super()
      this.state={ error: false}
  }

  checkForEmptyString = (event) => {
    if(event.target.value == ""){
      this.setState({ error: true })
      return true
    }
  };

  removeError = (event) => {
    this.setState({ error: false })
  }

  render(){
    return(
      <div>
        <form onBlur={this.checkForEmptyString} id="create-game-form" onSubmit={this.state.error === false && this.props.createGame}>
          <input onClick={this.removeError} name="username" placeholder="Enter your username"></input>
          <button className="lobby-create-game-button">Create Game</button>
          {this.state.error === true && <span className="empty-string-error">
            Please enter a username
          </span>}
        </form>
      </div>
    )
  }
}

export default CreateGameForm;
