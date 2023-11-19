/*document.querySelector("button").addEventListener("click", function() {
    alert("I got clicked!");
});*/

var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        alert("I got clicked!");
    });
}

// function handleClick() {
//     alert("I got clicked")
// }