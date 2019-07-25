import React, { Component } from 'react';
import CategoryButton from './CategoryButton';
import '../../stylesheets/host-pick-category.css';
import GameNav from './GameNav';

class CEDisplayOptions extends Component {
  constructor(props) {

    super(props)
    this.state = {
      player: this.props.player,
    }
  }


  render() {

    return (
      <div className="pick-answer-main-container" >

        <div className="nav-container">
          <GameNav player={this.props.player.username} />
        </div>

        <p className="pick-answer-title">Pick the correct answer</p>

        <div className="button-container">  
          <CEOption />
          <CEOption />
          <CEOption />
          <CEOption />
        </div>

        {/* <div className="confirm-answer">
          {this.state.category &&
            <CEOption handleClick={this.props.sendCategory} category={this.state.category} buttonText="Confirm" />
          }
        </div> */}
      </div>
    );
  }
}
export default CEDisplayOptions; 