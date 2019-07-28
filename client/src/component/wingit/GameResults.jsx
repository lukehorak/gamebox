import React, { Component } from 'react';
import GameNav from './GameNav';
import WinningGameResults from './WinningGameResults';
import LosingGameResults from './LosingGameResults';
//import RoundOverFooter from './RoundOverFooter';

class GameResults extends Component {
  render() {
    return (
      <div className="game-results-center-wrapper">
        <GameNav category={this.props.category} player={this.props.player.username} />
        {!this.props.foundFaker && <LosingGameResults faker={this.props.faker}/>}
        {this.props.foundFaker && <WinningGameResults faker={this.props.faker}/>}
        <section 
        style={{backgroundImage: this.props.setStyle(this.props.category)}} 
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
