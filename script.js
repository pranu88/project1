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

// cols to check
const col1 = {
    1:true,
    12:true,
    13:true,
    24:true,
    25:true,
    36:true}
const col2 = {
    2:true,
    11:true,
    14:true,
    23:true,
    26:true,
    35:true}

const col3 = {
    3:true,
    10:true,
    15:true,
    22:true,
    27:true,
    34:true}

const col4 = {
    4:true,
    9:true,
    16:true,
    21:true,
    28:true,
    33:true}

const col5 = {
    5:true,
    8:true,
    17:true,
    20:true,
    29:true,
    32:true}

const col6 = {
        6:true,
        7:true,
        18:true,
        19:true,
        30:true,
        31:true}

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
    // assign text input to variable
    let p1 = document.getElementById('player1').value
    let p2 = document.getElementById('player2').value   
    player1.name = p1
    player2.name = p2
    // dice value
    let num = Math.floor(Math.random()*(6 - 1)+ 1)  
    // display dice value
    
    dicevalue.innerHTML = num;
    
    play(currentPlayer,num)
    // 
    console.log('player:' + currentPlayer)
    if(currentPlayer.position === 36){
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
    //debugger;
     player.position += moves
//     player.position = 1
  //   debugger;
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
    //debugger;
     console.log('test1' + player);

debugger;
if (player.position in col1){
    document.getElementById(`${player.name}`).style.left = '200px'
    if (player.name === 'pawn2')
    {document.getElementById(`${player.name}`).style.left = '75px'}
}
if (player.position in col2){
    document.getElementById(`${player.name}`).style.left = '300px'
    if (player.name === 'pawn2')
    {document.getElementById(`${player.name}`).style.left = '175px'}
}
if (player.position in col3){
    document.getElementById(`${player.name}`).style.left = '400px'
    if (player.name === 'pawn2')
    {document.getElementById(`${player.name}`).style.left = '275px'}
}
if (player.position in col4){
    document.getElementById(`${player.name}`).style.left = '500px'
    if (player.name === 'pawn2')
    {document.getElementById(`${player.name}`).style.left = '375px'}
}
if (player.position in col5){
    document.getElementById(`${player.name}`).style.left = '600px'
    if (player.name === 'pawn2')
    {document.getElementById(`${player.name}`).style.left = '475px'}
}
if (player.position in col6){
    document.getElementById(`${player.name}`).style.left = '700px'
    if (player.name === 'pawn2')
    {document.getElementById(`${player.name}`).style.left = '575px'}
}

let rownum = Math.floor(player.position / 6);

if ((rownum === 0) || (player.position == 6)){
    document.getElementById(`${player.name}`).style.top = '50px'
}
else if ((rownum === 1) || (player.position == 12)){
    document.getElementById(`${player.name}`).style.top = '-50px'
}
else if ((rownum === 2) || (player.position == 18)){
    document.getElementById(`${player.name}`).style.top = '-150px'
}
else if ((rownum === 3) || (player.position == 19)){
    document.getElementById(`${player.name}`).style.top = '-250px'
}
else if ((rownum === 4) || (player.position == 30)){
    document.getElementById(`${player.name}`).style.top = '-350px'
}
else if ((rownum === 5) || (player.position == 36)){
    document.getElementById(`${player.name}`).style.top = '-450px'
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