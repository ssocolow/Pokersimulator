let flopped = false;
let turned = false;
let rivered = false;
let b1;
let b2;
let b3;
let b4;
let b5;

function flop(){
  if(!flopped){
  board.cards.push(pickCards(3))
  flopped = true
  board.cards[0][0].x = 144
  board.cards[0][0].y = 220
  board.cards[0][1].x = 184
  board.cards[0][1].y = 220
  board.cards[0][2].x = 224
  board.cards[0][2].y = 220
}

function turn(){
  if(!turned){
    board.cards.push(pickCards(2))
    turned = true
    board.cards[1][0].x = 264
    board.cards[1][0].y = 220
    board.cards[1][1].x = 304
    board.cards[1][1].y = 220
    board.cards[1][2].x = 344
    board.cards[1][2].y = 220
  }

}


  //let the card numbers become letters when I show them

  if(board.cards[0][0].number == 11){
    b1 = 'J'
  }
  else if(board.cards[0][0].number == 12){
      b1 = 'Q'
    }
  else if(board.cards[0][0].number == 13){
      b1 = 'K'
    }
  else if(board.cards[0][0].number == 14){
      b1 = 'A'
    }
  else {
    b1 = board.cards[0][0].number
  }
    if(board.cards[0][1].number == 11){
        b2 = 'J'
    }
    else if(board.cards[0][1].number == 12){
        b2 = 'Q'
    }
    else if(board.cards[0][1].number == 13){
        b2 = 'K'
    }
    else if(board.cards[0][1].number == 14){
        b2 = 'A'
    }
    else{
      b2 = board.cards[0][1].number
    }
    if(board.cards[0][2].number == 11){
        b3 = 'J'
    }
    else if(board.cards[0][2].number == 12){
        b3 = 'Q'
    }
    else if(board.cards[0][2].number == 13){
        b3 = 'K'
    }
    else if(board.cards[0][2].number == 14){
        b3 = 'A'
    }
    else{
      b3 = board.cards[0][2].number
    }


}

class Board {
  constructor(){
    this.cards = []
  }
  show(){
    fill(255)
    if(flopped){
      rect(this.cards[0][0].x, this.cards[0][0].y, 40, 60)
      rect(this.cards[0][1].x, this.cards[0][1].y, 40, 60)
      rect(this.cards[0][2].x, this.cards[0][2].y, 40, 60)

      textSize(24)
      fill(0)

      text(b1 + this.cards[0][0].suit, this.cards[0][0].x, this.cards[0][0].y + 30)
      text(b2 + this.cards[0][1].suit, this.cards[0][1].x, this.cards[0][1].y + 30)
      text(b3 + this.cards[0][2].suit, this.cards[0][2].x, this.cards[0][2].y + 30)



    }

  }
}
