import React, { Component } from 'react';
import '../../stylesheets/Home.css';


class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div id="card-wrapper">
        <div className={this.props.cardClass}>
          <div className="card-image">
            <a className="game-link" href="#">
              <figure className="image is-4by5">
                <img src={this.props.imageSource} alt="Placeholder image" />
                <span className="title-container">
                <p className="title">{this.props.gameTitle}</p>
                </span>
              </figure>
              </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card; 