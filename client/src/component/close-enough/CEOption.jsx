import React, { Component } from 'react';

let style = "category-list-item"


class CEOption extends Component {

  // _handleClick = () => {
  //   this.props.handleClick(this.props.bluff)
  // }

  render() {

    return (
      <button
      
        // onClick={this._handleClick}
        className={this.props.buttonText === "Confirm" ? style + " confirm-button" : style}> {this.props.buttonText}

      </button>
    );
  };
};

export default CEOption;