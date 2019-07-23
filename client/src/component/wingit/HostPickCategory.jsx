import React, { Component } from 'react';

class HostPickCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          title: 'Gimme a hand',
          categoryId: 1,
          handler: () => {
            console.log("Category One Picked");
            this.setState({
              chosenCategory: "Hands up!"
            })
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

          }
        }
      ],
      chosenCategory: undefined
    }
  }

  render() {
    const categories = this.state.categories.map((category) => {
      return (
        <button onClick={category.handler} key={category.categoryId} className="category-list-item">
          {category.title}
        </button>
      );
    });

    return (
      <div>
        <div className="pickcategory-main-container" >
          
          {categories}
        </div>
        <span> {this.state.chosenCategory} </span>
      </div>
    );
  }
}
export default HostPickCategory;