class Game {
  
  constructor() {
    this.roomCode = this.generateCode();
    this.players = new Array();

  }

  generateCode() {
    // vote for player
    return Math.random().toString(36).replace('0.', '').substring(0,4);
  }

  addPlayer(player){
    this.players.push(player);
  }


  // May not be needed, keeping it in our back pocket
  resetFaker(){
    this.players.forEach( player => player.isFaker = false);
  }

  setFaker(){
    const max = this.players.length - 1;
    const index = (Math.random() * max) + 1;

  }

}

module.exports = Game;