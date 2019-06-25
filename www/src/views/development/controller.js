exports.getOpts = function(_global) {
    var opts = {
        route: "/",
        title: "Development | Axel Lavoie",
        description: "Hello world",
        //hrefIcon   : "",

        // Open Graph
        //openGraph : {
        //    title      : "",
        //    description: "",
        //    image      : "",
        //    type       : "",
        //    url        : ""
        //}

        navHeader: {
            en: [
                {
                    id: "projects",
                    name: "Projects",
                },
                {
                    id: "components",
                    name: "Components"
                },
                {
                    id: "skills",
                    name: "Skills",
                },
                {
                    id: "contact",
                    name: "Contact"
                }
            ]
        },

        js: [
            "/build/views/blocks/modal-project/product.min.js",
            "/build/views/blocks/modal-component/product.min.js"
        ],

        css: [

        ]
    };

    return opts;
}