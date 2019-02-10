function shuffleDeck(){
  shufflingcards = []
  cards = []
  number_of_cards = 51


  shufflingcards[0] = new Card('2s')
  shufflingcards[1] = new Card('3s')
  shufflingcards[2] = new Card('4s')
  shufflingcards[3] = new Card('5s')
  shufflingcards[4] = new Card('6s')
  shufflingcards[5] = new Card('7s')
  shufflingcards[6] = new Card('8s')
  shufflingcards[7] = new Card('9s')
  shufflingcards[8] = new Card('10s')
  shufflingcards[9] = new Card('js')
  shufflingcards[10] = new Card('qs')
  shufflingcards[11] = new Card('ks')
  shufflingcards[12] = new Card('as')
  shufflingcards[13] = new Card('2h')
  shufflingcards[14] = new Card('3h')
  shufflingcards[15] = new Card('4h')
  shufflingcards[16] = new Card('5h')
  shufflingcards[17] = new Card('6h')
  shufflingcards[18] = new Card('7h')
  shufflingcards[19] = new Card('8h')
  shufflingcards[20] = new Card('9h')
  shufflingcards[21] = new Card('10h')
  shufflingcards[22] = new Card('jh')
  shufflingcards[23] = new Card('qh')
  shufflingcards[24] = new Card('kh')
  shufflingcards[25] = new Card('ah')
  shufflingcards[26] = new Card('2d')
  shufflingcards[27] = new Card('3d')
  shufflingcards[28] = new Card('4d')
  shufflingcards[29] = new Card('5d')
  shufflingcards[30] = new Card('6d')
  shufflingcards[31] = new Card('7d')
  shufflingcards[32] = new Card('8d')
  shufflingcards[33] = new Card('9d')
  shufflingcards[34] = new Card('10d')
  shufflingcards[35] = new Card('jd')
  shufflingcards[36] = new Card('qd')
  shufflingcards[37] = new Card('kd')
  shufflingcards[38] = new Card('ad')
  shufflingcards[39] = new Card('2c')
  shufflingcards[40] = new Card('3c')
  shufflingcards[41] = new Card('4c')
  shufflingcards[42] = new Card('5c')
  shufflingcards[43] = new Card('6c')
  shufflingcards[44] = new Card('7c')
  shufflingcards[45] = new Card('8c')
  shufflingcards[46] = new Card('9c')
  shufflingcards[47] = new Card('10c')
  shufflingcards[48] = new Card('jc')
  shufflingcards[49] = new Card('qc')
  shufflingcards[50] = new Card('kc')
  shufflingcards[51] = new Card('ac')


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
