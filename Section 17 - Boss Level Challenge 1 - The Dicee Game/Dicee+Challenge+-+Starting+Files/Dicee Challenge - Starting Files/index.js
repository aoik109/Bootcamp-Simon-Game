// random number for player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// random number for player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// depending on the random number, change the img for player 1 dice
var randomDice1Image = "dice" + randomNumber1 + ".png";
var randomDice1Source = "images/" + randomDice1Image;
document.querySelector(".img1").setAttribute("src", randomDice1Source);
/*if (randomNumber1 === 1) {
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
}*/

// depending on the random number, change the img for player 2 dice
var randomDice2Source = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDice2Source);
/*if (randomNumber2 === 1) {
    player2Dice.setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 === 2) {
    player2Dice.setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 === 3) {
    player2Dice.setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 === 4) {
    player2Dice.setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 === 5) {
    player2Dice.setAttribute("src", "./images/dice5.png");
} else {
    player2Dice.setAttribute("src", "./images/dice6.png");
}*/

// announce winner
var results = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    // player 1 wins
    results.innerHTML = "<img class='flag' src='./images/flag.svg'> Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    // player 2 wins
    results.innerHTML = "Player 2 Wins! <img class='flag' src='./images/flag.svg'>";
} else {
    // draw
    results.innerHTML = "Draw!";
}