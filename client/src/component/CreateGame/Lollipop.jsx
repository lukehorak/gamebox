import React, { Component } from 'react';
import '../../App.css';
import Nav from '../../Nav';
import RoomCodeForm from '../../Room_code_form';
import NameForm from '../../Name_form'
import StartButton from '../../StartButton'
import 'bulma/css/bulma.css'

class Lollipop extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className="column card">
        <div className="Lollipop">
          <div className="card-image">
            <figure className="image is-4by5">
              <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F4e%2F52%2F74%2F4e5274ae468d4970a7e3268269a5f8af.jpg&amp;f=1" alt="Placeholder image" />
            </figure>
          </div>
        <div className="card-content">
              <p className="title">Lolli - POP!</p>
              </div>
            </div>
        </div>
    );
  }
}

export default Lollipop;
