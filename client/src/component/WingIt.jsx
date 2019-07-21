import React, { Component } from 'react';
import '../stylesheets/Home.css';
import Card from './../component/Card';
import db from './FakeDb';
import Nav from './Nav';
import '../stylesheets/wingit.css';

// Testing if random number is generated
// console.log(`Random number is ${db.getRandomNumber()}`);

class WingIt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [
        { name: 'Cher', playerId: 1},
        { name: 'Lukas', playerId: 2},
        { name: 'Aiden', playerId: 3}
      ]
    }
  }
  render() {
    const randomRoomId = db.getRandomNumber();
    const players = this.state.players.map(function (player) {
      return (
        <li key={player.playerId} className="my-player-list-item">
          <h2>{player.name}</h2>
        </li>
      );
    });

    // db.createNewRoom(randomRoomId, randomRoomName)

    return (
      <div>
        < Nav />
        <div className="wingit-main-container">
          <ul>
            {players}
          </ul>

          <div className="generated-room-code">
            Room Code: {randomRoomId}
          </div>

          <form action="/wherever-handling-form-page" method="post">
            <div className="player-field">
              <label htmlFor="name">Enter Player Name:</label>
              <input type="text" id="name" name="user_name"/>
            </div>
          </form>

          <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ftrophy01.np.community.playstation.net%2Ftrophy%2Fnp%2FNPWR11790_00_01BCC972BD625278DB5379A92D7402F7DD436EA73B%2F809062AAAF2C879E0D3F5FE30421DCBFB37F14A9.PNG&f=1" />






        </div>
      </div>
          );
        }
      }
      
export default WingIt;