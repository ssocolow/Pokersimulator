let cards = []
let shufflingcards = []
let playerscards
let number_of_cards = 51



function setup(){
  createCanvas(500,500)
  ellipseMode(CENTER)
  shuffleDeck()
  playerscards = pickCards(2)
  playerscards[0].x = width/2 - 20
  playerscards[1].x = width/2 + 20
  playerscards[0].y = height * 0.65
  playerscards[1].y = height * 0.65


}

function draw(){
  background(0)
  fill(0,255,0)
  ellipse(width/2, height/2, width, height/2)

  for(c of playerscards){
    c.show()
  }

}
