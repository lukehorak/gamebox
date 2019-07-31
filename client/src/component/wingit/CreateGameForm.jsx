import React, { Component } from 'react';

class CreateGameForm extends Component {
  render(){
    return(
      <div>
        <form id="create-game-form" onSubmit={ this.props.createGame }>
        {this.props.error === true && this.props.errorType === "empty string" && <div className="error-container">
            <span className="error"> 
              Please enter a username
            </span>
          </div>}
          <input onChange={this.props.clearError} name="username" placeholder="Enter your username">
          </input>
          <button className="lobby-create-game-button">
            Create Game
          </button>
        </form>
      </div>
    )
  }
}

export default CreateGameForm;
