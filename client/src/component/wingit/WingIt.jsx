import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Lobby from './Lobby';
import PickCategory from './PickCategory';
import DisplayQuestion from './DisplayQuestion';
import VotingPage from './VotingPage';
import RoundResult from './RoundResult';
import GameResults from './GameResults';
import '../../stylesheets/Home.css';
import '../../stylesheets/wingit.css';
import '../../stylesheets/host-pick-category.css';
import '../../stylesheets/wingit-lobby.css';
import '../../stylesheets/Question-page.css';
import '../../stylesheets/non-host-pick-category.css';
import '../../stylesheets/voting-page.css';
import '../../stylesheets/round-results.css';
class WingIt extends Component {

  constructor(props) {
    super(props)
    this.state = {
      endpoint: "http://localhost:9000",
      phase: 0,
      roomCode: false,
      isHidden: false,
      players: [],
      thisPlayer: false,
      category: false,
      question: "test question",
      playerVotes: {},
      roundResult:false,
      faker: false,
      foundFaker: false,
      realQuestion: false
    }
  }

  componentDidMount() {
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);

    // Message Handling
    this.socket.on('respond-all-players', data => {
      // init player votes
      const votes = {};
      for (let player of data){
        votes[player.name] = 0;
      }
      this.setState({ players: data, playerVotes: votes });
    })

    this.socket.on('set-category', data => {
      this.setState({ category: data.category })
    })

    this.socket.on('respond-player', data => {
      this.setState({ thisPlayer: data.player });
    })

    this.socket.on('phase-change', data => {
      this.setState({ phase: data.phase })
    })

    this.socket.on('room-code', data => {
      this.setState({ roomCode: data });
      this.socket.emit('join', data);
      this.socket.emit('request-player');
      this.socket.emit('request-all-players', { roomCode: this.state.roomCode })
    })

    this.socket.on('send-question', data => {
      this.setState({ question: data.questionText });
    })

    this.socket.on('respond-real-question', data => {
      this.setState({ realQuestion: data.realQuestion })
    })

    this.socket.on('update-vote-count', data => {
      this.setState({ playerVotes: data.votes })
    });

    this.socket.on('respond-results', data => {
      this.setState({ roundResult: data.resultCode, faker: data.faker })
    })
    
    this.socket.on('set-faker', data => {
      
      this.setState({ faker: data.faker, foundFaker: data.foundFaker })
    })

    this.socket.on('clear-round-results', () => {
      console.log('clearing round results!')
      this.setState({ roundResult: false })
      //console.log(this.state)
    })
  }

  // Class Methods

  createGame = (e) => {
    e.preventDefault();
    const { username } = e.target.elements
    this.socket.emit('new-game', { username: username.value });
  }

  joinGame = (e) => {
    e.preventDefault();
    const { username, roomCode } = e.target.elements;
    this.socket.emit('new-player', { username: username.value, roomCode: roomCode.value })
  }

  startGame = () => {
    this.socket.emit('start-game', { code: this.state.roomCode });
  }

  sendCategory = (category) => {
    this.setState({ category: category })
    this.socket.emit('send-category', { category: category, roomCode: this.state.roomCode });
    this.socket.emit('start-round', { category: category, faker: this.state.faker });
  }

  startClock = () => {
    this.socket.emit('reading-question', { roomCode: this.state.roomCode })
  }

  setStyle = (category) => {
    switch(category){
      case 'hand':
        return '#76B3FC'
      case 'count':
        return '#F7CBA9'
      case 'point':
        return '#FC6A9D'
      default: 
        return '#956DD4'
    }
  };

  getVotesForPlayer = (player) => {
    return this.state.playerVotes[player];
  }

  sendVote = (voteFor) => {
    this.socket.emit('send-vote', { voteFor: voteFor, roomCode: this.state.roomCode });
  }

  getRoundResults = () => {
    console.log('getting round results!')
    if (this.state.thisPlayer.isHost){
      this.socket.emit('request-round-results', { roomCode: this.state.roomCode });
    }
  }

  nextRound = () => {
    this.socket.emit('next-round', { roomCode: this.state.roomCode });
  } 

  handleCase = (phase) => {
    switch (phase) {
      case 0:
        return (
              <Lobby
                roomCode={this.state.roomCode}
                createGame={this.createGame}
                joinGame={this.joinGame}
                startGame={this.startGame}
                players={this.state.players}
                isHost={this.state.thisPlayer.isHost} />
              );
      case 1:
        return (
              <PickCategory
                player={this.state.thisPlayer}
                sendCategory={this.sendCategory} />
              );
      case 2:
        return <DisplayQuestion
                isHost={this.state.thisPlayer.isHost}
                question={this.state.question}
                player={this.state.thisPlayer}
                startClock={this.startClock}
                setStyle={this.setStyle} 
                category={this.state.category} />
      case 4:
        return (
              <VotingPage
                players={this.state.players}
                realQuestion={this.state.realQuestion} 
                player={this.state.thisPlayer}
                sendVote={this.sendVote}
                category={this.state.category}
                getVotesForPlayer={this.getVotesForPlayer}/>
              );
      case 5:
        //const roundResult = this.getRoundResults();
        return <RoundResult
                player={this.state.thisPlayer}
                category={this.state.category}
                getRoundResults={this.getRoundResults}
                roundResult={this.state.roundResult}
                faker={this.state.faker}
                isHost={this.state.thisPlayer.isHost}
                nextRound={this.nextRound} 
                setStyle={this.setStyle}/>
      case 6:
        return <GameResults
                category={this.state.category}
                player={this.state.thisPlayer}
                faker={this.state.faker}
                foundFaker={this.state.foundFaker}
                />
      default:
        return <h1>HOW DID YOU EVEN END UP HERE?</h1>
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