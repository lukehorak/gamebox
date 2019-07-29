import React, { Component } from 'react';


class RulesPage extends Component {

  render() {

    return (
      <div>

      <h1>RULES of the Game</h1>

      
        <p>During each round everyone, except one, will be sent some sort of task, for example "Raise your hand if you had breakfast this morning." </p>

        <p>The player who didn't get the task is the one who will have to "wing it", and his/her goal is to try and blend with others without knowing the task themselves. </p>

        <p>The other players have to try to figure out who in the room is faking it, and they are given three chances to get it correct. </p>
          
        <p>The vote has to be unanimous (minus one, being the faker) for it to count, so discussing the possible faker is encouraged. </p>
      
        <p>To the wing woman or man, blend in well!</p>
      
        <p>To the rest of the players, try to catch the person trying to wing' it!</p>

        <p>HAVE FUN!</p>

        {this.props.isHost && <button onClick={this.props.startGame}>Start game!</button>}
          
      </div>

    )

  }

}

export default RulesPage;