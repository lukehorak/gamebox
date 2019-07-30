import React, { Component } from 'react';

let interval;
let timeOut;

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: this.props.timerInSec,
      visiblity: false
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(interval);
    clearTimeout(timeOut);
  }

  startTimer() {
    this.setState({
      visiblity: true
    })

    interval = setInterval(() => {
      this.setState({
        timer: this.state.timer - 1
      })
    }, 1000);

    timeOut = setTimeout(() => {
      clearInterval(interval);
      this.setState({
        visiblity: false,
        timer: " 0 - Time's up!"
      })
    }, (this.state.timer) * 1000)
  }

  render() {
    return (
      <div>
        <span>{this.state.timer}</span>
      </div>
    );
  }
}
export default Countdown;