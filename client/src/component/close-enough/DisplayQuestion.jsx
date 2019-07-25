import React, { Component } from 'react';
import '../../stylesheets/host-pick-category.css';
import GameNav from '../wingit/GameNav';


class DisplayQuestion extends Component {
  componentDidMount(){
    if(this.props.isHost){
      this.props.startClock();
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="main-question-container">
        <div className="nav-container">
          <GameNav category={this.props.category} player={this.props.player.username}/>
        </div>
        <div  className="question-container">
          <h1 className="question">{this.props.question}</h1>
        </div>
        <section 
          style={{backgroundColor: this.props.setStyle(this.props.category)}} 
          className="question-footer">
        </section>
      </div>
      
    );
  }
}
export default DisplayQuestion; 