import React, { Component } from 'react';
import '../../stylesheets/Home.css';


class Card extends Component {

  render() {

    return (
      <div id="card-wrapper">
        <div className={this.props.cardClass}>
          <div className="card-image">
            <a className="game-link" href={this.props.link}>
              <figure>
                <img id={this.props.cardClass} src={this.props.imageSource} alt="Placeholder" />
              </figure>
              </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card; 