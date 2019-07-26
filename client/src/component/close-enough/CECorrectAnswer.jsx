import React, { Component } from 'react';
import '../../stylesheets/host-pick-category.css';
import GameNav from '../wingit/GameNav';


class CECorrectAnswer extends Component {


  render() {
    console.log(this.props)
    return (

      <div className="main-show-answer-container">

        <div className="nav-container">
          <GameNav player={this.props.player.username} />
        </div>

        <div className="answer-container">
          <h1 className="correct-answer">{this.props.correctAnswer}</h1>
        </div>

        {/* This is where the players who picked the correct answer goes, and the points they get */}



        <footer
          className="answer-footer">
        </footer>

      </div>

    );
  }
}
export default CECorrectAnswer; 