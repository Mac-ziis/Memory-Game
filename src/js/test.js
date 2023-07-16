// function Game(){
// }

Game.prototype.checkMatch = function(cardA, cardB){
  if(cardA.value === cardB.value){
    cardA.matched = true;
    cardB.
  }

}


function Board(){
  this.cards ={};
  this.turns = 0;
  this.currentPos = 1;
}



Board.prototype.assignPosition = function(){
  if (this.currentPos<6){
    this.currentPos+=1;
  }
  return this.currentPos;
}

Board.prototype.addSpace = function(card){
  card.value = this.assignPosition();
  this.cards[card.value] = card;
  console.log("gameboard filled: ");
}


Board.prototype.start = function(){
  for(let i=1; i<2; i++){
    for (let j=1; j<3; j++){
      this.newSpace = new Space(i,j); 
      this.addSpace(this.newSpace);
    }
    }
}

function Card(){
  this.faceUp = false;
  this.matched = false;
}

Card.prototype.flip = function(){
  this.faceUp = true;
}





