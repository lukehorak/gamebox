import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

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
    const myComponent = () => {
      return <div>
        <span>{this.state.timer}</span>
        <div>
          <ReactCountdownClock seconds={this.props.timer}
            color="#000"
            alpha={0.9}
            size={100} />
        </div>
      </div>
    }
    
    return (
      <div className='clock'>
        <button onClick={this.startTimer.bind(this)}>Start {this.props.timer}-second Countdown</button>
        {this.state.visiblity && myComponent()}
      </div>
    );
  }
}
export default Countdown;