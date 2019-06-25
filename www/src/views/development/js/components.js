$(document).ready(function() {
    $.getJSON( "/datas/development/components.json", function( _datas ) {
        initializeComponents(_datas);
    });
});

function initializeComponents(_components) {
    console.log(_components);
}