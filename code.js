var p1win = "Player 1 wins!";
var p2win = "Palyer 2 wins!";
var draw = "It's a draw!"

var p1dice = 0;
var p2dice = 1;

function myFunction(num1, num2) {
    if (num1 > num2){
        return p1win;
    } else if (num1 < num2) {
        return p2win;
    } else {
        return draw;
    }
}

console.log(myFunction(10, 10));