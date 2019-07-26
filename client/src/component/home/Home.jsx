import React, { Component } from 'react';
import '../../stylesheets/Home.css';
import Nav from './Nav';
import CreateButton from './Create_game_button';
import JoinButton from  './Join_game_button';
import About from '../home/About';
import Card from './Card';


//TODO -functional burger, form anime
class Home extends Component {

  render() {
    return (
      <div className="main-div">
        <Nav/>
        <div id="main-wrapper">



          
          <div id="card-container">


            <div className="game-container" >

              <Card
                cardClass="wingItCard"
                imageSource="https://static1.squarespace.com/static/53f222ece4b0607c74c991b4/t/572fb2841bbee07454dcb8f6/1462743697345/Just+wing+it"
                gameTitle="Wing it!"
              />
              <Card
                cardClass="typist"
                imageSource="https://payload.cargocollective.com/1/1/50182/605229/typeordie-01_900.jpg"
                gameTitle="The Typist"
              />


            </div>


            <div className="game-container">
              <span className="card-wrapper">
                <Card
                  cardClass="close-enough"
                  imageSource="http://thumbpress.com/wp-content/uploads/2012/02/Close-enough.jpg"
                  gameTitle="Close enough."
                />

              </span>

              <Card
                cardClass="whereAmI"
                imageSource="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F33%2F94%2F0d%2F33940d51edd503c1997c17d48b3d0fca--medieval-map-medieval-party.jpg&f=1" alt="Placeholder image"
                gameTitle="Where Am I?"
              />

            </div>
          </div>














        </div>
      </div>
    );
  }
}

export default Home;
