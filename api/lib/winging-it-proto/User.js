class User {
 
  constructor(name){
    this.name = name
  }
}

class Player extends User {
  constructor(name){
    super(name)
    this.isFaker = false;
  }
}