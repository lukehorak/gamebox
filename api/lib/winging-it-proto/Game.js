class Game {
  
  constructor() {
    this.roomCode = this.generateCode()

  }

  generateCode() {
    // vote for player
    return Math.random().toString(36).replace('0.', '').substring(0,4)
  }

}