import React, { Component } from 'react';

class CategoryButton extends Component{

  _handleClick = () => {
    this.props.handleClick(this.props.category)
  }

  render(){
    return(
      <button id={this.props.category} onClick={this._handleClick} className="category-list-item"> {this.props.buttonText}</button>
    )
  }
}

export default CategoryButton;