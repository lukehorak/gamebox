import React, { Component } from 'react';


class RulesPage extends Component {

  render() {

    return (
      <div className="rules-main-container">

      <h1 className= "rules-title">RULES of the Game</h1>

        <div className="rules-container">
      
        <p className="par-1">First, your host will pick a category, then each player will receive a prompt to their device (something like "Raise your hand if you ate breakfast this morning"). Sounds pretty simple, right? BUT WAIT, THERE'S MORE!</p>

        <p className="par-2">One player won't get the prompt, and instead will be told to "Just Wing It" (😉 get it?). His/her goal is to try and blend with others without knowing the task themselves. During this phase, don't talk to eachother (or do, I'm not a cop. But the game's more fun if you don't!)</p>

        <p className="par-3">After a brief period, the question will be sent to everyone, and you all will have about 20 seconds to vote on who you think is Wingin' It!™ <br/>(but not actually trademarked. We don't have "trademarking things" money!) </p>
          
        <p className="par-4">The vote has to be unanimous (minus one, because who's going to vote for themselves?) for it to count, so talk it out! </p>
      
        <p className="par-5"> If you're stuck winging it, just try to blend in!</p>
      
        <p className="par-6">To the rest of the players, try to catch the person Wingin' It!</p>

        {this.props.isHost && <button onClick={this.props.startGame} className="join-game-button">Start game!</button>}
          </div>

      </div>

    )

  }

}

export default RulesPage;