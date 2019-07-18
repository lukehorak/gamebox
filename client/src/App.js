import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import RoomCodeForm from './Room_code_form';
import NameForm from './Name_form'
import StartButton from './StartButton'
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Nav/>
        <RoomCodeForm/>
        <NameForm/>
        <StartButton/>
          </div>
    );
  }
}

export default App;
