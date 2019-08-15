import React, { Component } from 'react';
import '../../stylesheets/timer.css';

let interval;

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: this.props.timerInSec
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  startTimer() {

    interval = setInterval(() => {
      this.setState({
        timer: this.state.timer > 0 ? this.state.timer - 1 : 0 
      })
    }, 1000);

  }

  render() {
    return (
      <div className="timer-div">
        <span className="timer-style">{this.state.timer}</span>
      </div>
    );
  }
}
export default Countdown;