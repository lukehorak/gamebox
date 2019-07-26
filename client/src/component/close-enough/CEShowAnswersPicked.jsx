import React, { Component } from 'react';
import '../../stylesheets/host-pick-category.css';
import GameNav from '../wingit/GameNav';


class CEShowAnswersPicked extends Component {


  render() {
    console.log(this.props)
    return (

      <div className="main-show-answer-container">

        <div className="nav-container">
          <GameNav player={this.props.player.username} />
        </div>

        <div className="answer-container">
          <h1 className="question">{this.props.answer}</h1>
        </div>

      {/* This is where the players who picked this answer goes, and the points they get */}



        <footer
          className="question-footer">
        </footer>

      </div>

    );
  }
}
export default CEShowAnswersPicked; 