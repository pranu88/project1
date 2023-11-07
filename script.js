// snake and ladder 
// queries
let dicevalue = document.querySelector('#dicevalue')

// function for dice roll
function roll(){
    let num = Math.floor(Math.random()*(6 - 1)+ 1)    
    dicevalue.innerHTML = num;
}







