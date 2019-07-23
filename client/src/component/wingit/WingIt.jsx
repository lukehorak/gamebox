import React, { Component } from 'react';
import Nav from '../home/Nav';
import '../../stylesheets/Home.css';
import '../../stylesheets/wingit.css';
import Countdown from './Countdown';
import HostPickCategory from './HostPickCategory';
import '../../stylesheets/host-pick-category.css';
import NonHostCat from './NonHostCat';
import DisplayQuestion from './DisplayQuestion';
import VotingPage from './Voting_Page';
import FakerLost from './Faker_Loss';
import FakerWon from './Faker_win';




class WingIt extends Component {

  constructor(props) {
    super(props)
    this.state = {
      roomCode: "adEj",
      showCategory: false,
      players: [
        { name: 'Cher', playerId: 1 },
        { name: 'Lukas', playerId: 2 },
        { name: 'Aidan', playerId: 3 }
      ]
    }
  }

  // displayCategories = () => {
  //   this.setState({
  //     showCategory: !this.state.showCategory
  //   })
  // }


  render() {
    const players = this.state.players.map(function (player) {
      return (
        <li key={player.playerId} className="my-player-list-item">
          <h2>{player.name}</h2>
        </li>
      );
    });

    return (
      <div>
        < Nav />
        <div
          className="wingit-main-container" >

          < div className="generated-room-code">
            Room Code: {this.state.roomCode}
          </div>

          <form action="/wherever-handling-form-page" method="post">
            <div className="enter-player-name">
              <label htmlFor="name">Enter Player Name:</label>
              <input
                className="name-field" type="text" id="name" name="user_name" />
            </div>
          </form>

          <ul>
            {players}
          </ul>
        </div>
        --------------------------------------------------------THE COUNTDOWN TIMERS ------------------------------------
          <Countdown timer={10} />
          <Countdown timer={3} />
          {/* Page where a host is shown the categories and pick one ------ */}
          {/* <button onClick={this.displayCategories}>Host pick a category</button>
          {this.state.showCategory && <HostPickCategory />} */}
          ------------------------------------------------------HOST PICK A CATEGORY PAGE-----------------------------------
          <HostPickCategory />
          ------------------------------------------------------NON-HOST WAITING FOR HOST TO CHOOSE A CATEGORY-------------------
          <NonHostCat timer={10} />
          <DisplayQuestion />
          ---------------------
          <VotingPage players={this.state.players}/>
          -----------------------
          <FakerLost/>
    -------------------------------
          <FakerWon/>
        </div>
    );
  }

}

export default WingIt;