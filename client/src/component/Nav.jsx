import React, { Component } from 'react';
class Nav extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-start">
          GameBox
          </span>
          <a className="about-link" href="#" id="about-link"> About
          </a>
        </div>
      </nav>
    );
  };
};




















export default Nav