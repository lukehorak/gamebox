class Round {

  constructor({question, fakerQuestion}) {
    this.question = question;
    this.fakerQuestion = fakerQuestion;
  }

  get question(player) {
    if (player.isFaker){
      return this.question;
    }
    return this.fakerQuestion;
  }

}

class Game {
  
  constructor() {
    this.roomCode = this.generateCode();

  }

  generateCode() {
    // vote for player
    return Math.random().toString(36).replace('0.', '').substring(0,4);
  }

}