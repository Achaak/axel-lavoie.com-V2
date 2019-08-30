function initializeProjects(_projects, _nbProject) {
    // Variables
    var _projectsCtnerDOM = $(".projects-ctner");

    // Sort projects
    _projects = _.orderBy(_projects, ['value'], ['desc']);

    for (var i = 0; i < _projects.length && i <= _nbProject; i++) {
        if (i < _nbProject) {
            var _project = _projects[i];

            var _projectDOM = $("<div class='small-12 medium-6 large-4'><div class='project'><div class='name'>"+_project.name+"</div><div class='btn-ctner'><div class='view-btn'>View more</div></div></div></div>");

            // Set datas
            _projectDOM.find(".view-btn").data("project", _project);

            // Set click
            _projectDOM.find(".view-btn").click(function(_e) {
                // Get target
                var _target = $(_e.currentTarget);

                // Get datas
                var _data = _target.data()

                setProjectModal(_data.project);
            });

            // Add the picture
            _projectDOM.find(".project").css("background-image", "url("+_project.pictures[0].url+")");
        }
        else {
            var _projectDOM = $("<div class='small-12 medium-6 large-4'><a href='/development/projects' class='project more'>And more</a></div>");
        }


        // Set on the DOM
        _projectsCtnerDOM.append(_projectDOM);
    }

    return _projects;
}