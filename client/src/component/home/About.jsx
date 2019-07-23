import React, { Component } from 'react';
import '../../stylesheets/about.css';
import Nav from './Nav';
// import CreateButton from './Create_game_button';
// import JoinButton from './Join_game_button';

class About extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div >
        <Nav />
        <div className="about-main-div">
        <h2>
          Gamebox is... a place where everyone can have fun!
        </h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante neque, vestibulum consectetur arcu vehicula, tincidunt dapibus ipsum. Quisque varius facilisis libero vitae tincidunt. Vivamus vel accumsan metus. Vivamus molestie massa quis accumsan volutpat. Etiam nec tortor augue. Etiam sed felis ac elit tempus rhoncus. Suspendisse dignissim libero nec nisi congue sodales.
        </div>
      </div>
      </div>
    );
  }
}

export default About;
