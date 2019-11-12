exports.getOpts = function(_global) {
    var opts = {
        route: "/photography/.*",
        title: "Photographie | Axel Lavoie",
        description: "Portfolio protographe amateur d'Axel Lavoie sur Rouen. Animaux, paysages, voyages, vacances...",
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
                    id: "albums",
                    name: "Albums"
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