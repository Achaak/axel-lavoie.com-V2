$(document).ready(function() {
    $.getJSON( "/datas/development/projects.json", function( _datas ) {
        console.log(_datas)
    });
});