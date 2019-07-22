import React, { Component } from 'react';

class RoomCodeForm extends Component{
  render(){
    return( 
      <div className="room-code columns is-mobile is-centered">
        <form className="room-code control">
          <p className="control">
            <input className="input" type="text" placeholder="Enter room code">
            </input>
          </p>
        </form>
        </div>
    );
  };
};









export default RoomCodeForm 