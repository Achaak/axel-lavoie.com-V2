$(document).ready(function() {
    $.getJSON( "/datas/development/projects.json", function( _datas ) {
        initializeProjects(_datas, 100000);
    });
});