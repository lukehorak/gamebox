import React, { Component } from 'react';

class CreateGameForm extends Component {

  removeError = (event) => {
    this.setState({ error: false, errorType: null })
  }

  render(){
    return(
      <div>
        <form id="create-game-form" onSubmit={ this.props.createGame }>
          <input onClick={this.removeError} name="username" placeholder="Enter your username">
          </input>
          <button className="lobby-create-game-button">
            Create Game
          </button>
          {this.props.error === true && this.props.errorType === "empty string" && <span className="empty-string-error"> 
            Please enter a username
          </span>}
        </form>
      </div>
    )
  }
}

export default CreateGameForm;
