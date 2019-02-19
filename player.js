class Player {
  constructor(x){
    this.hand = pickCards(2)
    this.chips = 1000
    this.position = x
  }
  show(){
    //add all the values for all positions
    if(this.position === 1){
      //show hand
      this.hand[0].x = width/2 - 20
      this.hand[1].x = width/2 + 20
      this.hand[0].y = height * 0.655
      this.hand[1].y = height * 0.655

      fill(255)
      rect(this.hand[0].x, this.hand[0].y, 40, 60)
      rect(this.hand[1].x, this.hand[1].y, 40, 60)
      fill(0)
      textSize(24)
      text(this.hand[0].number + this.hand[0].suit, this.hand[0].x, this.hand[0].y + 30)
      text(this.hand[1].number + this.hand[1].suit, this.hand[1].x, this.hand[1].y + 30)

      //show chips
      textSize(12)
      text(this.chips,250,320)


    }
  }



}
