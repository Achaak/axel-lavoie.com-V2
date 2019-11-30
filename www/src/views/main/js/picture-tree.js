function PictureTree() {
    // Init socket IO
    var socket = io();

    // Init variable
    var picturesDOM = undefined;
    var albumsDOM  = undefined;
    var pictureTree = undefined;
    var cptFolder = 0;
    var nbFolder  = 0;
    var folder    = "";


    var defaultSlider = [
        {
            url: "/ressources/photography/Animals/Cat/P1050139.jpg"
        },
        {
            url: "/ressources/photography/Sky/P1050341.jpg"
        },
        {
            url: "/ressources/photography/Animals/Insect/Beetle/P1050211.jpg"
        },
        {
            url: "/ressources/photography/Animals/Bird/Great%20Cormorant/P1050270-2.jpg"
        }
    ]




    function init(_picturesDOM, _albumsDOM, _folder) {
        // Init variable
        picturesDOM = _picturesDOM;
        albumsDOM   = _albumsDOM;
        folder      = _folder;

        // Emit request
        socket.emit('photography:get:tree', {folder: folder});
    
        socket.on('photography:get:tree:result', function (_data) {
            var _data = _data.datas;

            if(pictureTree == undefined) {
                pictureTree = _data;

                nbFolder = pictureTree.folders.length;

                getFileFolder();


                // Set picture
                setpicturesDOM()
            }
            else {
                _.extend(_.find(pictureTree.folders, {folder: decodeURI(_data.path.replace(/^.*[\\\/]/, ''))}), _data);

                cptFolder++;
            }


            // Set folder in the DOM
            if (cptFolder == nbFolder) {
                setAlbumDOM();
            }
        });
    };


    function getFileFolder() {
        for (var i = 0; i < pictureTree.folders.length; i++) {
            var _folder = pictureTree.folders[i];
            
            socket.emit('photography:get:tree', {folder: folder + "/" + _folder.folder});
        }
    }



    function setAlbumDOM() {
        // Hidden container if equals 0
        if (pictureTree.folders.length == 0) albumsDOM.addClass("hidden");

        for (var i = 0; i < pictureTree.folders.length; i++) {
            var _folder = pictureTree.folders[i];

            // Order file
            _folder.files = _.orderBy(_folder.files, ["birthtimeMs"], ["desc"]);
            
            // Prepare the picture
            var _folderDOM = $("<a href='" + folder + "/" + _folder.folder + "' class='visual-ctner'><div class='photo' style='background-image: url(" + (  _folder.files[0] ? (_folder.path.replace(/\\/g, "/") + "/" + _folder.files[0].name) : "/ressources/images/folder_open.png" ) + ")'></div><div class='infos'></div></a>");
            
            // Set infos
            _folderDOM.find(".infos").append("<div class='title'>"+_folder.folder+"</div>");

            // Set picture in the DOM
            albumsDOM.find(".block-ctner").append(_folderDOM);
        }
    }



    function setpicturesDOM() {
        // Hidden container if equals 0
        if (pictureTree.files.length == 0) picturesDOM.addClass("hidden");

        // Order file
        pictureTree.files = _.orderBy(pictureTree.files, ["birthtimeMs"], ["desc"]);

        // Variable slider
        var _pictureSlider = [];

        for (var i = 0; i < pictureTree.files.length; i++) {
            var _file = pictureTree.files[i];

            // Set slider
            if (i < 3) {
                _pictureSlider.push({
                    url: pictureTree.path.replace(/\\/g, "/") + "/" + _file.name
                })
            }
            
            // Prepare the picture
            var _picturesDOM = $("<img class='photo' src='" + pictureTree.path.replace(/\\/g, "/") + "/" + _file.name + "'>");
            
            _picturesDOM.click(function(e) {
                // Get target
                var _target = e.currentTarget;

                // Add picture
                $("#modal-picture-viewer").find(".picture").css("background-image", "url("+ $(_target).attr("src") + ")");

                var _index = $("#pictures .pictures-ctner [src='"+$(_target).attr("src")+"']").index();

                // Set left click
                $("#modal-picture-viewer .left").unbind('click').click(function(_left) {
                    $($("#pictures .pictures-ctner .photo")[(_index-1 < 0 ? $("#pictures .pictures-ctner .photo").length-1 : _index-1)]).trigger("click")
                });

                // Set right click
                $("#modal-picture-viewer .right").unbind('click').click(function(_left) {
                    $($("#pictures .pictures-ctner .photo")[(_index+1 >= $("#pictures .pictures-ctner .photo").length ? 0 : _index+1)]).trigger("click")
                });

                // Show the modal
                $("#modal-picture-viewer").removeClass("hidden");
                $("body").addClass("disable-scroll");
            });

            // Set picture in the DOM
            picturesDOM.find(".block-ctner").append(_picturesDOM);
        }

        // Init slider
        if (!_pictureSlider.length) _pictureSlider = defaultSlider;
        setSlider(_pictureSlider);
    }




    return {
        "init": function(_picturesDOM, _albumsDOM, _folder) {
            init(_picturesDOM, _albumsDOM, _folder);
        }
    };
}