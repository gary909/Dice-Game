var p1dice = 0;
var p2dice = 0;

const newText = document.getElementById("newText");

const diceImg1 = document.getElementById("diceImg1");
const diceImg2 = document.getElementById("diceImg2");

var myArr = [diceImg2, diceImg1];

function getRandomInt() {
    p1dice = Math.floor(Math.random() * 6) + 1;
    p2dice = Math.floor(Math.random() * 6) + 1;
    // diceImg1 = 
    if (p1dice > p2dice){
        newText.innerHTML = "Player 1 wins! <br> <br> " + "(P1) scored: " + p1dice + " - & - (P2) scored: " + p2dice;
        document.getElementById("diceImg1").src = diceImg1.src.replace("dice1.png", "dice" + p1dice + ".png");
        document.getElementById("diceImg2").src = diceImg2.src.replace("dice2.png", "dice" + p2dice + ".png");
    } else if (p2dice > p1dice) {
        newText.innerHTML = "Player 2 wins! <br> <br> " + "(P1) scored: " +  p1dice + " - & - (P2) scored: " + p2dice;
        document.getElementById("diceImg1").src = diceImg1.src.replace("dice1.png", "dice" + p1dice + ".png");
        document.getElementById("diceImg2").src = diceImg2.src.replace("dice2.png", "dice" + p2dice + ".png");
    } else {
        newText.innerHTML = "It's a draw! <br> <br> " + "(P1) scored: " +  p1dice + " - & - (P2) scored: " + p2dice;
        document.getElementById("diceImg1").src = diceImg1.src.replace("dice1.png", "dice" + p1dice + ".png");
        document.getElementById("diceImg2").src = diceImg2.src.replace("dice2.png", "dice" + p2dice + ".png");
    }
}


console.log(getRandomInt(7));
