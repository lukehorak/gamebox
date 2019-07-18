import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <Nav/>
    );
  }
}

export default App;
