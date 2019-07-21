import React, { Component } from 'react';
import '../stylesheets/Home.css';
import Card from './../component/Card';
// import db from './FakeDb';
import Nav from './Nav';
import '../stylesheets/wingit.css';
import { getRandomNumber } from '../util/numbers';

// Testing if random number is generated
// console.log(`Random number is ${db.getRandomNumber()}`);

class WingIt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [
        { name: 'Cher', playerId: 1 },
        { name: 'Lukas', playerId: 2 },
        { name: 'Aiden', playerId: 3 }
      ]
    }
  }
  render() {
    const randomRoomId = getRandomNumber();
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
        <div
          className="wingit-main-container" >

          < div className="generated-room-code">
            Room Code: {randomRoomId}
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
      </div>

    );
  }
}

export default WingIt;