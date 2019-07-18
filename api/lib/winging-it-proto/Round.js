class Round {

  constructor(question, players) {
    this.question = question;
    this.fakerQuestion = "Just wing it!";
    this.players = {};
    // Populate this.players with k,v pairs of playername, 0 (initial vote count)
    for (let p in players){
      this.players[p] = 0
    }
  }

  getQuestion(player) {
    if (player.isFaker){
      return this.fakerQuestion;
    }
    return this.question;
  }

}

module.exports = Round;