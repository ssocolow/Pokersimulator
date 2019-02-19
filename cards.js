class Card {
  constructor(name, s, x, y){
    this.number = name
    this.suit = s
    this.x = x
    this.y = y
  }


  show(){
    fill(255)
    rect(this.x, this.y, 40, 60)
    fill(0)
    textSize(24)
    text(this.number + this.suit, this.x, this.y + 30)
  }




}
