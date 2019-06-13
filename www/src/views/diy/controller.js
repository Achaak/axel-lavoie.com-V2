exports.getOpts = function(_global) {
    var opts = {
        route: "/DIY",
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
                    id: "projects",
                    name: "Projects",
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