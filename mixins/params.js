exports.getParams = function(_global, _callback) {
    if (!_global.opts) _global.opts = {};

    _global.opts = {
        // Page contents
        pageContent: {
            title      : "Title",
            description: "Hello world",
            hrefIcon   : "",
    
            // Open Graph
            openGraph : {
                title      : "",
                description: "",
                image      : "",
                type       : "",
                url        : ""
            }
        },

        // Route
        errorRoute  : '/',

        // Components
        components: {
            css: [
                "/fontawesome/css/all.css"
            ],
            js: [
                "/jquery/jquery.min.js"
            ]
        },

        authorizationFolder: [
            "/build",
            "/assets",
            "/fonts",
            "/reload",
            "/components"
        ]
    };

    // Callback
    if (_callback) _callback();
}