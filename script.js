// snake and ladder 
// queries
let dicevalue = document.querySelector('#dicevalue')

//  snakes and ladders objects
let snakes = {
     34:13,
     21:7
    }
let ladders = {
    3:11,
    19:31
    }
// player objects
let player1 = {
 name: 'player1',
 position:0
}
let player2 = {
    name: 'player2',
    position:0
}
// function for dice roll
function roll(){
    let num = Math.floor(Math.random()*(6 - 1)+ 1)    
    dicevalue.innerHTML = num;
}
   // function for play
 
   function play(player,moves){
     player.position += moves
     if (player.position in snakes){
        player.position = snakes[player.position]
        // display message encounterd snake and moved backwards
     }
     else if(player.position in ladders){
        player.position = ladders[player.position]
        // display message climbed ladder and moved forward
     }
     else {
        player.position = player.position
        // diplay player at position ${player.position}
     }
   }







