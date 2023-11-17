// Sing the 99 bottles of beer song
function beer() {
    
    var numBottles = 99;
    var bottleWord = "bottles"

    while (numBottles >= 0) {

        // check whether to use "bottle" or "bottles"
        bottleWord = checkBottleWord(numBottles);

        // check whether numBottles is (1 <= numBottles <= 99) or numBottles===0
        var numBottlesCheck = ifZeroBottles(numBottles);
        // print current number of bottles (before tkaing one off the wall)
        console.log(numBottlesCheck + " " + bottleWord + " of beer on the wall, " + numBottlesCheck + " " + bottleWord + " of beer.");
        


        // decrement number of bottles
        numBottles--;

        // check whether to use "bottle" (1) vs "bottles" now that we decreased by 1
        bottleWord = checkBottleWord(numBottles);

        // check whether numBottles is between 1 and 99 (print number), 0 (print no), or -1 (print 99)
        var numBottlesCheck = ifZeroBottles(numBottles);
        console.log("Take one down and pass it around, " + numBottlesCheck + " " + bottleWord + " of beer on the wall.");
    }
    
    
}

function checkBottleWord(numBottles) {
    var bottleWord = "";

    // if there's only 1 bottle, "bottle"
    if (numBottles === 1) {
            bottleWord = "bottle"
    // if no bottles or more than 1 bottles, "bottles"
    } else {
            bottleWord = "bottles";
    }

    return bottleWord;
}

function ifZeroBottles(numBottles) {
    // if 0 bottles, "No more"
    if (numBottles === 0) {
        return "No more";

    // if took last bottle down, "99"
    } else if (numBottles === -1) {
        return 99;

    // else "numBottles"
    } else {
        return numBottles;
    }
}