class User {
 
  constructor(name){
    this.name = name
  }

}

class Host extends User{

  constructor(){
    super('host')
  }

}

class Player extends User {
  constructor(name){
    super(name)
    this.isFaker = false;
  }
}

module.exports = {
  Player: Player,
  Host: Host
}