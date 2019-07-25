import React, { Component } from 'react';
  class WrongPerson extends Component{
    render(){
      return(
        <div className="wrong-person-container">
          <h1 className="wrong-person">
            Good news! You all voted for the same person! Bad news is, {this.props.faker} WASN'T the faker...
          </h1>
        </div>
      );
    };
  };


export default WrongPerson;