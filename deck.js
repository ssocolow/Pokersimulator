function shuffleDeck(){
  shufflingcards = []
  cards = []
  number_of_cards = 51

  // for(let i = 2; i < 14;i++){
  //   shufflingcards[i] = new Card(i,s)
  //
  // }
  // for(let i = 14; i < ;i++){
  //   shufflingcards[i] = new Card(i,s)
  //
  // }


  shufflingcards[0] = new Card(2,'s')
  shufflingcards[1] = new Card(3,'s')
  shufflingcards[2] = new Card(4,'s')
  shufflingcards[3] = new Card(5,'s')
  shufflingcards[4] = new Card(6,'s')
  shufflingcards[5] = new Card(7,'s')
  shufflingcards[6] = new Card(8,'s')
  shufflingcards[7] = new Card(9,'s')
  shufflingcards[8] = new Card(10,'s')
  shufflingcards[9] = new Card(11,'s')
  shufflingcards[10] = new Card(12,'s')
  shufflingcards[11] = new Card(13,'s')
  shufflingcards[12] = new Card(14,'s')
  shufflingcards[13] = new Card(2,'h')
  shufflingcards[14] = new Card(3,'h')
  shufflingcards[15] = new Card(4,'h')
  shufflingcards[16] = new Card(5,'h')
  shufflingcards[17] = new Card(6,'h')
  shufflingcards[18] = new Card(7,'h')
  shufflingcards[19] = new Card(8,'h')
  shufflingcards[20] = new Card(9,'h')
  shufflingcards[21] = new Card(10,'h')
  shufflingcards[22] = new Card(11,'h')
  shufflingcards[23] = new Card(12,'h')
  shufflingcards[24] = new Card(13,'h')
  shufflingcards[25] = new Card(14,'h')
  shufflingcards[26] = new Card(2,'d')
  shufflingcards[27] = new Card(3,'d')
  shufflingcards[28] = new Card(4,'d')
  shufflingcards[29] = new Card(5,'d')
  shufflingcards[30] = new Card(6,'d')
  shufflingcards[31] = new Card(7,'d')
  shufflingcards[32] = new Card(8,'d')
  shufflingcards[33] = new Card(9,'d')
  shufflingcards[34] = new Card(10,'d')
  shufflingcards[35] = new Card(11,'d')
  shufflingcards[36] = new Card(12,'d')
  shufflingcards[37] = new Card(13,'d')
  shufflingcards[38] = new Card(14,'d')
  shufflingcards[39] = new Card(2,'c')
  shufflingcards[40] = new Card(3,'c')
  shufflingcards[41] = new Card(4,'c')
  shufflingcards[42] = new Card(5,'c')
  shufflingcards[43] = new Card(6,'c')
  shufflingcards[44] = new Card(7,'c')
  shufflingcards[45] = new Card(8,'c')
  shufflingcards[46] = new Card(9,'c')
  shufflingcards[47] = new Card(10,'c')
  shufflingcards[48] = new Card(11,'c')
  shufflingcards[49] = new Card(12,'c')
  shufflingcards[50] = new Card(13,'c')
  shufflingcards[51] = new Card(14,'c')


  cards = shuffle(shufflingcards)
}



function pickCards(x){

  let w = [];
  let g;

  for(let j = x; j > 0 ; j--){
    g = round(random(0, number_of_cards))
    w.push(cards[g])
    cards.splice(g, 1)
    number_of_cards--
  }
  return w
}
