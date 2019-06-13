exports.getOpts = function(_global) {
    var opts = {
        route: "/photography",
        title: "test",
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

        navBurger: {
            en: [
                {
                    id: "photos",
                    name: "Photos",
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