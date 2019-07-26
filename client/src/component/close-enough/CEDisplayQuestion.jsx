import React, { Component } from 'react';
import '../../stylesheets/host-pick-category.css';
import GameNav from '../wingit/GameNav';


class CEDisplayQuestion extends Component {
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
          <GameNav player={this.props.player.username} />
        </div>

        <div  className="question-container">
          <h1 className="question">{this.props.question}</h1>
        </div>


        <form>
            Type your answer
              <input type="text" name="bluff"/>
          <div className="bluff-line">
            <h1> ________________ </h1>
          </div>
        </form>

        <footer 
          className="question-footer">
        </footer>

      </div>
      
    );
  }
}
export default CEDisplayQuestion; 