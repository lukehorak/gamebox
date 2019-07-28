import React, { Component } from 'react';
  
class RoundResultsFooter extends Component {
  
  render(){
    return(
      <div style={{backgroundImage: this.props.setStyle(this.props.category)}} className="footer-container">
        <footer className="round-over-footer">
          <button className="next-button" onClick={this.props.nextRound}>
            Next
          </button>
        </footer>
      </div>
    );
  }
  };


export default RoundResultsFooter;