import React, { Component } from 'react';

class JoinGameForm extends Component {

  // removeError = () => {
  //   this.setState({ error: false, errorType: null })
  // }

  render() {
    return (
      <div>
        <form className="lobby-join-game-form" onSubmit={this.props.joinGame}>
        {this.props.error && <div className="error-container">
              <span className="error">
                {this.props.error}
              </span>
            </div>}
          <input onChange={this.props.clearError} className="name-field" name="username" placeholder="Enter your username" />
          <input onChange={this.props.clearError} className="name-field" name="roomCode" placeholder="Enter your game's room code" />
          <button className="join-game-button">Join Game</button>
        </form>
      </div>
    )
  }
}

export default JoinGameForm;



