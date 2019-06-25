$(document).ready(function() {
    var _pictures =  [
            {
                id: "development",
                url: "/ressources/images/nav-hamburger/development.jpg"
            },
            {
                id: "photography",
                url: "/ressources/images/nav-hamburger/photography.jpg"
            },
            {
                id: "diy",
                url: "/ressources/images/nav-hamburger/diy.jpg"
            }
    ];

    for (var i = 0; i < _pictures.length; i++) {
        var _picture = _pictures[i];

        var _pictureDOM = $("<div class='picture "+_picture.id+"'></div>");

        _pictureDOM.css("background-image",  "url("+_picture.url+")")

        $("nav#burger-menu .pictures").append(_pictureDOM)
    }


    $("nav#burger-menu .link-important li, nav#burger-menu .link-other li").hover(function(_e) {
        // Get target
        var _target = $(_e.currentTarget);

        // Get data
        var _data = _target.data();

        // Reset pictures
        $("nav#burger-menu .picture").removeClass("selected");

        // Set selected
        $("nav#burger-menu .picture."+_data.id).addClass("selected");
    });
});