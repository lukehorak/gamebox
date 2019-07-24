import React, { Component } from 'react';
import '../../stylesheets/host-pick-category.css';
import GameNav from '../wingit/GameNav';


class DisplayQuestion extends Component {
  constructor(props){
    super()
}
setStyle = (category) => {
  switch(category){
    case 'hand':
      return '#76B3FC'
    case 'count':
      return '#F7CBA9'
    case 'point':
      return '#FC6A9D'
    default: 
      return '#956DD4'
  }
}

  componentDidMount(){
    if(this.props.isHost){
      this.props.startClock();
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="main-question-container">
        <div className="nav-container">
          <GameNav player={this.props.player.username}/>
        </div>
        <div  className="question-container">
          <h1 className="question">{this.props.question}</h1>
        </div>
        <section style={{backgroundColor: this.setStyle(this.props.category)}} className="question-footer">
        </section>
      </div>
      
    );
  }
}
export default DisplayQuestion; 