$(document).ready(function() {
    // Open nav burger
    $("#header .burger").click(function() {
        $("#burger-menu").addClass("show");

        // Disable scroll on the body
        $("body").addClass("disable-scroll");
        
        // Initialize the picture
        var _pictureLink = $("nav#burger-menu li a[href='"+ window.location.pathname+"']");
        if(_pictureLink.length) {
            _pictureLink.trigger("mouseover");
            _pictureLink.addClass("active");
        }
        else $("nav#burger-menu li a[href='/']").trigger("mouseover");
    });

    // Close nav burger
    $("#burger-menu .close").click(function() {
        $("#burger-menu").removeClass("show");

        // Enable scroll on the body
        $("body").removeClass("disable-scroll");
    });
});