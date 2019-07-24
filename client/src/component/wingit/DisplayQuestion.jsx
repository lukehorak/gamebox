import React, { Component } from 'react';
import '../../stylesheets/host-pick-category.css';
import Nav from '../home/Nav';



class DisplayQuestion extends Component {

  render() {

    return (
      <div>
        <h3>{this.props.question}</h3>
      </div>
    );
  }
}
export default DisplayQuestion; 