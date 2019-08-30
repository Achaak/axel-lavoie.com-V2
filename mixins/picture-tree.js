exports.initPictureTree = function(_global, _callback) {
    var global = _global;

    global.socketIo.on('connection', function (socket) {
        
        socket.on('photography:get:tree', function (_data) {
            var _path = global.path.join(__dirname, "../www/ressources", _data.folder);

            var _folderCtn = {folders: [], files: [], path: global.path.join("/ressources", encodeURI(_data.folder))};
            
            // Get pictures
            global.fs.readdir(_path, function (err, _files) {
                //handling error
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                }

                var _nbFile  = _files.length;
                var _cptFile = 0;
                _files.forEach( function (file) {
                    // Insert in folder container
                    if (file.toLowerCase().includes('.jpg') || file.toLowerCase().includes('.png') || file.toLowerCase().includes('.gif')) {


                        global.fs.stat(global.path.join(_path, file), function (err, _data) {
                            // Set name of file
                            _data.name = file

                            _folderCtn.files.push(_data);
                        
                            // Increase cpt
                            _cptFile++;

                            // Send file
                            if (_cptFile == _nbFile) socket.emit('photography:get:tree:result', { datas: _folderCtn });
                        });
                    }
                    else {
                        _folderCtn.folders.push({folder: file});

                        // Increase cpt
                        _cptFile++;

                        // Send file
                        if (_cptFile == _nbFile) socket.emit('photography:get:tree:result', { datas: _folderCtn });
                    }
                });
            });
        });
    });
}