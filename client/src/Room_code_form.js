import React, { Component } from 'react';

class RoomCodeForm extends Component{
  render(){
    return( 
      <div className="room-code columns is-mobile is-centered">
        <span className="room-code-title">
        </span>
        <form classname="room-code-control control">
          <p className="control">
            <input class="input" type="text" placeholder="Enter 4-digit room code">
            </input>
          </p>
        </form>
        </div>
    );
  };
};









export default RoomCodeForm 