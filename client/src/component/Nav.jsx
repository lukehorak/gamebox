import React, { Component } from 'react';
class Nav extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <span className="navbar-start">
          GameBox
        </span>
        <a className="about-link" href="#" id="about-link">'
          About
        </a>
      </nav>
    );
  };
};




















export default Nav