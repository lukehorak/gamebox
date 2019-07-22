import React, { Component } from 'react';

class INeedAnAdult extends Component {

  submitUser = (e) => {
    e.preventDefault();
    const { username } = e.target.elements;
    console.log("username ==> ", username.value)
    this.socket.emit('new-player', {username: username.value})
  }

  render() {
    {/* get vars from props to render */}
    const { response, image, askForAdult } = this.props;
    return (
      <div>
        <div>
          <img style={{height:"300px", width:"300px"}} src={ image } alt={response}/>
        </div>
        <button style={{ fontSize: "large" }} onClick={askForAdult}>{response}</button>
      </div>
    );
  }
}

export default INeedAnAdult;
