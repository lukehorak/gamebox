import React, { Component } from 'react';
import '../../stylesheets/host-pick-category.css';
import Nav from '../home/Nav';



class HostPickCategory extends Component {
  constructor(props) {
    
    super(props)
    this.state = {
      player: "John",
      categories: [
        {
          title: 'Gimme a hand',
          categoryId: 1,
          handler: () => {
            console.log("Category One Picked");
            this.setState({
              chosenCategory: "Hands up!"
            })
            this.showChosenCat();
          }
        },
        {
          title: 'Get to the point',
          categoryId: 2,
          handler: () => {
            console.log("Category Two Picked");
            this.setState({
              chosenCategory: "Get to the point now!"
            })
            this.showChosenCat();
          }
        },
        {
          title: 'Count me in',
          categoryId: 3,
          handler: () => {
            console.log("Category Three Picked");
            this.setState({
              chosenCategory: "I'm in!"
            })
            this.showChosenCat();

          }
        }
      ],
      chosenCategory: undefined,
      visibility: "hidden"
    }
  }

  showChosenCat() {
    this.setState({
      visibility: ""
    })
    console.log("Do that")
  }

  render() {
    const categories = this.state.categories.map((category) => {
      return (
        <button
          onClick={category.handler}
          key={category.categoryId}
          className="category-list-item">
          {category.title}
        </button>
      );
    });

    return (
      <div>
        < Nav />
        <div className="player-name">
          Player: {this.state.player}
        </div>
        <div className="pickcategory-main-container" >
          <div>
          <p className="pick-category-title">PICK A CATEGORY:</p>
          {categories}
        </div>
        <span className={this.state.visibility + " chosen-category"}>{this.state.chosenCategory}</span>
      </div>
      </div>
    );
  }
}
export default HostPickCategory;