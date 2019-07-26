import React, { Component } from 'react';
import '../../stylesheets/Home.css';
import Nav from './Nav';
import CreateButton from './Create_game_button';
import JoinButton from  './Join_game_button';
//import About from '../home/About';


//TODO -functional burger, form anime
class Home extends Component {

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
