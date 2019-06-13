$(document).ready(function() {
    // Open nav burger
    $("#header .burger").click(function() {
        $("#burger-menu").addClass("show");
    });

    // Close nav burger
    $("#burger-menu .close").click(function() {
        $("#burger-menu").removeClass("show");
    });
});