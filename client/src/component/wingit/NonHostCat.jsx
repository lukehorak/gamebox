import React, { Component } from 'react';
// import ReactCountdownClock from 'react-countdown-clock';
import Nav from '../home/Nav';


class NonHostCat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: "Janeeee",
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
        {/* <div>
          <ReactCountdownClock seconds={this.props.timer}
            color="#000"
            alpha={0.9}
            size={100} />
        </div> */}
      </div>
    }

    return (
      <div>
        <Nav />
        <div className="player-name">
          Player: {this.state.player}
        </div>
        <div className='clock'>
          <button onClick={this.startTimer.bind(this)}>Start {this.props.timer}-second Countdown</button>
          {this.state.visiblity && myComponent()}
          <p className="nonhost-waiting-for-category">
          The host is choosing choosing a category
          </p>
        </div>
      </div>

    );
  }
}
export default NonHostCat;