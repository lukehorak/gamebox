import React, { Component } from 'react';
import GameNav from './GameNav';
import WinningGameResults from './WinningGameResults';
import LosingGameResults from './LosingGameResults';
//import RoundOverFooter from './RoundOverFooter';

class GameResults extends Component {
  render() {

    // todo -expand into separate component

    /*
    let stuff;

    if (!this.props.foundFaker) {
      stuff = (
        <div>
          <h1>You've been duped! {this.props.faker} was Wingin' It the whole time!</h1>
          <h2>Way to go, {this.props.faker}!</h2>
          <p>As for the rest of you, well... don't quit your day jobs.</p>
        </div>
      )
    }
    else {
      stuff = (
        <div>
          <h1>{this.props.faker} was caught Wingin' It! Great job everyone*!</h1>
          <p>*(Everyone except {this.props.faker}. Next time, try being better.)</p>
        </div>
      )
    } 
    */
    
    return (
      <div className="game-results-center-wrapper">
        <GameNav category={this.props.category} player={this.props.player.username} />
        {!this.props.foundFaker && <LosingGameResults faker={this.props.faker}/>}
        {this.props.foundFaker && <WinningGameResults faker={this.props.faker}/>}
        <section 
        style={{backgroundColor: this.props.setStyle(this.props.category)}} 
        category={this.props.category} 
        className="rounds-footer"> 
        </section> 
      </div>
    );
  };
};

// {this.props.roundResult === "not-enough-votes" && <NotEnoughVotes setStyle={this.props.setStyle} nextRound={this.props.nextRound} isHost={this.props.isHost} category={this.props.category} />}
//           {this.props.roundResult === "not-the-faker" && <WrongPerson nextRound={this.props.nextRound} isHost={this.props.isHost} setStyle={this.props.setStyle} nextRound={this.props.nextRound} isHost={this.props.isHost} category={this.props.category} faker={this.props.faker} />}
//           {this.props.roundResult === "faker-caught" && <FakerCaught setStyle={this.props.setStyle} nextRound={this.props.nextRound} isHost={this.props.isHost} nextRound={this.props.nextRound} isHost={this.props.isHost} category={this.props.category} faker={this.props.faker} />}
//         </div>

export default GameResults; 
