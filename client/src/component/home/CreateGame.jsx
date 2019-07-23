import React, { Component } from 'react';
import Card from './Card';
import '../../stylesheets/Home.css';


class CreateGame extends Component {

  render() {
    return (
      <div id="card-container">
        <div className="create-game-title title is-1 has-text-centered">{/*ROOM CODE HERE*/}</div>  
      
          <div className="game-container">
            <Card
              cardClass="wingItCard"
              imageSource="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ftrophy01.np.community.playstation.net%2Ftrophy%2Fnp%2FNPWR11790_00_01BCC972BD625278DB5379A92D7402F7DD436EA73B%2F809062AAAF2C879E0D3F5FE30421DCBFB37F14A9.PNG&f=1"
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
                cardClass="lollipop"
                imageSource="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F4e%2F52%2F74%2F4e5274ae468d4970a7e3268269a5f8af.jpg&amp;f=1"
                gameTitle="Lolli -POP !"
              />
            </span>

            <Card
              cardClass="whereAmI"
              imageSource="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F33%2F94%2F0d%2F33940d51edd503c1997c17d48b3d0fca--medieval-map-medieval-party.jpg&f=1" alt="Placeholder image"
              gameTitle="Where Am I?"
            />

          </div>
        </div>
    );
  }
}

export default CreateGame;
