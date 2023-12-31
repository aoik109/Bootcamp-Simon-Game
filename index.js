var correctOrder = []; // holds the correct sequence of buttons
var levelNum = 1; // current level number
var tempArray = []; // holds the current level's input
var gameHasStarted = true;

var buttons = $(".btn");

// press any key to start
// TODO ADD IF LEVEL = 1 function that prevents these two functions from executing
$(document).keypress(function(){
    if (gameHasStarted === true) {
        $(".start-button").hide();
        setTimeout(function(){playGame();}, 500);
        gameHasStarted = false;
    };
});

$(".start-button").click(function(){
    if (gameHasStarted === true) {
        $(".start-button").hide();
        setTimeout(function(){playGame();}, 500);
        gameHasStarted = false;
    }
});

// plays the sound
function playGame() {
    $("h1").text("Level " + levelNum);
    setTimeout(function(){pickAndPlayButton();}, 100);
}

// picks random button, adds to correctOrder array and plays sound
function pickAndPlayButton() {
    var randomIndex = Math.floor(Math.random() * buttons.length);
    var randomButtonId = buttons[randomIndex].getAttribute("id");
    correctOrder.push(randomButtonId);
    playSound(randomButtonId);
}

// creates audio file and plays it
// also plays the animation
function playSound(randomButtonId) {
    var audioFileName = randomButtonId + ".mp3";
    var audioFile = new Audio("./sounds/" + audioFileName);
    audioFile.play();
    if (randomButtonId !== "wrong") {
        buttonAnimation(randomButtonId);
    }
    
}

// button animation
function buttonAnimation(randomButtonId) {
    var idName = "#" + randomButtonId;
    $(idName).addClass("pressed");
    setTimeout(function() {
        $(idName).removeClass("pressed");
    }, 100);
}



$(".btn").click(function(){
    var currentId = this.getAttribute("id");
    playSound(currentId);
    if (currentId === correctOrder[tempArray.length]) {
        tempArray.push(currentId);
    } else {
        gameOver(currentId);
    }

    if (tempArray.length === levelNum) {
        clearTempArray();
        levelNum++;
        setTimeout(playGame, 1000);
    }
});

// game over
function gameOver(currentId) {
    $("h1").text("Game Over, Press A Key to Start");
    var idTag = "#" + currentId;
    $(idTag).addClass("game-over");
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(function() {
        $(idTag).removeClass("game-over");
        $("body").removeClass("game-over");
    }, 200);
    clearTempArray();
    clearCorrectOrder();
    levelNum = 1;
    gameHasStarted = true;
    setTimeout(function(){
        $(".start-button").show();
    }, 300);
}

// clear tempArray because either (1) game over or (2) next level
function clearTempArray() {
    while(tempArray.length > 0) {
        tempArray.pop();
    }
}

function clearCorrectOrder() {
    while(correctOrder.length > 0) {
        correctOrder.pop();
    }
}