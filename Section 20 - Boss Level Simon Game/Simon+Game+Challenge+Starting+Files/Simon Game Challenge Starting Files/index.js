var correctOrder = []; // holds the correct sequence of buttons
var levelNum = 1; // current level number
var tempArray = []; // holds the current level's input

var buttons = $(".btn");

// press any key to start
$(document).keypress(function(){
    playGame();
});

// plays the sound
function playGame() {
    $("h1").text("Level " + levelNum);

    if (levelNum === 1) {
        pickAndPlayButton();
    }
}

// picks random button, adds to correctOrder array and plays sound
function pickAndPlayButton() {
    var randomIndex = Math.floor(Math.random() * buttons.length);
    var randomButtonId = buttons[randomIndex].getAttribute("id")''
    correctOrder.push(randomButtonId);
    playSound(randomButtonId);
}

function playSound(randomButtonId) {
    var audioFile = 
    switch (randomButtonId) {
        case "green":
            
            break;

        case "red":
            
            break;

        case "yellow":
            
            break;

        case "blue":
            
            break;
    
        default:
            break;
    }
}