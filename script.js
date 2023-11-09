// snake and ladder 
// queries
let dicevalue = document.querySelector('#dicevalue')
let dicebtn = document.querySelector('.dice')
let cPlayer = document.querySelector('#cp')

let msg = document.querySelector('#message')
//  snakes and ladders objects
const snakes = {
     34:13,
     21:7
    }
const ladders = {
    3:11,
    19:31
    }
// player objects
const player1 = {
 name: 'p1',
 position:0
}
const player2 = {
    name: 'p2',
    position:0
}

// function for displaying message
function message(alert){
msg.textContent = alert
}

let currentPlayer = player1
// function for dice roll
function roll(){
    let p1 = document.getElementById('player1').value
    let p2 = document.getElementById('player2').value   
  player1.name = p1
  player2.name = p2
    let num = Math.floor(Math.random()*(6 - 1)+ 1)    
    dicevalue.innerHTML = num;
    play(currentPlayer,num)
    if(currentPlayer.position >= 36){
        message(`${currentPlayer.name} is winner!`)
        dicebtn.disabled = true
    }
    
    else{
        currentPlayer = currentPlayer === player1 ? player2 : player1
    }


}
   // function for play
 
   function play(player,moves){
    cPlayer.textContent = `${currentPlayer.name} turn`
     player.position += moves
     if(player.position > 36){
        player.position = player.position
     }
     if(player.position < 36){
     if (player.position in snakes){
        player.position = snakes[player.position]
        // display message encounterd snake and moved backwards
        message(`${player.name} encountered snake moving back to ${player.position}`)
       
     }
     else if(player.position in ladders){
        player.position = ladders[player.position]
        // display message climbed ladder and moved forward
        message(`${player.name} climbed ladder moved to ${player.position}`)
     }
     else {
        player.position = player.position
        // diplay player at position ${player.position}
        message(`${player.name} is at ${player.position}`)
        // cPlayer.textContent = `${currentPlayer.name} turn`
     }
     
    
    }
   }


// dicebtn.addEventListener('click', () => {
//     roll()
// })
dicebtn.addEventListener('click',roll)



// function for pawns movement
// function pawnMoves(){

// }