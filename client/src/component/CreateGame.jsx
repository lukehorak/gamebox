import React, { Component } from 'react';
import '../stylesheets/App.css';
import 'bulma/css/bulma.css'
import Faker from './../component/CreateGame/Faker';
import Typist from './../component/CreateGame/Typist';
import Lollipop from './../component/CreateGame/Lollipop';
import WhereAmI from './../component/CreateGame/WhereAmI';


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

            <Faker />
            {/* <Lollipop /> */}
            <Typist />

          </div>
          <div className="columns is-relative">

            <Lollipop />

            <WhereAmI />

          </div>
        </div>
      </div>
    );
  }
}

export default CreateGame;
