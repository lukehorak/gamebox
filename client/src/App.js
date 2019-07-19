import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import LandingForms from './Landing_forms';
import CreateButton from './Create_game_button';
import JoinButton from  './Join_game_button';
import 'bulma/css/bulma.css';

//TODO -functional burger, form anime
class App extends Component {
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

export default App;
