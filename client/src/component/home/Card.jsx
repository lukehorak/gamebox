import React, { Component } from 'react';
import '../../stylesheets/Home.css';


class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div className="column card">
        <div className={this.props.cardClass}>
          <div className="card-image">
            <figure className="image is-4by5">
              <img src={this.props.imageSource} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <p className="title">{this.props.gameTitle}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card; 