import React, { Component } from 'react';
  class NotEnoughVotes extends Component{
    render(){
      return(
        <div className="not-enough-votes-container">
          <h1 className="not-enough-votes">
            Close but no cigar! You didn't have enough votes to catch the person Wingin' it.
          </h1>
        </div>
      )
    }
  }


export default NotEnoughVotes;