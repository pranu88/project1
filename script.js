// snake and ladder 
// queries
let dicevalue = document.querySelector('#dicevalue')
let dicebtn = document.querySelector('.dice')
let cPlayer = document.querySelector('#cp')
let p1 = document.getElementById('player1').value
let p2 = document.getElementById('player2').value
let msg = document.querySelector('#message')
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
 name: p1,
 position:0
}
let player2 = {
    name: p2,
    position:0
}
let currentPlayer = player1
// function for displaying message
function message(alert){
msg.textContent = alert
}
// function for dice roll
function roll(){
    let num = Math.floor(Math.random()*(6 - 1)+ 1)    
    dicevalue.innerHTML = num;
    play(currentPlayer,num)
}
   // function for play
 
   function play(player,moves){
     player.position += moves
     if(player.position <= 36){
     if (player.position in snakes){
        player.position = snakes[player.position]
        // display message encounterd snake and moved backwards
        message(`${player} encountered snake moving back to ${player.position}`)
     }
     else if(player.position in ladders){
        player.position = ladders[player.position]
        // display message climbed ladder and moved forward
        message(`${player} climbed ladder moved to ${player.position}`)
     }
     else {
        player.position = player.position
        // diplay player at position ${player.position}
        message(`${player} is at ${player.position}`)
     }
    }
   }

roll()

dicebtn.addEventListener('click',roll)




