$(document).ready(function() {
    $('.modal .close').click(function(_e) {
        // Get target
        var _target = $(_e.currentTarget);
        
        _target.closest(".modal").addClass("hidden");
    });
});