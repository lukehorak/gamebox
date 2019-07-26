import React, { Component } from 'react';
  class WrongPerson extends Component{
    render(){
      return(
        <div className="wrong-person-container">
          <h1 className="wrong-person">
            You did it! Congratulations! You all voted for the wrong person.
          </h1>
        </div>
      );
    };
  };


export default WrongPerson;