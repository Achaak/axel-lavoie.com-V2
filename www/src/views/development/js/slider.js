$(document).ready(function() {
    // Init Slider
    Slider().init(
        ".slider-ctner",
        [
            {
                url: "/ressources/development/nodejs.png"
            },
            {
                url: "/ressources/images/nav-hamburger/development.jpg"
            }
        ], 
        10000
    );
});