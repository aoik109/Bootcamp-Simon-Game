// Program that asks for the user's name and tells them if they are in Stray Kids or not
var strayKids = ["chan", "leeknow", "changbin", "han", "felix", "seungmin", "in"];

var name = prompt("What is your name?").toLowerCase();

if (strayKids.includes(name)) {
    alert("Hi, " + name + ". You are in Stray Kids!");
} else {
    alert("Sorry, " + name + ". You are NOT in Stray Kids...");
}

// How to create a simple node.js server
// creates server where you can run on your browser