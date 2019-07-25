import React, { Component } from 'react';
import HostPickCategory     from './HostPickCategory';
import NonHostCat           from './NonHostCat';
import '../../stylesheets/host-pick-category.css';

class PickCategory extends Component {

  render() {
    return (
      <div>
        {this.props.player.isHost && <HostPickCategory player={this.props.player} sendCategory={this.props.sendCategory}/>}
        {!this.props.player.isHost && <NonHostCat player={this.props.player}/>}
      </div>

    );
  }
}
export default PickCategory; 