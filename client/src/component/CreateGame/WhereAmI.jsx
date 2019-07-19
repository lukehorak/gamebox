import React, { Component } from 'react';
import '../../stylesheets/App.css';

class WhereAmI extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className="column card">
        <div className="WhereAmI">
          <div className="card-image">
            <figure className="image is-4by5">
            {/* <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Frizgadaingan.files.wordpress.com%2F2015%2F06%2Fmap-of-westeros.jpg%3Fw%3D1075&f=1" alt="Placeholder image" /> */}
              <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F33%2F94%2F0d%2F33940d51edd503c1997c17d48b3d0fca--medieval-map-medieval-party.jpg&f=1" alt="Placeholder image" />
            </figure>
          </div>
        <div className="card-content">
              <p className="title">Where Am I ?</p>
              </div>
            </div>
       </div>
    );
  }
}

export default WhereAmI;
