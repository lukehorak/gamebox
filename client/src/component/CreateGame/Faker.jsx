import React, { Component } from 'react';
import '../../stylesheets/App.css';
import 'bulma/css/bulma.css'

class Faker extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className="column card">
        <div className="FakerCard">
          <div className="card-image">
            <figure className="image is-4by5">
            <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ftrophy01.np.community.playstation.net%2Ftrophy%2Fnp%2FNPWR11790_00_01BCC972BD625278DB5379A92D7402F7DD436EA73B%2F809062AAAF2C879E0D3F5FE30421DCBFB37F14A9.PNG&f=1" alt="Placeholder image" />
            </figure>
          </div>
        <div className="card-content">
              <p className="title">Faker</p>
              </div>
            </div>
      </div>
    );
  }
}

export default Faker;
