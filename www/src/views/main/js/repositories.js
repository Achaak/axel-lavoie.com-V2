function initializerepositories(_repositories, _nbRepository) {
    // Variables
    var _compoCtnerDOM = $(".repositories-ctner");
    var _monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Get repositories of Github
    var _reposGithub = _.orderBy(_.filter(_repositories, {fork: false}), ["pushed_at"], ["desc"]);

    for (var i = 0; i < _reposGithub.length && i < _nbRepository; i++) {
        // Get repository
        var _repos = _reposGithub[i];

        // Create the DOM
        var _reposDOM = $("<div class='small-12 medium-6 large-4'><div class='repository'><a class='name' target='_blank'></a><div class='description'></div><div class='infos'><div class='language'></div><div class='pushed_at'></div></div></div></div>")

        // Add element
        _reposDOM.find(".name").append(_repos.name);
        _reposDOM.find(".name").attr("href", _repos.html_url);
        _reposDOM.find(".description").append(_repos.description);
        _reposDOM.find(".language").append(_repos.language);
        _reposDOM.find(".language").addClass(_repos.language);
        var _updateDate = new Date(_repos.pushed_at);
        _reposDOM.find(".pushed_at").append("Updated on " + _updateDate.getDate() + " " + _monthNames[_updateDate.getMonth()] + " " + _updateDate.getFullYear());

        // Add repos on the DOM
        _compoCtnerDOM.append(_reposDOM);
    }

    // If repositorie > 8
    if(_reposGithub.length > _nbRepository) {
        _compoCtnerDOM.append("<div class='small-12 medium-6 large-4'><a href='/development/repositories' class='repository more'>And more</a></div>");

    }
}