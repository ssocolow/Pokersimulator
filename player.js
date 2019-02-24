class Player {
  constructor(x){
    this.hand = pickCards(2)
    this.chips = 1000
    this.position = x
  }
  show(){
    let card1name;
    let card2name;

    //let the card numbers become letters when I show them


    if(this.hand[0].number == 11){
      card1name = 'J'
    }
    else if(this.hand[0].number == 12){
        card1name = 'Q'
      }
    else if(this.hand[0].number == 13){
        card1name = 'K'
      }
    else if(this.hand[0].number == 14){
        card1name = 'A'
      }
    else {
      card1name = this.hand[0].number
    }
      if(this.hand[1].number == 11){
          card2name = 'J'
      }
      else if(this.hand[1].number == 12){
          card2name = 'Q'
      }
      else if(this.hand[1].number == 13){
          card2name = 'K'
      }
      else if(this.hand[1].number == 14){
          card2name = 'A'
      }
      else{
        card2name = this.hand[1].number
      }


    if(this.position === 1){
      //show hand
      this.hand[0].x = 232
      this.hand[1].x = 272
      this.hand[0].y = 328
      this.hand[1].y = 328

      fill(255)
      rect(this.hand[0].x, this.hand[0].y, 40, 60)
      rect(this.hand[1].x, this.hand[1].y, 40, 60)


      fill(0)
      textSize(24)


      text(card1name + this.hand[0].suit, this.hand[0].x, this.hand[0].y + 30)
      text(card2name + this.hand[1].suit, this.hand[1].x, this.hand[1].y + 30)

      //show chips
      textSize(12)
      text(this.chips,250,320)


    }
  }



}
