import React, { Component } from 'react';

  class NameForm extends Component{
    render(){
      return(
        <div className="columns is-mobile is-centered">
          <span className="Name-form-title">
          </span>
          <form className="name-form control">
            <p>
              <input className="input" type="text" placeholder="Enter your name">
              </input>
            </p>
          </form>
        </div>
      );
    };
  };












export default NameForm