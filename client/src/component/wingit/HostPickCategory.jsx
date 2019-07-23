import React, { Component } from 'react';
import CategoryButton       from './CategoryButton';
import '../../stylesheets/host-pick-category.css';

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
      <div>
        <div className="player-name">
          Player: {this.state.player.username}
        </div>
        <div className="pickcategory-main-container" >
          <div>
            <p className="pick-category-title">PICK A CATEGORY:</p>
            {/* Buttons are React Components so that they can be provided a category value, to be sent as a message on confirmation */}
            <CategoryButton handleClick={this.chooseCategory} category="hand" buttonText="Give me a hand!"/>
            <CategoryButton handleClick={this.chooseCategory} category="count" buttonText="Count me in!"/>
            <CategoryButton handleClick={this.chooseCategory} category="point" buttonText="Get to the point!"/>
          </div>
          { this.state.category && 
            <CategoryButton handleClick={this.props.sendCategory} category={this.state.category} buttonText="Confirm"/>
          }
          </div>
      </div>
    );
  }
}
export default HostPickCategory; 