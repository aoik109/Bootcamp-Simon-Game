var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
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