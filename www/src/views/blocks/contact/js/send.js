$(document).ready(function() {
    var socket = io();

    $("form").submit(function(_e) {
        _e.preventDefault();

        // Get datas
        var _name = $("#contact-name").val();
        var _mail = $("#contact-email").val();
        var _text = $("#contact-text").val();

        // If has values, go to send the mail
        if (_name != "" && _mail != "" && _text != "" ) {
            socket.emit('mail:send', { name: _name, from: _mail, text: _text });
        }
    });

    
    socket.on('mail', function (_data) {
        console.log(_data);
    });
});