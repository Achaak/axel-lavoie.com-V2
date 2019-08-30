function setProjectModal(_project) {
    // Get the modal
    var _modal = $("#modal-project");

    // Set project name
    _modal.find("h4").html(_project.name);

    // Set slider
    Slider().init(
        ".slider", 
        _project.pictures, 
        5000
    );


    // Set description
    _modal.find(".description-ctner").empty();
    if(_project.description) {
        for (var i = 0; i < _project.description.length; i++) {
            _modal.find(".description-ctner").append("<div class='sentence'>"+_project.description[i]+"</div>");
        }
    }


    // Set languages
    _modal.find(".languages-ctner").empty();
    if(_project.languages) {
        for (var i = 0; i < _project.languages.length; i++) {
            _modal.find(".languages-ctner").append("<div class='language'>"+_project.languages[i]+"</div>");
        }
    }


    // Set link
    if(_project.link) _modal.find(".link").html("<a href='"+_project.link+"' target='_blank'>"+_project.link+"</a>");

    // Set society
    if(_project.society) _modal.find(".society").html(_project.society);

    // Set society_website
    if(_project.society_website) _modal.find(".society_website").html("<a href='"+_project.society_website+"' target='_blank'>"+_project.society_website+"</a>");

    // Set github
    if(_project.github) _modal.find(".github").html("<a href='"+_project.github+"' target='_blank'><i class='fab fa-github'></i><span>Github</span></a>");
    
    
    // Show the modal
    _modal.removeClass("hidden");
}