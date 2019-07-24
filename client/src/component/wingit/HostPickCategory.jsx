import React, { Component } from 'react';
import CategoryButton       from './CategoryButton';
import '../../stylesheets/host-pick-category.css';
import GameNav from './GameNav';

class HostPickCategory extends Component {
  constructor(props) {

    super(props)
    this.state = {
      player: this.props.player,
      category: false
    }
  }

  chooseCategory = (category) => {
    this.setState({ category: category })
  }

  render() {

    return (
      <div className="pickcategory-main-container" >
        <div className="nav-container">
          <GameNav category={this.state.category} player={this.props.player.username}/>
        </div>
          <div className="title-container">
            <p className="pick-category-title">PICK A CATEGORY</p>
            <hr className="pick-a-category-hr"/>
          </div>
          <div className="button-container">  {/* Buttons are React Components so that they can be provided a category value, to be sent as a message on confirmation */}
            <CategoryButton className="give-me-a-hand-button" handleClick={this.chooseCategory} category="hand" buttonText="Give me a hand!"/>
            <CategoryButton className="count-me-in-button" handleClick={this.chooseCategory} category="count" buttonText="Count me in!"/>
            <CategoryButton className="get-to-the-point-button" handleClick={this.chooseCategory} category="point" buttonText="Get to the point!"/>
          </div>
          <div className="confirm-button-footer">
          { this.state.category && 
            <CategoryButton  handleClick={this.props.sendCategory} category={this.state.category} buttonText="Confirm"/>
          }
          </div>
        </div>
    );
  }
}
export default HostPickCategory; 