exports.getOpts = function(_global) {
    var opts = {
        route: "/",
        title: "Development | Axel Lavoie",
        description: "Portfolio d'Axel Lavoie, développeur web sur Rouen. Derniers projets et réalisations, compétences et moyen de contact. N'hésitez pas à visiter le site et à me contacter.",
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
                    id: "repositories",
                    name: "Repositories"
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
            "/build/views/blocks/modal-repository/product.min.js"
        ],

        css: [
            "/build/views/blocks/modal-project/product.min.css",
            "/build/views/blocks/modal-repository/product.min.css"
        ]
    };

    return opts;
}