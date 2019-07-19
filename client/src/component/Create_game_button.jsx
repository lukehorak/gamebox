import React, { Component } from 'react';


  class CreateButton extends Component{
    render(){
      return(
        <div id="create-game" className="create-game columns is-mobile is-centered ">
          <button className="button button is-primary">
            Create Game
          </button>
        </div>
      );
    }
  }

export default CreateButton