import React, { Component } from 'react';


class RulesPage extends Component {

  render() {

    return (
      <div className="rules-main-container">

      <h1 className= "rules-title">RULES of the Game</h1>

        <div className="rules-container">
      
        <p id="par-1" className="par-1">During each round everyone, except one, will be sent some sort of task, for example "Raise your hand if you had breakfast this morning." </p>

        <p className="par-2">The player who didn't get the task is the one who will have to "wing it", and his/her goal is to try and blend with others without knowing the task themselves. </p>

        <p className="par-3">The other players have to try to figure out who in the room is faking it, and they are given three chances to get it correct. </p>
          
        <p className="par-4">The vote has to be unanimous (minus one, being the faker) for it to count, so discussing the possible faker is encouraged. </p>
      
        <p className="par-5">    If you're stuck winging it, blend in well!      </p>
      
        <p className="par-6">To the rest of the players, try to catch the person trying to wing' it!</p>

        {this.props.isHost && <button onClick={this.props.startGame} className="join-game-button">Start game!</button>}
          </div>

      </div>

    )

  }

}

export default RulesPage;