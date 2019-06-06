var secretNumber =4;

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

while (true) {
    if (guess===secretNumber) {
        alert("You got it bro");
        break;
    }

    else if(Number(guess)>secretNumber){
        alert("Too high");
    }

    else {
        alert("Too low");
    }
    stringGuess = prompt("Guess a number");
    guess = Number(stringGuess);
}