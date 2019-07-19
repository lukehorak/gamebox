import React, { Component } from 'react';
import { registerClick, submitForm} from './transition-func.js'

  class LandingPageForms extends Component{
    render(){
      return(
        <div id="join-game-form">
          <form classname="control">
            <input type="button" className="fake-button" id="room" value="Join Game" role="button" readonly="true" aria-label="register" onClick={registerClick()} /><br />
            <input type="name-box" id="name" className="room-code-input" aria-hidden="true" role="textbox" aria-label="Enter your name" placeholder="Enter your name"/> <br/>
            <input type="button" id="join" className="join-game-button" value="Join game"
            aria-hidden="true" aria-label="submit" onclick={submitForm()} />
          </form>
        </div>
      );
    }
  }

export default LandingPageForms







