import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: this.props.timer,
      visiblity: false
    }
  }

  startTimer() {
    this.setState({
      visiblity: true
    })

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
        <button onClick={this.startTimer.bind(this)}>Start {this.props.timer}-second Countdown</button>
        {this.state.visiblity && <span>{this.state.timer}</span>}
      </div>
    );
  }
}
export default Countdown;