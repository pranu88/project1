// snake and ladder 
// queries
let dicevalue = document.querySelector('#dicevalue')
let dicebtn = document.querySelector('.dice')
let cPlayer = document.querySelector('#cp')
let msg = document.querySelector('#message')
let resetbtn = document.querySelector('.reset')
let quitbtn = document.querySelector('.quit')

// variable for round count
let rollcnt = 0

//  snakes and ladders objects
const snakes = {
     34:13,
     21:7
    }
const ladders = {
    3:11,
    19:31
    }

// columns to check
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
let currentpawn = pawn1
// function for dice roll
function roll(){
    
    // assign text input to variable
    let p1 = document.getElementById('player1').value.trim()
    let p2 = document.getElementById('player2').value.trim()    
    player1.name = p1
    player2.name = p2
    // pawn movements
    let pawn1 = document.getElementById('pawn1')
    let pawn2 = document.getElementById('pawn2')
    // dice value
    let num = Math.floor(Math.random()*(6 - 1)+ 1)  
    // display dice value
    
    // dicevalue.innerHTML = num;

    // chechk for text input is empty
    if(!player1.name || !player2.name || player1.name === "" || player2.name === ""){
        alert(`Please enter player name `) 
        // reset()               

       } else if(player1.name === player2.name){
        alert(`Please enter different names for each player`) 
        // reset()       

    }
    else{
        dicevalue.innerHTML = num;
        play(currentPlayer,currentpawn,num)
        
    }

    if(currentPlayer.position === 36){
        message(`${currentPlayer.name} is winner!`)
        dicebtn.disabled = true
    }
    
    else{
        currentPlayer = currentPlayer === player1 ? player2 : player1
        currentpawn = currentpawn === pawn1 ? pawn2 : pawn1
    }
    

}



    // ===========================================
   // function for play
 
   function play(player,pawn, moves){
    cPlayer.textContent = `${player.name}'s turn` 
    player.position += moves

    let pawn1 = document.getElementById('pawn1')
    let pawn2 = document.getElementById('pawn2')
    // round count increment when pawn matches pawn1
     if(pawn === pawn1){
         rollcnt += 1;
     }
     document.getElementById('round').textContent = 'Round: ' +rollcnt

     if(player.position > 36){  
        player.position -= moves      
        message(`dice value is morethan expected! ${player.name} will remain in ${player.position} `)
     }
     else if(player.position <= 36){
     if (player.position in snakes){
        player.position = snakes[player.position]        
        message(`${player.name} encountered snake moving back to ${player.position}`)
       
     }
     else if(player.position in ladders){
        player.position = ladders[player.position]        
        message(`${player.name} climbed ladder moved to ${player.position}`)
     }
     else {      
        
        message(`${player.name} is at ${player.position}`)
        
     }

   
    
    // check player position in columns
    
if (player.position in col1){   
    pawn.style.left='200px'  
    // pawn.style.left='140% ' 
    if (pawn === pawn2){   
    pawn.style.left = '75px'
    // pawn.style.left = '4.6875%'
    }
}
if (player.position in col2){   
    pawn.style.left = '300px'
    // pawn.style.left = '200%'
    if (pawn === pawn2){
    pawn.style.left = '175px'
    // pawn.style.left = '10.9375%'
    }
}
if (player.position in col3){   
    pawn.style.left = '400px'
    // pawn.style.left = '260%'
    if (pawn === pawn2){    
    pawn.style.left = '275px'
    }
}
if (player.position in col4){    
    pawn.style.left = '500px'
    // pawn.style.left = '320%'
    if (pawn === pawn2)
    {
       
    pawn.style.left = '375px'}
}
if (player.position in col5){
    
    pawn.style.left = '600px'
    // pawn.style.left = '380%'
    if (pawn === pawn2)
    {        
       pawn.style.left = '475px'
    }
}
if (player.position in col6){    
    pawn.style.left = '700px'
    // pawn.style.left = '440%'
    if (pawn === pawn2)
    {    
        pawn.style.left = '575px'
    }
}

// chech player position in rows
let rownum = Math.floor(player.position / 6);

if ((rownum === 0) || (player.position == 6)){
    pawn.style.top = '50px'
}
else if ((rownum === 1) || (player.position == 12)){    
  pawn.style.top = '-50px'
}
else if ((rownum === 2) || (player.position == 18)){    
   pawn.style.top = '-150px'
}
else if ((rownum === 3) || (player.position == 19)){
    pawn.style.top = '-250px'
}
else if ((rownum === 4) || (player.position == 30)){    
    pawn.style.top = '-350px'
}
else if ((rownum === 5) || (player.position == 36)){
    pawn.style.top = '-450px'
}


     }

   }

dicebtn.addEventListener('click',roll)
resetbtn.addEventListener('click',reset)
quitbtn.addEventListener('click',quit)


// function for reloading page
function reset(){
    let text = "Would you like to reset?"
    if(confirm(text) == true){
    location.reload()
}
else{
    message(`You choosed to continue with GAME!`)
}
}

// funtion to quit page
function quit(){
    let text = "Would you like to quit?"
    if(confirm(text) == true){        
    window.close()
    }
    else{
        message(`You choosed to continue!`)
    }
}