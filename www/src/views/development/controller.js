exports.getOpts = function(_global) {
    var opts = {
        route: "/",
        title: "Développeur web | Axel Lavoie",
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
                    name: "Projets",
                },
                {
                    id: "repositories",
                    name: "Dépôts"
                },
                {
                    id: "skills",
                    name: "Compétences",
                },
                {
                    id: "contact",
                    name: "Contact"
                }
            ]
        },

        js: [
            "/build/views/blocks/modal-project/product.min.js"
        ],

        css: [
            "/build/views/blocks/modal-project/product.min.css"
        ]
    };

    return opts;
}