import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import RoomCodeForm from './Room_code_form';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Nav/>
          <RoomCodeForm />
          </div>
    );
  }
}

export default App;
