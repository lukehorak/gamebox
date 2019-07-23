import React, { Component } from 'react';
  
const GameOverFooter  = () => {
    return(
      <div className="footer-container">
        <footer className="game-over-footer">
          <button className="play-again-button">
            Play again
          </button>
          <button className="view-games-button">
            View games
          </button>
        </footer>
      </div>
    );
  };


export default GameOverFooter