import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class SocketTest extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:9000"
    }
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('hello', msg => this.setState({ response: msg.msg }));
  }

  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
          <p>{response}</p>
      </div>
    );
  }
}

export default SocketTest;
