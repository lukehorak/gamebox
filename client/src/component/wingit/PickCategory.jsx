import React, { Component } from 'react';
import HostPickCategory     from './HostPickCategory';
import NonHostCat           from './NonHostCat';
import '../../stylesheets/host-pick-category.css';

class PickCategory extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.player.isHost && <HostPickCategory player={this.props.player} sendCategory={this.props.sendCategory}/>}
        {!this.props.player.isHost && <NonHostCat category={this.props.category} player={this.props.player}/>}
      </div>

    );
  }
}
export default PickCategory; 