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
                "/fontawesome/css/all.css",
                "/foundation/css/foundation.css",
                "/foundation/css/app.css",
                "/slider/slider.css",
                "/circle-bar/circle-bar.css"
            ],
            js: [
                "/jquery/jquery.min.js",
                "/foundation/js/vendor/foundation.js",
                "/foundation/js/app.js",
                "/lodash/lodash.js",
                "/slider/slider.js",
                "/circle-bar/circle-bar.js"
            ]
        },

        authorizationFolder: [
            "/build",
            "/assets",
            "/ressources",
            "/reload",
            "/components",
            "/socket.io"
        ]
    };

    // Callback
    if (_callback) _callback();
}