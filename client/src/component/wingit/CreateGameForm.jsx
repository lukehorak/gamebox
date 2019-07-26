import React, { Component } from 'react';

class CreateGameForm extends Component {
  constructor(props){
    super()
      this.state={ error: false}
  }

  checkForEmptyString = (event) => {
    if(event.target.value == ""){
      this.setState({ error: true})
      return true
    }
  };

  componentDidMount(){
    this.checkForEmptyString
  }
  
  render(){
    return(
      <div>
        <form id="create-game-form" onSubmit={this.state.error === false && this.props.createGame}>
          <input onSubmit={this.checkForEmptyString} name="username" placeholder="Enter your username"></input>
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
