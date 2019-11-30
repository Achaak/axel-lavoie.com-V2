exports.getOpts = function(_global) {
    var opts = {
        route: "/infographics/.*",
        title: "Infographie | Axel Lavoie",
        description: "Portfolio graphiste amateur d'Axel Lavoie sur Rouen. Illustrations, logos, site web...",
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
                    id: "divers",
                    name: "Divers"
                },
                {
                    id: "contact",
                    name: "Contact"
                }
            ]
        }
    };

    return opts;
}