// $("h1").css("color", "red");
//separation of concerns -> we don't want javascript to deal with style
$("h1").addClass("big-title");

// $("button").html("<a href='#'>Click Me</a>");
// $("a").attr("href", "https://jquery.com/");
// $("a").attr("target", "_blank");

$("h1").click(function() {
    $("h1").css("color", "blue");
});

$("button").click(function() {
    $("h1").toggleClass("purple-title");
})

// check if jQuery is ready -> once ready, the anonomyous function will be called
// $(document).ready(function() {
    // $("h1").css("color", "red");
// });
