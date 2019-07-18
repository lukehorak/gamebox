import React, { Component } from 'react';
import './Nav.css';
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
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    );
  };
};




















export default Nav