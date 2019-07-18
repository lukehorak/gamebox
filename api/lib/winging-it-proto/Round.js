class Round {

  constructor({question, fakerQuestion}) {
    this.question = question;
    this.fakerQuestion = fakerQuestion;
  }

  getQuestion(player) {
    if (player.isFaker){
      return this.fakerQuestion;
    }
    return this.question;
  }

}

module.exports = Round;