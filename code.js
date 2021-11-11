var p1dice = 0;
var p2dice = 0;

const newText = document.getElementById("newText");
// newText.textContent = "Greetings from Mark";ss

//var x = document.getElementById("message").innerHTML;

function getRandomInt(max) {
    p1dice = Math.floor(Math.random() * max);
    p2dice = Math.floor(Math.random() * max);
    if (p1dice > p2dice){
        newText.textContent = "Player 1 wins! \n" + "P1 scored: " + p1dice + "\nP2 scored: " + p2dice;
    } else if (p2dice > p1dice) {
        newText.textContent = "Player 2 wins! \n" + "P1 scored: " +  p1dice + "\nP2 scored: " + p2dice;
    } else {
        newText.textContent = "It's a draw! \n" + "P1 scored: " +  p1dice + "\nP2 scored: " + p2dice;
    }
}


console.log(getRandomInt(7));
