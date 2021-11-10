var p1dice = 0;
var p2dice = 0;

//var x = document.getElementById("message").innerHTML;

function getRandomInt(max) {
    p1dice = Math.floor(Math.random() * max);
    p2dice = Math.floor(Math.random() * max);
    if (p1dice > p2dice){
        return "Player 1 wins! \n" + "P1 scored: " + p1dice + "\nP2 scored: " + p2dice;
    } else if (p2dice > p1dice) {
        return "Player 2 wins! \n" + "P1 scored: " +  p1dice + "\nP2 scored: " + p2dice;
    } else {
        return "It's a draw! \n" + "P1 scored: " +  p1dice + "\nP2 scored: " + p2dice;
    }
}


console.log(getRandomInt(7));
