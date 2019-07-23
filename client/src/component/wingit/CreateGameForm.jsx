import React, { Component } from 'react';

class CreateGameForm extends Component {

  render(){
    return(
      <form id="create-game-form" onSubmit={this.props.createGame}>
        <input name="username" placeholder="Enter your username"></input>
        <button style={{ fontSize: "large" }} >Create Game</button>
      </form>

    )
  }
}

export default CreateGameForm;
