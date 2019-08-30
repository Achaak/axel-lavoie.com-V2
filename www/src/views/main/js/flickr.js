// Get URL photo of the flickr
function getURLPhoto(farm, server, id, secret) {
    // URL photo format
    var _photoFormat = "https://farm{farm}.staticflickr.com/{server}/{id}_{secret}.jpg";

    // Add value on the URL
    _photoFormat = _photoFormat.replace("{farm}"  , farm  )
    _photoFormat = _photoFormat.replace("{server}", server)
    _photoFormat = _photoFormat.replace("{id}"    , id    )
    _photoFormat = _photoFormat.replace("{secret}", secret)

    return _photoFormat;
}