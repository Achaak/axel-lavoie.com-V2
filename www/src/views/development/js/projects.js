$(document).ready(function() {
    $.getJSON( "/datas/development/projects.json", function( _datas ) {
        var _projects = initializeProjects(_datas, 8);
        var _slider   = [];

        // Prepare Slider
        for (var i = 0; i < 3; i++) {
            _slider.push(_projects[i].pictures[0]);
        }

        // Init Slider
        Slider().init(
            ".slider-ctner",
            _slider, 
        5000);
    });
});