$(document).ready(function() {
    var _skillCtner = $(".skills-ctner");
    var _skills = undefined;

    // Get skills datas
    $.getJSON( "/datas/development/skills.json", function( _datas ) {
        _skills =_datas;

        var _categs = ["main", "secondary", "software", "os"]
        var _categsFR = ["Principal", "Secondaire", "Logiciel", "OS"]

        for (var cptCateg = 0; cptCateg < _categs.length; cptCateg++) {
            var _categ = _categs[cptCateg];

            var _categDOM = $("<div class='"+_categ+" skills'><h3>"+_categsFR[cptCateg]+"</h3></div>")

            _skillCtner.append(_categDOM);

            // Insert the MAIN circles bar
            for (var i = 0; i < _skills[_categ].length; i++) {
                var _skill = _skills[_categ][i];
                
                // Create the circle DOM
                var _cicleDOM = $("<div></div>");
    
                // Insert on the DOM
                _categDOM.append(_cicleDOM);
    
                // Create the circle bar
                CircleBar().init(
                    _cicleDOM, 
                    { 
                        text: _skill.name,
                        lineColor: _skill.lineColor,
                        lineBgColor: "#323232",
                        lineWidth: "15",
                        lineWidthHover: "7px",
                        bgLineWidth: "10",
                        bgLineWidthHover: "4",
                        lineDuration: "2s",
                        lineDelay: "1s",
                        diameter: "180",
                        viewPourcentage: false,
                        textCSS: {
                            "color": "#a0a0a0",
                            "font-weight": "bold",
                            "font-family": "Verdana, Arial, Helvetica, sans-serif",
                            "font-size": "1rem"
                        },
                        textHoverCSS: {
                            "font-size": "1.5rem",
                            "color": _skill.lineColor
                        }
                    },
                    _skill.value);
            }
        }
    });



    // Unwinder click
    _skillCtner.find(".unwinder").click(function(_e) {
        // Get target
        var _target = $(_e.currentTarget);

        if (_skillCtner.hasClass("close")) {
            _skillCtner.removeClass("close");
            _target.text("Close");

            _skillCtner.animate({
                maxHeight: "10000px"
            }, 1000, function() { _skillCtner.css("max-height", _skillCtner.height()+200); });
        }
        else {
            _skillCtner.addClass("close");
            _target.text("More");

            window.location.href = "#skills";

            _skillCtner.animate({
                maxHeight: "80vh"
            }, 1000, function() {});
        }
    });
});