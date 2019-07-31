import React, { Component } from 'react';
import '../../stylesheets/host-pick-category.css';
import GameNav from '../wingit/GameNav';
import Countdown from '../wingit/Countdown';
import '../../stylesheets/timer.css';


class DisplayQuestion extends Component {
  componentDidMount(){
    if(this.props.isHost){
      this.props.startClock();
    }
  }

  setStyle = (category) => {
    switch(category){
      case 'hand':
        return "#DCF798"
      case 'count':
        return "#72cbff"
      case 'point':
        return "rgba(65, 250, 248, 0.74)"
      default: 
        return "#DD72E3"
    }
  };

  setPointStyle = (category) => {
    switch(category){
      case 'hand':
        return "26px solid #DCF798"
      case 'count':
        return "26 px solid #72cbff"
      case 'point':
        return "26px solid rgba(65, 250, 248, 0.74)"
      default: 
        return "26px solid #DD72E3"
    }
  };

  render() {
    return (
      <div className="main-question-container">
        <div className="nav-container">
          <GameNav category={this.props.category} player={this.props.player.username}/>
        </div>
        <div  className="question-container">
          <h1 className="question">
            <span id={this.props.category + "-q"} className="question-1">
              <span id={this.props.category + "-q::after"}>
              </span>
              {this.props.question}
            </span>
          </h1>
          
        </div>
        {/* <Countdown timerInSec={8} /> */}
        <section 
          style={{backgroundColor: this.props.setStyle(this.props.category)}} 
          className="question-footer">
        </section>
      </div>
    );
  }
}
export default DisplayQuestion; 