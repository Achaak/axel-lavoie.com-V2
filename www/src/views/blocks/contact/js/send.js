$(document).ready(function() {
    var socket = io();

    $(".contact-ctner form#contact-form").submit(function(_e) {
        _e.preventDefault();

        // Get datas
        var _name = $("#contact-name").val();
        var _mail = $("#contact-email").val();
        var _text = $("#contact-text").val();

        // If has values, go to send the mail
        if (_name != "" && _mail != "" && _text != "" ) {
            socket.emit('mail:send', { name: _name, from: _mail, text: _text });
            
            // Display loading
            $('.contact-ctner').children().removeClass("visible");
            $('.contact-ctner .loading').addClass("visible");
        }
    });

    
    socket.on('mail', function (_data) {
        // Display loading
        $('.contact-ctner').children().removeClass("visible");
        $('.contact-ctner .done').addClass("visible");
    });
});