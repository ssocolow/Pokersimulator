class Card {
  constructor(name, x, y){
    this.type = name
    this.x = x
    this.y = y
  }


  show(){
    fill(255)
    rect(this.x, this.y, width/10, height/8)
    fill(0)
    textSize(30)
    text(this.type, this.x, this.y + 30)
  }




}
