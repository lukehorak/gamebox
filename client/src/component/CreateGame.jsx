import React, { Component } from 'react';
import '../stylesheets/App.css';
<<<<<<< HEAD
import Faker from './../component/CreateGame/Faker';
import Typist from './../component/CreateGame/Typist';
import Lollipop from './../component/CreateGame/Lollipop';
import WhereAmI from './../component/CreateGame/WhereAmI';
=======
import 'bulma/css/bulma.css'
import Card from './../component/Card';
>>>>>>> 51d08777c2ca98303b2e5509d8851635b1f419ba


class CreateGame extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="create-game-title title is-1 has-text-centered">Create a Game</div>

        <div className="create-game-main">
          <div className="columns is-variable is-relative is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">

            <Card
              cardClass="fakerCard"
              imageSource="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ftrophy01.np.community.playstation.net%2Ftrophy%2Fnp%2FNPWR11790_00_01BCC972BD625278DB5379A92D7402F7DD436EA73B%2F809062AAAF2C879E0D3F5FE30421DCBFB37F14A9.PNG&f=1"
              gameTitle="Faker"
            />

            <Card
              cardClass="typist"
              imageSource="https://payload.cargocollective.com/1/1/50182/605229/typeordie-01_900.jpg"
              gameTitle="The Typist" 
            />

          </div>
          <div className="columns is-relative">

            <Card
              cardClass="lollipop"
              imageSource="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F4e%2F52%2F74%2F4e5274ae468d4970a7e3268269a5f8af.jpg&amp;f=1"
              gameTitle="Lolli -POP !"
            />

            <Card
              cardClass="whereAmI"
              imageSource="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F33%2F94%2F0d%2F33940d51edd503c1997c17d48b3d0fca--medieval-map-medieval-party.jpg&f=1" alt="Placeholder image"
              gameTitle="Where Am I?"
            />

          </div>
        </div>
      </div>
    );
  }
}

export default CreateGame;
