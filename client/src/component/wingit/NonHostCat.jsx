import React, { Component } from 'react';


class NonHostCat extends Component {

  render() {
    return (
      <div>
        <div className="player-name">
          Player: {this.props.player.username}
        </div>
        <p className="nonhost-waiting-for-category"> The host is choosing choosing a category</p>
      </div>
    );
  }
}
export default NonHostCat;