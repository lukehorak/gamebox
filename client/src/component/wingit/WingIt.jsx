import React, { Component } from 'react';
import Nav                  from '../home/Nav';
import Countdown            from './Countdown';
import HostPickCategory     from './HostPickCategory';
import NonHostCat           from './NonHostCat';
import DisplayQuestion      from './DisplayQuestion';
import VotingPage           from './Voting_Page';
import FakerLost            from './Faker_Loss';
import FakerWon             from './Faker_win';
import '../../stylesheets/Home.css';
import '../../stylesheets/wingit.css';
import '../../stylesheets/host-pick-category.css';


class WingIt extends Component {

  constructor(props) {
    super(props)
    this.state = {
      phase: 0,
      roomCode: "adEj",
      isHidden: false,
      players: [
        { name: 'Cher', playerId: 1 },
        { name: 'Lukas', playerId: 2 },
        { name: 'Aidan', playerId: 3 }
      ]
    }
  }

  listPlayers = (players) => {
    const playerList = players.map(function (player) {
      return (
        <li key={player.playerId} className="my-player-list-item">
          <h2>{player.name}</h2>
        </li>
      );
    });
    return playerList;
  };

  handleCase = (phase) => {
    switch (phase) {
      case 0:
        return (
          <div>
            < Nav />
            <div className="wingit-main-container" >
              <div className="generated-room-code">
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
                {this.listPlayers(this.state.players)}
              </ul>
            </div>
          </div>
        );
      case 1:
        return <Countdown />
      case 2:
        return <HostPickCategory />
      case 3:
        return <NonHostCat />
      case 4:
        return <DisplayQuestion />
      case 5:
        return <VotingPage players={this.state.players} />
      case 6:
        return <FakerLost />
      case 7:
        return <FakerWon />
      default:
        return <h1>HELLO DEFAULT</h1>
    }
  }

  render() {
    return (
      <div>
        {this.handleCase(this.state.phase)}
      </div>
    );
  }
}

export default WingIt;