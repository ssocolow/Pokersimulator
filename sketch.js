let cards = []
let shufflingcards = []
let playerscards
let number_of_cards = 51



// // Trying to put the images into the sketch
//
// let a;
//
// function preload(){
//    a = loadImage('Poker/Images/Ace.png')
//
//
// }



function setup(){
  createCanvas(500,500)
  ellipseMode(CENTER)
  shuffleDeck()


  playerscards = pickCards(2)
  playerscards[0].x = width/2 - 20
  playerscards[1].x = width/2 + 20
  playerscards[0].y = height * 0.655
  playerscards[1].y = height * 0.655

  player2scards = pickCards(2)
  player2scards[0].x = 228
  player2scards[0].y = 118
  player2scards[1].x = 228 + 40
  player2scards[1].y = 118

  player3scards = pickCards(2)
  player3scards[0].x = 11
  player3scards[0].y = 202
  player3scards[1].x = 11 + 40
  player3scards[1].y = 202


}

function draw(){
  background(0)
  fill(0,255,0)
  ellipse(width/2, height/2, width, height/2)
  fill(0,0,255)
  //rect(220, 326, 100, 64)

  drawplayermats(2)

  for(a of playerscards){
    a.show()
  }
  for(b of player2scards){
    b.show()
  }
  for(c of player3scards){
      c.show()
    }

  fill(255)
  w = mouseX
  e = mouseY

  text(w, mouseX, mouseY)
  text(e, mouseX + 50, mouseY)

}


function drawplayermats(x){
  if(x === 1){
    rect(220, 326, 100, 64)
  }
  if(x === 2){
    rect(220, 326, 100, 64)
    rect(217, 116, 100, 64)
  }
  if(x === 3){
    rect(220, 326, 100, 64)
    rect(217, 115, 100, 64)
    rect(0, 200, 100, 64)

  }

}

function mousePressed(){
  print(mouseX, mouseY)

}
