import React, { Component } from 'react';
import '../../stylesheets/host-pick-category.css';
import Nav from '../home/Nav';



class DisplayQuestion extends Component {
  constructor(props) {

    super(props)
    this.state = {
      player: "John",
      questions: [
        {
          questionId: 1,
          categoryId: 1,
          question: "Raise your hand if you like brocollini"
          }
      ]

      }
    }



  render() {
    const question = this.state.questions.map((question) => {
      return (
        <div
          key={question.questionId} 
          className="question-item">
          {question.question}
        </div>
      );
    });

    return (
      <div>
        < Nav />
        <div className="player-name">
          Player: {this.state.player}
        </div>
        <div>
          {this.props.chosenCategory}
        </div>
        <div>
          {this.props.chosenCategory}
        </div>
          {question}
      </div>
    );
  }
}
export default DisplayQuestion; 