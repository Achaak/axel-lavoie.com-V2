$(document).ready(function() {
    $(".input-ctner input").focus(function(_e) {
        // Get target
        var _target = $(_e.currentTarget);

        _target.closest(".input-ctner").find(".input-title").addClass("focus");
    })
    .blur(function(_e) {
        // Get target
        var _target = $(_e.currentTarget);

        if(_target.val() == "")
         _target.closest(".input-ctner").find(".input-title").removeClass("focus");
    });
});