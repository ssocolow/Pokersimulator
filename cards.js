class Card {
  constructor(name, x, y){
    this.type = name
    this.x = x
    this.y = y
  }


  show(){
    fill(255)
    rect(this.x, this.y, 40, 60)
    fill(0)
    textSize(24)
    text(this.type, this.x, this.y + 30)
  }




}
