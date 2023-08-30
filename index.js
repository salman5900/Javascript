var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk === false) {
    guess = prompt("Ready Aim Fire (0 to 6)");
    if (guess < 0 || guess > 6) {
        alert("Enter the right number")
    }else {
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits += 1;
            if (hits == 3) {
                isSunk = true
                alert("You sunk my battleship");
            }
        }else {
            alert("MISS");
        }
    }
}

var status = `YOu Took ${guesses} guesses to sink the ship which means your shooting acuracy is ${3/guesses}`
alert(status);

