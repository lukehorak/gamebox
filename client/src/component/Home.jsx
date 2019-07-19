import React, { Component } from 'react';
import '../stylesheets/Home.css';
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
        <JoinButton/>
        <CreateButton/>
      </div>
    );
  }
}

export default Home;
