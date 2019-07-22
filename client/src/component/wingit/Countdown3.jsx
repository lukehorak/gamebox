import React, { Component } from 'react';

class Countdown3 extends Component {
  constructor(props) {
    super()
    this.state = {
      timer: 3
    }
  }
  startTimer() {
    const interval = setInterval(() => {
      this.setState({
        timer: this.state.timer - 1
      })
    }, 1000);

    setTimeout(() => {
      this.setState({
        timer: " 0 - Time's up!"
      })
      clearInterval(interval);
    }, (this.state.timer) * 1000)
  }

  render() {
    return (
      <div>
        <button onClick={this.startTimer.bind(this)}>Start 3-second Countdown</button>
        <span>{this.state.timer}</span>
      </div>
    );
  }
}
export default Countdown3;