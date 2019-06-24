$(document).ready(function() {
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    // Init variables
    var _links    = [];
    var _linksDOM = $("#header ul.link li a");

    for (var i = 0; i < _linksDOM.length; i++) {
        _links.push($(_linksDOM[i]).attr("href"))
    }

    $(window).on( 'scroll load', function(_e){
        var _boolHasVisible = true;

        for (var i = 0; i < _links.length; i++) {
            var _link    = $(_links[i]);
            var _linkDOM = $("#header ul.link li a[href='"+_links[i]+"']").closest("li");

            // Verif if element is visible
            if (_link.isInViewport() && _boolHasVisible) {
                if (!_linkDOM.hasClass("visible")) _linkDOM.addClass("visible");

                _boolHasVisible = false;
            }
            else {
                _linkDOM.removeClass("visible");
            }
            
        }
    });
});