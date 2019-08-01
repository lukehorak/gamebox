import React, { Component } from 'react';
import '../../stylesheets/Home.css';
import Nav from './Nav';
import CreateButton from './Create_game_button';
import JoinButton from  './Join_game_button';
import About from '../home/About';
import Card from './Card';


//TODO -functional burger, form anime
class Home extends Component {

  render() {
    return (
      <div className="main-div">
        <Nav/>
        <div id="main-wrapper">

          <div id="card-container">
          
            <div className="game-container" >

              <Card
                cardClass="wing-it"
                imageSource="https://static1.squarespace.com/static/53f222ece4b0607c74c991b4/t/572fb2841bbee07454dcb8f6/1462743697345/Just+wing+it"
                link="/wingit"
                comingSoon="./assets/coming-soon.png"
              />
              {/* <Card
                cardClass="typist"
                comingSoon="coming-soon" src="./assets/coming-soon.png"
                imageSource="./assets/type-or-die.png"
              />
            </div>

            <div className="game-container">
              <span className="card-wrapper">
                <Card
                  cardClass="close-enough"
                  imageSource="http://thumbpress.com/wp-content/uploads/2012/02/Close-enough.jpg"
                  link="/closeenough"
                />

              </span>

              <Card
                cardClass="where-am-i"
                imageSource="./assets/where-am-i.png" alt="Placeholder image"
              /> */}

            </div>
          </div>














        </div>
      </div>
    );
  }
}

export default Home;
