function setProjectModal(_project) {
    // Get the modal
    var _modal = $("#modal-project");

    // Set title
    _modal.find(".title").html(_project.name);
    console.log(_project);

    // Set slider
    Slider().init(
        ".slider", 
        _project.pictures, 
        5000
    );


    // Set small description
    _modal.find(".small_description").empty();
    if(_project.small_description) {
        for (var i = 0; i < _project.small_description.length; i++) {
            _modal.find(".small_description").append("<div class='sentence'>"+_project.small_description[i]+"</div>");
        }
    }

    // Set description
    _modal.find(".description").empty();
    if(_project.description) {
        for (var i = 0; i < _project.description.length; i++) {
            _modal.find(".description").append("<div class='sentence'>"+_project.description[i]+"</div>");
        }
    }


    // Set languages
    _modal.find(".languages").empty();
    if(_project.languages) {
        for (var i = 0; i < _project.languages.length; i++) {
            _modal.find(".languages").append("<div class='project'>"+_project.languages[i]+"</div>");
        }
    }


    // Set link
    if(_project.link) _modal.find(".link").html(_project.link);

    // Set society
    if(_project.society) _modal.find(".society").html(_project.society);

    // Set society_website
    if(_project.society_website) _modal.find(".society_website").html(_project.society_website);

    // Set github
    if(_project.github) _modal.find(".github").html(_project.github);
    
    
    // Show the modal
    _modal.removeClass("hidden");
}