class Round {

  constructor(question, players, type) {
    this.question = question;
    this.fakerQuestion = "Just wing it!";
    this.type = type;
    this.players = players;
    this.playerVotes = {};
    // Populate this.players with k,v pairs of playername, 0 (initial vote count)
    for (let p in players){
      this.playerVotes[p] = 0
    }
    // The magic number is the required votes to expose a faker (one less than the total of players)
    this.magicNumber = Object.keys(this.playerVotes).length - 1
  }

  get prefix() {
    switch(this.type){
      case "hand":
        return "Raise your hand if ";
      case "point":
        return "Point to the person who ";
      case "count":
        return "Hold up as many fingers as ";
      default:
        return ""
    }
  }

  getQuestion(player) {
    if (player.isFaker){
      return this.fakerQuestion;
    }
    return this.prefix + this.question;
  }

  sendQuestions() {
    const playerQuestions = {}
    for (let p in this.players){
      playerQuestions[p] = this.getQuestion(this.players[p]);
    }
    return playerQuestions
  }

  voteFor(player) {
    this.playerVotes[player] += 1;
  }

  exposeFaker () {
    const response = { checked: false, player: null, foundFaker: false }
    for (let p in this.playerVotes) {
      if (this.playerVotes[p] === this.magicNumber) {
        response.checked = true;
        response.player = p;
        response.foundFaker = this.players[p].isFaker;
        return response;
      }
    }
    return response;
  }

}

module.exports = Round;