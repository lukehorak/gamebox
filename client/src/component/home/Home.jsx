import React, { Component } from 'react';
import '../../stylesheets/Home.css';
import Nav from './Nav';
import CreateButton from './Create_game_button';
import JoinButton from  './Join_game_button';

//TODO -functional burger, form anime
class Home extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="main-div">
        <Nav/>
        <div id="main-wrapper">
          <div id="button-container">
            <JoinButton/>
            <CreateButton/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
