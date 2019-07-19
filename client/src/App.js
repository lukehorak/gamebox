import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import RoomCodeForm from './Room_code_form';
import NameForm from './Name_form'
import StartButton from './StartButton'
import 'bulma/css/bulma.css'
import LandingPageForms from './FormAnimation';

//TODO -functional burger, form anime
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Nav/>
        <LandingPageForms />
          </div>
    );
  }
}

export default App;
