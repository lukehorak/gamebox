class Round {

  constructor(question, players, type) {
    this.question = question;
    this.fakerQuestion = "Just wing it!";
    this.type = type;
    this.players = players;
    this.playerVotes = {};
    // Populate this.players with k,v pairs of playername, 0 (initial vote count)
    for (let p in players){
      this.playerVotes[p] = null;
    }
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

  getQuestion(playerName) {
    const player = this.players[playerName]
    if (player.isFaker){
      return (`${this.prefix}... JUST KIDDING! We're not going to tell you! ${this.fakerQuestion}`);
    }
    return this.prefix + this.question;
  }

  sendQuestions() {
    const playerQuestions = {}
    for (let p in this.players){
      //playerQuestions[p] = this.getQuestion(this.players[p]);
      playerQuestions[p] = this.getQuestion(p);
    }
    return playerQuestions
  }

  voteFor(player, voter) {
    this.playerVotes[voter] = player;
    console.log("player-->",player, "voter -->", voter, this.playerVotes)
  }

  countVotes(player) {
    let count = 0;
    for (let p in this.playerVotes){
      if (this.playerVotes[p] == player){
        count += 1
      }
    }
    return count;
  }

  getAllVotes() {
    const voteTotal = {};
    for (let p in this.players){
      voteTotal[p] = this.countVotes(p);
    }
    return voteTotal;
  }

  exposeFaker () {
    // The magic number is the required votes to expose a faker (one less than the total of players)
    const magicNumber = Object.keys(this.playerVotes).length - 1
    const response = { checked: false, player: null, foundFaker: false }
    const voteTotals = this.getAllVotes();
    for (let p in voteTotals) {
      //if (this.playerVotes[p] === magicNumber) {
      if (voteTotals[p] === magicNumber) {
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