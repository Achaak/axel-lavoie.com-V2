function setSlider(_pictures) {
    Slider().init(
        ".slider-ctner", _pictures, 
    5000);
}



$(document).ready(function() {
    var _folder = decodeURI(window.location.pathname).replace("/all", "");

    PictureTree().init($("#pictures"), $("#albums"), _folder);


    // Enable body scroll if close the modal
    $("#modal-picture-viewer .close").click(function() {
        $("body").removeClass("disable-scroll");
    });
});