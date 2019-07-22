import React, { Component } from 'react';
import Nav from '../home/Nav';
import '../../stylesheets/Home.css';
import '../../stylesheets/wingit.css';

class WingIt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomCode: "adEj",
      players: [
        { name: 'Cher', playerId: 1 },
        { name: 'Lukas', playerId: 2 },
        { name: 'Aiden', playerId: 3 }
      ]
    }
  }
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
      </div>

    );
  }
}

export default WingIt;