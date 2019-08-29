exports.initPictureTree = function(_global, _callback) {
    var global = _global;

    global.socketIo.on('connection', function (socket) {
        
        socket.on('photography:get:tree', function (_data) {
            var _path = global.path.join(__dirname, "../www/ressources/photography", _data.folder);

            var _folderCtn = {folders: [], files: [], path: global.path.join("/ressources/photography", encodeURI(_data.folder))};
            
            // Get pictures
            global.fs.readdir(_path, function (err, _files) {
                //handling error
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                } 
                
                _files.forEach(function (file) {
                    // Insert in folder container
                    if (file.toLowerCase().includes('.jpg') || file.toLowerCase().includes('.png') || file.toLowerCase().includes('.gif')) {
                        _folderCtn.files.push(file);
                    }
                    else {
                        _folderCtn.folders.push({folder: file});
                    }
                });

                socket.emit('photography:get:tree:result', { datas: _folderCtn });
            });
        });
    });
}