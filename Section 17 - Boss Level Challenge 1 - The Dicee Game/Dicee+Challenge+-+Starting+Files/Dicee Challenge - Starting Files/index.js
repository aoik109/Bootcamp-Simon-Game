// random number for player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// random number for player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// depending on the random number, change the img for player 1 dice
var player1Dice = document.querySelector(".img1");
if (randomNumber1 === 1) {
    player1Dice.setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 === 2) {
    player1Dice.setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 === 3) {
    player1Dice.setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 === 4) {
    player1Dice.setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 === 5) {
    player1Dice.setAttribute("src", "./images/dice5.png");
} else {
    player1Dice.setAttribute("src", "./images/dice6.png");
}