import React, { Component } from 'react';


let style = "category-list-item"
class CategoryButton extends Component{

  _handleClick = () => {
    this.props.handleClick(this.props.category)
  }

  render(){
    return(
      <button 
        id={this.props.category} 
        onClick={this._handleClick} 
        className={this.props.buttonText === "Confirm" ? style + " confirm-button" : style}> {this.props.buttonText}
      </button>
    );
  };
};

export default CategoryButton;