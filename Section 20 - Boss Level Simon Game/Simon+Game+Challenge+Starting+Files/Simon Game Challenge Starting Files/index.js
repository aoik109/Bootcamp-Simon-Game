var correctOrder = []; // holds the correct sequence of buttons
var levelNum = 1;

// press any key to start
$(document).keypress(function(){
    playGame();
});

function playGame() {
    $("h1").text("Level " + levelNum);
}
