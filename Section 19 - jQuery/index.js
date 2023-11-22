// $("h1").css("color", "red");
//separation of concerns -> we don't want javascript to deal with style
$("h1").addClass("big-title");

// $("button").html("<a href='#'>Click Me</a>");
// $("a").attr("href", "https://jquery.com/");
// $("a").attr("target", "_blank");

// $("h1").click(function() {
//     $("h1").css("color", "blue");
// });

$("button").click(function() {
    $("h1").toggleClass("purple-title");
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("click", function(){
    $("h1").toggleClass("purple-title");
});

$("h1").on("mouseover", function(){
    $("h1").toggleClass("big-title");
});

// $("input").keypress(function(event) {
//     console.log(event.key);
// });



// $(document).on("keydown", function(event) {
//     if (event.which === "A") {
//         $("h1").text("You clicked 'A'"); 
//     }
// });

// check if jQuery is ready -> once ready, the anonomyous function will be called
// $(document).ready(function() {
    // $("h1").css("color", "red");
// });
