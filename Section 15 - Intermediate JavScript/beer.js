// Sing the 99 bottles of beer song
function beer() {
    
    var numBottles = 99;
    var bottleWord = "bottles"

    while (numBottles >= 0) {

        
        bottleWord = checkBottleWord(numBottles);
        var numBottlesCheck = ifZeroBottles(numBottles);
        console.log(numBottlesCheck + " " + bottleWord + " of beer on the wall, " + numBottlesCheck + " " + bottleWord + " of beer.");
        
        numBottles--;
        bottleWord = checkBottleWord(numBottles);
        var numBottlesCheck = ifZeroBottles(numBottles);
        console.log("Take one down and pass it around, " + numBottlesCheck + " " + bottleWord + " of beer on the wall.");
    }
    
    
}

function checkBottleWord(numBottles) {
    var bottleWord = "";
    if (numBottles === 1) {
            bottleWord = "bottle"
    } else {
            bottleWord = "bottles";
    }

    return bottleWord;
}

function ifZeroBottles(numBottles) {
    if (numBottles === 0) {
        return "No more";
    } else if (numBottles === -1) {
        return 99;
    } else {
        return numBottles;
    }
}