import React, { Component } from 'react';
import GameNav from './GameNav';


class NonHostCat extends Component {

  render() {
    return (
      <div className="main-non-host-category-container">
        <GameNav player={this.props.player.username}/>
        <div className="non-host-category-body">
          <p className="host-is-choosing-category">
            The host is choosing a category
          </p>
          <div className="pac-man-container">
            <div className='pac-man'>
            </div>
          </div>
        </div>
        <section className="non-host-cat-footer">
        </section>
      </div>
    );
  }
}
export default NonHostCat;