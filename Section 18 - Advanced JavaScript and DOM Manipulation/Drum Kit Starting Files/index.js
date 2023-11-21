var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
    // add event listener to each button
    buttons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kickBass = new Audio("./sounds/kick-bass.mp3");
                kickBass.play();
                break;
            
            default:
                break;
        }

        document.addEventListener("keydown", function(event) {
            // adding parameter "event" to the function allows us to tap into it

            console.log(event);
        })
        // var audio = new Audio("./sounds/tom-1.mp3");
        // audio.play();

        // identity of the button that triggered the event listener
        // this.style.color = "white";
    });






/////////////////////////////////////////////////////////////////////
/*document.querySelector("button").addEventListener("click", function() {
    alert("I got clicked!");
});*/



    // document.querySelectorAll(".drum")[i].addEventListener....
}

// function handleClick() {
//     alert("I got clicked")
// }