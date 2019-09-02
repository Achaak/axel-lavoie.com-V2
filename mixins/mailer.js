exports.initMailer = function(_global, _callback) {
    var global = _global;

    var mailLogsPath = global.path.join(__dirname, "../datas/mail-logs.json");
    var transporter = global.nodemailer.createTransport(JSON.parse(global.fs.readFileSync(mailLogsPath)));
    
    global.socketIo.on('connection', function (socket) {
        
        socket.on('mail:send', function (_data) {
            // If has from, name and text send mail
            if (_data.from && _data.name && _data.text) {
                sendMail(_data.from, _data.name, _data.text, function(_error) {
                    socket.emit('mail:sended', { error: _error });
                });
            }
        });
    });


    function sendMail(_from, _name, _text, _callback) {
        // Prepare options
        var mailOptions = {
            from: _from,
            to: 'axel.lavoie@gmail.com',
            subject: 'Message from ' + _name,
            text: _name + " | " + _from + " | " + _text
        };
        
        // Send the mail
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(("[MAILER]      "+ error).red);

                // CALLBACK with error = 0
                if(_callback) _callback(1);
            } else {
                console.log(('[MAILER]      Email sent: ' + info.response).green);

                // CALLBACK with error = 0
                if(_callback) _callback(0);
            }
        });
    }

    // Callback
    if (_callback) _callback();

    return {
        "sendMail": function(_from, _name, _text, _callback) {
            sendMail(_from, _name, _text, _callback);
        }
    };
}