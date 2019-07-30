import React, { Component } from 'react';

class JoinGameForm extends Component {

  // removeError = () => {
  //   this.setState({ error: false, errorType: null })
  // }

  render() {
    return (
      <div>
        <form className="lobby-join-game-form" onSubmit={this.props.joinGame}>
          <input onClick={this.props.clearError} className="name-field" name="username" placeholder="Enter your username" />
          <input className="name-field" name="roomCode" placeholder="Enter your game's room code" />
          <button className="join-game-button">Join Game</button>
          {this.props.error && <span className="empty-string-error">{this.props.error}</span>}
        </form>
      </div>
    )
  }
}

export default JoinGameForm;



