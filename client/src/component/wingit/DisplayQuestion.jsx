import React, { Component } from 'react';
import '../../stylesheets/host-pick-category.css';

class DisplayQuestion extends Component {

  componentDidMount(){
    if(this.props.isHost){
      this.props.startClock();
    }
  }

  render() {

    return (
      <div>
        <h3>{this.props.question}</h3>
      </div>
    );
  }
}
export default DisplayQuestion; 