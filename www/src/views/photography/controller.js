exports.getOpts = function(_global) {
    var opts = {
        route: "/photography/.*",
        title: "mPhotography | Axel Lavoie",
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