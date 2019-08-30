$(document).ready(function() {
    $.getJSON( "https://api.github.com/users/Achaak/repos", function( _datas ) {
        initializerepositories(_datas, 100000);
    });
});