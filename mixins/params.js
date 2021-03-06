exports.getParams = function(_global, _callback) {
    if (!_global.opts) _global.opts = {};

    _global.opts = {
        // Page contents
        pageContent: {
            title: "Développeur web | Axel Lavoie",
            description: "Portfolio d'Axel Lavoie, Développeur Web Full-Stack Javascript, NodeJs et React Native sur Rouen. Derniers projets et réalisations, compétences et moyen de contact. N'hésitez pas à venir me proposer vos projets.",
            hrefIcon   : "/ressources/images/logo/logo.png",
    
            // Open Graph
            openGraph : {
                title: "Développeur web | Axel Lavoie",
                description: "Portfolio d'Axel Lavoie, Développeur Web Full-Stack Javascript, NodeJs et React Native sur Rouen. Derniers projets et réalisations, compétences et moyen de contact. N'hésitez pas à venir me proposer vos projets.",
                image      : "/ressources/images/logo/logo.png",
                type       : "website",
                url        : "https://axel-lavoie.com/"
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