import React, { Component } from 'react';
  class NotEnoughVotes extends Component{
    render(){
      return(
        <div className="not-enough-votes-container">
          <h1 className="not-enough-votes">
            Uh oh! Nobody got enough votes, so whoever was Wingin' It is still at large!
          </h1>
        </div>
      )
    }
  }


export default NotEnoughVotes;